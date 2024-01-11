import React from 'react';
import { useGetBikesQuery } from '../redux/rtkQuery/bikes';

const Statistics = () => {
  const { data, error, isLoading } = useGetBikesQuery();

  const sum = data && data.reduce((a, b) => a + b.price, 0);

  let busy = 0;
  let available = 0;
  data &&
    data.map(el => {
      if (el.stat === 'busy') busy += 1;
      else if (el.stat === 'available') available += 1;
    });

  return (
    <div>
      <p className="statistic-title">Statistic</p>
      <p className="statistic-text">
        Total Bikes :{' '}
        <span className="span-statistic">{data && data.length}</span>
      </p>
      <p className="statistic-text">
        Available : <span className="span-statistic">{available}</span>
      </p>
      <p className="statistic-text">
        Busy : <span className="span-statistic">{busy}</span>
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
