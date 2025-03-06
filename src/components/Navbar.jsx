import { useState } from "react";
import { Menu, ShoppingCart, User, LogOut, BookOpen } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex items-center justify-between">
      {/* Logo and Search Bar */}
      <div className="flex items-center space-x-4 w-full justify-between">
        <h1 className="text-xl font-bold">LMS Portal</h1>
        <div className="flex justify-center items-center flex-grow ">
          <input
            type="text"
            placeholder="Search courses..."
            className="sm:block p-2 border border-gray-300 rounded-lg w-full mr-5"
          />
        </div>
      </div>

      {/* Large Screen Items */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="flex items-center space-x-2 whitespace-nowrap">
          <BookOpen size={20} />
          <span>My Learning</span>
        </button>
        <button className="flex items-center space-x-2">
          <ShoppingCart size={20} />
          <span>Cart</span>
        </button>
        <button className="flex items-center space-x-2">
          <User size={20} />
          <span>Profile</span>
        </button>
      </div>

      {/* Small Screen Expand Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-40 p-2 flex flex-col space-y-2 z-999 md:hidden">
          <button className="flex items-center space-x-2">
            <BookOpen size={20} />
            <span>My Learning</span>
          </button>
          <button className="flex items-center space-x-2">
            <ShoppingCart size={20} />
            <span>Cart</span>
          </button>
          <button className="flex items-center space-x-2">
            <User size={20} />
            <span>Profile</span>
          </button>
          <button className="flex items-center space-x-2 text-red-600">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
