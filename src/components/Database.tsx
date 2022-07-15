import React from 'react';
import useFetch from '../hooks/useFetch';

interface Data {
  img: string;
  name: string;
}

const Database = () => {
  const { data, loading } = useFetch('database');
  if (loading) {
    return <></>;
  }
  const database = data.map(({ img, name }: Data) => (
    <div className='flex items-center' key={img}>
      <img src={img} className='w-10' alt={name} />
      <label>{name}</label>
    </div>
  ));
  return (
    <>
      <h1 className='text-center text-xl mb-3 '>Database</h1>
      <div className='card-skills-div'>
        <div className='flex justify-center flex-wrap gap-10'>{database}</div>
      </div>
    </>
  );
};

export default Database;
