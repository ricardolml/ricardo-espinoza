import React from 'react';
import useFetch from '../hooks/useFetch';

interface Course {
  fished: number;
  img: string;
  link: string;
  name: string;
}

const Courses = () => {
  const { data, loading } = useFetch('courses');
  if (loading) {
    return <></>;
  }

  const link = ({ link, name, img }: Course) => (
    <a
      href={link}
      className='a-skip'
      target='_blank'
      rel='noreferrer'
      key={img}
    >
      <img src={img} className='w-10' alt={name} />
      {name}
    </a>
  );

  const coursesFinished = data
    .filter((course: Course) => course.fished === 1)
    .map((course: Course) => link(course));

  const coursesPending = data
    .filter((course: Course) => course.fished === 0)
    .map((course: Course) => link(course));

  return (
    <>
      <h1 className='text-center text-xl mb-3'>Courses</h1>
      <div className='card-skills-div justify-center'>{coursesFinished}</div>
      <h1 className='text-center text-xl mt-10 mb-3'>In progress</h1>
      <div className='card-skills-div justify-center'>{coursesPending}</div>
    </>
  );
};

export default Courses;
