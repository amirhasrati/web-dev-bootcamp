export default function Greeter({ person = "Bill", from = "Amir" }) {
    return (
        <>
            <h1>Hi there, {person}.</h1>
            <h2>- {from}</h2>
        </>
    );
}
