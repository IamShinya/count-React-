import { useState,ChangeEvent,FC} from "react"
import { SText,SButton,SUsrCnt,SResult } from "./Styles"


export const CountUp2: FC = () => {
  const [num,setNum] = useState("");
  const [addNum,setAddNum] = useState("");
  const [cnt,setCnt] = useState("");
  const [btnCheck,setBtnCheck] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    
  };

  const onChangeNum = (e: ChangeEvent<HTMLElement>) => {
    setNum(e.target.value);
  };

  const onChangeNum2 = () => {
    setCnt("");
    if(num !== "" && num !== " " && num !== "　" ){
      if(num <= 1000 && num !== 0){
        // setBtnCheck(true);
        setAddNum(Number(num));
      }else{
        alert("1～1000までの数字を入力して下さい！");
      }
    }else{
      alert("1～1000までの数字を入力して下さい！");
      setAddNum("");
    }
  };

  const onChangeNum3 = () => {
    setCnt((prev) => Number(prev) + 1);
    if(cnt < 10){
      setAddNum((prev) => prev + 1);
    }else{
      if(window.confirm('カウントが上限に達しました！\n最初からカウントし直しますか？')){
        setAddNum("");
        setCnt("");
      }else{
        setAddNum("Limit!");
      }
    }
    
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <label><SText>1～1000までの数字を入力して下さい！<br />その数字から10だけカウントアップします！</SText>
        <SUsrCnt type="text" name="num" onChange={onChangeNum}/>
        </label>
        <SButton onClick={onChangeNum2}>送信!</SButton>
      </form>
      <SResult>{addNum}</SResult> 
      {addNum && <SButton  onClick={onChangeNum3}>Count Up!</SButton>}
    </>
    
  )
}

