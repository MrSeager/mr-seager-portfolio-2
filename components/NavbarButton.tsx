interface NavbarButtonProps {
    btnText: string;
    classN: string;
}

export default function NavbarButton({ btnText, classN }: NavbarButtonProps) {
    return(
        <button 
            type="button" 
            className={`text-sm cursor-pointer uppercase bg-[#F2E7DC] border-2 border-[#F2E7DC] text-[#0D0D0D] ${classN} rounded rounded-4 duration-500
                        hover:bg-transparent hover:text-[#F2E7DC]
                        focus:bg-transparent focus:text-[#F2E7DC]`}
        >
            {btnText}
        </button>
    );
}