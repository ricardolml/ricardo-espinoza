import { CardsPortfolio } from '../components/CardsPortfolio';
import Certifications from '../components/Certifications';
import Database from '../components/Database';
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
            Ricardo Espinoza Vazquez
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
              <h1 className='text-center text-xl mb-3'>Courses</h1>
              <div className='card-skills-div justify-center'>
                <a
                  href='https://www.udemy.com/course/angular-fernando-herrera/'
                  className='a-skip'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./img/angular.png' className='w-10' alt='' />
                  Angular
                </a>
                <a
                  href='https://www.udemy.com/course/master-en-css-responsive-sass-flexbox-grid-y-boostrap-4'
                  className='a-skip'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./img/css.png' className='w-10' alt='' />
                  CSS
                </a>
                <a
                  href='https://www.udemy.com/course/git-github/'
                  className='a-skip'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./img/git.png' className='w-10' alt='' />
                  Git
                </a>
                <a
                  href='https://www.udemy.com/course/react-cero-experto/'
                  className='a-skip'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./img/react.png' className='w-10' alt='' />
                  <label>React</label>
                </a>
                <a
                  href='https://www.udemy.com/course/rxjs-de-cero-hasta-los-detalles/'
                  className='a-skip'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./img/rxjs.png' className='w-10' alt='' />
                  RXJS
                </a>
              </div>
              <h1 className='text-center text-xl mt-10 mb-3'>In progress</h1>
              <div className='card-skills-div justify-center'>
                <a
                  href='https://www.udemy.com/course/vuejs-fh/'
                  className='a-skip'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src='./img/vue.png' className='w-10' alt='' />
                  Vue JS
                </a>
              </div>
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
              <h1 className='text-center text-xl mb-3 '>
                Programming Languages
              </h1>
              <div className='card-skills-div'>
                <div className='flex justify-center flex-wrap gap-10'>
                  <div className='flex items-center'>
                    <img src='./img/css.png' className='w-10' alt='' />
                    <label>CSS</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/dart.png' className='w-8' alt='' />
                    <label>&#160; Dart - Basic</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/js.png' className='w-7' alt='' />
                    <label>&#160; JavaScript</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/php.png' className='w-10' alt='' />
                    <label> &#160; PHP</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/sass.png' className='w-10' alt='' />
                    <label>&#160;SCSS</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/ts.png' className='w-7' alt='' />
                    <label>&#160; TypeScript</label>
                  </div>
                </div>
              </div>
            </div>

            <div className='card-skills order-4 lg:order-5'>
              <h1 className='text-center text-xl mb-3 '>
                Frameworks & Libraries
              </h1>
              <div className='card-skills-div'>
                <div className='flex justify-center items-center flex-wrap gap-10'>
                  <div className='flex items-center'>
                    <img src='./img/angular.png' className='w-9' alt='' />
                    <label>&#160;Angular8+</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/bot.png' className='w-9' alt='' />
                    <label>&#160; Bootstrap</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/tailwind.png' className='w-9' alt='' />
                    <label>&#160; Tailwind css</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/ionic.png' className='w-10' alt='' />
                    <label>&#160; Ionic Angular</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/lumen.png' className='w-10' alt='' />
                    <label> &#160; Lumen</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/flutter.png' className='w-10' alt='' />
                    <label>&#160;Flutter - basic</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/lumen.png' className='w-10' alt='' />
                    <label>&#160; Laravel 4.*</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/react.png' className='w-10' alt='' />
                    <label>&#160; React</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/redux.png' className='w-10' alt='' />
                    <label>&#160; Redux</label>
                  </div>
                  <div className='flex items-center'>
                    <img src='./img/rxjs.png' className='w-10' alt='' />
                    <label>&#160; RXJS</label>
                  </div>
                </div>
              </div>
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
