import { View, Text, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import ButtonGradient from './ButtonGradient';

const SignInSchema = Yup.object().shape({
	title: Yup.string().required('Por favor ingrese un titulo'),
	description: Yup.string().required('Por favor ingrese una descripcion'),
});

const FormNewMarker = () => {
	return (
		<Formik
			initialValues={{ title: '', description: '' }}
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
									errors.title && touched.title
										? 'red'
										: 'transparent',
								borderWidth:
									errors.title && touched.title ? 1 : 0.3,
							},
						]}
					>
						<TextInput
							onChangeText={handleChange('title')}
							style={{ width: '100%', paddingLeft: 10 }}
							name='title'
							placeholder='Ingresa un titulo'
							value={values.title}
							onBlur={handleBlur('title')}
							autoCorrect={false}
						/>
					</View>
					{errors.title && touched.title && (
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
							placeholder='Ingresa una descripcion'
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
						}}
					>
						<ButtonGradient
							handleSubmi
							t={handleSubmit}
							isValid={isValid}
							titleButton='AGREGAR'
						/>
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
		shadowColor: 'black',
		shadowRadius: 17,
		shadowOffset: { width: 6, height: 7 },
		elevation: 12,
		shadowOpacity: 2,
	},
	textError: {
		paddingTop: 15,
		left: 1,
		fontSize: 16,
		paddingLeft: 3,
		color: 'red',
	},
});
