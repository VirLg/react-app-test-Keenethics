import React from 'react';
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
        <BikeItemDiv key={el._id}>
          <div>
            <div style={{ display: 'flex' }}>
              <p>Name : {el.name}</p>
              <p className="font-title">Type : {el.type}</p>
              <p className="font-title">Color : {el.id}</p>
            </div>
            <p style={{ textAlign: 'justify' }}>ID : {el.id}</p>
            <div style={{ display: 'flex', gap: '18px' }}>
              <p className="font-title">Status : </p>
              <select
                value={el.stat}
                onChange={e =>
                  handleStatusChange({ value: e.target.value, id: el._id })
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
            X
          </button>
        </BikeItemDiv>
      );
    })
  );
};

export default BikeItem;
