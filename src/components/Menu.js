import React from "react";
import Img1 from "../assets/img/drees1.png";
import Img2 from "../assets/img/drees.png";
import s from "./Menu.module.css";
import { decrementCount, incrementCount, incrementCountSecond, decrementCountSecond } from "../redux/countReducers";
import { useDispatch, useSelector, connect } from "react-redux";

const Menu = ({ active, setActive }, props) => {
  const dispatch = useDispatch()

  const count = useSelector((state) => {
    const { countReducer } = state;
    return countReducer.count;
  });

  const countSecond = useSelector((state) => {
    const { countReducer } = state;
    return countReducer.countSecond;
  });

  const handleIncrement = () => {
    dispatch(incrementCount())
  }

  const handleDecrement = () => {
    dispatch(decrementCount())
  }

  const handleIncrementSecond = () => {
    dispatch(incrementCountSecond())
  }

  const handleDecrementSecond = () => {
    dispatch(decrementCountSecond())
  }

  return (
    <>
      <div className={active ? s.menu : s.active}>
        <div className={s.blur}></div>
        <div className={s.icon}>
          <div className={s.title}>
            <h4>My Bag</h4>
            <p>, 3 items</p>
          </div>
          <div className={s.items}>
            <div className={s.item}>
              <div className={s.itemTitle}>
                <p className={s.itemSubTitle}>Apollo</p>
                <div className={s.squere} onClick={handleIncrement}>
                  <p>+</p>
                </div>
              </div>
              <div className={s.itemTitle}>
                <p className={s.itemSubTitle}>Running Short</p>
              </div>
              <div className={s.itemTitle}>
                <p className={`${s.itemSubTitle} ${s.prise}`}>$50.00</p>
              </div>
              <div className={s.itemTitle}>
                <p className={`${s.itemSubTitle} ${s.choose}`}>Size:</p>
                <p className={s.itemSubNumber}>{count}</p>
              </div>
              <div className={s.itemTitle}>
                <div className={s.squereSize}>
                  <p>XS</p>
                </div>
                <div className={s.squereSize}>
                  <p>S</p>
                </div>
                <div className={s.squereSize}>
                  <p>M</p>
                </div>
                <div className={s.squereSize}>
                  <p>L</p>
                </div>
              </div>
              <div className={s.itemTitle}>
                <p className={`${s.itemSubTitle} ${s.choose}`}>Color:</p>
              </div>
              <div className={s.itemTitle}>
                <div className={`${s.squereColor} ${s.color1}`}></div>
                <div className={`${s.squereColor} ${s.color2}`}></div>
                <div className={`${s.squereColor} ${s.color3}`}></div>
                <div className={s.squereMinus} onClick={handleDecrement}>
                  <p>-</p>
                </div>
              </div>
            </div>
            <div className={s.item}>
              <img className={s.itemImg} alt="" src={Img1} />
            </div>

            <div className={s.item}>
              <div className={s.itemTitle}>
                <p className={s.itemSubTitle}>Jupiter</p>
                <div className={s.squere} onClick={handleIncrementSecond}>
                  <p>+</p>
                </div>
              </div>
              <div className={s.itemTitle}>
                <p className={s.itemSubTitle}>Wayfarer</p>
              </div>
              <div className={s.itemTitle}>
                <p className={`${s.itemSubTitle} ${s.prise}`}>$75.00</p>
              </div>
              <div className={s.itemTitle}>
                <p className={`${s.itemSubTitle} ${s.choose}`}>Size:</p>
                <p className={s.itemSubNumber}>{countSecond}</p>
              </div>
              <div className={s.itemTitle}>
                <div className={s.squereSize}>
                  <p>S</p>
                </div>
                <div className={s.squereSize}>
                  <p>M</p>
                </div>
              </div>
              <div className={s.itemTitle}>
                <p className={`${s.itemSubTitle} ${s.choose}`}>Color:</p>
              </div>
              <div className={s.itemTitle}>
                <div className={`${s.squereColor} ${s.color4}`}></div>
                <div className={`${s.squereColor} ${s.color5}`}></div>
                <div className={`${s.squereColor} ${s.color6}`}></div>
                <div className={s.squereMinus} onClick={handleDecrementSecond}>
                  <p>-</p>
                </div>
              </div>
            </div>
            <div className={s.item}>
              <img className={s.itemImg} alt="" src={Img2} />
            </div>
          </div>
          <div className={s.buttons}>
            <div className={s.btnTitle}>
              <p>Total</p>
              <p>$200.00</p>
            </div>
            <div className={s.btns}>
              <button className={`${s.btn1} ${s.btn}`}>View Bag</button>
              <button className={`${s.btn2} ${s.btn}`}>Check out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => { 
//   return {
//     count: state.count
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrementCount: () => dispatch(incrementCount1()),
//     onDecrementCount: () => dispatch(decrementCount1()),
//   };
// }

export default Menu;
