import { useState } from "react";

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "Cyber Security",
  "Cloud Computing",
  "AI & Deep Learning",
  "Blockchain",
  "DevOps",
];

const CategoryBar = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap scrollbar-hide bg-gray-100 p-2 rounded-lg">
      <div className="flex space-x-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
