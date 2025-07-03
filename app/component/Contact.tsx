export const Contact = () => {
    return (
      <section className="min-h-screen bg-[#d7d7d7] py-16 px-4 sm:px-8 flex flex-col justify-center items-center">
        <div className="max-w-6xl w-full text-center">
          <div className="relative mb-8">
            <h2 className="relative text-3xl sm:text-3xl font-bold text-black border-10 border-black inline-block px-10 py-5 bg-[#d7d7d7]">
              Contact
            </h2>
          </div>
  
          <p className="text-sm sm:text-sm text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            My technical toolkit combines frontend development expertise with data
            science capabilities, enabling me to build comprehensive solutions
            from user interface to data analysis.
          </p>
  
          <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
  
          {/* Form section */}
          <form className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col items-center">
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 border-l-3 border-b-3 border-black text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="ENTER YOUR NAME*"
                required
              />
            </div>
  
            <div className="flex flex-col items-center">
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 border-l-3 border-b-3 border-black text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="ENTER YOUR EMAIL*"
                required
              />
            </div>
  
            <div className="flex flex-col items-center">
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-3 border-l-3 border-b-3 border-black text-black rounded-sm focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="PHONE NUMBER"
              />
            </div>
  
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
          </form>
  
          <div className="w-24 h-1 bg-black mx-auto mb-12 mt-12 "></div>
        </div>
      </section>
    );
  };
