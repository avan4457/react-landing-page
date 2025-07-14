const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Build Fast with React + Tailwind</h1>
      <p className="max-w-xl text-lg md:text-xl mb-8">
        A modern landing page template designed for developers and startups.
      </p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium shadow hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;