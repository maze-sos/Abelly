// components/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 10000); // navigate to Home screen after 3 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={{ width: 300, height: 300 }} />
      <Text style={styles.title}>Abelly - A Shortcuts App</Text>
      <ActivityIndicator size="large" color="#B1D62A" />
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
    color: '#25BBE0', // dark gray text color
  },

});
export default SplashScreen;