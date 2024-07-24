import { createContext, useState, useEffect } from 'react';

const ColorContext = createContext();

const ColorProvider = ({ children }) => {
  const [buttonColor, setButtonColor] = useState('orange');
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (buttonColor === 'sky' || buttonColor === 'yellow') {
      document.body.style.backgroundColor = 'rgb(99,105,123)'
      document.body.style.color = "white"
      setMode('dark')
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black"
      setMode('light')

    }
  }, [buttonColor]);

  const handleColorChange = (color) => {
    setButtonColor(color);

  };

  return (
    <ColorContext.Provider value={{ buttonColor, mode,handleColorChange }}>
      {children}
    </ColorContext.Provider>
  );
};

export { ColorProvider, ColorContext };