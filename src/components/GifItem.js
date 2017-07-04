import React from 'react';

const GifItem = (image) => {
  return (
    <li>
      <img alt="Returned gif from API call" src={image.gif.url} />
    </li>
  )
};
export default GifItem;
