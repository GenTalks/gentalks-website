// components/MiniMentorCard.tsx
interface MiniMentorCardProps {
    image: string;
    name: string;
    title: string;
}

const MiniMentorCard: React.FC<MiniMentorCardProps> = ({ image, name, title }) => (
    <div className="
    w-[320px] 
    h-[420px] 
    bg-cream 
    border-2 border-laurel 
    rounded-2xl 
    flex flex-col 
    items-center 
    text-center 
    p-2 
    shadow-sm
  ">

        {/* Image: takes ~ 65% of the card height */}
        <div className="w-full flex justify-center p-6" style={{ height: "80%" }}>
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-xl"
            />
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold text-fog mt-2">
            {name}
        </h3>

        {/* Title */}
        <p className="text-md text-laurel/80 mt-1 mb-1 px-4">
            {title}
        </p>
    </div>
);


export default MiniMentorCard;
