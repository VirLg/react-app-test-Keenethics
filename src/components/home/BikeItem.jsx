import React, { useState } from 'react';
import {
  useDeleteBikeMutation,
  useUpdateBikeMutation,
} from '../redux/rtkQuery/bikes';
import { BikeItemDiv } from './BikeItem.styled';

const BikeItem = ({ data }) => {
  const [deleteBike] = useDeleteBikeMutation();
  const [selectedFruit, setSelectedFruit] = useState('orange');
  console.log('first', selectedFruit);
  const [updateBike] = useUpdateBikeMutation();
  const handleStatusChange = obj => {
    updateBike(obj);
    console.log('obj', obj);
    setSelectedFruit(obj.value);
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
            <p>ID : {el.id}</p>
            <select
              value={el.status}
              onChange={e =>
                handleStatusChange({ value: e.target.value, id: el.id })
              }
            >
              <option value="apple">Apple</option>
              <option value="banana">Banana</option>
              <option value="orange">Orange</option>
            </select>
            <p className="font-title">Status : {el.id}</p>
          </div>
          <p className="font-price">Price : {el.id} UAH/hr</p>
          <button type="button" onClick={() => deleteBike(el.id)}>
            Del
          </button>
        </BikeItemDiv>
      );
    })
  );
};

export default BikeItem;
