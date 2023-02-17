import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavAside from './NavAside';
import './NavRightWrap.scss';

const NavRightWrap = ({ navrighticon }) => {
  const {
    cartIcon,
    searchIcon,
    searchAlt,
    castAlt,
    moreInfoIcon,
    moreIncoAlt,
  } = navrighticon;

  const [asideOpen, setAsideOpen] = useState(false);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate(`/login`);
  };

  const goToSearch = () => {
    navigate(`/search`);
  };

  const goToCart = () => {
    navigate(`/cart`);
  };

  const showMoreInfo = () => {
    setAsideOpen(!asideOpen);
  };

  return (
    <li className="navrights">
      <button onClick={goToSearch} className="navSearchIcon">
        <img className="navSearchIcon" src={searchIcon} alt={searchAlt} />
      </button>
      <img
        onClick={goToCart}
        className="navCartIcon"
        src={cartIcon}
        alt={castAlt}
      />
      <div onClick={goToLogin} className="navLogIn">
        <span className="navLogInFont">로그인</span>
      </div>
      <button onClick={showMoreInfo} className="moreInfoBtn">
        <img className="moreInfoIcon" src={moreInfoIcon} alt={moreIncoAlt} />
      </button>
      {asideOpen && <NavAside showMoreInfo={showMoreInfo} />}
    </li>
  );
};

export default NavRightWrap;
