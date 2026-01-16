import { useTheme } from "../hooks/useTheme";

const Navbar: React.FC = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white/80 dark:bg-black/80 backdrop-blur dark:border-gray-800">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
        <h1 className="text-xl font-bold dark:text-white">Isha</h1>
        <div className="flex items-center gap-6 font-medium text-gray-700 dark:text-gray-300">
          {["Projects", "Skills", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-black dark:hover:text-white">
              {item}
            </a>
          ))}
          <button onClick={toggleTheme} className="px-3 py-1 text-sm border rounded">
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
