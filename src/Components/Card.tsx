import { CardTypeProps } from "../type/type";

const Card = ({
  id,
  types,
  priceMonthly,
  priceAnnually,
  storage,
  userAllowe,
  speed,
  active,
  onActive,
  buttonState,
}: CardTypeProps) => {
  let price = priceMonthly;

  if (buttonState) {
    price = priceMonthly;
  } else {
    price = priceAnnually;
  }

  let classActive = "card";

  if (active) {
    classActive = "active";
  } else {
    classActive = "card";
  }
  return (
    <div
      className={classActive}
      onMouseLeave={() => {
        onActive(id);
      }}
      onMouseEnter={() => {
        onActive(id);
      }}
    >
      <h4>{types}</h4>
      <span className="price">
        <span>$</span>
        <span>{price}</span>
      </span>
      <ul>
        <span>{storage} Storage</span>
        <span>{userAllowe} Users Allowed</span>
        <span>Send up to {speed} GB</span>
      </ul>
      <button>learn more</button>
    </div>
  );
};

export default Card;
