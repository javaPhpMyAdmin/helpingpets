import { Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import NewMarker from './components/NewMarker';
import { Constants } from 'expo-camera';
import 'react-native-gesture-handler';
import Details from './components/Details';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import NewAccount from './components/NewAccount';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import RootNavigation from './navigation/RootNavigation';

const heightStatusBar = Constants.StatusBarHeight;

const Stack = createSharedElementStackNavigator();

export default function App() {
	
	return (
		/*<NavigationContainer>
			<MenuProvider>
				<StatusBar animated={true} backgroundColor="gray" hidden={false} />
				<SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 37 }}>
					<Stack.Navigator initialRouteName='NewAccount'>
						<Stack.Screen
							name='LoginScreen'
							component={LoginScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name='NewAccount'
							component={NewAccount}
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
				</SafeAreaView>
			</MenuProvider>
		</NavigationContainer>*/
		<RootNavigation />
	);
}
