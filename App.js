import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <WebView
      source={{ uri: 'https://alexbiolete.github.io/' }}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight
  }
})

export default App
