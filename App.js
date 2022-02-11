import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginScreen from './screens/LoginScreen';
import NewMarker from './components/NewMarker';
import { Constants } from 'expo-camera';
import 'react-native-gesture-handler'
import Details from './components/Details';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const heightStatusBar = Constants.StatusBarHeight;

const Stack = createSharedElementStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaProvider style={{ paddingTop: heightStatusBar }}>
				<Stack.Navigator initialRouteName='HomeScreen'>
					<Stack.Screen
						name='LoginScreen'
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='DetailsScreen'
						component={Details}
						options={{ headerShown: false }}
						sharedElements={(route) => {
							return [route.params.item.images[0].id]
						}}
					/>
					<Stack.Screen
						name='NewMarker'
						component={NewMarker}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name='HomeScreen'
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
