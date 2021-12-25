import AnimBorder from './components/AnimBorder';
import CardHovering from './components/CardHovering';
import ClipPath from './components/ClipPath';
import ContextMenu from './components/ContextMenu';
import MapPolyfill from './components/MapPolyfill';
import Rain from './components/Rain';
import ResizableBlock from './components/ResizableBlock';
import WritingText from './components/WritingText';
import InfiniteScrolling from './components/InfiniteScrolling';

import './styles/App.scss';

export default function App() {
  return (
    <div className="App">
      {/* <MapPolyfill /> */}
      {/* <ClipPath /> */}
      {/* <AnimBorder /> */}
      {/* <Rain /> */}
      {/* <CardHovering /> */}
      {/* <Rain particlesNumber={100} /> */}
      {/* {<WritingText text={'Hello world'} />} */}
      {/* {<ResizableBlock />} */}
      {/* <ContextMenu /> */}
      <InfiniteScrolling />
    </div>
  );
}