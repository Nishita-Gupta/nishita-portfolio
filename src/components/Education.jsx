function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Vellore Institute of Technology, Andhra Pradesh",
      duration: "Sept 2023 – Present",
      details: "CGPA: 8.31",
    },
    {
      degree: "Intermediate (Class 12) – MPC",
      institution: "Resonance Junior College",
      duration: "2021 – 2023",
      details: "Board: Telangana State Board | Percentage: 88.6%",
    },
    {
      degree: "High School (Class 10)",
      institution: "Bhartiya Vidya Bhavans Public School",
      duration: "2020",
      details: "Board: CBSE | Percentage: 86.2%",
    },
  ];

  return (
    <section id="education" className="px-8 py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-12">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md p-6 rounded-lg text-left border-l-4 border-purple-600"
          >
            <h3 className="text-xl font-semibold text-purple-800">{edu.degree}</h3>
            <p className="text-gray-700">{edu.institution}</p>
            <p className="text-gray-600">{edu.duration}</p>
            <p className="text-gray-700 mt-1">{edu.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
