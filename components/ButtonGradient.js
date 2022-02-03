import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient({ handleSubmit, isValid, titleButton }) {
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={handleSubmit}
			disabled={!isValid}
		>
			{
				!isValid ? (
					<LinearGradient
						// Button Linear Gradient
						colors={['gray', 'black']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[styles.button]}
					>
						<Text style={styles.text}>{titleButton}</Text>
					</LinearGradient>
				) :
					(
						<LinearGradient
							// Button Linear Gradient
							colors={['#FFB677', '#FF3CBD']}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 1 }}
							style={styles.button}
						>
							<Text style={styles.text}>INGRESAR</Text>
						</LinearGradient>

					)
			}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: 200,
		marginTop: 30,
		shadowColor: 'black',
		shadowRadius: 10,
		shadowOffset: { width: -16, height: -17 },
		elevation: 20,
		shadowOpacity: 1,
	},

	text: {
		fontSize: 19,
		color: '#fff',
		fontWeight: 'bold',
	},
	button: {
		width: '85%',
		height: 50,
		borderRadius: 25,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
