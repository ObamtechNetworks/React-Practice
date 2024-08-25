import { Fragment } from "react";

export default function Fruit({ name, price, emoji, soldOut }) {
  return (
    <Fragment>
      <li>
        {emoji} {name} {price} {soldOut ? <b>"| Sold Out"</b> : ""}
      </li>
    </Fragment>
  );
}
