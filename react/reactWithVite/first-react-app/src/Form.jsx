function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log("Submitted The Form");
}
export default function Form() {
    return (
        <form onSubmit={handleFormSubmit} action="">
            <button>Submit</button>
        </form>
    );
}
