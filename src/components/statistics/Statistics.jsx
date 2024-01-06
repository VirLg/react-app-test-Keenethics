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
  // useEffect(() => {
  //   statistic(data);
  // }, [data]);
  return (
    <div>
      <p>Total Bikes : {data && data.length}</p>
      <p>{statisik.available}</p>
    </div>
  );
};

export default Statistics;
