import ContactHeading from "./ContactHeading";
import ContactDescription from "./ContactDescription";
import ContactForm from "./ContactForm";

const Contact = () => (
  <section className="min-h-screen bg-[#d7d7d7] py-16 px-4 sm:px-8 flex flex-col justify-center items-center">
    <div className="max-w-6xl w-full text-center">
      <ContactHeading />
      <ContactDescription />
      <ContactForm />
    </div>
  </section>
);

export default Contact;
