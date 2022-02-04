import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	StyleSheet,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const ShowPhoto = ({ photo, setShowCamera, setPhoto }) => {
	console.log('FOTO CAMARA DOS', photo);
	return (
		<View>
			{photo ? (
				<View>
					<TouchableOpacity onPress={() => setPhoto(null)}>
						<Icon
							style={styles.iconClose}
							name='times'
							color='red'
							type='font-awesome'
						/>
					</TouchableOpacity>
					<Image source={{ uri: photo }} style={styles.photoTook} />
				</View>
			) : (
				<View
					style={[
						styles.textInput,
						{
							justifyContent: 'space-around',
							flexDirection: 'row',
							height: 100,
							borderColor: 'transparent',
							borderWidth: 0.3,
						},
					]}
				>
					<TextInput
						style={{ width: '100%', paddingLeft: 19 }}
						placeholder='Toma una foto'
						multiline={true}
						numberOfLines={4}
					/>
					<TouchableOpacity
						style={{ paddingTop: 21, paddingRight: 17 }}
						onPress={() => setShowCamera(true)}
					>
						<Icon
							style={{ paddingBottom: 0, paddingRight: 5 }}
							name='camera'
							color='black'
							type='font-awesome'
						/>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default ShowPhoto;

const styles = StyleSheet.create({
	textInput: {
		paddingStart: 15,
		width: '80%',
		height: 54,
		padding: 15,
		marginTop: 20,
		borderRadius: 30,
		backgroundColor: '#fff',
		shadowColor: 'black',
		shadowRadius: 17,
		shadowOffset: { width: 6, height: 7 },
		elevation: 12,
		shadowOpacity: 2,
	},
});
