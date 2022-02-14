import { Formik } from 'formik';
import {
	Platform,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import { View } from 'react-native';
import * as Yup from 'yup';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import GoogleButton from './GoogleButton';
import { LinearGradient } from 'expo-linear-gradient';
// import { MotiView } from 'moti';

const SignInSchema = Yup.object().shape({
	email: Yup.string()
		.email('Ingrese un email válido')
		.required('Por favor ingrese un email'),
	password: Yup.string().required('Por favor ingrese su contraseña'),
});

const FormLogin = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View style={{ alignItems: 'center', justifyContent: 'space-between', height: 320, backgroundColor: '#DEE9F7' }}>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={SignInSchema}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
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
				}) => (

					<>
						<View
							style={[
								styles.textInput,
								{
									justifyContent: 'space-around',
									flexDirection: 'row',
									borderColor:
										errors.email && touched.email
											? 'red'
											: 'white',
									borderWidth:
										errors.email && touched.email
											? 1
											: 1,
								}
							]}
						>
							<TextInput
								onChangeText={handleChange('email')}
								style={{ width: '100%', paddingLeft: 10 }}
								name='email'
								placeholder='Ingresa tu email'
								value={values.email}
								onBlur={handleBlur('email')}
								keyboardType='email-address'
								autoCorrect={false}
							/>
							{!errors.email /*&& touched.email*/ ? (
								<Icon
									style={{ paddingBottom: 0, right: 25 }}
									name='check'
									color='green'
									type='font-awesome'
								/>
							) : (
								<Icon
									style={{ paddingBottom: 0, paddingRight: 15 }}
									name='times'
									color='red'
									type='font-awesome'
								/>
							)}
						</View>
						{errors.email && touched.email ? (
							<Text style={styles.textError}>{errors.email}</Text>
						) : null}
						<View
							style={[
								styles.textInput,
								{
									justifyContent: 'space-around',
									flexDirection: 'row',
									borderColor:
										errors.password && touched.password
											? 'red'
											: 'white',
									borderWidth:
										errors.password && touched.password
											? 1
											: 1,
								}
							]}
						>
							<TextInput
								onChangeText={handleChange('password')}
								style={{ width: '100%', paddingLeft: 10 }}
								name='password'
								placeholder='Ingresa tu contraseña'
								value={values.password}
								secureTextEntry={!showPassword}
								onBlur={handleBlur('password')}
							/>
							{showPassword ? (
								<TouchableWithoutFeedback
									onPress={() => setShowPassword(!showPassword)}
								>
									<Icon
										style={{
											paddingBottom: 0,
											paddingRight: 15,
										}}
										name='eye'
										color='black'
										type='font-awesome'
									/>
								</TouchableWithoutFeedback>
							) : (
								<TouchableWithoutFeedback
									onPress={() => setShowPassword(!showPassword)}
								>
									<Icon
										style={{
											paddingBottom: 0,
											paddingRight: 15,
										}}
										name='eye-slash'
										color='black'
										type='font-awesome'
									/>
								</TouchableWithoutFeedback>
							)}
						</View>

						{errors.password && touched.password && (
							<Text style={styles.textError}>{errors.password}</Text>
						)}
						<View
							style={{
								width: '80%',
								height: 1,
								borderBottomColor: 'red',
								borderBottomWidth: 1.6,
								paddingTop: 5,
							}}
						><Text></Text></View>
						<View
							// from={{
							// 	scale: 0,
							// 	translateX: -10,
							// }}
							// animate={{
							// 	scale: 1,
							// 	translateX: 0,
							// }}
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								bottom: 30,
								left: 95
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
											<Text style={styles.text}>INGRESAR</Text>
										</LinearGradient>
									) : (
										<LinearGradient
											// Button Linear Gradient
											colors={['#FFB677', '#FF3CBD']}
											start={{ x: 0, y: 0 }}
											end={{ x: 1, y: 1 }}
											style={styles.button}
										>
											{isSubmitting ? <Text style={styles.text}>INGRESANDO...</Text> : <Text style={styles.text}>INGRESAR</Text>}
										</LinearGradient>
									)
								}
							</TouchableOpacity>
						</View>
					</>
				)}
			</Formik>
			<View style={{ right: 195, paddingRight: 0, bottom: 40, position: 'absolute', width: '40%', alignItems: 'center' }}>
				<GoogleButton />
			</View>
		</View>
	);
};

export default FormLogin;

const styles = StyleSheet.create({
	textInput: {
		paddingStart: 15,
		width: '95%',
		height: 60,
		padding: 15,
		marginTop: 5,
		bottom: 0,
		borderRadius: 30,
		backgroundColor: '#DEE9F7',
		shadowColor: Platform.OS === 'ios' ? '#99c4db' : 'black',
		shadowRadius: 6,
		shadowOffset: { width: 10, height: 8 },
		elevation: 8,
		shadowOpacity: 1,
	},

	textError: {
		paddingTop: 5,
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
		shadowColor: Platform.OS === 'ios' ? '#72a0b9' : 'black',
		shadowRadius: 6,
		shadowOffset: { width: -10, height: -18 },
		elevation: Platform.OS === 'ios' ? null : 8,
		shadowOpacity: 1,
	},
});
