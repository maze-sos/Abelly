import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppleShortcuts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apple Shortcuts</Text>
      <Text style={styles.shortcut}>Command + Q: Quit application</Text>
      <Text style={styles.shortcut}>Command + S: Save</Text>
      <Text style={styles.shortcut}>Command + P: Print</Text>
      <Text style={styles.shortcut}>Command + Z: Undo</Text>
      <Text style={styles.shortcut}>Command + A: Select All</Text>
      <Text style={styles.shortcut}>Command + N: New File</Text>
      <Text style={styles.shortcut}>Command + O: Open File</Text>
      <Text style={styles.shortcut}>Command + F: Find</Text>
      <Text style={styles.shortcut}>Command + H: Replace</Text>
      <Text style={styles.shortcut}>Command + Shift + F: Format Code</Text>
      <Text style={styles.shortcut}>Command + Shift + B: Build</Text>
      <Text style={styles.shortcut}>Command + Shift + P: Command Palette</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // light gray background
    paddingHorizontal: 20, // added padding to the sides
    paddingVertical: 40, // added padding to the top and bottom
  },
  title: {
    fontSize: 24, // set font size of the title
    marginBottom: 20, // added margin bottom
    fontWeight: 'bold', // bold font weight
    color: '#333', // dark gray text color
  },
  shortcut: {
    fontSize: 18, // set font size of the shortcut
    marginBottom: 10, // added margin bottom
    color: '#666', // dark gray text color
  },
});

export default AppleShortcuts;