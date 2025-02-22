"use client";
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const Card = () => {
    const [array, setArray]= useState<any[]>([]);
    const [last, setLast]= useState<any[]>([]);
    const [operation, setOperation] = useState<string>('');

    function Add(n:number){
        (isNaN(array[0]))? setArray([n]) :setArray((prevArray:number[]) => ([...prevArray, n]));
        return array
    }

    function Reset(){
        setArray([]);
        setLast([]);
        setOperation('')
        return (array&&last&&operation)
    }

    function Sum(){
        setLast(() => (array));
        setOperation('+')
        setArray(["+"]);
        return (last && array && operation)
    }

    function Minus(){
        setLast(() => (array));
        setOperation('-')
        setArray(["-"]);
        return (last && array && operation)
    }

    function Divide(){
        setLast(() => (array));
        setOperation('/')
        setArray(["/"]);
        return (last && array && operation)
    }

    function Multiply(){
        setLast(() => (array));
        setOperation('*')
        setArray(["*"]);
        return (last && array && operation)
    }

    function Del(){
        setArray((prevArray:number[]) => ([...prevArray.slice(0,-1)]))
    }

    function Result(){
        if(operation==="+"){
            let first:number = Number(last.join(''));
            let second:number = Number(array.join(''));
            let result = first+second;
            Reset();
            setArray([result])
        }
        else if(operation==="-"){
            let first:number = Number(last.join(''));
            let second:number = Number(array.join(''));
            let result = first-second;
            Reset();
            setArray([result])
        }
        else if(operation==="*"){
            let first:number = Number(last.join(''));
            let second:number = Number(array.join(''));
            let result = first*second;
            Reset();
            setArray([result])
        }
        else if(operation==="/"){
            let first:number = Number(last.join(''));
            let second:number = Number(array.join(''));
            let result = first/second;
            Reset();
            setArray([result])
        }
        return array
    }

    let handleKeyDown = (e) =>{
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
            else if(e.key==="Enter"){
                Result();
            }
            else if(e.key==="Backspace"){
                Del();
            }
        }

  return (
    <StyledWrapper onKeyDown={handleKeyDown}>
      <div className="calculator">
        <div className="output">
          <span className="result">{array}</span>
        </div>
        <div className="buttons">
          <button onClick={() => Add(1)}>1</button>
          <button onClick={() => Add(2)}>2</button>
          <button onClick={() => Add(3)}>3</button>
          <button onClick={Sum}>+</button>
          <button onClick={() => Add(4)}>4</button>
          <button onClick={() => Add(5)}>5</button>
          <button onClick={() => Add(6)}>6</button>
          <button onClick={Minus}>-</button>
          <button onClick={() => Add(7)}>7</button>
          <button onClick={() => Add(8)}>8</button>
          <button onClick={() => Add(9)}>9</button>
          <button onClick={Multiply}>*</button>
          <button onClick={Reset} className="bg-red">C</button>
          <button onClick={() => Add(0)}>0</button>
          <button onClick={Result} className="bg-green">=</button>
          <button onClick={Divide}>/</button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .calculator {
    border: 1px solid rgb(179, 179, 179);
    border-radius: 0.375rem;
    width: 190px;
    height: 272px;
    font-family: Arial, sans-serif;
    margin-top:50%
    margin: 0 auto;
    padding: 10px;
  }

  .output {
    border: 1px solid #ccc;
    border-radius: 0.375rem;
    height: 40px;
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
  }

  .result {
    font-size: 20px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    color: var(--background)
  }

  button {
    border: none;
    border-radius: 0.375rem;
    padding: 10px;
    background-color: var(--foreground);
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #ddd;
  }

  button:active {
    background-color: #ccc;
  }

  .bg-green {
    background-color: rgba(0, 177, 29, 0.651);
    color: white;
  }

  .bg-green:hover {
    background-color: rgba(0, 231, 39, 0.651);
    color: white;
  }

  .bg-red {
    background-color: rgba(223, 4, 4, 0.651);
    color: white;
  }

  .bg-red:hover {
    background-color: rgba(255, 1, 1, 0.651);
    color: white;
  }`;

export default Card;
