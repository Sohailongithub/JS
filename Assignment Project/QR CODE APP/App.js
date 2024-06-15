import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Share my card</Text>
      </TouchableOpacity>
      <Image
        source={require('./images.png') } 
        style={styles.qrCode}
      />
      <View style={styles.optionsContainer}>
        <Text style={styles.option}>Share my card</Text>
        <Text style={styles.option}>Add card to wallet</Text>
        <Text style={styles.option}>Add card to homescreen</Text>
        <Text style={styles.option}>Create Email signature</Text>
        <Text style={styles.option}>Create virtual background</Text>
      </View>
      <TouchableOpacity style={styles.airdropButton}>
        <Text style={styles.airdropButtonText}>Share with AirDrop</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  button: {
    backgroundColor: '#ff7f3f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  qrCode: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  optionsContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  option: {
    fontSize: 16,
    marginVertical: 5,
  },
  airdropButton: {
    backgroundColor: '#ff7f3f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  airdropButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
