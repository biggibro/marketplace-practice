import React from 'react';

import './Header.css';

export const Header = () => {
  return (
    <>
      <div className="containerHeader">
        <div className="logoHeader">
          <p>TechStore</p>
        </div>

        <div className="buttonsHeader">
          <div className="buttonsHeaderCategory">
            <button className="buttonHeader">TV</button>
            <button className="buttonHeader">Phone</button>
            <button className="buttonHeader">Laptop</button>
          </div>

          <div className="buttonsHeaderUser">
            <button className="buttonHeader">Корзина</button>
            <button className="buttonHeader">ЛК</button>
          </div>
        </div>
      </div>
    </>
  );
};
