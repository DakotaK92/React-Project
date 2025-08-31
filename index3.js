import { useState, useEffect } from "react";

export default function ThemeSlider() {
  const [themeIndex, setThemeIndex] = useState(0);
  const themes = ["light", "dark", "colorful"];

  useEffect(() => {
    // Remove old theme classes
    document.body.classList.remove("light", "dark", "colorful");
    // Add the current theme class
    document.body.classList.add(themes[themeIndex]);
  }, [themeIndex]);

  const handleClick = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <div className="flex flex-col items-center p-6">
      {/* Slider */}
      <div
        className="relative w-[150px] h-[40px] bg-gray-300 rounded-full flex justify-between items-center px-1 cursor-pointer select-none"
        onClick={handleClick}
      >
        {/* Movable Indicator */}
        <div
          className={`absolute top-[3px] left-[5px] w-[45px] h-[34px] bg-white rounded-full shadow-md transition-transform duration-300 ${
            themeIndex === 0
              ? "translate-x-0"
              : themeIndex === 1
              ? "translate-x-[50px]"
              : "translate-x-[100px]"
          }`}
        />
        <span className="flex-1 text-center z-10">☀️</span>
        <span className="flex-1 text-center z-10">🌙</span>
        <span className="flex-1 text-center z-10">🎨</span>
      </div>

      <h1 className="mt-6 text-2xl font-bold">Theme Slider Example</h1>
      <p className="mt-2">Click the slider to change between Light, Dark, and Colorful themes!</p>
    </div>
  );
}
