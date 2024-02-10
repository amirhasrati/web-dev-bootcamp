import Property from "./Property";

function PropertyList({ properties }) {
    return (
        <ul style={{ display: "flex", listStyleType: "none" }}>
            {properties.map((p) => (
                <Property key={p.id} data={p} />
            ))}
        </ul>
    );
}

export default PropertyList;
