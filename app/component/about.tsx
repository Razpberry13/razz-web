export const About = () => {
  return (
    <section className="min-h-screen bg-[#d7d7d7] py-16 px-4 sm:px-8 flex flex-col justify-center items-center">
      <div className="max-w-4xl w-full text-center">
        <div className="relative mb-8">
          <h2 className="relative text-3xl sm:text-3xl font-bold text-black border-10 border-black inline-block px-10 py-5 bg-[#d7d7d7]">
            ABOUT ME
          </h2>
        </div>

        <p className="text-sm sm:text-sm text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          I'm a dedicated data science student passionate about transforming
          complex data into actionable insights. My expertise spans across
          multiple domains, combining technical skills with creative
          problem-solving approaches.
        </p>

        <div className="w-24 h-1 bg-black mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid grid-cols-3 gap-8 mb-12">
          <div className="col-start-1 col-end-2 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
              🎨 Design
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">
              Creating intuitive and visually appealing data visualizations,
              user interfaces, and design systems that communicate complex
              information effectively.
            </p>
          </div>

          <div className="col-start-3 col-end-4 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
              💻 Development
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Building robust data pipelines, machine learning models, and web
              applications using modern technologies and best practices.
            </p>
          </div>

          <div className="col-start-2 col-end-3 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
              🛠️ Maintenance
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ensuring data quality, model performance monitoring, system
              optimization, and continuous improvement of deployed solutions.
            </p>
          </div>
        </div>

        <div className="w-24 h-1 bg-black mx-auto"></div>
      </div>
    </section>
  );
};