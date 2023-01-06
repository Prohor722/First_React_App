import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style="color:red;">Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      <View style={styles.colors}>
        <View style={{height:100, width: 100, backgroundColor:'red' }}></View>
        <View
          style={{height:100, width: 100, backgroundColor:'blue', color: 'white' }}>
          <Text onPress ={()=>{console.log("Hello !!");}} style={{color:'white', textAlign: 'center', marginTop:40}}>Hello Friends</Text>
        </View>
        <View style={{height:100, width: 100, backgroundColor:'green' }}></View>
      </View>
        <Button color="orange" title="Press Here" onPress={()=>console.log('Button Pressed')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
  },
  colors: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
