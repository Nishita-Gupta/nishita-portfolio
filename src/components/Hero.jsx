function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen bg-purple-100 flex flex-col justify-center items-center px-10">

      <h2 className="text-4xl font-bold text-purple-800 mb-5">Hey, I'm Nishita Gupta 👋</h2>
      <p className="text-xl text-purple-700 mb-7">
        A web developer & aspiring data analyst. Welcome to my portfolio!
      </p>
      <div className="flex justify-center">
      <a
        href="/public/resume.pdf"
        download
        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300 animate-pulse">
        Download Resume
      </a>
</div>

    </section>
  );
}

export default Hero;
