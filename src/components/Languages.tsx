import React from 'react';
import useFetch from '../hooks/useFetch';

interface Tecnology {
  img: string;
  name: string;
}

const Languages = () => {
  const { data, loading } = useFetch('languages');
  if (loading) {
    return <></>;
  }

  const tecnologies = data.map(({ img, name }: Tecnology) => (
    <div className='flex items-center' key={img}>
      <img src={img} className='w-10' alt={name} />
      <label>&#160; {name}</label>
    </div>
  ));
  return (
    <>
      <h1 className='text-center text-xl mb-3 '>Programming Languages</h1>
      <div className='card-skills-div'>
        <div className='flex justify-center flex-wrap gap-10'>
          {tecnologies}
        </div>
      </div>
    </>
  );
};

export default Languages;
