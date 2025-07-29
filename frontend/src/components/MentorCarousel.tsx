import { useState, useEffect, useRef } from 'react';
import MentorCard from './MentorCard';
import NavButton from './NavButton';
import { sanityClient } from '../lib/sanityClient';

// Reuse the MentorCardProps type for consistency
interface Mentor {
  image: string;
  name: string;
  title: string;
}

const MentorCarousel = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number | null>(null);
  const cardWidth = 280;

  useEffect(() => {
    const fetchMentors = async () => {
      const data = await sanityClient.fetch(`
        *[_type == "mentorpage"]{
          mentorImage,
          mentorname,
          role
        }
      `);

      const formatted: Mentor[] = data.map((m: any) => ({
        image: m.mentorImage,
        name: m.mentorname,
        title: m.role,
      }));

      // ✅ This will no longer be underlined in red
      setMentors([...formatted, ...formatted]);
    };

    fetchMentors();
  }, []);

  useEffect(() => {
    const totalExtendedWidth = mentors.length * cardWidth;

    const animate = () => {
      setTranslateX(prev => {
        const newX = prev - 1.5;
        return newX <= -totalExtendedWidth ? 0 : newX;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mentors]);

  return (
    <div className="relative w-full mb-[1.5rem]">
      <h2 className="text-4xl lg:text-6xl text-center mb-16 font-teachers text-cream tracking-wide">
        our mentors
      </h2>

      <div className="scale-150 text-center">
        <NavButton
          to="/book-a-mentor"
          label="book a mentor"
          className="border-laurel border-2 bg-cream text-laurel px-6 py-2 rounded-full hover:text-cream hover:bg-laurel hover:border-cream hover:border-2"
          disableHover
        />
      </div>

      <div className="relative overflow-hidden w-full mt-20">
        <div
          className="flex"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {mentors.map((mentor, index) => (
            <MentorCard
              key={`mentor-${index}`}
              image={mentor.image}
              name={mentor.name}
              title={mentor.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorCarousel;
