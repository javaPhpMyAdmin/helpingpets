import { useController, useForm } from 'react-hook-form';
import { View, Text, Button, TextInput, Dimensions } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const Width = Dimensions.get('screen').width;

const Input = ({ name, control }) => {
	const { field } = useController({
		control,
		defaultValue: '',
		name,
	});
	return (
		<TextInput
			style={tw`border w-full h-10 px-3 mb-5 rounded-md`}
			value={field.value}
			onChangeText={field.onChange}
		/>
	);
};

const LoginScreen = () => {
	const { control, handleSubmit } = useForm();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};

	return (
		<View
			style={tw`flex bg-gray-400 h-full items-center justify-center rounded`}
		>
			<View
				style={tw`border relative px-4 pt-7 pb-8 bg-white shadow-xl w-3/4 h-3/6 mx-auto rounded-lg shadow-slate-50`}
			>
				<Text style={tw`py-3`}>Email</Text>
				<Input name='email' control={control} />
				<Text style={tw`py-3`}>Contraseña</Text>
				<Input name='contraseña' control={control} />
				<Button
					style={tw`mt-5 bg-gray-200 shadow-xl text-white uppercase font-semibold px-14 flex rounded-md w-2/3`}
					title='Ingresar'
					onPress={handleSubmit(onSubmit)}
				/>
			</View>
		</View>
	);
};

export default LoginScreen;
