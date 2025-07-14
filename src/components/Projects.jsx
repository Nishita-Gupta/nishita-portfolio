function Projects() {
  const projectList = [
    {
      title: "To-Do List App",
      description: "A full-stack CRUD app built with React, Node.js, Express, and MySQL.",
    },
    {
      title: "Movie Review System",
      description: "A dynamic website where users can view and post movie reviews. Built using EJS templates and Express.",
    },
    {
      title: "Heart Disease Detection",
      description: "A machine learning model to predict heart disease using health data (as part of Blackbucks project).",
    },
  ];

  return (
    <section className="px-10 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">My Projects</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-purple-800">{project.title}</h3>
            <p className="mt-2 text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
