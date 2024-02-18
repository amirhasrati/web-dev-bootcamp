import LuckyN from "./LuckyN";
import { sum } from "./utils";
import Box from "./Box";
import BoxGrid from "./BoxGrid";

function lessThan4(dice) {
    return sum(dice) < 4;
}

function allSameValue(dice) {
    dice.every((v) => v === dice[0]);
}

import "./App.css";

function App() {
    return (
        <>
            <BoxGrid />
            {/* <LuckyN winCheck={lessThan4} title="Roll less than 4" />
            <LuckyN
                winCheck={allSameValue}
                numDice={3}
                title="Roll the same number"
            /> */}
        </>
    );
}

export default App;
