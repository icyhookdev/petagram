import React from 'react';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { StyledNav, Link } from './Navbar.style';

const iconsSize = '32px';

const Navbar = () => (
  <StyledNav>
    <Link to="/">
      <MdHome size={iconsSize} />
    </Link>
    <Link to="/favs">
      <MdFavoriteBorder size={iconsSize} />
    </Link>
    <Link to="/user">
      <MdPersonOutline size={iconsSize} />
    </Link>
  </StyledNav>
);

export default Navbar;
