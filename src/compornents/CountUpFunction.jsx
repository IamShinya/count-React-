import { useState } from "react";
import { SButton,SResult } from "./Styles";

export const CountUpFunction = () => {

  const [num,setNum] = useState(0);
  const clickHandle = () => {
    if(num < 10){
      setNum(num + 1);
    }else{
        if(window.confirm('カウントが上限に達しました！\n最初からカウントし直しますか？')){
          setNum(0);
        }else{
          setNum("Limit!");
        }
      }
  }
  
  return (
    <>
      <SButton onClick={clickHandle}>COUNT UP!</SButton>
      <SResult>{num}</SResult>
    </>
  )

}