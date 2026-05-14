import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { GiBatMask } from "react-icons/gi";

function Header() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = ["Home", "About", "Journey", "Skills"];

  return (
    <header className="w-full bg-[#2d2d30] border-b border-[#3e3e42] font-mono fixed top-0 z-50">
      <div className="hidden md:flex items-center h-12">
        <span className="px-4 text-2xl text-white">
          <GiBatMask />
        </span>

        <div className="flex items-center">
          {tabs.map((tab) => (
            <button
              key={tab}
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
            </button>
          ))}
        </div>
      </div>

      <div className="flex md:hidden items-center justify-between px-4 h-12">
        <h1 className="text-white font-semibold flex items-center gap-2">
          <FaReact className="text-[#58c3db]" />
          Portfolio
        </h1>

        <button className="text-white text-2xl">☰</button>
      </div>
    </header>
  );
}

export default Header;
