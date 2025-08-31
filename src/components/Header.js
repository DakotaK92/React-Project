import { useState, useEffect } from "react";

const Header = () => {
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
    <div className="header">
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5rem 30rem",
          alignItems: "center",
        }}
      >
        <li>
          <h1 style={{ fontWeight: 700 }}>Calc</h1>
        </li>
        <li>
          <div className="theme-slider" onClick={handleClick} style={{ cursor: "pointer" }}>
            <p>Color Change</p>
            <div className="slider" id="themeSlider">
              <div
                className={`indicator pos-${themeIndex}`}
                id="indicator"
              ></div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
