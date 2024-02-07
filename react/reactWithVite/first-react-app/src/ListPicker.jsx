export default function ListPicker({ values }) {
    const randI = Math.floor(Math.random() * values.length);
    const randEl = values[randI];
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random element is: {randEl}</p>
        </div>
    );
}
