import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
	StatusBar,
	Modal,
} from 'react-native';
import FormNewMarker from './FormNewMarker';
import CameraContainer from './Camera';
import BoxPicture from './BoxPicture';
import { Icon } from 'react-native-elements';
import ShowPhoto from './ShowPhoto';

export default function NewMarker() {
	const [photo1, setPhoto1] = useState(null);

	const [photo4, setPhoto4] = useState(null);
	const [showCamera, setShowCamera] = useState(false);

	const [showCamera2, setShowCamera2] = useState(false);
	const [photo2, setPhoto2] = useState(null);

	const [showCamera3, setShowCamera3] = useState(false);
	const [photo3, setPhoto3] = useState(null);

	const [errorNoPhoto, setErrorNoPhoto] = useState(true);
	const [addMorePictures, setAddMorePictures] = useState(false);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
			keyboardVerticalOffset={Platform.OS === 'ios' ? -164 : 0}
		>
			<StatusBar style='auto' />
			<SafeAreaView style={styles.containerSafeArea}>
				{showCamera ? (
					<CameraContainer
						setPhoto={setPhoto1}
						setShowCamera={setShowCamera}
						setErrorNoPhoto={setErrorNoPhoto}
					/>
				) : (
					<View style={styles.container}>
						<View style={styles.headerContainer}>
							<TouchableOpacity>
								<View style={styles.containerArrowIcon}>
									<Icon
										name='arrow-left'
										color='black'
										type='font-awesome'
										size={30}
									/>
								</View>
							</TouchableOpacity>
							<View style={styles.containerTitle}>
								<Text style={styles.headerTitle}>
									CREAR NUEVO MARCADOR
								</Text>
							</View>
						</View>
						<ScrollView style={styles.scrollView}>
							<View style={styles.containerOfScrollView}>
								{photo1 ? (
									<View>
										<TouchableOpacity
											onPress={() => setPhoto1(null)}
										>
											<Icon
												style={styles.iconClose}
												name='times'
												color='red'
												type='font-awesome'
											/>
										</TouchableOpacity>
										<Image
											source={{ uri: photo1 }}
											style={styles.photoTook}
										/>
									</View>
								) : (
									<BoxPicture
										setShowCamera={setShowCamera}
										showCamera={showCamera}
										errorNoPhoto={errorNoPhoto}
									/>
								)}
								{photo1 && (
									<View>
										<TouchableOpacity
											disabled={addMorePictures}
											onPress={() =>
												setAddMorePictures(true)
											}
										>
											<Text>Agregar mas fotos?</Text>
										</TouchableOpacity>
									</View>
								)}
								{addMorePictures && (
									<ShowPhoto
										photo={photo2}
										setShowCamera={setShowCamera2}
										setPhoto={setPhoto2}
									/>
								)}
								{/* {addMorePictures || !photo3 ? (
									<View>
										<BoxPicture
											setShowCamera={setShowCamera3}
											showCamera={showCamera3}
										/>
									</View>
								) : (
									<View>
										<TouchableOpacity
											onPress={() => setPhoto3(null)}
										>
											<Icon
												style={styles.iconClose}
												name='times'
												color='red'
												type='font-awesome'
											/>
										</TouchableOpacity>
										<Image
											source={{ uri: photo3 }}
											style={styles.photoTook}
										/>
									</View>
								)} */}
								{showCamera2 && (
									<Modal
										style={{
											flex: 1,
											width: '95%',
											height: '90%',
										}}
									>
										<CameraContainer
											setPhoto={setPhoto2}
											setShowCamera={setShowCamera2}
											setErrorNoPhoto={setErrorNoPhoto}
										/>
									</Modal>
								)}
								{showCamera3 && (
									<Modal
										style={{
											flex: 1,
											width: '95%',
											height: '90%',
										}}
									>
										<CameraContainer
											setPhoto={setPhoto3}
											setShowCamera={setShowCamera3}
											setErrorNoPhoto={setErrorNoPhoto}
										/>
									</Modal>
								)}
								<FormNewMarker />
							</View>
						</ScrollView>
					</View>
				)}
			</SafeAreaView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	containerSafeArea: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#rgb(255, 255, 255)',
	},
	container: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		paddingTop: 20,
	},
	headerContainer: {
		flexDirection: 'row',
		shadowColor: 'blue',
		shadowRadius: 1,
		shadowOffset: { width: 0, height: 0 },
		elevation: 15,
		shadowOpacity: 1,
		width: '95%',
		overflow: 'hidden',
		height: 50,
		borderRadius: 15,
		backgroundColor: 'white',
		alignItems: 'center',
	},
	containerArrowIcon: {
		paddingRight: 10,
		paddingLeft: 15,
	},
	containerTitle: {
		height: 30,
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	scrollView: {
		width: '100%',
		top: 15,
		height: '100%',
	},
	containerOfScrollView: {
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 10,
	},
	iconClose: {
		paddingBottom: 0,
		paddingRight: 5,
	},
	photoTook: {
		width: 300,
		height: 300,
		borderRadius: 20,
	},
	photo: {
		width: '95%',
		height: '80%',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 15,
		borderRadius: 40,
	},
	modalContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonsContainer: {
		width: '100%',
		paddingBottom: 15,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
});
