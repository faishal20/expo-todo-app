import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Box from './src/Box'
import BoxContainer from './src/BoxContainer';


export default function App() {
  return (
    <View style={styles.containerOne}>



    <BoxContainer  />
      


       


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerOne: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#000000',
    marginTop: 65,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  containerTwree: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#ffffff',
    marginTop: 65,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  containerFour: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#ffffff',
    marginTop: 65,
    alignItems: 'center',
    justifyContent: 'space-around',
  }
  ,
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: '#ffffff'
  }
  
});
