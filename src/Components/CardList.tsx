import { CardListType } from "../type/type";
import Card from "./Card";

const CardList = ({ cardList,onActive,buttonState }: CardListType) => {
  return (
    <div className="cardList">
      {cardList.map((e) => {
        return (
          <Card
            id={e.id}
            active={e.active}
            priceAnnually={e.priceAnnually}
            priceMonthly={e.priceMonthly}
            speed={e.speed}
            storage={e.storage}
            types={e.types}
            userAllowe={e.userAllowe}
            onActive={onActive}
            buttonState={buttonState}
          />
        );
      })}
    </div>
  );
};

export default CardList;
