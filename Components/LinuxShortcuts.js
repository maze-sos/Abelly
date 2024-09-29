import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LinuxShortcuts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Linux Shortcuts</Text>
      <Text style={styles.shortcut}>Ctrl + Alt + T: Open terminal</Text>
      <Text style={styles.shortcut}>Ctrl + Shift + Esc: Open task manager</Text>
      <Text style={styles.shortcut}>Ctrl + Alt + Del: Open system monitor</Text>
      <Text style={styles.shortcut}>Ctrl + C: Copy</Text>
      <Text style={styles.shortcut}>Ctrl + X: Cut</Text>
      <Text style={styles.shortcut}>Ctrl + V: Paste</Text>
      <Text style={styles.shortcut}>Ctrl + F: Find</Text>
      <Text style={styles.shortcut}>Ctrl + H: Replace</Text>
      <Text style={styles.shortcut}>Ctrl + Shift + F: Format Code</Text>
      <Text style={styles.shortcut}>Ctrl + Shift + B: Build</Text>
      <Text style={styles.shortcut}>Ctrl + Shift + P: Command Palette</Text>
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

export default LinuxShortcuts;