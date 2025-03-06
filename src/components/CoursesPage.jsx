import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import CategoryBar from "./CategoryBar";

const courses = [
  {
    id: 1,
    name: "React for Beginners",
    category: "Web Development",
    description: "Learn the fundamentals of React and build real-world apps.",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    name: "Flutter Mobile Apps",
    category: "Mobile Development",
    description: "Master Flutter to create cross-platform mobile apps.",
    price: "₹1299",
    image: "https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Python for Data Science",
    category: "Data Science",
    description: "Learn Python and apply it to data analysis and ML.",
    price: "₹1499",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Machine Learning A-Z",
    category: "Machine Learning",
    description: "Complete guide to ML with hands-on projects.",
    price: "₹1999",
    image: "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  },
];

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="p-4">
      <CategoryBar onCategorySelect={setSelectedCategory} />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            {/* Navigate to Course Details Page */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
              <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{course.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{course.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-blue-600 font-bold">{course.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Enroll</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
