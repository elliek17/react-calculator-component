/* eslint-disable  @typescript-eslint/no-unused-expressions */

"use client";
import React from 'react';
import { useState } from 'react';
import "./advCalc.css"

const Card = () => {
    const [input, setInput] = useState(0);
    const [last,setLast] = useState(0);
    const [op, setOp] = useState('');
    const [upper,setUpper] = useState("")
    const [dec, setDec] = useState(false)

    function Add(n:number){
        if(!dec){
          const nStr:string = n.toString();
          const inputStr = input.toString();
          setInput(Number(inputStr+nStr));
          return input
        }
        else{
          const nStr:string = n.toString();
          const decN:string = "."+nStr
          const inputStr = input.toString();
          setInput(Number(inputStr+decN));
          setDec(false)
          return input
        }
    }

    function Sum(){
        if(op===""){
            setLast(input);
            setOp('+');
            setUpper(input.toString()+"+")
            setInput(0);
            return (last&&op&&input)
        }
        else{Result()}
    }

    function Minus(){
        if(op===""){
            setLast(input);
            setOp('-');
            setUpper(input.toString()+"-")
            setInput(0);
            return (last&&op&&input)
        }
        else{Result()}
    }

    function Multiply(){
        if(op===""){
            setLast(input);
            setOp('*');
            setUpper(input.toString()+"*")
            setInput(0);
            return (last&&op&&input)
        }
        else{Result()}
    }

    function Divide(){
        if(op===""){
            setLast(input);
            setOp('/');
            setUpper(input.toString()+"/")
            setInput(0);
            return (last&&op&&input)
        }
        else{Result()}
    }

    function Power(){
      if(op===""){
          setLast(input);
          setOp('^');
          setUpper(input.toString()+"^")
          setInput(0);
          return (last&&op&&input)
      }
      else{Result()}
  }

    function Cos(){
      if(input!==0){
        const toRad = input*3.14159/180
        setInput(Math.cos(toRad));
        setOp("")
        setUpper("")
        return input;
      }
      else{
        setOp('cos');
        setUpper("cos(")
        setInput(0);
        return (upper&&op&&input)
      }
    }

    function Sin(){
      if(input!==0){
        const toRad = input*3.14159/180
        setInput(Math.sin(toRad));
        setOp("")
        setUpper("")
        return input;
      }
      else{
        setOp('sin');
        setUpper("sin(")
        setInput(0);
        return (upper&&op&&input)
      }
    }

    function Tan(){
      if(input!==0){
        const toRad = input*3.14159/180
        setInput(Math.tan(toRad));
        setOp("")
        setUpper("")
        return input;
      }
      else{
        setOp('tan');
        setUpper("tan(")
        setInput(0);
        return (upper&&op&&input)
      }
    }

    function Sqrt(){
      if(input!==0){
        setInput(Math.sqrt(input));
        setOp("")
        setUpper("")
        return input;
      }
      else{
        setOp('√');
        setUpper("√")
        setInput(0);
        return (upper&&op&&input)
      }
    }

    function Percent(){
      if(input!==0 || op===""){
        setInput(input/100);
        return input;
      }
      if(input!==0 || op!==""){
        Result()
      }

    }

    function Ln(){
      if(input!==0){
        setInput(Math.log(input));
        setOp("")
        setUpper("")
        return input;
      }
      else{
        setOp('ln');
        setUpper("ln(")
        setInput(0);
        return (upper&&op&&input)
      }
    }

    function Result(){
        if (op==="+"){
            setInput(last+input);
            setOp("")
            setUpper("")
            return input;
        }
        else if (op==="-"){
            setInput(last-input);
            setOp("")
            setUpper("")
            return input;
        }
        else if (op==="*"){
            setInput(last*input);
            setOp("")
            setUpper("")
            return input;
        }
        else if (op==="/"){
            setInput(last/input);
            setOp("")
            setUpper("")
            return input;
        }
        else if (op==="^"){
          setInput(last**input);
          setOp("")
          setUpper("")
          return input;
        }
        else if (op==="cos"){
          const toRad = input*3.14159/180
          setInput(Math.cos(toRad));
          setOp("")
          setUpper("")
          return input;
        }
        else if (op==="sin"){
          const toRad = input*3.14159/180
          setInput(Math.sin(toRad));
          setOp("")
          setUpper("")
          return input;
        }
        else if (op==="tan"){
          const toRad = input*3.14159/180
          setInput(Math.tan(toRad));
          setOp("")
          setUpper("")
          return input;
        }
        else if (op==="√"){
          setInput(Math.sqrt(input));
          setOp("")
          setUpper("")
          return input;
        }
        else if (op==="ln"){
          setInput(Math.log(input));
          setOp("")
          setUpper("")
          return input;
        }
    }

    function Decimal(){
        setDec(true);
    }

    function Reset(){
        setInput(0);
        setLast(0);
        setOp('');
        setUpper("")
        setDec(false)
    }

    function AddPi(){
        (input===0)? setInput(3.14159): setInput(input*3.14159);
        return input;
    }

    function Del(){
      const inputStr = input.toString().slice(0, -1); 
      setInput(Number(inputStr));
      return input
    }

    const handleKeyDown = (e:React.KeyboardEvent<HTMLDivElement>) =>{
      if(e.key==="1"){
          Add(1);
      }
      else if(e.key==="2"){
          Add(2);
      }
      else if(e.key==="3"){
          Add(3);
      }
      else if(e.key==="4"){
          Add(4);
      }
      else if(e.key==="5"){
          Add(5);
      }
      else if(e.key==="6"){
          Add(6);
      }
      else if(e.key==="7"){
          Add(7);
      }
      else if(e.key==="8"){
          Add(8);
      }
      else if(e.key==="9"){
          Add(9);
      }
      else if(e.key==="0"){
          Add(0);
      }
      else if(e.key==="+"){
          Sum();
      }
      else if(e.key==="-"){
          Minus();
      }
      else if(e.key==="*"){
          Multiply();
      }
      else if(e.key==="/"){
          Divide();
      }
      else if(e.key==="="){
          Result();
      }
      else if(e.key==="."){
        Decimal();
    }
      else if(e.key==="Enter"){
          Result();
      }
      else if(e.key==="Backspace"){
          Del();
      }
    }

  return (
      <div className="calculator" onKeyDown={handleKeyDown}>
        <div className="output">
          <span className="result">{upper}</span>
        </div>
        <div className="output">
          <span className="result">{(isNaN(input))?"ERROR":input}</span>
        </div>
        <div className="buttons">
            <button onClick={Reset} className="bg-red">C</button>
            <button onClick={Power}>x<sup>y</sup></button>
            <button onClick={Sqrt}>√</button>
            <button onClick={Percent}>%</button>
            <button onClick={Divide}>/</button>
            <button onClick={Cos}>cos</button>
            <button onClick={() => Add(1)}>1</button>
            <button onClick={() => Add(2)}>2</button>
            <button onClick={() => Add(3)}>3</button>
            <button onClick={Sum}>+</button>
            <button onClick={Sin}>sin</button>
            <button onClick={() => Add(4)}>4</button>
            <button onClick={() => Add(5)}>5</button>
            <button onClick={() => Add(6)}>6</button>
            <button onClick={Minus}>-</button>
            <button onClick={Tan}>tan</button>
            <button onClick={() => Add(7)}>7</button>
            <button onClick={() => Add(8)}>8</button>
            <button onClick={() => Add(9)}>9</button>
            <button onClick={Multiply}>*</button>
            <button onClick={Ln}>ln</button>
            <button onClick={AddPi}>π</button>
            <button onClick={() => Add(0)}>0</button>
            <button onClick={Decimal}>.</button>
            <button onClick={Result} className="bg-green">=</button>
        </div>
      </div>
  )
}

export default Card;
