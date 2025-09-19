import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7itb0yi",   // Remplace par ton Service ID
        "template_fw92gnp",  // Remplace par ton Template ID
        form.current,
        "oSv8b0VdzjMdzmGCI"    // Remplace par ta Public Key
      )
      .then(
        (result) => {
          console.log("Message envoyé :", result.text);
          alert("✅ Message envoyé avec succès !");
          form.current.reset(); // Vide le formulaire après envoi
        },
        (error) => {
          console.log("Erreur :", error.text);
          alert("❌ Échec de l'envoi. Réessaie plus tard.");
        }
      );
  };

  return (
    <div className="mt-8 w-full space-y-6">
      <h3 className="text-lg font-bold text-custom-black-10 lg:text-xl">
        Get in Touch
      </h3>

      <form ref={form} onSubmit={sendEmail} className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full flex-col gap-3 lg:flex-row">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="w-full rounded-lg border border-custom-black-60 px-4 py-3 text-sm font-semibold text-custom-black-10 outline-none placeholder:text-custom-black-60 focus:border-custom-black-10 lg:w-1/2"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full rounded-lg border border-custom-black-60 px-4 py-3 text-sm font-semibold text-custom-black-10 outline-none placeholder:text-custom-black-60 focus:border-custom-black-10 lg:w-1/2"
          />
        </div>

        <textarea
          name="message"
          rows="10"
          placeholder="Write a message..."
          className="w-full rounded-lg border border-custom-black-60 px-4 py-2 text-sm font-semibold text-custom-black-10 outline-none placeholder:text-custom-black-60 focus:border-custom-black-10"
        ></textarea>

        <button
          type="submit"
          className="w-full rounded-lg bg-custom-black-10 px-3 py-2 text-sm font-bold text-white"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
