import React from 'react';
import useFetch from '../hooks/useFetch';

interface Library {
  img: string;
  name: string;
}

const Libraries = () => {
  const { data, loading } = useFetch('libraries');
  if (loading) {
    return <></>;
  }

  const libraries = data.map(({ img, name }: Library, index) => (
    <div className='flex items-center' key={name + index}>
      <img src={img} className='w-9' alt={name} />
      <label>&#160;{name}</label>
    </div>
  ));

  return (
    <>
      <h1 className='text-center text-xl mb-3 '>Frameworks & Libraries</h1>
      <div className='card-skills-div'>
        <div className='flex justify-center items-center flex-wrap gap-10'>
          {libraries}
        </div>
      </div>
    </>
  );
};

export default Libraries;
