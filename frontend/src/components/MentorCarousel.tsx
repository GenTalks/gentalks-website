import { useState, useEffect, useRef } from 'react';
import MentorCard from './MentorCard';

const MentorCarousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const animationRef = useRef<number | null>(null);
  
  const mentors = [
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c106?w=400&h=400&fit=crop&crop=face",
      name: "Sarah Chen",
      title: "Software Engineer at Google"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      name: "Marcus Johnson",
      title: "Product Manager at Meta"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      name: "Emily Rodriguez",
      title: "UX Designer at Apple"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      name: "David Kim",
      title: "Data Scientist at Netflix"
    },
    {
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
      name: "Zoe Williams",
      title: "Startup Founder"
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      name: "Alex Thompson",
      title: "Investment Banker"
    }
  ];

  const extendedMentors = [...mentors, ...mentors];
  const cardWidth = 280
  const totalWidth = mentors.length * cardWidth;

  useEffect(() => {
    const animate = () => {
      setTranslateX(prev => {
        const newX = prev - 1.5;
        return newX <= -totalWidth ? 0 : newX;
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [totalWidth]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <h2 className="text-4xl lg:text-6xl font-bold text-center mb-12 font-teachers text-cream">
        Meet Our Mentors
      </h2>
      
      <div className="relative overflow-hidden">
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