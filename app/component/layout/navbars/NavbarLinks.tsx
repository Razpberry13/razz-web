const NavbarLinks = () => (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {[
          { label: "About Me", href: "#about" },
          { label: "Skills", href: "#skills" },
          { label: "Portfolio", href: "#portfolio" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium transition-colors border border-white"
        >
          Contact
        </a>
      </div>
    </div>
  );
  
  export default NavbarLinks;
  