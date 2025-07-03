import { useEffect } from "react";
import AvailableDiv from "../../components/AvailableDiv";
import ContactForm from "./components/ContactForm";
import ContactInfos from "./components/ContactInfos";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-8 text-start">
      <AvailableDiv />

      <div className="w-full space-y-6">
        <h1 className="text-4xl font-bold text-custom-black-10 lg:text-5xl xl:text-6xl">
          Let&apos;s Connect!
        </h1>

        <div className="w-full max-w-full lg:max-w-lg">
          <p className="text-lg font-light text-custom-black-40">
            Feel free to reach out with your projects, questions, or to connect.
            I&apos;ll respond promptly, and we can explore opportunities
            together.
          </p>
        </div>

        <div className="flex h-full w-full flex-col items-start justify-start gap-10 border-t border-t-custom-black-90 lg:flex-row">
          <ContactForm />
          <ContactInfos />
        </div>
      </div>
    </div>
  );
};

export default Contact;
