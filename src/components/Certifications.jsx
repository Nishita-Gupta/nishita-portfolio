const certifications = [
  {
    title: "Python Programming Certification",
    issuer: "Kaggle",
    date: "December 2024",
    image: "/certs/python-cert.png", 
  },
  {
    title: "MATLAB Onramp Certificate",
    issuer: "MathWorks",
    date: "September 2023",
    image: "/certs/matlab-cert.png",
  },
  {
    title: "Data Science & Business Analytics Course",
    issuer: "Blackbucks Education",
    date: "December 2024",
    image: "/certs/bb-cert.png",
  },
];

function Certifications() {
  return (
    <section id="certifications" className="px-8 py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-12">Certifications</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md p-4 rounded-lg hover:shadow-lg transition"
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-purple-800">{cert.title}</h3>
              <p className="text-gray-700">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
