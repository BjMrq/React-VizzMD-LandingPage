import React from 'react';
import Plx from 'react-plx';

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: "self",
    duration: 600,
    easing: "easeIn",
    properties: [
      {
        startValue: 0.5,
        endValue: 1,
        property: 'scale',
      },
    ],
  },
];

const ParalaxTitle = (props) => {
  return (
    <Plx
      className="parallaxTitle"
      parallaxData={parallaxData}
    >
      <h2 className="sectionTitle">{props.title}</h2>
    </Plx>
  );
};

export default ParalaxTitle;
