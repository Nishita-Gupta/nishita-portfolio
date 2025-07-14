function Navbar() {
  return (
    <nav className="bg-white shadow-md p-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-600">Nishita Gupta</h1>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-gray-700 hover:text-purple-600">Home</a></li>
        <li><a href="#" className="text-gray-700 hover:text-purple-600">About</a></li>
        <li><a href="#" className="text-gray-700 hover:text-purple-600">Skills</a></li>
        <li><a href="#" className="text-gray-700 hover:text-purple-600">Projects</a></li>
        <li><a href="#" className="text-gray-700 hover:text-purple-600">Education</a></li>
        <li><a href="#" className="text-gray-700 hover:text-purple-600">Experience</a></li>
        <li><a href="#" className="text-gray-700 hover:text-purple-600">Certifications</a></li>
        <li><a href="#" className="text-gray-700 hover:text-purple-600">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
