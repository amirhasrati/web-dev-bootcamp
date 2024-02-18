import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";
export default function ColorBoxGrid({ colors }) {
    return (
        <div className="ColorBoxGrid">
            {Array.from({ length: 25 }).map(() => (
                <ColorBox colors={colors} />
            ))}
        </div>
    );
}
