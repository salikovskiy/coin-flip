import React from "react";
import Coin from "./components/Coin";
import { Canvas } from "react-three-fiber";
import Coin3d from "./components/3dCoin";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Coin3d />
      </Canvas>
    </>
  );
}

export default App;
