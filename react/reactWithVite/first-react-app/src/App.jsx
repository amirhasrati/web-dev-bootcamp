import "./App.css";
import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker";
import Form from "./Form";

const data = [
    { id: 1, item: "eggs", quantity: 12, completed: false },
    { id: 2, item: "milk", quantity: 1, completed: true },
    { id: 3, item: "chicken breasts", quantity: 4, completed: false },
    { id: 4, item: "carrots", quantity: 6, completed: true },
];

function App() {
    return (
        <div>
            {/* <Form /> */}
            <Clicker
                message="You are so ugly."
                buttonText="Click 4 Compliment"
            />
            {/* <ShoppingList items={data} /> */}
            {/* <Slots val1="🍒" val2="🍒" val3="🍒" />
            <Slots val1="🍒" val2="🍌" val3="🍒" />
            <Heading color="magenta" text="Welcome!" fontSize="20px" />
            <Heading color="teal" text="Blah!" fontSize="48px" />

            <DoubleDice />
            <DoubleDice />
            <DoubleDice />

            <ColorList colors={["red", "pink", "purple", "teal"]} />
            <ColorList colors={["olive", "orangered", "slategrey"]} />
            <ListPicker values={[1, 2, 3]} />
            <ListPicker values={["a", "b", "c"]} />
            <Greeter />
            <Greeter />
            <Greeter />
            <Die numSides={20} />
            <Die numSides={6} />
            <Die numSides={10} /> */}
        </div>
    );
}

export default App;
