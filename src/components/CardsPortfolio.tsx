import useFetch from '../hooks/useFetch';
interface Proyect {
  descript: string;
  order: number;
  title: string;
  url_preview: string;
  url_repo: string;
  img?: string;
}

const CardsPortfolio = () => {
  const { data, loading } = useFetch('proyects');
  if (loading) {
    return <></>;
  }
  const cards = data.map((proyect: Proyect) => (
    <div
      className='border-4 border-gray-600 rounded-lg shadow'
      key={proyect.url_repo}
    >
      <a href={proyect.url_preview} target='_blank' rel='noreferrer'>
        <img src={proyect.img} alt={proyect.title} className='rounded-lg' />
      </a>
      <div className='mx-5 my-2'>
        <h1 className='font-bold text-lg mb-3 text-blue-400'>
          {proyect.title}
        </h1>
        <p className='font-sans text-justify text-sm'>
          {proyect.descript}
          <br />
          <a
            href={proyect.url_repo}
            target='_blank'
            rel='noreferrer'
            className='text-blue-500'
          >
            More details in the repository.
          </a>
        </p>
        <div className='flex flex-row-reverse'>
          <a
            href={proyect.url_preview}
            target='_blank'
            rel='noreferrer'
            className='px-2 py-1 bg-blue-500 rounded-lg w-20 text-center mt-5 text-xs'
          >
            View
          </a>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <h1 className='text-center text-xl mb-3'>Portfolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>{cards}</div>
    </>
  );
};
export default CardsPortfolio;
