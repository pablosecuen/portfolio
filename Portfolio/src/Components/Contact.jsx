import React from "react";
import { useState } from "react";
// import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_k1dn49a",
        "template_rjj68l7",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "v8HZ6Sk79OJKu27jg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className=" mt-96 flex h-[500px] w-full justify-center border-2"
      onSubmit={handleSubmit}
    >
      <div className="flex w-1/2 flex-col border-2 pt-10">
        <h5 className="h-10 py-10 text-center text-xl text-white">
          GET IN CONTACT WITH ME
        </h5>
        <label htmlFor="name" className="text-white">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border-2 bg-transparent text-white "
        />
        <label htmlFor="email" className="text-white ">
          EMAIL:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border-2 bg-transparent  text-white"
        />
        <label htmlFor="message" className="text-white">
          MESSAGE:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="h-24 border-2 bg-transparent text-white"
        ></textarea>
        <button type="submit" className="pt-6 text-xl text-white">
          SUBMIT
        </button>
      </div>
    </form>
  );
}

export default Contact;
