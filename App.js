import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenStack } from 'react-native-screens';
import LoginScreen from './screens/LoginScreen';
const Stack = createNativeStackNavigator();
import ImagePickerComponent from './components/ImagePicker';
import NewMarker from './components/NewMarker';
import { Constants } from 'expo-camera';

const heightStatusBar = Constants.StatusBarHeight;

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaProvider style={{ paddingTop: heightStatusBar }}>
				<Stack.Navigator initialRouteName='NewMarker'>
					<Stack.Screen
						name='Login'
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='NewMarker'
						component={NewMarker}
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
