export type CardType = {
  id: number;
  active: boolean;
  types: string;
  priceMonthly: number;
  priceAnnually: number;
  storage: string;
  userAllowe: number;
  speed: number;
};

export type CardTypeProps = {
  onActive: (cardId:number) => void;
  buttonState:boolean;
} & CardType

export type CardListType = {
  cardList: CardType[];
  onActive: (cardId:number) => void;
  buttonState:boolean;
};
