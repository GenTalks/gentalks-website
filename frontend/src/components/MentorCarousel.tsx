import { useState, useEffect, useRef } from 'react';
import MentorCard from './MentorCard';
import NavButton from './NavButton';

const MentorCarousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number | null>(null);

  const mentors = [
    {
      image: "https://staticg.sportskeeda.com/editor/2021/11/c8fcd-16372673354076-1920.jpg",
      name: "Albedo",
      title: "Biochemistry & Synthetic Biology Student - Oxford University"
    },
    {
      image: "https://s1.zerochan.net/Alhaitham.600.3894482.jpg",
      name: "Alhaitham",
      title: "Applied Mathematics & Cognitive Science Student - University of Cambridge"
    },
    {
      image: "https://i.pinimg.com/736x/2e/4f/8e/2e4f8ee4d40dd70c65e033feca308bca.jpg",
      name: "Baizhu",
      title: "Traditional Chinese Medicine Student - Beijing University of Chinese Medicine"
    },
    {
      image: "https://s1.zerochan.net/Clorinde.600.4001291.jpg",
      name: "Clorinde",
      title: "Law Student - Sciences Po"
    },
    {
      image: "https://i.pinimg.com/originals/39/7c/dc/397cdcabea519f46a9e440136fb2479f.jpg",
      name: "Jean",
      title: "Political Science Student - John Hopkins University"
    },
    {
      image: "https://i.pinimg.com/originals/a8/ad/dd/a8addd136eb7d85cd12c7936d3b53088.jpg",
      name: "Kamisato Ayaka",
      title: "International Relations & Classical Literature Student - Kyoto University"
    },
    {
      image: "https://wallpapercave.com/wp/wp11127199.jpg",
      name: "Kamisato Ayato",
      title: "Political Science Student - Harvard University",
    },
    {
      image: "https://images4.alphacoders.com/110/thumb-1920-1109283.jpg",
      name: "Mona",
      title: "Astrophysics Student - University of Cambridge",
    },
    {
      image: "https://avatarfiles.alphacoders.com/334/334716.jpg",
      name: "Nahida",
      title: "Environmental Science & Linguistics Student - UC Berkeley",
    },
    {
      image: "https://images2.alphacoders.com/133/thumb-1920-1334943.jpeg",
      name: "Neuvilette",
      title: "Law Student - Yale University",
    },
    {
      image: "https://th.bing.com/th/id/R.39c314f14ff5a096f98b97abf1711d1d?rik=AyTG3llOfGn6Ug&pid=ImgRaw&r=0",
      name: "Raiden Shogun",
      title: "Philosophy Student - University of Tokyo",
    },
    {
      image: "https://i.pinimg.com/originals/8c/1c/f6/8c1cf65f7d700e8a4fbe0cbb32c4b996.jpg",
      name: "Kaedehara Kazuha",
      title: "Environmental Studies & World Literature Student - Reed College",
    },
  ];

  const extendedMentors = [...mentors, ...mentors];
  const cardWidth = 280;
  const totalExtendedWidth = extendedMentors.length * cardWidth;

  useEffect(() => {
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
  }, [totalExtendedWidth]);

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
        />
      </div>
      <div className="relative overflow-hidden w-full mt-20">
        <div
          className="flex"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {extendedMentors.map((mentor, index) => (
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
