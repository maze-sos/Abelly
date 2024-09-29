import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WindowsShortcuts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Windows Shortcuts</Text>
      <Text style={styles.shortcut}>Win + D: Show desktop</Text>
      <Text style={styles.shortcut}>Win + E: Open File Explorer</Text>
      <Text style={styles.shortcut}>Win + L: Lock computer</Text>
      <Text style={styles.shortcut}>Win + M: Minimize all windows</Text>
      <Text style={styles.shortcut}>Win + R: Open Run dialog box</Text>
      <Text style={styles.shortcut}>Win + S: Open Search</Text>
      <Text style={styles.shortcut}>Win + Tab: Open Task view</Text>
      <Text style={styles.shortcut}>Win + Up arrow: Maximize window</Text>
      <Text style={styles.shortcut}>Win + Down arrow: Restore window</Text>
      <Text style={styles.shortcut}>Win + Left/Right arrow: Move window to left/right</Text>
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

export default WindowsShortcuts;