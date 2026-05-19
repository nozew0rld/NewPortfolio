import "./App.css";
import me from "./assets/me.png";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-[#1e1e1e] min-h-screen overflow-x-hidden">
      <ToastContainer position="top-right" theme="dark" autoClose={2000} />
      <Header />
      <section id="home">
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
              <div className="flex flex-col gap-5 select-none">
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

              <div className="flex flex-col gap-5 max-w-[600px] select-none">
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
      </section>
      {/* About me  */}
      <section id="about">
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
              I was born and raised in Mongolia and graduated from high school
              in 2023. During my high school years, I joined a coding academy
              called{" "}
              <a
                href="https://pinecone.mn/"
                target="_blank"
                className="text-amber-300"
              >
                Pinecone
              </a>
              , where I spent a year learning programming and successfully
              completed the course.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-[#d4d4d4]">
              After graduating, I moved to Ireland to improve my English and
              lived there for about a year. Later, I decided to continue my
              journey in Germany, where I am currently studying Software
              Engineering.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-[#d4d4d4]">
              Since taking a break from coding after Pinecone, starting
              university motivated me to reconnect with programming and continue
              improving my skills.
            </p>
            <p>
              This portfolio represents my progress, creativity, and the journey
              of rebuilding myself step by step as a developer.
            </p>
            <div className=" flex text-3xl gap-2">
              <a href="https://github.com/nozew0rld" target="_blank">
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/batbaatar-lkhagvadorj-0397382aa/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/cokeyyy_/" target="_blank">
                <FaInstagram />
              </a>
            </div>
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
      </section>
      {/* Skills */}

      <section id="skills">
        <div className="w-full min-h-screen pt-20 px-6 pb-20">
          <div className="flex justify-center ">
            <p className="font-mono text-3xl sm:text-5xl text-white">Skills</p>
          </div>
          <div
            className="flex flex-col
    xl:flex-row
    justify-center
    items-center
    gap-8
    pt-10"
          >
            {/* Frontend */}
            <div
              className="
    w-full max-w-[450px] min-h-[600px]
    bg-[#1e1e1e]
    border border-[#3e3e42]
    rounded-3xl
    overflow-hidden
    shadow-2xl
   
  "
            >
              {/* VSCode Tab */}
              <div
                className="
      h-12
      bg-[#2d2d30]
      border-b border-[#3e3e42]
      flex items-center
      px-4
      gap-3
      font-mono
      text-sm
      text-white
    "
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>

                <span className="text-[#58c3db]">frontend.jsx</span>
              </div>

              <div className="flex h-full font-mono text-[15px]">
                {/* Line Numbers */}
                <div
                  className="
               w-14
        bg-[#181818]
        text-[#6e7681]
        flex flex-col
        items-end
        pr-4 pt-6
        gap-3
        select-none
      "
                >
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                  <span>11</span>
                </div>

                {/* Code */}
                <div className="flex flex-col pt-6 pl-6 gap-3 text-white">
                  <p>
                    <span className="text-[#c586c0]">const</span>{" "}
                    <span className="text-[#9cdcfe]">frontend</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-white">{"{"}</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-[#9cdcfe]">framework</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#ce9178]">"React"</span>
                    <span className="text-white">,</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-[#9cdcfe]">styling</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#ce9178]">"Tailwind CSS"</span>
                    <span className="text-white">,</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-[#9cdcfe]">languages</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-white">[</span>
                  </p>

                  <p className="pl-12 text-[#ce9178]">"HTML",</p>
                  <p className="pl-12 text-[#ce9178]">"CSS",</p>
                  <p className="pl-12 text-[#ce9178]">"JavaScript",</p>
                  <p className="pl-12 text-[#ce9178]">"TypeScript",</p>
                  <p className="pl-12 text-[#ce9178]">"Phyton",</p>

                  <p className="pl-6 text-white">]</p>

                  <p className="text-white">{"}"}</p>
                </div>
              </div>
            </div>
            {/* Backend */}
            <div
              className="
    w-full max-w-[450px] min-h-[600px]
    bg-[#0c0c0c]
    border border-[#3e3e42]
    rounded-3xl
    overflow-hidden
    shadow-2xl
   
  "
            >
              {/* Terminal Header */}
              <div
                className="
      h-12
      bg-[#2d2d30]
      border-b border-[#3e3e42]
      flex items-center
      px-4
      gap-3
      font-mono
      text-sm
      text-white
    "
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>

                <span className="text-[#4ec9b0]">terminal</span>
              </div>

              {/* Terminal Body */}
              <div
                className="
      p-6
      font-mono
      text-[15px]
      text-[#d4d4d4]
      flex flex-col
      gap-5
    "
              >
                <p>
                  <span className="text-[#4ec9b0]">bat@portfolio</span>

                  <span className="text-white">:</span>

                  <span className="text-[#569cd6]">~/backend</span>

                  <span className="text-white">$ npm run dev</span>
                </p>

                <p className="text-[#6a9955]">
                  ✓ Server running successfully...
                </p>

                <p>
                  <span className="text-[#dcdcaa]">Technologies:</span>
                </p>

                <div className="flex flex-col gap-3 pl-4">
                  <p>
                    <span className="text-[#4ec9b0]">✓</span> Node.js
                  </p>

                  <p>
                    <span className="text-[#4ec9b0]">✓</span> Express.js
                  </p>

                  <p>
                    <span className="text-[#4ec9b0]">✓</span> MongoDB
                  </p>

                  <p>
                    <span className="text-[#4ec9b0]">✓</span> Firebase
                  </p>

                  <p>
                    <span className="text-[#4ec9b0]">✓</span> REST APIs
                  </p>
                </div>

                <p className="pt-6">
                  <span className="text-[#4ec9b0]">bat@portfolio</span>

                  <span className="text-white">:</span>

                  <span className="text-[#569cd6]">~/backend</span>

                  <span className="text-white">
                    $ Hire me to unlock my full potential_
                  </span>
                </p>
              </div>
            </div>
            {/* Soft skills  */}
            <div
              className="
    w-full max-w-[450px] min-h-[600px]
    bg-[#1e1e1e]
    border border-[#3e3e42]
    rounded-3xl
    overflow-hidden
    shadow-2xl
   
  "
            >
              {/* VSCode Tab */}
              <div
                className="
      h-12
      bg-[#2d2d30]
      border-b border-[#3e3e42]
      flex items-center
      px-4
      gap-3
      font-mono
      text-sm
      text-white
    "
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>

                <span className="text-[#dcdcaa]">skills.json</span>
              </div>

              {/* Code Area */}
              <div className="flex h-full font-mono text-[15px]">
                {/* Line Numbers */}
                <div
                  className="
        w-14
        bg-[#181818]
        text-[#6e7681]
        flex flex-col
        items-end
        pr-4 pt-6
        gap-3
        select-none
      "
                >
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                  <span>6</span>
                  <span>7</span>
                  <span>8</span>
                  <span>9</span>
                  <span>10</span>
                </div>

                {/* JSON Content */}
                <div className="flex flex-col pt-6 pl-6 gap-3 text-white">
                  <p>{"{"}</p>

                  <p className="pl-6">
                    <span className="text-[#9cdcfe]">"teamwork"</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#569cd6]">true</span>
                    <span>,</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-[#9cdcfe]">"communication"</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#569cd6]">true</span>
                    <span>,</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-[#9cdcfe]">"adaptability"</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#569cd6]">true</span>
                    <span>,</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-[#9cdcfe]">"problemSolving"</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#569cd6]">true</span>
                    <span>,</span>
                  </p>

                  <p className="pl-6">
                    <span className="text-[#9cdcfe]">"creativity"</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#569cd6]">true</span>
                  </p>

                  <p>{"}"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="w-full h-screen">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default App;
