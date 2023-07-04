import React from 'react';
import NavigationBar from '../../component/navbar';
import natalia from './aset/natalia.jpg';
import '../landing page/landingPage.css';
import About from '../about/about';
import Gallery from '../gallery/gallery';

const LandingPage = () => {
  return (
    <>
      <div className="">
        <NavigationBar />
      </div>

      <section className="jumbotron text-center pt-3">
        <img
          src={natalia}
          alt="natalia"
          className="rounded-circle img-thumbnail"
          width="200"
        />
        <h1 className="display-4">Maria Natalia</h1>
        <p className="lead">S1 Sistem Informasi | FrontEnd Developer</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffff"
            fill-opacity="1"
            d="M0,64L48,90.7C96,117,192,171,288,170.7C384,171,480,117,576,128C672,139,768,213,864,218.7C960,224,1056,160,1152,112C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section>
        <About />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e2edff"
            fill-opacity="1"
            d="M0,224L30,240C60,256,120,288,180,256C240,224,300,128,360,106.7C420,85,480,139,540,165.3C600,192,660,192,720,186.7C780,181,840,171,900,144C960,117,1020,75,1080,64C1140,53,1200,75,1260,101.3C1320,128,1380,160,1410,176L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section className='gallery'>
        <Gallery />
      </section>
    </>
  );
};

export default LandingPage;
