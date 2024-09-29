import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MailShortcuts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gmail Shortcuts</Text>
      <Text style={styles.shortcut}>C: Compose new email</Text>
      <Text style={styles.shortcut}>R: Reply to email</Text>
      <Text style={styles.shortcut}>A: Reply all to email</Text>
      <Text style={styles.shortcut}>F: Forward email</Text>
      <Text style={styles.shortcut}>Shift + I: Mark as read</Text>
      <Text style={styles.shortcut}>Shift + U: Mark as unread</Text>
      <Text style={styles.shortcut}>E: Archive email</Text>
      <Text style={styles.shortcut}>Shift + E: Unarchive email</Text>
      <Text style={styles.shortcut}>J: Next message</Text>
      <Text style={styles.shortcut}>K: Previous message</Text>
      <Text style={styles.shortcut}>#: Delete message</Text>
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

export default MailShortcuts;