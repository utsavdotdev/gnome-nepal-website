import { useState, useEffect, useRef } from "react";
import Links from "./Links";
import { ModeToggle } from "./mode-toggle";
import Banner from "./Banner";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isCtaOpen, setIsCtaOpen] = useState(false);
  const [showUpperLayer, setShowUpperLayer] = useState(true);
  const ctaRef = useRef(null);
  const banner_data = {
    emoji: "🚀",
    message: "",
    color: "bg-blue-400",
    button: {
      text: "",
      link: "",
    },
    show: false,
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  const links = [
    { to: "#home", text: "Home" },
    { to: "#aboutus", text: "About Us" },
    { to: "#events", text: "Events" },
    { to: "#contributors", text: "Contributors" },
    { to: "#faq", text: "FAQ" },
    { to: "/docs", text: "Docs" },
  ];

  const ctaLinks = [
    {
      to: "https://discord.com/invite/tpsVFJN8WC",
      text: "Join Discord",
      external: true,
    },
    { to: "/session-request", text: "Request a Session", external: false },
    { to: "/sponsor", text: "Become a Sponsor", external: false },
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowUpperLayer(currentScrollY < lastScrollY || currentScrollY === 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ctaRef.current && !ctaRef.current.contains(event.target)) {
        setIsCtaOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-40 left-0 border-b border-border bg-background transition-[top] duration-300`}
      >
        {banner_data.show && (
          <Banner data={banner_data} show={showUpperLayer} />
        )}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between py-3">
            {/* Logo Section */}
            <div className="flex items-center flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl font-semibold whitespace-nowrap text-foreground">
                  GNOME Nepal
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex space-x-4 xl:space-x-6">
                {links.map((link, index) => (
                  <li key={index} className="whitespace-nowrap">
                    <Links to={link.to} text={link.text} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side (Mode Toggle and Buttons) */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <ModeToggle />
              {/* Desktop CTA Dropdown */}
              <div className="relative hidden md:block" ref={ctaRef}>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={isCtaOpen}
                  onClick={() => setIsCtaOpen(!isCtaOpen)}
                  className="flex items-center gap-2 text-primary-foreground bg-primary hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 border-2 border-border"
                >
                  Get Involved
                  <svg
                    className={`w-3 h-3 transition-transform ${isCtaOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l4 4 4-4"
                    />
                  </svg>
                </button>

                {isCtaOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-popover text-popover-foreground shadow-lg overflow-hidden">
                    {ctaLinks.map((link) => (
                      <a
                        key={link.text}
                        href={link.to}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        onClick={() => setIsCtaOpen(false)}
                        className="block px-4 py-3 text-sm font-medium text-popover-foreground hover:bg-accent hover:text-accent-foreground"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              {/* Hamburger Menu Button */}
              <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 lg:hidden"
                aria-controls="mobile-menu"
                aria-expanded={open}
                aria-label="Toggle main menu"
                onClick={toggleMenu}
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  {open ? (
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l15 12M1 13L16 1"
                    />
                  ) : (
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {open && (
          <div className="lg:hidden">
            <ul className="flex flex-col space-y-2 px-4 pb-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Links to={link.to} text={link.text} />
                </li>
              ))}
              <li className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold px-1 mb-2 text-[var(--foreground)]">
                  Get Involved
                </p>
                <div className="flex flex-col gap-2">
                  {ctaLinks.map((link) => (
                    <a
                      key={link.text}
                      href={link.to}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="w-full text-center text-primary-foreground bg-primary hover:opacity-90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 border-2 border-border"
                      onClick={() => setOpen(false)}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from being hidden under the fixed navbar */}
      <div className="mt-20"></div>
    </>
  );
};

export default Navbar;
