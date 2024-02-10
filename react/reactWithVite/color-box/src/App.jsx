import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ColorBox from "./ColorBox";
import BoxList from "./BoxList";
import ColorBoxGrid from "./ColorBoxGrid";

function App() {
    const [count, setCount] = useState(0);

    const colors = ["#3a86ff", "#8338ec", "#ff006e", "#fb5607", "#ffbe0b"];

    return (
        <>
            <ColorBoxGrid colors={colors} />
        </>
    );
}

export default App;
