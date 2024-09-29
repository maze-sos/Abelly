import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChromeShortcuts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google Chrome Shortcuts</Text>
      <Text style={styles.shortcut}>Ctrl + T: New tab</Text>
      <Text style={styles.shortcut}>Ctrl + N: New window</Text>
      <Text style={styles.shortcut}>Ctrl + Shift + T: Reopen closed tab</Text>
      <Text style={styles.shortcut}>Ctrl + Shift + N: New incognito window</Text>
      <Text style={styles.shortcut}>Ctrl + P: Print</Text>
      <Text style={styles.shortcut}>Ctrl + S: Save</Text>
      <Text style={styles.shortcut}>Ctrl + F: Find</Text>
      <Text style={styles.shortcut}>Ctrl + H: History</Text>
      <Text style={styles.shortcut}>Ctrl + J: Downloads</Text>
      <Text style={styles.shortcut}>Ctrl + Shift + B: Bookmarks</Text>
      <Text style={styles.shortcut}>Ctrl + Shift + O: Settings</Text>
      <Text style={styles.shortcut}>F5: Refresh</Text>
      <Text style={styles.shortcut}>F11: Toggle full screen</Text>
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

export default ChromeShortcuts;