import AnimBorder from './components/AnimBorder';
import CardHovering from './components/CardHovering';
import ClipPath from './components/ClipPath';
import MapPolyfill from './components/MapPolyfill';
import Rain from './components/Rain';
import WritingText from './components/WritingText';
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
      {<WritingText text={'Hello world'} />}
    </div>
  );
}