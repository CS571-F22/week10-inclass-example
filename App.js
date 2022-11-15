// Adapted from https://docs.expo.dev/versions/latest/sdk/securestore/

import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';


export default function App() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [retrievalKey, setRetrievalKey] = useState('');

  function save() {
    SecureStore.setItemAsync(key, value).then(() => {
      setKey('');
      setValue('');
    });
  }

  function getValue() {
    SecureStore.getItemAsync(retrievalKey).then(result => {
      if (result) {
        alert("🔐 Here's your value 🔐 \n" + result);
      } else {
        alert('No values stored under that key.');
      }
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Save an item, and grab it later!</Text>
      { }

      <TextInput
        style={styles.textInput}
        placeholder='Your key here'
        clearTextOnFocus
        onChangeText={text => setKey(text)}
        value={key}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Your value here'
        clearTextOnFocus
        onChangeText={text => setValue(text)}
        value={value}
      />
      { }
      <Button
        title="Save this key/value pair"
        onPress={save}
      />

      <Text style={styles.paragraph}>Enter the key of the item you want...</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Your retrieval key here'
        clearTextOnFocus
        onChangeText={text => setRetrievalKey(text)}
        value={retrievalKey}
      />
      <Button
        title="Retrieve value"
        onPress={getValue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 4,
  },
});
