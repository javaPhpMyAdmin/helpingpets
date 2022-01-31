import {
	View,
	Text,
	Dimensions,
	StyleSheet,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
	StatusBar,
	Image,
	TouchableOpacity
} from 'react-native';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import FormLogin from '../components/FormLogin';
import SvgImage from '../components/SvgImage';

import { Icon } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');

const LoginScreen = () => {

	const [viewHeight] = useState(new Animated.ValueXY({ x: 0, y: 50 }));
	const [opacityView] = useState(new Animated.Value(0));
	const [logo] = useState(new Animated.ValueXY({ x: 170, y: 150 }));

	useEffect(() => {
		const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
		const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)

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
			keyboardDidShowListener.remove()
			keyboardDidHideListener.remove()
		}
	}, []);

	const keyboardDidShow = () => {
		Animated.parallel([
			Animated.spring(logo.x, {
				toValue: 70,
				duration: 100,
				bounciness: 10,
				useNativeDriver: false
			}),
			Animated.spring(logo.y, {
				toValue: 50,
				duration: 100,
				bounciness: 10,
				useNativeDriver: false
			}),
		]).start();
	}

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
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
			keyboardVerticalOffset={Platform.OS === 'ios' ? -154 : 0}
		>
			<StatusBar style='black' />
			<TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
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
								paddingBottom: 60
							},
						]}
					>
						<Text style={styles.title}>Bienvenido</Text>
						<Text style={styles.subTitle}>
							Ingresa con tu cuenta
						</Text>
						<FormLogin />
						<View style={{ flexDirection: 'column', paddingTop: 10, justifyContent: 'center', width: width, alignItems: 'center' }}>
							<View style={{ paddingRight: 20 }}>
								<TouchableOpacity onPress={() => { }}>
									<Text style={{ color: 'black', paddingTop: 10, paddingRight: 0 }}>Olvido su contraseña</Text>
								</TouchableOpacity>
							</View>
							<View>
								<TouchableOpacity style={{ flexDirection: 'row', paddingRight: 10 }} onPress={() => { }}>
									<Text style={{ color: 'black', paddingTop: 10, paddingRight: 7 }}>Crear una cuenta</Text>
									<Icon
										style={{ paddingTop: 12 }}
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
		</KeyboardAvoidingView >
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#f1f1f1',
		justifyContent: 'flex-end',
		height: '100%',
	},
	container: {
		shadowColor: 'black',
		shadowRadius: 10,
		shadowOffset: { width: -8, height: -10 },
		shadowOpacity: 0.5,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: 'blue',
		borderTopLeftRadius: 40,
		borderTopRightRadius: 40,
		backgroundColor: '#f9f9f9',
		paddingBottom: 20,
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
	},
	containerSVG: {
		height: height / 1.78,
		width: width,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
