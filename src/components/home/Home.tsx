import { useEffect, useRef } from 'react';
import Hero from './Hero';
import Content from './Content';
import Blogs from './Blog';
import Article from './Article';
import Proof from './Proof';
import { ContactUs } from '../Index';
import './home.css'






function Home() {

  const componentRefs = {
    blogs: useRef(null),
    article: useRef(null),
    proof: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      Object.keys(componentRefs).forEach((key) => {
        const element = componentRefs[key].current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top < windowHeight * 0.8) {
            element.classList.add('opacity-100');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [componentRefs]);

  return (
    <>
        <Hero />
        <Content />
      <div ref={componentRefs.blogs} className="opacity-0 opacity-transition">
        <Blogs />
      </div>
      <div ref={componentRefs.article} className="opacity-0 opacity-transition">
        <Article />
      </div>
      <div ref={componentRefs.proof} className="opacity-0 opacity-transition">
        <Proof />
      </div>
      <div ref={componentRefs.contact} className="opacity-0 opacity-transition">
        <ContactUs />
      </div>
    </>
  );
}

export default Home;
