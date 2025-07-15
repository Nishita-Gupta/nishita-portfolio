function Contact() {
  return (
    <section className="px-10 py-20 bg-white text-center" id="contact">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Contact Me</h2>
      <p className="text-gray-700 mb-4">
        Feel free to reach out!
      </p>

      <div className="flex flex-col items-center gap-4 text-gray-800">
        <p>Email: <a href="mailto:nishitagupta2005@gmail.com" className="text-purple-600 hover:underline">nishitagupta2005@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/nishita-gupta1/" target="_blank" className="text-purple-600 hover:underline">linkedin.com/in/nishita-gupta1</a></p>
        <p>GitHub: <a href="https://github.com/Nishita-Gupta" target="_blank" className="text-purple-600 hover:underline">github.com/Nishita-Gupta</a></p>
      </div>
    </section>
  );
}

export default Contact;
