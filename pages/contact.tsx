import React from "react";
import { IoMdSend } from "react-icons/io";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="flex justify-between">
      <div>
        <h1 className="text-5xl font-bold mb-8">Hit me up!</h1>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <AiOutlineMail />
            <p>Email</p>
          </div>
          <a
            className="text-secondary hover:underline"
            href="mailto:joshxfi.dev@gmail.com"
          >
            joshxfi.dev@gmail.com
          </a>
        </div>

        <div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone />
            <p>Phone</p>
          </div>
          <p className="text-secondary">(+63) 9619059317</p>
        </div>
      </div>

      <div>
        <div className="flex bg-two h-12 rounded-t items-center space-x-2 pl-4">
          {["bg-red-500", "bg-amber-500", "bg-green-500"].map((color) => (
            <i key={color} className={`${color} rounded-full p-[6px]`} />
          ))}
        </div>

        <div className="w-[350px] bg-[#F9FAFB] pt-8 px-8 pb-4 rounded-b font-medium text-primary space-y-8">
          <div>
            <p className="mb-2">Name</p>
            <input type="text" className="input" />
          </div>

          <div>
            <p className="mb-2">Email</p>
            <input type="text" className="input" />
          </div>

          <div>
            <p className="mb-2">Message</p>
            <textarea className="input min-h-[80px] max-h-[200px]" />
          </div>

          <div className="flex justify-end">
            <button className="bg-two px-4 py-2 hover:bg-primary transition-colors text-white flex space-x-3 rounded font-medium items-center mt-4">
              <p>Send</p> <IoMdSend />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
