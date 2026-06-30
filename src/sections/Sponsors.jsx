const sponsor_url = import.meta.env.VITE_SPONSOR_URL;

const Sponsors = () => {
  const sponsors = [
    // Add real sponsors here later like:
    // { name: "Company", logo: "/sponsors/company.png", url: "https://company.com" },
  ];

  const placeholderCount = Math.max(4, 4 - sponsors.length);

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-start mb-6">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium rounded-full py-1 px-4 border border-blue-600 dark:border-blue-400 mb-3">
            🤍 Empowering our mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Our Sponsors
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Help us keep this project alive and open source.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Real sponsors (if any) */}
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-gray-100 dark:bg-[#1a1a2e] border border-gray-300 dark:border-gray-700 rounded-xl hover:border-gray-400 transition"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="object-contain max-h-16"
              />
            </a>
          ))}

          {/* Placeholder "Become a Sponsor" cards */}
          {[...Array(placeholderCount)].map((_, i) => (
            <a
              key={`placeholder-${i}`}
              href={sponsor_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-2 p-6 bg-gray-100 dark:bg-[#1a1a2e] border border-gray-300 dark:border-gray-700 rounded-xl text-gray-600 dark:text-gray-500 hover:border-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition cursor-pointer"
            >
              <span className="text-2xl font-light">+</span>
              <span className="text-sm">Become a sponsor</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
