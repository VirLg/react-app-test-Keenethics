import React from 'react';

const BikeItem = ({ data }) => {
  return (
    data &&
    data.map(el => {
      return <div key={el.id}>element</div>;
    })
  );
};

export default BikeItem;
