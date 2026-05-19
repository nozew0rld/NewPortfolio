import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const emailAddress = "batbaatarlkhagvadorj0@gmail.com";

const sendEmail = (e) => {
  e.preventDefault();
  if (!name || !email || !message) {
    toast.error("Please fill all fields");
    return;
  }

  emailjs
    .sendForm(
      "service_y0h9r7h",
      "template_tsb7i3h",
      e.target,
      "PByVR63btzuhMMG57",
    )
    .then(() => {
      alert("Message sent!");
    })
    .catch((error) => {
      console.log(error);
    });
};

function Contact() {
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      toast.success("Email copied to clipboard");
    } catch (error) {
      console.log(error);
      toast.error("Could not copy email.");
    }
  };

  return (
    <div
      className="
    w-full
    min-h-screen
    flex
    justify-center
    items-center
    px-6
    py-20
    font-mono
  "
    >
      <div
        className="
      w-full
      max-w-5xl
      bg-[#1e1e1e]
      border border-[#3e3e42]
      rounded-3xl
      overflow-hidden
      shadow-2xl
    "
      >
        {/* Header starting here */}
        <div
          className="
        h-12
        bg-[#2d2d30]
        border-b border-[#3e3e42]
        flex items-center
        px-4
        gap-3
        text-sm
        text-white
      "
        >
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>

          <span className="text-[#58c3db]">contact.tsx</span>
        </div>

        {/* Content */}
        <div
          className="
        flex
        flex-col
        lg:flex-row
      "
        >
          {/* Left Side */}
          <div
            className="
          flex-1
          p-10
          border-b lg:border-b-0
          lg:border-r
          border-[#3e3e42]
        "
          >
            <p className="text-[#569cd6] text-sm">{"<Contact />"}</p>

            <h1
              className="
            text-white
            text-4xl
            sm:text-5xl
            mt-4
            leading-tight
          "
            >
              Let’s build
              <br />
              something cool.
            </h1>

            <p
              className="
            text-[#9e9e9e]
            mt-6
            leading-relaxed
            text-sm
            sm:text-base
          "
            >
              Feel free to contact me for collaboration, projects, or just to
              connect.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              <div>
                <p className="text-[#6a9955] text-sm">EMAIL</p>

                <div
                  className="text-white cursor-pointer hover:text-[#58c3db]
                        transition-all"
                  onClick={handleCopyEmail}
                >
                  {emailAddress}
                </div>
              </div>

              <div>
                <p className="text-[#6a9955] text-sm">LOCATION</p>

                <p className="text-white">Berlin, Germany</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 p-10">
            <form onSubmit={sendEmail} className="flex flex-col gap-6">
              <div>
                <p className="text-[#6e7681] text-sm mb-2">Name</p>

                <input
                  name="user_name"
                  type="text"
                  placeholder="Enter your name..."
                  className="
                w-full
                bg-[#252526]
                border border-[#3e3e42]
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-[#007acc]
                transition-all
              "
                />
              </div>

              <div>
                <p className="text-[#6e7681] text-sm mb-2">Email</p>

                <input
                  name="user_email"
                  type="email"
                  placeholder="Enter your email..."
                  className="
                w-full
                bg-[#252526]
                border border-[#3e3e42]
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-[#007acc]
                transition-all
              "
                />
              </div>

              <div>
                <p className="text-[#6e7681] text-sm mb-2">Message</p>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="
                w-full
                bg-[#252526]
                border border-[#3e3e42]
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                resize-none
                focus:border-[#007acc]
                transition-all
              "
                ></textarea>
              </div>

              <button
                className="
              bg-[#007acc]
              hover:bg-[#0098ff]
              transition-all
              text-white
              py-3
              rounded-xl
              font-semibold
            "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
