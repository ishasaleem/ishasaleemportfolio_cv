import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import type { FormEvent } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_0h1lzzb", // Service ID
        "template_na9ehzu", // Template ID
        e.currentTarget,     // form element
        "o1VxNx9a4w-9he7Tt"  // Public Key
      )
      .then(
        () => {
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          setSending(false);
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          alert("Failed to send message. Check console for details.");
          setSending(false);
        }
      );
  };

  return (
    <section id="contact" className="max-w-4xl px-6 py-20 mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-4xl font-bold dark:text-blackss"
      >
        Contact Me
      </motion.h2>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="p-6 text-green-700 bg-green-100 rounded-lg dark:bg-green-900 dark:text-green-300"
        >
          Thank you! Your message has been sent.
        </motion.div>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="px-4 py-3 transition border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 transition border rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="px-4 py-3 transition border rounded-lg resize-none dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{ scale: sending ? 1 : 1.05 }}
            whileTap={{ scale: sending ? 1 : 0.95 }}
            className={`px-6 py-3 mt-4 font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition transform ${
              sending ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {sending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-6 mt-12 text-gray-700 dark:text-gray-300"
      >
        <a
          href="mailto:eisha0549@gmail.com"
          className="transition hover:text-purple-500"
        >
          📧 eisha0549@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/isha-s-162200250"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-blue-500"
        >
          💼 LinkedIn
        </a>
        <a
          href="https://github.com/ishasaleem"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-gray-900 dark:hover:text-black"
        >
          🐙 GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
