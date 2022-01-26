import { View, Text, TextInput, Dimensions, StyleSheet, StatusBar, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
import { TouchableWithoutFeedback } from 'react-native';
import ButtonGradient from '../components/ButtonGradient';
import GoogleButton from '../components/GoogleButton';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

function SvgTop() {
	return (
		<Svg
			width={500}
			height={324}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				d="M297.871 315.826c73.405 13.896 165.338-13.964 202.129-29.63V230H1.326v63.5c69.15-42.913 204.789 4.957 296.545 22.326z"
				fill="url(#prefix__paint0_linear_103:6)"
				fillOpacity={0.5}
			/>
			<Path
				d="M237.716 308.627C110.226 338.066 30.987 318.618 0 304.77V0h500v304.77c-43.161-12.266-134.794-25.581-262.284 3.857z"
				fill="url(#prefix__paint1_linear_103:6)"
			/>
			<Defs>
				<LinearGradient
					id="prefix__paint0_linear_103:6"
					x1={492.715}
					y1={231.205}
					x2={480.057}
					y2={364.215}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FFB677" />
					<Stop offset={1} stopColor="#FF3CBD" />
				</LinearGradient>
				<LinearGradient
					id="prefix__paint1_linear_103:6"
					x1={7.304}
					y1={4.155}
					x2={144.016}
					y2={422.041}
					gradientUnits="userSpaceOnUse"
				>
					<Stop stopColor="#FFB677" />
					<Stop offset={1} stopColor="#FF3CBD" />
				</LinearGradient>
			</Defs>
		</Svg>
	)
}

const LoginScreen = () => {
	const navigation = useNavigation()

	const navi = () => navigation.navigate('Home')
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}
			keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styles.mainContainer}>
					<View style={styles.containerSVG}>
						<SvgTop />
					</View>
					<View
						style={styles.container}
					>

						<Text style={styles.title}>Bienvenido</Text>
						<Text style={styles.subTitle}>Ingresa con tu cuenta</Text>
						{/* <Text style={styles.textEmail}>Email</Text> */}
						<TextInput style={styles.textInput} name='email' placeholder='Ingresa tu email' />
						{/* <Text style={styles.textPassword}>Contraseña</Text> */}
						<TextInput style={styles.textInput} name='password' placeholder='Ingresa tu contraseña' />
						<ButtonGradient navi={navi} />
						<GoogleButton navi={navi} />
					</View>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: '#f1f1f1',

		justifyContent: "flex-end"
	},
	container: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 40,
		color: '#000',
		fontWeight: 'bold'
	},
	subTitle: {
		fontSize: 20,
		color: 'gray'
	},
	textInput: {
		paddingStart: 15,
		width: '80%',
		height: 54,
		padding: 15,
		marginTop: 20,
		borderRadius: 30,
		backgroundColor: '#fff'
	},
	containerSVG: {
		width: width,
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	textEmail: {
		fontSize: 20,
		paddingLeft: 3,
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	textPassword: {}
})
