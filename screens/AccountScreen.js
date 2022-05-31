import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

export const AccountScreen = () => {
	return (
		<SafeAreaView style={{ marginTop: 20, flex: 1, backgroundColor: 'red' }}>
			<View style={{ width: '90%', height: '90%', backgroundColor: 'blue', top: 30 }}>
				<Text style={{ color: 'white' }}>AccountScreen</Text>
			</View>
		</SafeAreaView>
	);
};
