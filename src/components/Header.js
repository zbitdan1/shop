import React, { useState } from "react";
import s from "./Header.module.css";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import EuroIcon from "@mui/icons-material/Euro";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu from "./Menu";
import MenuCurrency from "./MenuCurrency";

const Header = (props) => {
  const [menuActive, setMenuActive] = useState(true);
  const [currencyActive, setCurrencyActive] = useState(false)

  return (
    <>
      <div className={s.header}>
        <div className={s.category}>
          <p>Women</p>
          <p>Men</p>
          <p>Kids</p>
        </div>
        <div className={s.shop}>
          <ShoppingBagIcon />
        </div>
        <div className={s.others}>
          <EuroIcon />
          <div className={s.arrow} onClick={() => setCurrencyActive(!currencyActive)}></div>
          <ShoppingCartIcon className={s.shoppingCart} onClick={() => setMenuActive(!menuActive)}/>
        </div>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} />
      <MenuCurrency activeCurrency={currencyActive} setCurrencyActive={setCurrencyActive}/>
    </>
  );
};

export default Header;
