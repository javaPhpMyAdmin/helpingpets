import React, { useEffect, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
	StatusBar,
	Modal,
} from 'react-native';
import FormNewMarker from './FormNewMarker';
import CameraContainer from './Camera';
import BoxTakePicture from './BoxTakePicture';
import { Icon } from 'react-native-elements';
import BoxShowImage from './BoxShowImage';
import { useNavigation } from '@react-navigation/native';

export default function NewMarker() {
	const [photo1, setPhoto1] = useState(false);
	const [showCamera, setShowCamera] = useState(false);

	const [showCamera2, setShowCamera2] = useState(false);
	const [photo2, setPhoto2] = useState(null);

	const [showCamera3, setShowCamera3] = useState(false);
	const [photo3, setPhoto3] = useState(null);

	const [errorNoPhoto, setErrorNoPhoto] = useState(true);
	const [addMorePictures, setAddMorePictures] = useState(false);
	const [addMorePicturesAux, setAddMorePicturesAux] = useState(false)

	const [errorNoPhotoSubmit, setErrorNoPhotoSubmit] = useState(false)

	const navigation = useNavigation()

	return (
		<KeyboardAvoidingView
			enabled
			style={{ flex: 1 }}
			behavior={Platform.OS === 'ios' ? 'padding' : ''}
			keyboardVerticalOffset={Platform.OS === 'ios' ? -50 : 50}
		>
			<StatusBar style='auto' />
			<SafeAreaView style={styles.containerSafeArea}>
				{showCamera ? (
					<CameraContainer
						setPhoto={setPhoto1}
						setShowCamera={setShowCamera}
						setErrorNoPhoto={setErrorNoPhoto}
						setErrorNoPhotoSubmit={setErrorNoPhotoSubmit}
					/>
				) : (
					<View style={styles.container}>
						<View style={styles.headerContainer}>
							<TouchableOpacity onPress={() => navigation.goBack('HomeScreen')}>
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

						<ScrollView
							scrollsToTop={true}
							style={styles.scrollView}
							bounces={false}
						>
							<View style={styles.containerOfScrollView}>
								{
									photo1 ? <BoxShowImage setPhoto={setPhoto1} photo={photo1} />
										: (
											<BoxTakePicture
												setShowCamera={setShowCamera}
												showCamera={showCamera}
												errorNoPhoto={errorNoPhoto}
											/>
										)
								}

								{
									photo1 && (
										<View>
											<TouchableOpacity
												style={{ display: addMorePictures ? 'none' : null }}
												disabled={addMorePictures}
												onPress={() => {
													setAddMorePicturesAux(true)
													setAddMorePictures(true)
												}}
											>
												<View style={{ flexDirection: 'row' }}>
													<Text style={styles.addMore}>AGREGAR FOTOS</Text>
													<Icon
														style={{ padding: 5, paddingTop: 8, paddingLeft: 10 }}
														name='plus'
														color='black'
														type='font-awesome'
														size={22}
													/>
												</View>
											</TouchableOpacity>
										</View>
									)
								}
								{
									(errorNoPhotoSubmit) && <Text style={styles.textError}>{errorNoPhotoSubmit}</Text>
								}
								{
									(addMorePictures && photo2) && <BoxShowImage setPhoto={setPhoto2} photo={photo2} />
								}
								{
									(addMorePicturesAux && !photo2) && (
										<BoxTakePicture
											setShowCamera={setShowCamera2}
											showCamera={showCamera2}
											errorNoPhoto={errorNoPhoto}
										/>
									)
								}
								{
									(addMorePictures && photo3) && <BoxShowImage setPhoto={setPhoto3} photo={photo3} />
								}
								{
									(addMorePicturesAux && !photo3) && (
										<BoxTakePicture
											setShowCamera={setShowCamera3}
											showCamera={showCamera3}
											errorNoPhoto={errorNoPhoto}
										/>
									)
								}
								{
									showCamera2 && (
										<Modal animationType='slide' style={styles.modal}>
											<CameraContainer
												setPhoto={setPhoto2}
												setShowCamera={setShowCamera2}
												setErrorNoPhoto={setErrorNoPhoto}
											/>
										</Modal>
									)
								}
								{
									showCamera3 && (
										<Modal animationType='slide' style={styles.modal}>
											<CameraContainer
												setPhoto={setPhoto3}
												setShowCamera={setShowCamera3}
												setErrorNoPhoto={setErrorNoPhoto}
											/>
										</Modal>
									)
								}
								<FormNewMarker
									photo1={photo1}
									photo2={photo2}
									photo3={photo3}
									setError={setErrorNoPhotoSubmit}
									setPhoto1={setPhoto1}
									setPhoto2={setPhoto2}
									setPhoto3={setPhoto3}
								/>
							</View>
						</ScrollView>

					</View>
				)
				}
			</SafeAreaView >
		</KeyboardAvoidingView >

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
		bottom: 10
	},
	headerContainer: {
		flexDirection: 'row',
		shadowColor: 'blue',
		shadowRadius: 10,
		shadowOffset: { width: -10, height: -10 },
		elevation: 35,
		shadowOpacity: 1,
		width: '95%',
		overflow: 'hidden',
		height: 50,
		borderRadius: 15,
		backgroundColor: '#fff',
		alignItems: 'center',
		// borderWidth: 1
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
		bottom: 10,
	},
	containerOfScrollView: {
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 10,
		bottom: 10
	},
	iconClose: {
		paddingBottom: 10,
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
	addMore: {
		fontSize: 20,
		top: 5,
		fontWeight: 'bold',
	},
	modal: {
		flex: 1,
		width: '95%',
		height: '90%',
	},
	textError: {
		paddingTop: 5,
		left: 1,
		fontSize: 14,
		paddingLeft: 3,
		color: 'red',
	},
});
