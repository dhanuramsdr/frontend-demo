// Modelbutton.tsx
import Model from "./Model";
import { useState } from "react";

interface Modelinterface {
  content: React.ReactNode; // Changed from string to React.ReactNode
  button: string;
}

const Modelbutton = ({ content, button }: Modelinterface) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <>
      <button onClick={handleChange}>{button}</button>
      <Model isOpen={open} onClose={handleChange}>
        {content}
      </Model>
    </>
  );
};

export default Modelbutton;
