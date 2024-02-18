import "./ColorBox.css";
import { useState } from "react";

const getRandomColor = (colors) => {
    const randI = Math.floor(Math.random() * colors.length);
    return colors[randI];
};

export default function ColorBox({ colors }) {
    const [color, setColor] = useState(getRandomColor(colors));

    const changeColor = () => {
        setColor(getRandomColor(colors));
    };

    return (
        <div
            style={{ backgroundColor: color }}
            className="ColorBox"
            onClick={changeColor}></div>
    );
}
