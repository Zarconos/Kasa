import React, { useState } from 'react';
import '../style/style.css';

const Toggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`toggle ${isOpen ? 'open' : ''}`} onClick={toggle}>
      <h3>{title}</h3>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Toggle;