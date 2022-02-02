import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenStack } from 'react-native-screens';
import LoginScreen from './screens/LoginScreen';
const Stack = createNativeStackNavigator();
import Camera from './components/Camera'
import ImagePickerComponent from './components/ImagePicker';


export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaProvider style={{ paddingTop: 40 }}>
				<Stack.Navigator initialRouteName='Camera'>
					<Stack.Screen
						name='Login'
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='ImagePicker'
						component={ImagePickerComponent}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='Camera'
						component={Camera}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='Home'
						component={HomeScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='Map'
						component={MapScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</SafeAreaProvider>
		</NavigationContainer>
	);
}
