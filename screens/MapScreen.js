import { View, Text, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const MapScreen = () => {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				return;
			}
			let location = await Location.getCurrentPositionAsync({});
			setLocation(location);
		})();
	}, []);

	let latitude = undefined;
	let longitude = undefined;
	let text = '';
	if (errorMsg) {
		text = errorMsg;
	} else if (location) {
		latitude = location.coords.latitude;
		longitude = location.coords.longitude;
	}

	return (
		<>
			{errorMsg ? (
				<Text>{errorMsg}</Text>
			) : (
				latitude &&
				longitude && (
					<View>
						<MapView
							style={{ height: Height / 2 }}
							provider={PROVIDER_GOOGLE}
							initialRegion={{
								latitude: -34.8836,
								longitude: -56.1819,
								latitudeDelta: 0.045, //0.0922,
								longitudeDelta: 0.055, //0.00421,
							}}
						>
							<Marker
								key='1'
								coordinate={{
									latitude: -34.8836,
									longitude: -56.1819,
								}}
								title='marker test'
								description='test description marker'
							/>
							<Marker
								key='2'
								coordinate={{
									latitude: latitude,
									longitude: longitude,
								}}
								title='marker test'
								description='test description marker number 2'
							/>
						</MapView>
					</View>
				)
			)}
		</>
	);
};

export default MapScreen;
