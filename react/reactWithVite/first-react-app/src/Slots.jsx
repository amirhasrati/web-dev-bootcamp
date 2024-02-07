export default function Slots({ val1, val2, val3 }) {
    const vals = [val1, val2, val3];
    const valuesMatch = vals.every((val, i) => val == vals[0]);

    return (
        <div>
            <h1>{vals}</h1>
            {valuesMatch ? (
                <>
                    <h2 style={{ color: "green" }}>You win!</h2>
                    <h3>Congrats!!!</h3>
                </>
            ) : (
                <h2 style={{ color: "red" }}>You lose</h2>
            )}
        </div>
    );
}
