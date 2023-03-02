import './App.css';
import { useState } from 'react';


function App() {

  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isFirstTime: true,
    prevOp: ""
  });
  const handleClick = (val) => {
    let newVal = val;

    if (!calc.isFirstTime)
      newVal = calc.current + val;
    setCalc({
      current: newVal,
      total: calc.total,
      isFirstTime: false,
      prevOp: calc.prevOp
    })
  }

  const handleOperation = (val) => {
    const total = doOperator();
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isFirstTime: true,
      prevOp: val
    })

  }
  const doOperator = () => {

    let total = parseInt(calc.total)

    switch (calc.prevOp) {
      case "+":
        total += parseInt(calc.current)
        break;
      case "-":
        total -= parseInt(calc.current)
        break;
      case "*":
        total *= parseInt(calc.current)
        break;
      case "/":
        total /= parseInt(calc.current)
        break;
      default: total = parseInt(calc.current)
    }
    return total;
  }

  const renderDisplay = () => {
    return (
      calc.current
    )
  }
  const handleEqual = () => {
    let total = doOperator();
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isFirstTime: true,
      prevOp: "="
    })
  }
  const handleClear = () => {
    let total = doOperator();
    console.log(total)
    setCalc({
      current: "0",
      total: "0",
      isFirstTime: true,
      prevOp: ""
    })
  }
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1 style={{color:"lawngreen"}}>calculator</h1>
      <div style={{margin:"0 auto", display:"flex",justifyContent:"center", direction: "ltr", textAlign: "center", border: '1px solid green', padding: "20px", width: "172px" }}>{renderDisplay()}</div>
      <div style={{ display: "flex" ,justifyContent:"center"}}>
        <ButtonComponent value="7" onClick={handleClick} />
        <ButtonComponent value="8" onClick={handleClick} />
        <ButtonComponent value="9" onClick={handleClick} />
        <ButtonComponent value="*" onClick={handleOperation} />
      </div>
      <div style={{ display: "flex" ,justifyContent:"center"}}>
        <ButtonComponent value="4" onClick={handleClick} />
        <ButtonComponent value="5" onClick={handleClick} />
        <ButtonComponent value="6" onClick={handleClick} />
        <ButtonComponent value="-" onClick={handleOperation} />
      </div>
      <div style={{ display: "flex" ,justifyContent:"center"}}>
        <ButtonComponent value="1" onClick={handleClick} />
        <ButtonComponent value="2" onClick={handleClick} />
        <ButtonComponent value="3" onClick={handleClick} />
        <ButtonComponent value="+" onClick={handleOperation} />
      </div>

      <div style={{ display: "flex" ,justifyContent:"center"}}>
        <ButtonComponent value="C" onClick={handleClear} />
        <ButtonComponent value="0" onClick={handleClick} />
        <ButtonComponent value="=" onClick={handleEqual} />
        <ButtonComponent value="/" onClick={handleOperation} />
      </div>
    </div>
  );
}
const ButtonComponent = (props) => {
  return (
    <div>
      <button style={{width: "54px",height:"50px"}} onClick={() => props.onClick(props.value)}>{props.value}</button>
    </div>
  )
}
export default App;
