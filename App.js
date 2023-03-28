import { StyleSheet } from 'react-native';
import Gallery from "./Gallery";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FullScreenImage from "./FullScreenImage";

const Stack = createNativeStackNavigator();

export default function App1() {
  let numOfPage = 1;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Gallery" component={Gallery} initialParams={{numOfPage:numOfPage}}/>
        <Stack.Screen name="FullImage" component={FullScreenImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreenImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch',
    height:300,
    width:300
  },
});
