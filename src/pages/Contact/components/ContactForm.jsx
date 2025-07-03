const ContactForm = () => {
  return (
    <div className="mt-8 w-full space-y-6">
      <h3 className="text-lg font-bold text-custom-black-10 lg:text-xl">
        Get in Touch
      </h3>

      <form action="" className="flex w-full flex-col items-start gap-6">
        <div className="flex w-full flex-col gap-3 lg:flex-row">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Name"
            className="w-full rounded-lg border border-custom-black-60 px-4 py-3 text-sm font-semibold text-custom-black-10 outline-none placeholder:text-custom-black-60 focus:border-custom-black-10 lg:w-1/2"
          />

          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
            className="w-full rounded-lg border border-custom-black-60 px-4 py-3 text-sm font-semibold text-custom-black-10 outline-none placeholder:text-custom-black-60 focus:border-custom-black-10 lg:w-1/2"
          />
        </div>

        <textarea
          name="message"
          id="message"
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
