import { useState } from "react";
import { Button } from "./components/Button/Button";
import { Input } from "./components/Input/Input";
import { Container, Content, Row } from "./styles";


function App() {

  const [number, setNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("")
  const [operator, setOperator] = useState("");

  function addNumber(num) {
    if (number === "0") {
      setNumber(num)
    } else {
      setNumber(number + num)
    }
  }

  function addOperator(op) {
    setOperator(op)
    setSecondNumber(number)
    setNumber("")
  }

  function calc() {

    if (operator === "+") {
      let calculate = Number(secondNumber) + Number(number)
      setNumber(calculate)
    }
    else if (operator === "-") {
      let calculate = Number(secondNumber) - Number(number) 
      setNumber(calculate)
    }
    else if (operator === "*") {
      let calculate = Number(secondNumber) * Number(number)
      setNumber(calculate)
    }
    else if (operator === "/") {
      let calculate = Number(secondNumber) / Number(number)
      setNumber(calculate)
    }
  }

  function clear() {
    setNumber("0")
    setSecondNumber("")
  }

   return (
    <Container>
      <Content>
        <Input value={number} />
        <Row>
          <Button label="x" onClick={()=>{addOperator("*")}} />
          <Button label="/" onClick={()=>{addOperator("/")}}/>
          <Button label="." onClick={()=>{addNumber(".")}}/>
          <Button label="C" onClick={clear}/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>{addNumber("7")}}/>
          <Button label="8" onClick={()=>{addNumber("8")}}/>
          <Button label="9" onClick={()=>{addNumber("9")}}/>
          <Button label="-"  onClick={()=>{addOperator("-")}}/>
        </Row>
        <Row>
          <Button label="4" onClick={()=>{addNumber("4")}}/>
          <Button label="5" onClick={()=>{addNumber("5")}}/>
          <Button label="6" onClick={()=>{addNumber("6")}}/>
          <Button label="+" onClick={()=>{addOperator("+")}}/>
        </Row>
        <Row>
          <Button label="1" onClick={()=>{addNumber("1")}}/>
          <Button label="2" onClick={()=>{addNumber("2")}}/>
          <Button label="3" onClick={()=>{addNumber("3")}}/>
          <Button label="=" disabled={secondNumber === "" ? true : false} onClick={calc} />
         </Row>
         <Row>
          <Button label="0"  onClick={()=>{addNumber("0")}}/>
        </Row>
        
      </Content>
    </Container>
  );
}

export default App;
