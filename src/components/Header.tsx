import { useState } from "react";
import { CirclePlus } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative z-50'>
      <div className='flex gap-3 items-center'>
        <div className='p-3 bg-yellow-200 w-fit border-2 rounded-t-xl shadow-[3px_3px_0px_black] '>
          <h3 className='font-bold text-lg'>Notes</h3>
        </div>
        <CirclePlus
          size={40}
          className={`cursor-pointer transition-transform rotate-0 ${isOpen && "rotate-45"
            }`}
          onClick={handleOpenModal}
        />
      </div>
      <hr className='border-3 relative z-100' />
    </div>
  );
};

export default Header;
