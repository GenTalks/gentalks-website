const Footer = () => {
  return (
    <div>
      <div className="h-[2px] bg-sage w-[90%] mx-auto my-8" />

      <footer className="w-full px-[4rem] pt-[1rem] font-teachers pb-[4rem]">
        <div className="flex justify-between items-start">
          <div className="text-left">
            Copyright © 2025 GenTalks. All rights reserved.
          </div>

         <div className="text-right text-md space-y-2">
            <div>Terms & Conditions</div>
            <div className="text-md">Privacy Policy</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
