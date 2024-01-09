import React from 'react';
import BikeItem from './BikeItem';
import { useGetBikesQuery } from '../redux/rtkQuery/bikes';

const MainPage = () => {
  const { data, error, isLoading } = useGetBikesQuery();

  return (
    <div
      style={{
        paddingRight: '8px',
        paddingLeft: '12px',
        borderRight: '1px solid rgba(196, 196, 196, 1)',
      }}
    >
      <BikeItem data={data} />
    </div>
  );
};

export default MainPage;
