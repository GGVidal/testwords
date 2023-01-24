import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [inputValue, setinputValue] = useState<string>('');
  const [textObj, setTextObj] = useState<object>({});

  const onPress = () => {
    const words: string[] = inputValue.split(' ');
    let wordsObjCount: object = {};

    words.forEach(element => {
      wordsObjCount[element] = (wordsObjCount[element] || 0) + 1;
    });
    setTextObj(wordsObjCount);
  };

  const renderText = useCallback(() => {
    return Object.keys(textObj).map((value, index) => (
      <Text key={index}>{`${value}: ${textObj[value]}`}</Text>
    ));
  }, [textObj]);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <TextInput
          value={inputValue}
          onChangeText={text => setinputValue(text)}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      {renderText()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  textInput: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
