import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	Image,
	TouchableOpacity,
} from 'react-native';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import FormLogin from '../components/FormLogin';
import SvgImage from '../components/SvgImage';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'

const { width, height } = Dimensions.get('screen');

const LoginScreen = () => {
	const [viewHeight] = useState(new Animated.ValueXY({ x: 0, y: 50 }));
	const [opacityView] = useState(new Animated.Value(0));
	const [logo] = useState(new Animated.ValueXY({ x: 170, y: 150 }));

	const navigation = useNavigation()

	const letterAnimation = {
		0: { opacity: 0, translateY: -42, },
		1: { opacity: 1, translateY: 0, }
	}

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			keyboardDidShow,
		);
		const keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			keyboardDidHide,
		);

		Animated.parallel([
			Animated.spring(viewHeight.y, {
				toValue: 0,
				duration: 1500,
				speed: 4,
				useNativeDriver: true,
				bounciness: 26,
			}),
			Animated.timing(opacityView, {
				toValue: 1,
				duration: 1000,
				speed: 4,
				useNativeDriver: true,
			}),
		]).start();

		return () => {
			keyboardDidShowListener.remove();
			keyboardDidHideListener.remove();
		};
	}, []);

	const keyboardDidShow = () => {
		Animated.parallel([
			Animated.spring(logo.x, {
				toValue: 70,
				duration: 100,
				bounciness: 10,
				useNativeDriver: false,
			}),
			Animated.spring(logo.y, {
				toValue: 50,
				duration: 100,
				bounciness: 10,
				useNativeDriver: false,
			}),
		]).start();
	};

	const keyboardDidHide = () => {
		Animated.parallel([
			Animated.timing(logo.x, {
				toValue: 120,
				duration: 100,
				speed: 4,
				useNativeDriver: false,
				bounciness: 10,
			}),
			Animated.timing(logo.y, {
				toValue: 150,
				duration: 100,
				speed: 4,
				useNativeDriver: false,
				bounciness: 10,
			}),
		]).start();
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
			keyboardVerticalOffset={Platform.OS === 'ios' ? -154 : 0}
		>
			<TouchableWithoutFeedback
				style={{ flex: 1 }}
				onPress={Keyboard.dismiss}
			>
				<View style={styles.mainContainer}>
					{/* <Animated.View style={{ zIndex: 1, position: 'absolute', left: width / 2.99, bottom: (height / 5.40), top: logo.y }}>
						<Animated.Image style={{ width: logo.x, height: logo.y, position: 'absolute', borderRadius: 100 }} source={require('../assets/patas.jpg')} />
					</Animated.View> */}
					<View style={styles.containerSVG}>
						<SvgImage />
					</View>
					<Animated.View
						style={[
							styles.container,
							{
								transform: [{ translateY: viewHeight.y }],
								opacity: opacityView,
							},
						]}
					>
						<View
							style={[styles.title, { flexDirection: 'row' }]}>
							{'Bienvenido'.split('').map((letter, index) => {
								return (
									<Animatable.Text
										useNativeDriver
										animation={letterAnimation}
										delay={300 + index * 50}
										key={`${letter}-${index}`}
										style={styles.heading}
									>
										{letter}
									</Animatable.Text>)
							}
							)}
						</View>
						<Text style={styles.subTitle}>
							Ingresa con tu cuenta
						</Text>
						<FormLogin />
						<View
							style={{
								flexDirection: 'column',
								paddingTop: 10,
								justifyContent: 'center',
								width: width,
								alignItems: 'center',
								bottom: 30,
							}}
						>
							<View style={{ paddingRight: 20 }}>
								<TouchableOpacity onPress={() => { }}>
									<Text
										style={{
											color: 'black',
											paddingTop: 10,
											paddingRight: 0,
										}}
									>
										Olvido su contraseña
									</Text>
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity
									style={{
										flexDirection: 'row',
										paddingRight: 10,
									}}
									onPress={() => { navigation.navigate('NewAccount') }}
								>
									<Text
										style={{
											color: 'black',
											paddingTop: 10,
											paddingRight: 7,
										}}
									>
										Crear una cuenta
									</Text>
									<Icon
										style={{ paddingTop: 13 }}
										name='plus'
										color='black'
										type='font-awesome'
										size={15}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</Animated.View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#0000',
		justifyContent: 'flex-end',
		height: '100%',
	},
	container: {
		shadowColor: 'gray',
		shadowRadius: 5,
		shadowOffset: { width: 0, height: -5 },
		shadowOpacity: 1,
		elevation: 5,
		alignItems: 'center',
		justifyContent: 'center',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		backgroundColor: '#DEE9F7',
	},
	title: {
		paddingTop: 20,
		fontSize: 40,
		color: 'black',
		fontWeight: 'bold',
	},
	subTitle: {
		fontSize: 20,
		color: 'gray',
		paddingBottom: 20
	},
	containerSVG: {
		height: height / 1.78,
		width: width,
		justifyContent: 'center',
		alignItems: 'center',
	},
	heading: {
		color: 'black',
		fontSize: 32,
		textTransform: 'uppercase',
		fontWeight: '800',
		letterSpacing: 2,
	}
});
