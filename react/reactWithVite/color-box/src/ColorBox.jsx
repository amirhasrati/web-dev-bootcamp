import "./ColorBox.css";
import { useState } from "react";

export default function ColorBox({ colors }) {
    const getRandomColor = () => {
        const randI = Math.floor(Math.random() * colors.length);
        return colors[randI];
    };

    const [color, setColor] = useState(getRandomColor());

    const changeColor = () => {
        setColor(getRandomColor());
    };

    return (
        <div
            style={{ backgroundColor: color }}
            className="ColorBox"
            onClick={changeColor}></div>
    );
}
