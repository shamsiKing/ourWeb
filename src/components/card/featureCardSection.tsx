import React from "react";

const features = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/609/609803.png",
    title: "Responsive Design",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2920/2920361.png",
    title: "Speed Optimized",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2043/2043707.png",
    title: "SEO Friendly",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png",
    title: "Fully Customizable",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827504.png",
    title: "Interactions & Animations",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    title: "Zero Coding Knowledge",
  },
];

const FeatureCardsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-sm px-4 py-1 bg-blue-600 text-white rounded-full font-medium inline-block">
          🔹 Top-Notch Features
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold mt-4">
          Limitless Features and <br className="hidden sm:inline" /> Endless
          Possibilities.
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md w-20 h-20 flex items-center justify-center">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-700 text-center">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
