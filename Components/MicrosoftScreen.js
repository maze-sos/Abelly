// components/MicrosoftScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';import { useNavigation } from '@react-navigation/native';


const MicrosoftScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/microsoft.png')} style={{ width: 150, height: 150 }} />
      <Text style={styles.title}>Microsoft Package</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Word Shortcuts')} style={styles.buttonContainerStyle}>
          <Text style={styles.buttonText}>Word</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Excel Shortcuts')} style={styles.buttonContainerStyle}>
          <Text style={styles.buttonText}>Excel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PowerPoint Shortcuts')} style={styles.buttonContainerStyle}>
          <Text style={styles.buttonText}>PowerPoint</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // light gray background
    paddingHorizontal: 20, // added padding to the sides
    paddingVertical: 40, // added padding to the top and bottom
  },
  title: {
    fontSize: 36, // increased font size
    marginBottom: 40, // increased margin bottom
    fontWeight: 'bold', // bold font weight
    color: '#00ABF3', // dark blue text color
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap', // buttons wrap to the next line
    flexDirection: 'row', // buttons display horizontally
  },
  buttonContainerStyle: {
    backgroundColor: '#B1D62A', // green background color
    borderRadius: 10, // added rounded corners
    padding: 10, // added padding to the button
    margin: 10, // added margin to the button
    width: 150, // set button width
  },
  buttonText: {
    fontSize: 18, // set font size of the button text
    color: '#fff', // set text color to white
  },
});

export default MicrosoftScreen;