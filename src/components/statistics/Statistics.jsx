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

  const sum = data && data.reduce((a, b) => a + b.price, 0);

  useEffect(() => {
    statistic(data);
  }, [data]);
  return (
    <div>
      <p className="statistic-title">Statistic</p>
      <p className="statistic-text">
        Total Bikes :{' '}
        <span className="span-statistic">{data && data.length}</span>
      </p>
      <p className="statistic-text">
        Available : <span className="span-statistic">{statisik.available}</span>
      </p>
      <p className="statistic-text">
        Busy : <span className="span-statistic">{statisik.busy}</span>
      </p>
      <p className="statistic-text">
        Average bike cost :{' '}
        <span className="span-statistic">
          {(sum / Number(data && data.length)).toFixed(2)}
        </span>
      </p>
    </div>
  );
};

export default Statistics;
