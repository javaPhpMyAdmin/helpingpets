import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { Dimensions, StyleSheet, Text, TextInput, TouchableWithoutFeedback } from "react-native";
import { View } from "react-native";
import ButtonGradient from "./ButtonGradient";
import * as Yup from "yup";
import { Icon } from 'react-native-elements';
import { useState } from "react";
import GoogleButton from "./GoogleButton";
const { width, height } = Dimensions.get('screen');

const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Ingrese un email valido').required('Por favor ingrese un email'),
    password: Yup.string().required('Por favor ingrese su contraseña')
})



const FormLogin = () => {
    const navigation = useNavigation()
    const [showPassword, setShowPassword] = useState(false);
    return (
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
                isValid
            }) => (
                <>
                    <View style={[styles.textInput,
                    {
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        borderColor: errors.email ? 'red' : 'transparent',
                        borderWidth: errors.email ? 1 : 0.3
                    }]}>
                        <TextInput
                            onChangeText={handleChange('email')}
                            style={{ width: '100%', paddingLeft: 10 }}
                            name='email'
                            placeholder='Ingresa tu email'
                            value={values.email}
                            onBlur={handleBlur('email')}
                            keyboardType="email-address"
                            autoCorrect={false}

                        />
                        {

                            (!errors.email && touched.email) ? (
                                <Icon
                                    style={{ paddingBottom: 0, paddingRight: 5 }}
                                    name='check'
                                    color='green'
                                    type='font-awesome'
                                />
                            ) : (
                                <Icon
                                    style={{ paddingBottom: 0, paddingRight: 5 }}
                                    name='times'
                                    color='red'
                                    type='font-awesome'
                                />
                            )
                        }
                    </View>

                    {(errors.email) ? <Text style={styles.textError}>{errors.email}</Text> : null}

                    <View style={[
                        styles.textInput,
                        {
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                            borderColor: (errors.password && touched.password) ? 'red' : 'transparent',
                            borderWidth: (errors.password && touched.password) ? 1 : 0.3,
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
                        {
                            showPassword ? (
                                <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                                    <Icon
                                        style={{ paddingBottom: 0, paddingRight: 5 }}
                                        name='eye'
                                        color='black'
                                        type='font-awesome'
                                    />
                                </TouchableWithoutFeedback>

                            ) : (
                                <TouchableWithoutFeedback onPress={() => setShowPassword(!showPassword)}>
                                    <Icon
                                        style={{ paddingBottom: 0, paddingRight: 5 }}
                                        name='eye-slash'
                                        color='black'
                                        type='font-awesome'
                                    />
                                </TouchableWithoutFeedback>
                            )

                        }

                    </View>
                    {(errors.password && touched.password) && <Text style={styles.textError}>{errors.password}</Text>}
                    <View
                        style={{
                            width: '80%',
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.6,
                            paddingTop: 25,
                            paddingBottom: 0
                        }}
                    >
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        top: 0,

                    }}
                    >
                        <View style={{ left: 20, paddingRight: 15 }}>
                            <GoogleButton />
                        </View>
                        <View style={{ right: 89 }}>
                            <ButtonGradient
                                handleSubmit={handleSubmit}
                                isValid={isValid}
                            />
                        </View>
                    </View>
                </>

            )
            }
        </ Formik >
    )
}


export default FormLogin

const styles = StyleSheet.create({
    textInput: {
        paddingStart: 15,
        width: '80%',
        height: 54,
        padding: 15,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        shadowColor: 'gray',
        shadowRadius: 10,
        shadowOffset: { width: 6, height: 7 },
        elevation: 25,
        shadowOpacity: 0.5,
    },

    textError: {
        paddingTop: 15,
        fontSize: 16,
        paddingLeft: 3,
        color: 'red'
    },
});