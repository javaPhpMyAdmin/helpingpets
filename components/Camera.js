import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { Icon } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');

const CameraContainer = ({ setPhoto, setShowCamera, setErrorNoPhoto }) => {
	const cameraRef = useRef(null);
	const [hasPermission, setHasPermission] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	const takePicture = async () => {
		if (cameraRef) {
			const picture = await cameraRef.current.takePictureAsync();
			if (picture) {
				setPhoto(picture.uri);
				setShowCamera(false);
				setErrorNoPhoto(false);
			}
		}
	};

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return (
			<Text style={{ color: 'gray' }}>
				No has permitido el acceso y uso de la camara
			</Text>
		);
	}

	return (
		<View style={{ flex: 1, width: width, height: height }}>
			<Camera
				ref={cameraRef}
				style={styles.camera}
				type={Camera.Constants.Type.back}
			>
				<TouchableOpacity
					style={styles.buttonCloseCamera}
					onPress={() => setShowCamera(false)}
				>
					<Icon
						name='times'
						type='font-awesome'
						color='red'
						size={40}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => takePicture()}
				>
					<Icon
						name='camera'
						type='font-awesome'
						color='white'
						size={40}
					/>
				</TouchableOpacity>
			</Camera>
		</View>
	);
};

export default CameraContainer;

const styles = StyleSheet.create({
	camera: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		height: '100%',
	},
	button: {
		position: 'absolute',
		right: 25,
		bottom: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonCloseCamera: {
		position: 'absolute',
		left: 25,
		bottom: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
