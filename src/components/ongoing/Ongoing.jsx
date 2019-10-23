import React, { Fragment } from 'react';
import Plx from 'react-plx';

import Centech from './Centech';
import Mvp from './Mvp';

const parallaxDataCentech = [
  {
    start: "self",
    duration: 550,
    easing: "linear",
    properties: [
      {
        startValue: -1400,
        endValue: 0,
        property: 'translateX',
      },
    ],
  },
];

const parallaxDataMvp = [
  {
    start: "self",
    duration: 250,
    easing: "linear",
    properties: [
      {
        startValue: 1400,
        endValue: 0,
        property: 'translateX',
      },
    ],
  },
];

const ongoing = (props) => {
  return (
    <Fragment>
      <p className="cardText ongoingIntro" id={props.idElement}><strong className="blueTitle">> Un besoin réel:</strong> En parlant avec plusieurs médecins en réadaptation de différents départements, ils nous ont fait part de manière récurrente d’un même problème. Ils avaient besoin d'un moyen de visualiser facilement toutes les données dont ils disposaient sur les traitements de leurs patients afin de les aider à mieux suivre leur  évolution et aider avec la “mesure d’outcome”.
      </p>
      <Plx
        className="parallaxTitle"
        parallaxData={parallaxDataCentech}
      >
        <Centech />
      </Plx>
      <Plx
        className="parallaxTitle"
        parallaxData={parallaxDataMvp}
      >
        <Mvp />
      </Plx>
    </Fragment>
  );
};
export default ongoing;
