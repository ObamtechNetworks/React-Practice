import Fruit from "./Fruit";

export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana", "Orane", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldOut: true },
    { name: "Mango", price: 7, emoji: "🥭", soldOut: false },
    { name: "Banana", price: 2, emoji: "🍌", soldOut: true },
    { name: "Orange", price: 5, emoji: "🟠", soldOut: false },
    { name: "Pineapple", price: 8, emoji: "🍍", soldOut: true },
  ];
  return (
    <div>
      <ul>
        {/* for each fruit object in the map, we are returning a child component
        which return the fruit's object properties per fruit}*/}
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}
