const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS: ", this);
        console.log(`${this.name} says MEOOWWWWW`);
    }
}

const meow2 = cat.meow;