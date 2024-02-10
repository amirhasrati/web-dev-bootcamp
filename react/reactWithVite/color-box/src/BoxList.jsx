import ColorBox from "./ColorBox";
import "./BoxList.css";

export default function BoxList({ colors }) {
    const numBoxes = 25;
    const colorBoxes = [...Array(numBoxes)].map((_, i) => (
        <ColorBox key={i} colors={colors} />
    ));

    return <div className="BoxList">{colorBoxes}</div>;
}
