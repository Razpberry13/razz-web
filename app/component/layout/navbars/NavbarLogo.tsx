const NavbarLogo = ({ isScrolled }: { isScrolled: boolean }) => (
    <div
      className={`font-bold text-xl cursor-pointer hover:text-gray-300 transition-colors ${
        isScrolled ? "text-white" : "text-black"
      }`}
    >
      Logo
    </div>
  );
  
  export default NavbarLogo;
  