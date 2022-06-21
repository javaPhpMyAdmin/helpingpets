import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../utils';
import { Icon } from 'react-native-elements';
import {
	HomeScreen,
	AccountScreen,
	LoginScreen,
	MapScreen,
	NewMarker,
} from '../screens';
import * as Animatable from 'react-native-animatable';

const TabArr = [
	{
		route: 'HomeScreen',
		label: 'Inicio',
		type: 'font-awesome',
		icon: 'plus-circle',
		component: HomeScreen,
	},
	{
		route: 'LoginScreen',
		label: 'Search',
		type: 'font-awesome',
		icon: 'plus-circle',
		component: LoginScreen,
	},
	{
		route: 'NewMarker',
		label: 'Agregar',
		type: 'font-awesome',
		icon: 'plus-circle',
		component: NewMarker,
	},
	{
		route: 'MapScreen',
		label: 'Mapa',
		type: 'font-awesome',
		icon: 'plus-circle',
		component: MapScreen,
	},
	{
		route: 'AccountScreen',
		label: 'Perfil',
		type: 'font-awesome',
		icon: 'plus-circle',
		component: AccountScreen,
	},
];

const Tab = createBottomTabNavigator();

const animate1 = {
	0: { scale: 0.5, translateY: 7 },
	0.92: { translateY: -34 },
	1: { scale: 1.2, translateY: -24 },
};
const animate2 = {
	0: { scale: 1.2, translateY: -24 },
	1: { scale: 1, translateY: 7 },
};

const circle1 = {
	0: { scale: 0 },
	0.3: { scale: 0.9 },
	0.5: { scale: 0.2 },
	0.8: { scale: 0.7 },
	1: { scale: 1 },
};
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } };

const TabButton = (props) => {
	const { item, onPress, accessibilityState } = props;
	const focused = accessibilityState.selected;
	const viewRef = useRef(null);
	const circleRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		if (focused) {
			viewRef.current.animate(animate1);
			circleRef.current.animate(circle1);
			textRef.current.transitionTo({ scale: 1 });
		} else {
			viewRef.current.animate(animate2);
			circleRef.current.animate(circle2);
			textRef.current.transitionTo({ scale: .7 });
		}
	}, [focused]);

	return (
		<TouchableOpacity
			onPress={onPress}
			activeOpacity={1}
			style={styles.container}
		>
			<Animatable.View
				ref={viewRef}
				duration={1000}
				style={styles.container}
			>
				<View style={styles.btn}>
					<Animatable.View ref={circleRef} style={styles.circle} />
					<Icon
						type='font-awesome'
						name={item.icon}
						color={focused ? Colors.white : Colors.primary}
						size={22}
					/>
				</View>
				<Animatable.Text ref={textRef} style={styles.text}>
					{item.label}
				</Animatable.Text>
			</Animatable.View>
		</TouchableOpacity>
	);
};

export default function AppNavigation() {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarStyle: styles.tabBar,
			}}
		>{TabArr.map((item, index) => {
				return (
					<Tab.Screen
						key={index}
						name={item.route}
						component={item.component}
						options={{
							tabBarShowLabel: false,
							tabBarButton: (props) => (
								<TabButton {...props} item={item} />
							),
						}}
					/>
				);
			})}
		</Tab.Navigator>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		bottom: 2
	},
	tabBar: {
		height: 70,
		position: 'absolute',
		bottom: 16,
		right: 16,
		left: 16,
		borderRadius: 16,
	},
	btn: {
		width: 50,
		height: 50,
		borderRadius: 25,
		borderWidth: 4,
		borderColor: Colors.white,
		backgroundColor: Colors.white,
		justifyContent: 'center',
		alignItems: 'center',
	},
	circle: {
		...StyleSheet.absoluteFillObject,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.primary,
		borderRadius: 25,
	},
	text: {
		fontSize: 17,
		fontWeight: 'bold',
		textAlign: 'center',
		color: Colors.primary,
		bottom: 5
	},
});
