import { useParams } from "react-router-dom";
import { useState } from "react";

const sampleCourses = [
    {
      id: 1,
      name: "React for Beginners",
      category: "Web Development",
      description: "Master React.js by building real-world projects.",
      price: "₹999",
      introVideo: "https://www.youtube.com/embed/Ke90Tje7VS0",
      sections: [
        { id: 1, title: "Introduction to React", video: "https://www.youtube.com/embed/dGcsHMXbSOA" },
        { id: 2, title: "Components & Props", video: "https://www.youtube.com/embed/MhkGQAoc7bc" },
        { id: 3, title: "State & Hooks", video: "https://www.youtube.com/embed/6ThXsUwLWvc" },
        { id: 4, title: "React Router", video: "https://www.youtube.com/embed/jU1f7BaM0pY" },
        { id: 5, title: "React Context API", video: "https://www.youtube.com/embed/F3VYj0iqf4E" },
      ],
    },
    {
      id: 2,
      name: "Flutter Mobile Apps",
      category: "Mobile Development",
      description: "Learn Flutter & Dart to build cross-platform mobile apps.",
      price: "₹1299",
      introVideo: "https://www.youtube.com/embed/rZLR5olMRD8",
      sections: [
        { id: 1, title: "Getting Started with Flutter", video: "https://www.youtube.com/embed/x0uinJvhNxI" },
        { id: 2, title: "Stateful & Stateless Widgets", video: "https://www.youtube.com/embed/I0WzT0OJ-E0" },
        { id: 3, title: "Navigation & Routing", video: "https://www.youtube.com/embed/knMVzHjR4vU" },
        { id: 4, title: "Flutter Animations", video: "https://www.youtube.com/embed/bRysIoLRZFc" },
        { id: 5, title: "Building Flutter Apps for iOS & Android", video: "https://www.youtube.com/embed/ltxj9ZaDp_4" },
      ],
    },
    {
      id: 3,
      name: "Python for Data Science",
      category: "Data Science",
      description: "Learn Python and apply it to data analysis and ML.",
      price: "₹1499",
      introVideo: "https://www.youtube.com/embed/H1pzyHbF7ac",
      sections: [
        { id: 1, title: "Python Basics", video: "https://www.youtube.com/embed/5yR7Rkp3xhM" },
        { id: 2, title: "Data Manipulation with Pandas", video: "https://www.youtube.com/embed/xCeqd7xV34g" },
        { id: 3, title: "Data Visualization with Matplotlib", video: "https://www.youtube.com/embed/2MvHLjqEJt8" },
        { id: 4, title: "Machine Learning with Scikit-Learn", video: "https://www.youtube.com/embed/cRDAwMauT6E" },
        { id: 5, title: "Deep Learning with TensorFlow", video: "https://www.youtube.com/embed/4HqgVbNVzWs" },
      ],
    },
    {
      id: 4,
      name: "Machine Learning A-Z",
      category: "Machine Learning",
      description: "Complete guide to ML with hands-on projects.",
      price: "₹1999",
      introVideo: "https://www.youtube.com/embed/7eh4d6sabA0",
      sections: [
        { id: 1, title: "Introduction to Machine Learning", video: "https://www.youtube.com/embed/dE_H33yVJ_A" },
        { id: 2, title: "Supervised Learning", video: "https://www.youtube.com/embed/4CHtYyy7gEc" },
        { id: 3, title: "Unsupervised Learning", video: "https://www.youtube.com/embed/x7IHq0j0b98" },
        { id: 4, title: "Support Vector Machines", video: "https://www.youtube.com/embed/ByyJd3BQZvc" },
        { id: 5, title: "Deep Learning Basics", video: "https://www.youtube.com/embed/d2Xz0A5R1Vs" },
        { id: 6, title: "Neural Networks", video: "https://www.youtube.com/embed/7aXh12YRUog" },
      ],
    },
    {
      id: 5,
      name: "JavaScript Algorithms & Data Structures",
      category: "Web Development",
      description: "Master JavaScript by learning algorithms and data structures.",
      price: "₹1099",
      introVideo: "https://www.youtube.com/embed/9Q32v0s4uTY",
      sections: [
        { id: 1, title: "JavaScript Basics", video: "https://www.youtube.com/embed/gzR02E6z9oA" },
        { id: 2, title: "Sorting Algorithms", video: "https://www.youtube.com/embed/fNq39cS1Yy8" },
        { id: 3, title: "Searching Algorithms", video: "https://www.youtube.com/embed/NoS2f16t12Y" },
        { id: 4, title: "Recursion", video: "https://www.youtube.com/embed/jlK6Yli7VhE" },
        { id: 5, title: "Stacks and Queues", video: "https://www.youtube.com/embed/h0bTgBgwI4I" },
        { id: 6, title: "Binary Search Trees", video: "https://www.youtube.com/embed/9IF2csLOmtA" },
      ],
    },
  ];

const CourseDetails = () => {
  const { courseId } = useParams();
  const course = sampleCourses.find((c) => c.id === parseInt(courseId));

  const [selectedVideo, setSelectedVideo] = useState(course.introVideo);

  if (!course) return <p className="text-center text-red-600 font-semibold">Course not found</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto mt-10">
      {/* Course Header: Video & Details */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left: Video Player */}
        <div className="w-full md:w-2/3">
          <iframe
            width="100%"
            height="350"
            src={selectedVideo}
            title="Course Video"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-md"
          ></iframe>
        </div>

        {/* Right: Course Details */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">{course.name}</h1>
          <p className="text-gray-600 mt-2">{course.description}</p>
          <p className="text-xl text-blue-600 font-semibold mt-4">{course.price}</p>
          <button className="bg-blue-600 text-white px-6 py-3 mt-4 w-full rounded-lg">Enroll Now</button>
        </div>
      </div>

      {/* Course Sections */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Course Content</h2>
        <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
          {course.sections.map((section) => (
            <div
              key={section.id}
              onClick={() => setSelectedVideo(section.video)}
              className="p-3 cursor-pointer border-b last:border-none flex items-center justify-between hover:bg-gray-100 rounded-lg"
            >
              <p>{section.title}</p>
              <span className="text-blue-500 font-semibold">Watch</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
