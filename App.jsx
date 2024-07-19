import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Guess from './component/guess.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Guess/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f0fff0",
    alignItems: 'center',
  },
});
