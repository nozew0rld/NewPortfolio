import "./App.css";
import me from "./assets/me.png";
import Header from "./components/Header";
import { Typewriter } from "react-simple-typewriter";

function App() {
  return (
    <div className="">
      <div>
        <Header />
        <div className="w-full h-screen pt-[150px]">
          <div className="flex flex-row justify-center gap-[15vh]">
            <img src={me} alt="" className="w-[370px] h-[500px] rounded-4xl" />
            <div className="text-white w-[30%] h-[500px] flex flex-col gap-10 font-[Inter]">
              <div className="flex flex-col gap-5">
                <p className="text-sky-400 ">{"<h1>"}</p>
                <span className="text-5xl tracking-widest text-amber-300 inline-block  w-[500px]">
                  <Typewriter
                    words={["Welcome , my name is Batbaatar."]}
                    loop={true}
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1500}
                    cursor
                  />
                </span>
                <p className="text-sky-400 ">{"</h1>"}</p>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-sky-400">{"<p>"}</p>
                <p className=" tracking-widest text-amber-300">
                  I'm 20yo from Mongolia. My friends call me Bat. <br />{" "}
                  Currently studying Software Engineering at the University of
                  Europe for Applied Science in Potsdam, Germany.
                </p>
                <p className="text-sky-400 ">{"</p>"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
