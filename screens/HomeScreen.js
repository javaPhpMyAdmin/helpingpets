import { Text, View, SafeAreaView, Button } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen = () => {
	const navigation = useNavigation();
	return (
		<SafeAreaProvider style={tw`bg-red-500 py-10`}>
			<Text style={tw`text-blue-500 px-10`}>Home Screen</Text>
			<Button
				onPress={() => navigation.navigate('Map')}
				title='Go to map'
			/>
		</SafeAreaProvider>
	);
};

export default HomeScreen;
