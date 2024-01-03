import React from 'react';
import { useGetBikesQuery } from '../redux/rtkQuery/bikes';

const Statistics = () => {
  const { data, error, isLoading } = useGetBikesQuery();

  return (
    <div>
      <p>Total Bikes : {data && data.length}</p>
    </div>
  );
};

export default Statistics;
