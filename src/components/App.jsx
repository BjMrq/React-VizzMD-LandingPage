import React, { Fragment, useRef, useEffect } from 'react';
import { useStore } from '../store/useStore';

import OpacityParallax from './hoc/OpacityParallax';

import NavBtns from './NavBtns';
import NavBar from './navbar/NavBar';
import Header from './header/Header';
import Features from './features/Features';
import CardsContainer from './cards/CardsContainer';
import Ongoing from './ongoing/Ongoing';
import ParalaxTitle from './ParalaxTitle';
import Footer from './footer/Footer';

const app = () => {
  const [state, dispatch] = useStore(false);

  const cardsRef = useRef();
  const featuresRef = useRef();
  const ongoingRef = useRef();

  const scrollTo = (element) => {
    switch (element) {
      case "top":
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        break;
      case "cards":
        window.scrollTo({ left: 0, top: state.refsOffsets.cards - 30, behavior: 'smooth' });
        break;
      case "features":
        window.scrollTo({ left: 0, top: state.refsOffsets.features - 30, behavior: 'smooth' });
        break;
      case "ongoing":
        window.scrollTo({ left: 0, top: state.refsOffsets.ongoing - 30, behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const adjustOffsets = () => {
    const offsetsToSet =
    {
      top: 0,
      cards: cardsRef.current.offsetTop,
      features: featuresRef.current.offsetTop,
      ongoing: ongoingRef.current.offsetTop
    };
    dispatch("SET_REFS", offsetsToSet);
  };

  useEffect(() => {
    const updateSize = () => {
      adjustOffsets();
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <Fragment>
      <NavBtns scrollTo={scrollTo} />
      <NavBar scrollTo={scrollTo} />
      <Header />
      <OpacityParallax nextId="#features">
        <div className="normalizedBackground" id="cardsDiv" ref={cardsRef}>
          <ParalaxTitle title="Les enjeux des soins de santé aujourd'hui" />
          <CardsContainer scrollTo={scrollTo} />
        </div>
      </OpacityParallax>
      <OpacityParallax nextId="#ongoing">
        <div className="normalizedBackgroundWhite" ref={featuresRef}>
          <ParalaxTitle title="Passez du papier au numérique" idElement="features" />
          <Features />
        </div>
      </OpacityParallax>
      <div className="normalizedBackgroundWhite" ref={ongoingRef}>
        <ParalaxTitle title="Origine et avancement du projet" idElement="ongoing" />
        <Ongoing />
      </div>
      <Footer />
    </Fragment>
  );
};

export default app;
