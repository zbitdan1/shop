import React from "react";
import s from "./MenuCurrency.module.css";

const MenuCurrency = ({ activeCurrency }) => {
  return (
    <div className={activeCurrency ? s.active : s.menu}>
      <div className={s.icon}>
        <div className={s.title}>
            <p>$ USD</p>
            <p>€ EUR</p>
            <p>¥ JPY</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCurrency;
