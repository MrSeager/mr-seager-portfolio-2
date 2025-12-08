interface NavbarButtonProps {
    btnText: string;
    classN: string;
}

export default function NavbarButton({ btnText, classN }: NavbarButtonProps) {
    return(
        <button 
            type="button" 
            className={`text-sm cursor-pointer uppercase bg-[#FFFFFF] border-2 border-[#FFFFFF] text-[#000000] ${classN} rounded rounded-4 duration-500
                        hover:bg-transparent hover:text-[#FFFFFF]
                        focus:bg-transparent focus:text-[#FFFFFF]`}
        >
            {btnText}
        </button>
    );
}