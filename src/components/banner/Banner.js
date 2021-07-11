import React from 'react';


const Banner = ({ src, offset }) => (
  <div className="banner" style={{ backgroundImage: `url(${src})`, backgroundPosition: `0% ${offset}%` }} />
);

export default Banner
