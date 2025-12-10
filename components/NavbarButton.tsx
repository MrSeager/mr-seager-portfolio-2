interface NavbarButtonProps {
    btnText: string;
    classN: string;
    onClick: () => void;
    active: boolean
}

export default function NavbarButton({ btnText, classN, onClick, active }: NavbarButtonProps) {
    return(
        <button 
            type="button"
            onClick={onClick}
            className={`text-sm cursor-pointer uppercase border-2 ${classN} rounded rounded-4 duration-500
                        ${active 
                            ? "bg-black text-white border-black" 
                            : "bg-white text-black border-white"
                        }
                        hover:bg-transparent hover:text-[#FFFFFF]
                        max-sm:focus:bg-transparent max-md:focus:text-[#FFFFFF]`}
        >
            {btnText}
        </button>
    );
}