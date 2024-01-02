import React from 'react';
import BikeItem from './BikeItem';
import { useGetBikesQuery } from '../redux/rtkQuery/bikes';

const MainPage = () => {
  const { data, error, isLoading } = useGetBikesQuery();
  console.log('data', data);
  return (
    <div>
      MainPage
      <BikeItem data={data} />
    </div>
  );
};

export default MainPage;
