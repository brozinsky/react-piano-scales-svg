import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ThemeContext = ({ children }) => {
  const [colorPrimary, setColorPrimary] = useState("#10b981");
  const [colorPrimaryDark, setColorPrimaryDark] = useState("#047857");

  return (
    <Context.Provider
      value={{
        colorPrimary,
        setColorPrimary,
        colorPrimaryDark,
        setColorPrimaryDark,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useThemeContext = () => useContext(Context);
