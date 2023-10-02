import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./Calcss";

export default function App() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState('');
  const [sinal, setSinal] = useState("");
  
  const [stringCalculo, setStringCalculo] = useState("0");

  function logicaCalculo(n) {
    console.log('n:', n);
    console.log('firstNumber:', firstNumber);
    console.log('secondNumber:', secondNumber);
    console.log('sinal:', sinal);

    if (sinal === "") {
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStringCalculo(parseInt(firstNumber.toString() + n.toString()));
    }

    if ((n === "/" || n === "*" || n === "+" || n === "-") && secondNumber === 0) {
      setStringCalculo(firstNumber.toString() + n);
      setSinal(n);
    }

    if (sinal != "") {
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStringCalculo(firstNumber + sinal + parseInt(secondNumber.toString() + n.toString()));
    }


    if (n === "=") {
      let resultado = 0;
      if (sinal === "+") {
        resultado = firstNumber + secondNumber;
      } else if (sinal === "-") {
        resultado = firstNumber - secondNumber;
      } else if (sinal === "*") {
        resultado = firstNumber * secondNumber;
      } else if (sinal === "/") {
        resultado = secondNumber !== 0 ? firstNumber / secondNumber : 'Erro';
        
      }
      setStringCalculo(resultado.toString());
      setFirstNumber(resultado);
      setSecondNumber(0);
      setSinal("");
    }

  }

  function handleClear() {
    setFirstNumber(0);
    setSecondNumber(0);
    setOperator('');
    setStringCalculo('0');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.resultado}>{stringCalculo}</Text>
      <View style={{ left: 10, position:"fixed" }}>
        <TouchableOpacity style={styles.fundoFunc1} onPress={handleClear}><Text style={styles.func}>AC</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoFunc1, { left: "25%", bottom: 80 }]} ><Text style={[styles.func]} >⁺⧸₋</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoFunc1, { left: "50%", bottom: 160 }]} ><Text style={styles.func}>％</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoFunc2, { left: "75%", bottom: 240 }]} onPress={() => logicaCalculo('/')} ><Text style={styles.numeros}>÷</Text></TouchableOpacity>

        <TouchableOpacity style={[styles.fundoNum, { bottom: 230 }]} onPress={() => logicaCalculo('7')} ><Text style={styles.numeros}>7</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoNum, { left: "25%", bottom: 310 }]} onPress={() => logicaCalculo('8')} ><Text style={styles.numeros}>8</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoNum, { left: "50%", bottom: 390 }]} onPress={() => logicaCalculo('9')} ><Text style={styles.numeros}>9</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoFunc2, { left: "75%", bottom: 470 }]} onPress={() => logicaCalculo('*')}><Text style={[styles.numeros,{fontSize:45, bottom:7}]}>×</Text></TouchableOpacity>

        <TouchableOpacity style={[styles.fundoNum, { bottom: 460 }]} onPress={() => logicaCalculo('4')} ><Text style={styles.numeros}>4</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoNum, { left: "25%", bottom: 540 }]} onPress={() => logicaCalculo('5')} ><Text style={styles.numeros}>5</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoNum, { left: "50%", bottom: 620 }]} onPress={() => logicaCalculo('6')} ><Text style={styles.numeros}>6</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoFunc2, { left: "75%", bottom: 700 }]} onPress={() => logicaCalculo('-')}><Text style={styles.numeros}>-</Text></TouchableOpacity>

        <TouchableOpacity style={[styles.fundoNum, { bottom: 690 }]} onPress={() => logicaCalculo('1')} ><Text style={styles.numeros}>1</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoNum, { left: "25%", bottom: 770 }]} onPress={() => logicaCalculo('2')} ><Text style={styles.numeros}>2</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoNum, { left: "50%", bottom: 850 }]} onPress={() => logicaCalculo('3')}><Text style={styles.numeros}>3</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoFunc2, { left: "75%", bottom: 930 }]} onPress={() => logicaCalculo('+')}><Text style={styles.numeros}>+</Text></TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: "#454545", width: 185, height: 80, borderRadius: "100%", bottom: 910, }} onPress={() => logicaCalculo('0')}><Text style={{ color: "white", fontSize: 35, paddingTop: 18, paddingLeft: 30 }}>0</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoNum, { left: "50%", bottom: 995 }]} onPress={() => logicaCalculo (',')}><Text style={styles.numeros} >,</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.fundoFunc2, { left: "75%", bottom: 1080 }]} onPress={() => logicaCalculo('=')}><Text style={styles.numeros}>=</Text></TouchableOpacity>
        <StatusBar style={'auto'} />
      </View>
    </View>
  );
}

