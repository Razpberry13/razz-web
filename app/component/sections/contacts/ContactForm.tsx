const ContactForm = () => (
  <form className="max-w-3xl mx-auto space-y-6">
    {["name", "email", "phone"].map((field, i) => (
      <div className="flex flex-col items-center" key={i}>
        <input
          id={field}
          type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
          required={field !== "phone"}
          placeholder={`${
            field === "phone"
              ? "PHONE NUMBER"
              : `ENTER YOUR ${field.toUpperCase()}*`
          }`}
          className="w-full px-4 py-3 border-l-3 border-b-3 border-black text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    ))}

    <div className="flex flex-col items-center">
      <textarea
        id="message"
        className="w-full px-4 py-3 border-l-3 border-b-3 border-black text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
        rows={4}
        placeholder="YOUR MESSAGE*"
        required
      ></textarea>
    </div>

    <button className="px-8 py-3 border-l-3 border-r-3 border-black text-black font-medium hover:rounded-sm hover:bg-black hover:text-[#d7d7d7] transition-all duration-300">
      Submit
    </button>

    <div className="w-24 h-1 bg-black mx-auto mt-12" />
  </form>
);

export default ContactForm;
