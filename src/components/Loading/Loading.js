import React from 'react';
import 'react-spinner-animated/dist/index.css'
import { BarLoader, DoubleBubble, DoubleOrbit, SlidingPebbles } from 'react-spinner-animated';


const Loading = () => {
  return (
    <DoubleBubble bgColor={"#fff"}
      center={true} width={""} height={""} />
  );
};

export default Loading;