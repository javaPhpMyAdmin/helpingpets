import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';

export default function GoogleButton() {
	return (
		<View>
			<TouchableOpacity style={styles.container}>
				<LinearGradient
					// Button Linear Gradient
					colors={['#FFB677', '#FF3CBD']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 1 }}
					style={styles.button}
				>
					<View style={styles.icon}>
						<View style={{ paddingRight: 10, paddingBottom: 2 }}>
							<Icon
								name='google-plus'
								color='white'
								type='font-awesome'
							/>
						</View>
						<View>
							<Text style={styles.text}>INGRESAR CON GOOGLE</Text>
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
		fontSize: 14,
		color: '#fff',
		fontWeight: 'bold',
	},
	button: {
		width: '80%',
		height: 50,
		borderRadius: 25,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		flexDirection: 'row',
		paddingBottom: 1,
	},
});
