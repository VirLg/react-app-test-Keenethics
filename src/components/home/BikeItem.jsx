import React, { useState } from 'react';
import {
  useDeleteBikeMutation,
  useUpdateBikeMutation,
} from '../redux/rtkQuery/bikes';
import { BikeItemDiv } from './BikeItem.styled';

const BikeItem = ({ data }) => {
  const [deleteBike] = useDeleteBikeMutation();

  const [updateBike] = useUpdateBikeMutation();
  const handleStatusChange = obj => {
    updateBike(obj);
  };
  return (
    data &&
    data.map(el => {
      return (
        <BikeItemDiv key={el.id}>
          <div>
            <div style={{ display: 'flex' }}>
              <p>Name : {el.name}</p>
              <p className="font-title">Type : {el.type}</p>
              <p className="font-title">Color : {el.id}</p>
            </div>
            <p style={{ textAlign: 'justify' }}>ID : {el.id}</p>
            <div style={{ display: 'flex', gap: '18px' }}>
              <p className="font-title">Status : {el.id}</p>
              <select
                value={el.status}
                onChange={e =>
                  handleStatusChange({ value: e.target.value, id: el.id })
                }
              >
                <option value="select">Selected Status</option>
                <option value="available">Available</option>
                <option value="busy">Busy</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
          </div>
          <p className="font-price">Price : {el.price}.00 UAH/hr</p>
          <button type="button" onClick={() => deleteBike(el._id)}>
            Del
          </button>
        </BikeItemDiv>
      );
    })
  );
};

export default BikeItem;
