import "./App.css";
import me from "./assets/me.png";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <div className="bg-[#1e1e1e] min-h-screen overflow-x-hidden">
      <Header />
      {/* Home  */}
      <div className="w-full min-h-screen pt-[140px] px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
          <div className="relative group">
            <img
              src={me}
              alt=""
              className="
                w-[320px] lg:w-[370px]
                h-[430px] lg:h-[500px]
                object-cover
                rounded-4xl
                border border-[#3e3e42]
                shadow-2xl
                transition-all duration-300
                group-hover:scale-[1.02]
              "
            />

            <div
              className="
              absolute inset-0 rounded-4xl
              bg-[#007acc]/10
              opacity-0 group-hover:opacity-100
              transition-all duration-300
            "
            ></div>
          </div>

          <div
            className="
            text-white
            w-full lg:w-[40%]
            flex flex-col gap-12
            font-[Inter]
          "
          >
            <div className="flex flex-col gap-5">
              <p className="text-sky-500 text-2xl font-mono">{"<h1>"}</p>

              <span
                className="
                  font-mono
                  text-4xl sm:text-5xl lg:text-6xl
                  tracking-wide
                  text-amber-300
                  inline-block
                  pl-4 lg:pl-8
                  leading-tight
                "
              >
                <Typewriter
                  words={["Welcome, my name is Batbaatar."]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                />
              </span>

              <p className="text-sky-500 text-2xl font-mono">{"</h1>"}</p>
            </div>

            <div className="flex flex-col gap-5 max-w-[600px]">
              <p className="text-sky-500 text-2xl font-mono">{"<p>"}</p>

              <p
                className="
                font-mono
                  tracking-wide
                  text-amber-300
                  text-lg sm:text-xl
                  leading-relaxed
                  pl-4 lg:pl-8

                "
              >
                I'm 20yo from Mongolia. My friends call me Bat. Currently
                studying Software Engineering at the University of Europe for
                Applied Science in Potsdam, Germany.
              </p>

              <p className="text-sky-500 text-2xl font-mono">{"</p>"}</p>
            </div>
          </div>
        </div>
      </div>
      {/* About me  */}
      <div
        className="
    w-full min-h-screen
    flex flex-col lg:flex-row
    justify-center items-center
    font-mono
    gap-20 lg:gap-40
    px-6 lg:px-20
    py-20
  "
      >
        <div
          className="
      w-full lg:w-[45%]
      flex flex-col
      justify-center
      gap-8
      text-white
    "
        >
          <p className="text-4xl sm:text-5xl">About me</p>

          <p className="text-base sm:text-lg leading-relaxed text-[#d4d4d4]">
            I was born and raised in Mongolia and graduated from high school in
            2023. During my high school years, I joined a coding academy called
            Pinecone, where I spent a year learning programming and successfully
            completed the course.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[#d4d4d4]">
            After graduating, I moved to Ireland to improve my English and lived
            there for about a year. Later, I decided to continue my journey in
            Germany, where I am currently studying Software Engineering.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-[#d4d4d4]">
            Since taking a break from coding after Pinecone, starting university
            motivated me to reconnect with programming and continue improving my
            skills. This portfolio represents my progress, creativity, and the
            journey of rebuilding myself step by step as a developer.
          </p>
        </div>

        <div
          className="
      w-full lg:w-auto
      flex justify-center
    "
        >
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
