
import { useState } from "react";

function useCalculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [output, setOutput] = useState(" ");
    const [outputBackground, setOutputBackground] = useState("");

    function updateOutput(out) {
        setOutput(String(out));

        if (out < 0) {
            setOutputBackground("red");
        } else {
            setOutputBackground("");
        }
    }

    function Add() {
        const a = Number(num1);
        const b = Number(num2);
        const out = a + b;

        updateOutput(out);
    }

    function Subtract() {
        const a = Number(num1);
        const b = Number(num2);
        const out = a - b;

        updateOutput(out);
    }

    function Multiply() {
        const a = Number(num1);
        const b = Number(num2);
        const out = a * b;

        updateOutput(out);
    }

    function Divide() {
        const a = Number(num1);
        const b = Number(num2);
        const out = a / b;

        updateOutput(out);
    }

    function Power() {
        const a = Number(num1);
        let b = Number(num2);
        let temp = 1;

        if (b < 0) {
            b = -b;

            for (let i = 0; i < b; i++) {
                temp = temp * a;
            }

            temp = 1 / temp;
        } else {
            for (let i = 0; i < b; i++) {
                temp = temp * a;
            }
        }

        const out = temp;

        updateOutput(out);
    }

    function Clear() {
        setNum1("");
        setNum2("");
        setOutput("");
    }

    return {
        num1,
        setNum1,
        num2,
        setNum2,
        output,
        outputBackground,
        Add,
        Subtract,
        Multiply,
        Divide,
        Power,
        Clear,
    };
}

export default useCalculator;
