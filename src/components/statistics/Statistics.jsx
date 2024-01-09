import React, { useEffect, useState } from 'react';
import { useGetBikesQuery } from '../redux/rtkQuery/bikes';

const Statistics = () => {
  const { data, error, isLoading } = useGetBikesQuery();
  const [statisik, setStatistik] = useState({});
  const statistic = value => {
    const available =
      value && value.filter(el => el.status === 'available').length;
    const busy = value && value.filter(el => el.status === 'busy').length;
    const unavailable =
      value && value.filter(el => el.status === 'unavailable').length;

    const stat = { available, busy, unavailable };
    setStatistik(stat);
    return stat;

    // const Booked Bikes: 0
    // const Average bike cost: 0.00 UAH/hr.
  };

  const sum = data.reduce((a, b) => a + b.price, 0);

  useEffect(() => {
    statistic(data);
  }, [data]);
  return (
    <div>
      <p>Total Bikes : {data && data.length}</p>
      <p>Available : {statisik.available}</p>
      <p>Busy : {statisik.busy}</p>
      <p>Unavailable : {statisik.unavailable}</p>
      <p>
        Average bike cost : {(sum / Number(data && data.length)).toFixed(2)}
      </p>
    </div>
  );
};

export default Statistics;
