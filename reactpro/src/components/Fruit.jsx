export default function Fruit({ name, price, emoji }) {
  return (
    <li>
      {name} ${price} {emoji}
    </li>
  );
}
