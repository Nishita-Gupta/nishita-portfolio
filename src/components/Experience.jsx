function Experience() {
  return (
    <section id="experience" className="px-8 py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-12">Experience</h2>
      <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg text-left border-l-4 border-purple-600">
        <h3 className="text-xl font-semibold text-purple-800">
          Data Science Intern
        </h3>
        <p className="text-gray-700">Prodigy Infotech</p>
        <p className="text-gray-600">Dec 2024 – Jan 2025</p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            Gained hands-on experience in data analysis and visualization using Python.
          </li>
          <li>
            Worked with libraries like <span className="font-medium">Matplotlib, NumPy, and Seaborn</span> to extract insights from data.
          </li>
          <li>
            Built visual dashboards and performed exploratory data analysis as part of assigned tasks.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
