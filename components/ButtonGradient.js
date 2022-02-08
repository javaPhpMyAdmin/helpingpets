import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonGradient({ handleSubmit, isValid, titleButton, isSubmitting, thereIsPhoto }) {
	console.log('Button Gradient', thereIsPhoto)
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={handleSubmit}
			disabled={!isValid}
		>
			{
				(!isValid && thereIsPhoto) ? (
					<LinearGradient
						// Button Linear Gradient
						colors={['gray', 'black']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={[styles.button]}
					>
						<Text style={styles.text}>{titleButton}</Text>
					</LinearGradient>
				) : (
					<LinearGradient
						// Button Linear Gradient
						colors={['#FFB677', '#FF3CBD']}
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						style={styles.button}
					>
						{isSubmitting ? <Text style={styles.text}>ENVIANDO...</Text> : <Text style={styles.text}>{titleButton}</Text>}
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
		padding: 10,
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
		shadowColor: '#080808',
		shadowRadius: 15,
		shadowOffset: { width: 7, height: 7 },
		elevation: 5,
		shadowOpacity: 2,
	},
});
