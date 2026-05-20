import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

function LanguageSwitcher({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const languages = ["English", "Deutsch", "Монгол"];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2
          px-4 py-2
          bg-[#2d2d30]
          border border-[#3e3e42]
          rounded-xl
          text-white
          hover:bg-[#252526]
          transition-all
          font-mono
          text-sm
        "
      >
        <FaGlobe className="text-[#58c3db]" />

        {language}
      </button>

      {/* Popup */}
      <div
        className={`
          absolute 
          bottom-full mb-3
          w-[180px]
          bg-[#1e1e1e]
          border border-[#3e3e42]
          rounded-2xl
          overflow-hidden
          shadow-2xl
          transition-all duration-300
          z-50

          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => {
              setLanguage(lang);
              setOpen(false);
            }}
            className={`
              w-full
              text-left
              px-5 py-3
              font-mono
              text-sm
              transition-all

              ${
                language === lang
                  ? "bg-[#007acc] text-white"
                  : "text-[#cccccc] hover:bg-[#252526]"
              }
            `}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageSwitcher;
