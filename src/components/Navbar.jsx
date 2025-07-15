function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-600">Nishita Gupta</h1>
      <ul className="flex space-x-4">
        <li><a href="#home" className="text-gray-700 hover:text-purple-600 ">Home</a></li>
        <li><a href="#about" className="text-gray-700 hover:text-purple-600">About</a></li>
        <li><a href="#skills" className="text-gray-700 hover:text-purple-600">Skills</a></li>
        <li><a href="#projects" className="text-gray-700 hover:text-purple-600">Projects</a></li>
        <li><a href="#education" className="text-gray-700 hover:text-purple-600">Education</a></li>
        <li><a href="#experience" className="text-gray-700 hover:text-purple-600">Experience</a></li>
        <li><a href="#certifications" className="text-gray-700 hover:text-purple-600">Certifications</a></li>
        <li><a href="#contact" className="text-gray-700 hover:text-purple-600">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
