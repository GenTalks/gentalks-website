interface MentorCardProps {
  image: string;
  name: string;
  title: string;
}

const MentorCard = ({ image, name, title }: MentorCardProps) => {
  return (
    <div className="border-laurel border-2 bg-cream rounded-3xl p-8 min-w-[260px] h-[400px] flex-shrink-0 mx-3 tracking-wide">
      <div className="flex flex-col items-center space-y-6">
        <img
          src={image}
          alt={`${name} profile`}
          className="w-64 h-64 rounded-3xl object-cover"
        />
        <div className="text-center space-y-3">
          <h3 className="text-xl font-bold text-fog font-teachers">{name}</h3>
          <p className="text-lg text-laurel font-teachers">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
