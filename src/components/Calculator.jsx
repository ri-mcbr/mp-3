
import useCalculator from "../utils/useCalculator.js";

function Calculator() {
    const {num1, setNum1,
        num2, setNum2,
        output, outputBackground,
        Add, Subtract, Multiply, Divide, Power, Clear,
    } = useCalculator();

    return (
        <div id="calculator">
            <p>Calculator-3000&trade;</p>
            <input type="text" id="num1" value={num1}
                onChange={(event) => setNum1(event.target.value)}
            />
            <input type="text" id="num2" value={num2}
                onChange={(event) => setNum2(event.target.value)}
            />
            <ul id="calculator-buttons">
                <button type="button" onClick={Add}>+</button>
                <button type="button" onClick={Subtract}>-</button>
                <button type="button" onClick={Multiply}>*</button>
                <button type="button" onClick={Divide}>/</button>
                <button type="button" onClick={Power}>**</button>
                <button type="button" onClick={Clear}>Clear</button>
            </ul>

            <p id="output" style={{ backgroundColor: outputBackground }}>
                {output}
            </p>
        </div>
    );
}

export default Calculator;
