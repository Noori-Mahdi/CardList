type buttonStateProps = {
  buttonState: boolean;
  onActive: (buttonState:boolean) => void;
};

const Button = ({ buttonState, onActive }: buttonStateProps) => {
  let classActive = ""

if(buttonState){
  classActive = "active"
}else{
  classActive = ""
}
 
return (
  <div className="buttonBx">
    <span>annually</span>
    <div className="button">
      <div
        className={classActive}
        onClick={() => {
          onActive(buttonState);
        }}
      ></div>
    </div>
    <span>monthly</span>
  </div>)
  
};

export default Button;
