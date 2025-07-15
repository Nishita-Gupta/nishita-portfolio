function Projects() {
  const projectList = [
    {
      title: "Smart Signalization system for emergency vehicles",
      description:"A traffic management system that optimizes signal timings using real-time data to reduce congestion, and prioritize emergency vehicles.",
      tech: ["React", "Node.js", "Express", "HTML/CSS", "JS","MongoDB"],
      github: "https://github.com/VaibhavPrakash0503/Smart-Signalization",
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive developer portfolio showcasing my skills, projects, and certifications. Built with React and Tailwind CSS.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/Nishita-Gupta/nishita-portfolio",
    },
    {
      title: "To-Do List App",
      description: "A full-stack CRUD app to manage daily tasks with checkbox status updates, built with authentication and MySQL backend.",
      tech: ["React", "Node.js", "Express", "MySQL", "EJS"],
      github: "https://github.com/Nishita-Gupta/to-do-list",
    },
    {
      title: "Breast Cancer Detection Using Machine Learning",
      description: "A machine learning model to classify breast cancer tumors as benign or malignant using the XGBoost Classifier. The model was trained on the Breast Cancer Wisconsin dataset",
      tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib","Seaborn"],
      github: "https://github.com/Nishita-Gupta/Breast-Cancer-Detection-Using-ML",
    },
        {
      title: "Basic Calculator",
      description: "Basic calculator which performs arithmetic operations.",
      tech: ["HTML","CSS","JS"],
      github: "https://github.com/Nishita-Gupta/basic-calculator",
    },
  ];

  return (
    <section id="projects" className="px-8 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-12">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-purple-800">{project.title}</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
            <div className="mt-4">
              <h4 className="font-semibold text-sm text-gray-600 mb-1">Tech Used:</h4>
              <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
                {project.tech.map((tech, i) => (
                  <li
                    key={i}
                    className="bg-purple-100 px-2 py-1 rounded-full text-purple-700"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 text-sm font-medium text-white bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
