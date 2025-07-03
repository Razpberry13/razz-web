export const Summary = () => {
    return (
      <section className="bg-[#1d1d1d] text-[#ffffff] flex flex-col justify-center items-start px-4 sm:px-8">
        <div className="text-justify max-w-5xl mt-8 mb-8">
          <h2 className="text-2xl sm:text-2xl font-bold mb-4">My Journey</h2>
          <p className="text-base sm:text-base text-gray-300 mb-6 leading-relaxed">
            I'm a passionate data science student with a deep curiosity for
            uncovering insights from complex datasets. My journey combines
            analytical thinking with creative problem-solving to transform raw
            data into meaningful stories.
          </p>
          <button className="px-8 py-3 border-l-2 border-r-2 border-white text-white font-medium hover:rounded-sm hover:bg-white hover:text-[#1d1d1d] transition-all duration-300">
            Read More
          </button>
        </div>
      </section>
    );
  };