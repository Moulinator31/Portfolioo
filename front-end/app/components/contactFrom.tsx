import React, { useState } from "react";
import "../styles/globals.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { sendContactMessage } from "../services/api"; // Import de la fonction API

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendContactMessage(formData.name, formData.email, formData.message);
      setSuccessMessage("Votre message a été envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section id="Contact" className="py-16 px-4 bg-[#F2E6D9] text-[#D8BFAA]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#C49A6C] petit-formal-script-regular">
          Me Contacter
        </h2>

        <form
          className="bg-[#2A2A2A] p-8 rounded-lg shadow-lg space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-[#D8BFAA]"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 rounded-lg bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-[#D8BFAA]"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full mt-2 p-3 rounded-lg bg-[#333333] text-white focus:outline-none focus:ring-2 focus:ring-[#D8BFAA]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#D8BFAA] text-[#1F1F1F] font-semibold rounded-lg hover:bg-[#FE9968] transition duration-300"
          >
            Envoyer
          </button>
        </form>

        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}

        <div className="mt-12 flex justify-center space-x-8 text-3xl text-[#C49A6C]">
          <a
            href="https://www.linkedin.com/in/elsa-tanguy-98669924b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FE9968] transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Moulinator31"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FE9968] transition duration-300"
          >
            <FaGithub />
          </a>
          <a href="mailto:elsa.tang28@gmail.com" className="hover:text-[#FE9968] transition duration-300">
            <MdEmail />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;



