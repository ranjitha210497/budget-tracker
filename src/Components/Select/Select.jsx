import { useEffect, useState } from "react";
import { MdArrowDropDownCircle } from "react-icons/md";

import "./Select.scss";

const Select = ({ options = [], onChange = () => {} }) => {
  const [value, setValue] = useState(options[0] || "");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const handleClick = (option) => {
    setValue(option);
    setMenuOpen(false);
  };
  return (
    <div className="select">
      <div
        className="toggle-bar"
        onClick={() => setMenuOpen((prevMenuOpen) => !prevMenuOpen)}
      >
        <h4>{value}</h4>
        <MdArrowDropDownCircle size={20} />
      </div>
      {menuOpen && (
        <ol className="options-list">
          {options.map((option) => (
            <li onClick={() => handleClick(option)}>{option}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Select;
