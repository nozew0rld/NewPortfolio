import { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { GiBatMask } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = ["Home", "About", "Skills"];

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(
              entry.target.id.charAt(0).toUpperCase() +
                entry.target.id.slice(1),
            );
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <header className="w-full bg-[#2d2d30] border-b border-[#3e3e42] font-mono fixed top-0 z-50">
      <div className="hidden md:flex items-center h-12">
        <span className="px-4 text-2xl text-white">
          <GiBatMask />
        </span>

        <div className="flex items-center">
          {tabs.map((tab) => (
            <a
              key={tab}
              href={`#${tab.toLowerCase()}`}
              onClick={() => setActiveTab(tab)}
              className={`group relative h-12 px-6 flex items-center
                          border-r border-[#3e3e42]
                          transition-all duration-200 text-[12px]

                ${
                  activeTab === tab
                    ? "bg-[#1e1e1e] text-white"
                    : "bg-[#2d2d30] text-[#cccccc] hover:bg-[#252526]"
                }
              `}
            >
              <span className="mr-2">
                <FaReact className="text-[#58c3db]" />
              </span>
              {tab}.jsx
              {activeTab === tab && (
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#007acc]"></div>
              )}
            </a>
          ))}
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-4 h-12">
        <h1 className="text-white font-semibold flex items-center gap-2">
          <FaReact className="text-[#58c3db]" />
          Portfolio
        </h1>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Popup Menu */}
      <div
        className={`
          md:hidden
          absolute top-12 left-0
          w-full
          bg-[#252526]
          border-b border-[#3e3e42]
          overflow-hidden
          transition-all duration-300

          ${menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {tabs.map((tab) => (
          <a
            key={tab}
            href={`#${tab.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className={`
              flex items-center gap-3
              px-6 py-4
              border-b border-[#3e3e42]
              transition-all duration-200

              ${
                activeTab === tab
                  ? "bg-[#1e1e1e] text-white"
                  : "text-[#cccccc] hover:bg-[#333333]"
              }
            `}
          >
            <FaReact className="text-[#58c3db]" />
            {tab}.jsx
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
