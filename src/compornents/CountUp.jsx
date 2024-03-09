import { CountUpFunction } from "./CountUpFunction";
import { SText } from "./Styles";

export const CountUp = () => {


  return(
    <div>
      <SText>ボタンを押すと1～10までカウントアップします！</SText>
      <CountUpFunction />
      
    </div>
    
  );
};