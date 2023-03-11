import logo from "./logo.svg";
import "./App.css";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";
import OnScroll from "./components/AnimationOnScroll/OnScroll";

function App() {
  return (
    <>
      <OnScroll />
    </>
    // <div
    //   style={{
    //     margin: "30px 0px 100px 30px",
    //     "& > div": {
    //       marginBottom: "30px",
    //     },
    //   }}
    // >
    //  <Box1 />
    // <Box2 />
    // <Box3 />
    // <Box4 />
    // </div>
  );
}

export default App;
