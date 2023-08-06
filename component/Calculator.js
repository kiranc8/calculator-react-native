import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {

  let [num, setNum] = useState('0');
  let [res, setRes] = useState(0);
  let [sign, setSign] = useState("");

  // Function which handles number inputs
  const numClickHandler = (value) => {
    if (num === "0" && (value === "00" || value === "0")) {
      setNum("0");
    } else {
      setNum(parseFloat(num + value));
      
    }
  };

  // Function which handles operator inputs
  const signClickHandler = (value) => {
    setSign(value);
    setRes(num);
    setNum("");
  };

  // Function to do the operation
  const equalsClickHandler = () => {
    if (sign === "+") {
      setNum(num + res);
    } else if (sign === "/") {
      setNum(res / num);
    } else if (sign === "-") {
      setNum(res - num);
    } else if (sign === "x") {
      setNum(res * num);
    } else {
      setNum((num / 100) * res);
    }
    setRes(0);
    setSign("");
  };

  // Function to reset the state values
  const resetClickHandler = () => {
    setRes("0");
    setNum(0);
    setSign("");
  };

  // Function to reverse the sign
  const invertClickHandler = () => {
    setNum(-1 * num);
  };

  // Function to handle decimal inputs
  const commaHandler = (value) => {
    if (!num.toString().includes(".")) {
      setNum(num + value);
    }
  };

  const backspaceHandler = () => {
    if(num=='0' || num==''){
      return;
    }
    if (num.length == 1) {
      setNum('0');
    } else {
      const newNum = parseFloat(num.toString().slice(0, -1));
      setNum(newNum.toString());
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.display}>{num.toString().length >= 16
              ? parseFloat(num).toExponential(8)
              : num}</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => backspaceHandler()}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => invertClickHandler()}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => signClickHandler('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => signClickHandler('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => signClickHandler('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => signClickHandler('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => signClickHandler('x')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => resetClickHandler()}>
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => numClickHandler('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => commaHandler('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => equalsClickHandler()}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
    // alignItems:"flex-end",
    backgroundColor: '#F5F5F5',
  },
  display: {
    fontSize: 48,
    textAlign: 'right',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
    padding: 23,
    borderRadius: 10,
    margin:3
  },
  operatorButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA500',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
  },
});

export default Calculator;
