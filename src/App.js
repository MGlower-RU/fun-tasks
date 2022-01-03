/* eslint-disable no-unused-vars */
import AnimBorder from './components/AnimBorder';
import CardHovering from './components/CardHovering';
import ClipPath from './components/ClipPath';
import ContextMenu from './components/ContextMenu';
import MapPolyfill from './components/MapPolyfill';
import Rain from './components/Rain';
import ResizableBlock from './components/ResizableBlock';
import WritingText from './components/WritingText';
import InfiniteScrolling from './components/InfiniteScrolling';
import OwnLazy from './components/OwnLazy';
import HoverBorder from './components/HoverBorder';
import MovingImage from './components/MovingImage';

import './styles/App.scss';

import CanyonLake from './images/card_hovering.jpg'
import FlippingCard from './components/FlippingCard';

export default function App() {
  return (
    <div className="App">
      {/* ***** _UNCOMMENT TO USE_ ***** */}

      {/* <MapPolyfill /> */}
      {/* <ClipPath /> */}
      {/* <AnimBorder /> */}
      {/* <Rain /> */}
      {/* <CardHovering /> */}
      {/* <Rain particlesNumber={100} /> */}
      {/* <WritingText text={'Hello world'} /> */}
      {/* <ResizableBlock /> */}
      {/* <ContextMenu /> */}
      {/* <InfiniteScrolling /> */}
      {/* <OwnLazy /> */}
      {/* <HoverBorder /> */}
      {/* <MovingImage src={CanyonLake} /> */}
      <FlippingCard />
    </div>
  );
}