import React from 'react';
import PropTypes from 'prop-types';
import { Image, Grid, Link } from './FavLlist.style';

const FavList = ({ favs = [] }) => (
  <Grid>
    {favs.map(fav => (
      <Link key={fav.id} to={`/detail/${fav.id}`}>
        <Image src={fav.src} alt={fav.src} />
      </Link>
    ))}
  </Grid>
);

FavList.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string,
    })
  ),
};

export default FavList;
