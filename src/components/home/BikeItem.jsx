import React from 'react';

const BikeItem = ({ data }) => {
  return (
    data &&
    data.map(el => {
      return <div>element</div>;
    })
  );
};

export default BikeItem;
