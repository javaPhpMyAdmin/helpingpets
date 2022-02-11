import { View, Text, StyleSheet, TextInput, Platform, TouchableOpacity } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LinearGradient } from 'expo-linear-gradient';

const SignInSchema = Yup.object().shape({
	title: Yup.string().required('Por favor ingrese un título').min(20, 'Ingrese al menos 20 caracteres'),
	description: Yup.string().required('Por favor ingrese una descripción').min(50, 'Ingrese al menos 50 caracteres'),
});

const initialValues = { title: '', description: '' }

const FormNewMarker = ({ photo1, photo2, photo3, setError, setPhoto1, setPhoto2, setPhoto3 }) => {
	console.log('Formi rendering');
	const helperSubmit = () => {
		if (photo1) {
			alert('LOGICA CONTRA BACKEND Y FOTO', photo1)
			setPhoto1(null)
			setPhoto2(null)
			setPhoto3(null)
		} else {
			setError('Debe proporcionar al menos una fotografía')
		}
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={SignInSchema}
			onSubmit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
					helperSubmit(values)
				}, 400);
				values.title = ''
				values.description = ''
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				isValid,
				resetForm
			}) => (
				<>
					<View
						style={[
							styles.textInput,
							{
								justifyContent: 'space-around',
								flexDirection: 'row',
								borderColor:
									errors.title
										? 'red'
										: 'transparent',
								borderWidth:
									errors.title ? 1 : 0.3,
							},
						]}
					>
						<TextInput
							onChangeText={handleChange('title')}
							style={{ width: '100%', paddingLeft: 10 }}
							name='title'
							placeholder='Ingresa un título'
							value={values.title}
							onBlur={handleBlur('title')}
							autoCorrect={false}
							maxLength={60}
						/>
					</View>
					{errors.title && (
						<Text style={styles.textError}>{errors.title}</Text>
					)}
					<View
						style={[
							styles.textInput,
							{
								justifyContent: 'space-around',
								flexDirection: 'row',
								height: 250,
								borderColor:
									errors.description && touched.description
										? 'red'
										: 'transparent',
								borderWidth:
									errors.description && touched.description
										? 1
										: 0.3,
							},
						]}
					>
						<TextInput
							onChangeText={handleChange('description')}
							style={{
								width: '100%',
								paddingLeft: 10,
								textAlignVertical: 'top',
							}}
							name='description'
							placeholder='Ingresa una descripción'
							value={values.description}
							onBlur={handleBlur('description')}
							multiline={true}
							numberOfLines={4}
							maxLength={400}
							autoCorrect={false}
						/>
					</View>
					{errors.description && touched.description && (
						<Text style={styles.textError}>
							{errors.description}
						</Text>
					)}
					<View
						style={{
							alignContent: 'center',
							justifyContent: 'center',
							top: 0,
							bottom: 10
						}}
					>
						<TouchableOpacity
							style={styles.container}
							onPress={handleSubmit}
							disabled={!isValid}
						>
							{
								(!isValid) ? (
									<LinearGradient
										// Button Linear Gradient
										colors={['gray', 'black']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 1 }}
										style={[styles.button]}
									>
										<Text style={styles.text}>AGREGAR</Text>
									</LinearGradient>
								) : (
									<LinearGradient
										// Button Linear Gradient
										colors={['#FFB677', '#FF3CBD']}
										start={{ x: 0, y: 0 }}
										end={{ x: 1, y: 1 }}
										style={styles.button}
									>
										{isSubmitting ? <Text style={styles.text}>AGREGANDO...</Text> : <Text style={styles.text}>AGREGAR</Text>}
									</LinearGradient>
								)
							}
						</TouchableOpacity>
					</View>
				</>
			)}
		</Formik>
	);
};

export default FormNewMarker;

const styles = StyleSheet.create({
	textInput: {
		paddingStart: 15,
		width: '80%',
		height: 54,
		padding: 15,
		marginTop: 20,
		borderRadius: 30,
		backgroundColor: '#fff',
		shadowColor: Platform.OS === 'ios' ? 'gray' : 'black',
		shadowRadius: 4,
		shadowOffset: { width: 2, height: 5 },
		elevation: 8,
		shadowOpacity: 1,
	},
	textError: {
		paddingTop: 15,
		left: 1,
		fontSize: 16,
		paddingLeft: 3,
		color: 'red',
	},
	container: {
		alignItems: 'center',
		width: 220,
		marginTop: 0,
		padding: 10,
	},
	button: {
		width: '85%',
		height: 50,
		borderRadius: 25,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: Platform.OS === 'ios' ? '#72a0b9' : 'black',
		shadowRadius: 1,
		shadowOffset: { width: 8, height: 8 },
		elevation: Platform.OS === 'ios' ? null : 8,
		shadowOpacity: 1,
	},
	text: {
		fontSize: 19,
		color: '#fff',
		fontWeight: 'bold',
	},
});
