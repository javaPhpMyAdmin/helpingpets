import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenStack } from 'react-native-screens';
import tw from 'tailwind-react-native-classnames';
import LoginScreen from './screens/LoginScreen';
import { Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
const { height } = Dimensions.get('screen');
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaProvider style={{ paddingTop: 40 }}>
				<Stack.Navigator initialRouteName='Login'>
					<Stack.Screen
						name='Login'
						component={LoginScreen}
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
