import React from 'react';
import useFetch from '../hooks/useFetch';
export interface Cert {
  id: string;
  img: string;
  institution: string;
  link: string;
  name: string;
  order: number;
}
const Certifications = () => {
  const { data, loading } = useFetch('certifications');
  if (loading) {
    return <></>;
  }

  const certs = data
    .sort((a: Cert, b: Cert) => a.order - b.order)
    .map(({ link, img, name, institution, id }: Cert) => (
      <div className='flex gap-5 items-center p-4 w-full' key={name}>
        <div>
          <a href={link} target='_blank' rel='noreferrer'>
            <img src={img} className='w-32 md:w-14' alt='' />
          </a>
        </div>
        <div>
          <p className='font-bold'>
            {name} <br />
          </p>
          {institution} <br />
          {id && `Credential ID: ${id}`} <br />
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            View Credential
          </a>
        </div>
      </div>
    ));
  return (
    <>
      <h1 className='text-center text-xl mb-3'>Certifications</h1>
      <div className='card-skills-div'>{certs}</div>
    </>
  );
};

export default Certifications;
