import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style="color:red;">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <View style={styles.colors}>
        <View style={{height:100, width: 100, backgroundColor:'red' }}></View>
        <View style={{height:100, width: 100, backgroundColor:'blue' }}></View>
        <View style={{height:100, width: 100, backgroundColor:'green' }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colors: {
    flex:1,
    flexDirection: 'row',
  }
});
