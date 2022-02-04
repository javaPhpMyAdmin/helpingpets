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
} from 'react-native';
import FormNewMarker from './FormNewMarker';
import CameraContainer from './Camera';
import BoxPicture from './BoxPicture';
import { Icon } from 'react-native-elements';

export default function NewMarker() {
	const [photo1, setPhoto1] = useState(null);
	const [photo2, setPhoto2] = useState(null);
	const [photo3, setPhoto3] = useState(null);
	const [photo4, setPhoto4] = useState(null);
	const [showCamera, setShowCamera] = useState(false);
	const [errorNoPhoto, setErrorNoPhoto] = useState(true);
	const [addMorePictures, setAddMorePictures] = useState(false)

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
			keyboardVerticalOffset={Platform.OS === 'ios' ? -164 : 0}
		>
			<StatusBar style='auto' />
			<SafeAreaView style={styles.containerSafeArea}>
				{showCamera ? (

					< CameraContainer
						setPhoto1={setPhoto1}
						setShowCamera={setShowCamera}
						setErrorNoPhoto={setErrorNoPhoto}
						showCamera={showCamera}
					/>

				) :
					(
						<View
							style={{
								flex: 1,
								width: '100%',
								justifyContent: 'center',
								alignContent: 'center',
								alignItems: 'center',
								paddingTop: 20,
							}}
						>
							<View
								style={{
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

								}}
							>
								<TouchableOpacity>
									<View style={{ paddingRight: 10, paddingLeft: 15 }}>
										<Icon
											style={{
											}}
											name='arrow-left'
											color='black'
											type='font-awesome'
											size={30}
										/>
									</View>
								</TouchableOpacity>
								<View
									style={{
										height: 30,
										width: '80%',
										alignItems: 'center',
										justifyContent: 'center',
										// backgroundColor: 'red'
									}}
								>
									<Text
										style={{
											fontWeight: 'bold',
											fontSize: 20,
										}}
									>
										CREAR NUEVO MARCADOR
									</Text>
								</View>
							</View>
							<ScrollView
								style={{ width: '100%', top: 15, height: '100%' }}
							>
								<View
									style={{
										alignContent: 'center',
										alignItems: 'center',
										justifyContent: 'center',
										paddingTop: 10,
									}}
								>
									{photo1 ? (
										<View>
											<TouchableOpacity
												onPress={() => setPhoto1(null)}
											>
												<Icon
													style={{
														paddingBottom: 0,
														paddingRight: 5,
													}}
													name='times'
													color='red'
													type='font-awesome'
												/>
											</TouchableOpacity>
											<Image
												source={{ uri: photo1 }}
												style={{
													width: 300,
													height: 300,
													borderRadius: 20,
												}}
											/>
										</View>
									) : (
										<BoxPicture
											setShowCamera={setShowCamera}
											showCamera={showCamera}
											errorNoPhoto={errorNoPhoto}
										/>

									)}
									{
										photo1 &&
										<View>
											<TouchableOpacity onPress={() => setAddMorePictures(true)}>
												<Text>Agregar mas fotos?</Text>
											</TouchableOpacity>
										</View>
									}
									{
										addMorePictures &&
										<View>
											<BoxPicture
												setShowCamera={setShowCamera}
												showCamera={showCamera}
												errorNoPhoto={errorNoPhoto}
											/>
											<BoxPicture
												setShowCamera={setShowCamera}
												showCamera={showCamera}
												errorNoPhoto={errorNoPhoto}
											/>
										</View>
									}
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
