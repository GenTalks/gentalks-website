import { useState, useEffect, useRef } from "react";
import MentorCard from "./MentorCard";
import NavButton from "./NavButton";
import { sanityClient } from "../lib/sanityClient";

interface Mentor {
  image: string;
  name: string;
  title: string;
}

const MentorCarousel = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [origCount, setOrigCount] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [cardWidth, setCardWidth] = useState(280);

  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const fetchMentors = async () => {
      const data = await sanityClient.fetch(`
        *[_type == "mentorpage"]{
          mentorImage,
          mentorname,
          role
        }
      `);
      const formatted = data.map((m: any) => ({
        image: m.mentorImage,
        name: m.mentorname,
        title: m.role,
      }));
      setOrigCount(formatted.length);
      setMentors([...formatted, ...formatted]); // duplicate the mentors
    };
    fetchMentors();
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const cardEl = containerRef.current.querySelector(".mentor-card");
    if (cardEl) setCardWidth((cardEl as HTMLElement).clientWidth);
  }, [mentors]);

  useEffect(() => {
    if (origCount === 0) return;
    const oneSetWidth = origCount * cardWidth;

    const step = () => {
      setTranslateX((prev) => {
        const next = prev - 1.5;
        return next <= -oneSetWidth ? 0 : next;
      });
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [origCount, cardWidth]);

  return (
    <div className="bg-caramel relative w-full py-16">
      <h2 className="text-4xl lg:text-6xl text-center mb-16 font-teachers text-fog tracking-wide">
        our mentors
      </h2>

      <div className="scale-150 text-center">
        <NavButton
          to="/book-a-mentor"
          label="book a mentor"
          className="border-cream border-2 bg-laurel text-cream px-6 py-2 rounded-full hover:text-laurel hover:bg-cream hover:border-laurel"
          disableHover
        />
      </div>

      <div ref={containerRef} className="relative overflow-hidden w-full mt-20">
        {/* Scrolling track */}
        <div
          className="flex"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {mentors.map((mentor, idx) => (
            <div key={idx} className="mentor-card flex-shrink-0">
              <MentorCard
                image={mentor.image}
                name={mentor.name}
                title={mentor.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorCarousel;
