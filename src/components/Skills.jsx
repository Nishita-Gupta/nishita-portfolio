function Skills() {
  const skills = {
    "Programming Languages": ["Python", "Java", "R programming","C", "JavaScript", "SQL"],
    "Web Development": ["HTML", "CSS", "React", "Tailwind CSS", "Node.js", "Express"],
    "Data & ML Tools": ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
    "Tools & Platforms": ["Git", "GitHub"],
  };

  return (
    <section id="skills" className="px-8 py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-12">Skills</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="bg-gray-50 shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">{category}</h3>
            <ul className="flex flex-wrap justify-center gap-3">
              {skillList.map((skill, i) => (
                <li
                  key={i}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
