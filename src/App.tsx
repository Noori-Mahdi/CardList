import { useState } from "react";
import Button from "./Components/Button";
import CardList from "./Components/CardList";
import Title from "./Components/Title";
import "bootstrap/dist/css/bootstrap.css";
import TopImg from "./img/bg-top.svg";
import BottomImg from "./img/bg-bottom.svg";
import "./App.css";

function App() {
  const [cardList, setCardList] = useState([
    {
      id: 1,
      types: "basic",
      storage: "500 GB",
      active: false,
      userAllowe: 2,
      speed: 3,
      priceMonthly: 19.99,
      priceAnnually: 119.99,
    },
    {
      id: 2,
      types: "professional",
      storage: "1 TB",
      active: true,
      userAllowe: 5,
      speed: 10,
      priceMonthly: 24.99,
      priceAnnually: 249.99,
    },
    {
      id: 3,
      types: "master",
      storage: "2 TB",
      active: false,
      userAllowe: 10,
      speed: 20,
      priceMonthly: 39.99,
      priceAnnually: 399.99,
    },
  ]);

  const [buttonState,setButtonState] = useState(true)

  const handleActive = (cardId: number) => {
    const newCardList = [...cardList];
    newCardList.map((e) => {
      e.active = false;
      return e;
    });
    const index = newCardList.findIndex((p) => p.id === cardId);
    newCardList[index].active = true;
    setCardList(newCardList)
  };

  const handleButton = (buttonState:boolean) =>{
    if(buttonState){
      setButtonState(false)
    }else{
      setButtonState(true)
    }
  }

  return (
    <div className="main">
      <Title />
      <Button buttonState={buttonState} onActive={handleButton}/>
      <CardList cardList={cardList} onActive={handleActive} buttonState={buttonState}/>
      <img className="topImg" src={TopImg} />
      <img className="bottomImg" src={BottomImg} />
    </div>
  );
}

export default App;
