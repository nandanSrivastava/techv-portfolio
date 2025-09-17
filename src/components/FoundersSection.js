"use client";

export default function FoundersSection() {
  const founders = [
    {
      name: "Rahul Raj",
      position: "Founder & CEO",
      image: "/techv_logo.png",
    },
    {
      name: "Rahul Shrivastava",
      position: "Founder & CTO",
      image: "/icon.png",
    },
    {
      name: "Nandan Shrivastava",
      position: "Founder & COO",
      image: "https://via.placeholder.com/240x240.png?text=Founder",
    },
  ];

  return (
    <section id="founders" className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Meet Our Founders</h2>
        <p className="text-xs text-gray-600 mb-6">The leadership team driving our vision.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
          {founders.map((f, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-4 flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden mb-3 bg-white flex-shrink-0">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{f.name}</h3>
              <p className="text-xs text-gray-600">{f.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
