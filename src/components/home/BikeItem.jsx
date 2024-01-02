import React from 'react';
import { useDeleteBikeMutation } from '../redux/rtkQuery/bikes';

const BikeItem = ({ data }) => {
  const [deleteBike] = useDeleteBikeMutation();
  return (
    data &&
    data.map(el => {
      return (
        <div key={el.id} style={{ display: 'flex' }}>
          <p>{el.name}</p>
          <p>{el.type}</p>
          <button type="button" onClick={() => deleteBike(el.id)}>
            Del
          </button>
        </div>
      );
    })
  );
};

export default BikeItem;
