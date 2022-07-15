import {
  CardsPortfolio,
  Certifications,
  Courses,
  Database,
  Languages,
  Libraries,
} from '../components';

export const Home = () => {
  return (
    <div className='font-rale'>
      <div className='flex flex-wrap lg:flex-nowrap bg-gradient-to-t from-gray-800 to-slate-800 '>
        <div className='px-10 container mx-auto mt-10'>
          <div className='flex justify-center'>
            <img
              src='./img/prof.jpg'
              alt=''
              className='w-52 h-52 rounded-full'
            />
          </div>
          <h1 className='text-3xl font-bold text-center mt-3'>
            Ricardo Espinoza Vázquez
          </h1>
          <div className='flex justify-center contenedor'>
            <h2 className='text-2xl text-gray-400 font-bold mt-2 text-center'>
              FullStack Developer...
              <span className='bg-slate-800'>&#160; </span>
            </h2>
          </div>

          <div className='flex justify-center gap-6 my-4'>
            <a
              href='https://github.com/ricardolml'
              target='_blank'
              rel='noreferrer'
            >
              <img src='./img/gith.png' alt='' className='w-7 h-7' />
            </a>
            <a
              href='https://www.linkedin.com/in/ricardoevz'
              target='_blank'
              rel='noreferrer'
            >
              <img src='./img/linkedin.png' alt='' className='w-7 h-7' />
            </a>
          </div>

          <div className='flex justify-center'>
            <div className='w-full lg:w-6/12'>
              <h3 className='text-base'>
                I'm a developer Full Stack. I consider myself a self-taught
                person who likes to learn new things all the time. I have spent
                the last six years applying my knowledge and skills in
                information technology.
              </h3>
            </div>
          </div>

          <div className='flex justify-center'>
            <div className='rounded-lg p-5 text-center'>
              <h1 className='text-xl'>Spanish Native</h1>
              <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 mt-2'>
                <div
                  style={{ width: `100%` }}
                  className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
                ></div>
              </div>
            </div>
            <div className='rounded-lg p-5 text-center'>
              <h1 className='text-xl'>English A2</h1>
              <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 mt-2'>
                <div
                  style={{ width: `40%` }}
                  className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
                ></div>
              </div>
            </div>
            <div className='rounded-lg p-5 text-center'>
              <h1 className='text-xl'>French A1</h1>
              <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200 mt-2'>
                <div
                  style={{ width: `20%` }}
                  className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
                ></div>
              </div>
            </div>
          </div>

          {/* <h3 className="text-center text-2xl my-5">Skills</h3> */}
          {/* flex justify-center items-start flex-wrap lg:flex-nowrap */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
            <div className='card-skills order-1 lg:order-2'>
              <Courses />
            </div>
            <div className='card-skills order-2 lg:order-3'>
              <Certifications />
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-1 row-span-5 order-6 lg:order-1'>
              <div className='card-skills'>
                <CardsPortfolio />
              </div>
            </div>

            <div className='card-skills order-3 lg:order-4'>
              <Languages />
            </div>

            <div className='card-skills order-4 lg:order-5'>
              <Libraries />
            </div>

            <div className='card-skills order-5 lg:order-6'>
              <Database />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
