"use client";

export default function FoundersSection() {
  const founders = [
    {
      name: "Madhavi Shrivastava",
      position: "Founder & CEO",
      image: "/madhavi.png",
    },
    {
      name: "Rahul Shrivastava",
      position: "Co-Founder & CMO",
      image: "/mithu.png",
    },
    {
      name: "Nandan Shrivastava",
      position: "Co-Founder & CTO",
      image: "/nandan.png",
    },
  ];

  return (
    <section
      id="founders"
      className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Meet Our Founders
        </h2>
        <p className="text-xs text-gray-600 mb-6">
          The leadership team driving our vision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
          {founders.map((f, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg p-4 flex flex-col items-center"
            >
              <div className="w-36 h-36 rounded-full overflow-hidden mb-3 bg-white flex-shrink-0">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{f.name}</h3>
              <p className="text-xs text-gray-600">{f.position}</p>
            </div>
          ))}
        </div>

        {/* Our Advisors section */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Our Advisors</h2>
          <p className="text-xs text-gray-600 mb-6">
            Trusted advisors guiding our strategy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 items-start max-w-3xl mx-auto">
            {
              // Two advisor cards
            }
            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-3 bg-white flex-shrink-0">
                <img
                  src="/rahul.jpg"
                  alt="Rahul Raj"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                Rahul Raj
              </h3>
              <p className="text-xs text-gray-600">6+ Years of Experience in Software Products</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-3 bg-white flex-shrink-0">
                <img
                  src="/rohit.jpg"
                  alt="Mr. Rohit Shrivastava"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">
                Rohit Shrivastava
              </h3>
              <p className="text-xs text-gray-600">8+ years of experience in Marketing & Finance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
