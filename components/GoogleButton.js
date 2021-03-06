import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-google-app-auth';

const GOOGLE_ID_ANDROID =
	'273398373665-1ia00d0ggsr7aqijhevlijpkmttc3tq7.apps.googleusercontent.com';

const GOOGLE_ID_IOS =
	'273398373665-3bkiens7o5ciuq3b434tcefbhchreiec.apps.googleusercontent.com';

export default function GoogleButton() {
	const navigation = useNavigation();

	const signInWithGoogleAsync = async () => {
		try {
			const result = await Google.logInAsync({
				androidClientId: GOOGLE_ID_ANDROID,
				iosClientId: GOOGLE_ID_IOS,
				scopes: ['profile', 'email'],
			});

			if (result.type === 'success') {
				navigation.navigate('HomeScreen', { user: result.user });
				console.log('RESULT', result);
			} else {
				console.log('NO SUCCESS');
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={{}}>
			<TouchableOpacity
				style={styles.container}
				onPress={signInWithGoogleAsync}
			>
				<LinearGradient
					// Button Linear Gradient
					colors={['#FFB677', '#FF3CBD']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.button}
				>
					<View style={styles.icon}>
						<View style={{ paddingRight: 10, paddingTop: 4 }}>
							<Icon
								name='google'
								color='white'
								type='font-awesome'
							/>
						</View>
						<View style={{ paddingTop: 4 }}>
							<Text style={styles.text}>GOOGLE</Text>
						</View>
					</View>
				</LinearGradient>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: 350,
		marginTop: 30,
	},

	text: {
		fontSize: 19,
		color: '#fff',
		fontWeight: 'bold',
	},
	button: {
		width: '50%',
		height: 50,
		borderRadius: 25,
		paddingTop: 2,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'black',
		shadowRadius: 3,
		shadowOffset: { width: 7, height: 7 },
		elevation: 5,
		shadowOpacity: 1,
	},
	icon: {
		flexDirection: 'row',
		paddingBottom: 4,
	},
});
