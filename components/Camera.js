import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, TextInput, Dimensions, ScrollView } from 'react-native';
import { Camera, Constants } from 'expo-camera';
import { Icon } from 'react-native-elements';
import { Formik } from "formik";
import * as Yup from "yup";
import ButtonGradient from './ButtonGradient';
const { width, height } = Dimensions.get('screen');

const statusBarHeight = Constants.statusBarHeight

const SignInSchema = Yup.object().shape({
    title: Yup.string().required('Por favor ingrese un titulo'),
    description: Yup.string().required('Por favor ingrese una descripcion')
})

export default function App() {
    const cameraRef = useRef(null)
    const [hasPermission, setHasPermission] = useState(null);
    const [photo, setPhoto] = useState(null)
    const [showCamera, setShowCamera] = useState(false);
    const [errorNoPhoto, setErrorNoPhoto] = useState(true);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    const takePicture = async () => {
        if (cameraRef) {
            const picture = await cameraRef.current.takePictureAsync()
            if (picture) {
                setPhoto(picture.uri)
                setShowCamera(!showCamera)
                setErrorNoPhoto(false)
            }

        }
    }

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text style={{ color: 'gray' }}>No has permitido el acceso y uso de la camara</Text>;
    }
    return (
        <SafeAreaView style={styles.container}>
            {showCamera ? (
                <Camera
                    ref={cameraRef}
                    style={styles.camera}
                    type={Camera.Constants.Type.back}
                >
                    <TouchableOpacity
                        style={styles.buttonCloseCamera}
                        onPress={() =>
                            setShowCamera(!showCamera)}>
                        <Icon
                            name='times'
                            type='font-awesome'
                            color='red'
                            size={40}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => takePicture()}>
                        <Icon
                            name='camera'
                            type='font-awesome'
                            color='white'
                            size={40}
                        />
                    </TouchableOpacity>
                </Camera>
            ) : (
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignContent: 'center' }}>
                    <ScrollView style={{}} >
                        <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, }}>CREAR NUEVO MARCADOR</Text>
                            {
                                photo ? (
                                    <Image source={{ uri: photo }} style={{ width: 300, height: 300 }} />
                                )
                                    :
                                    (
                                        <View style={[styles.textInput,
                                        {
                                            justifyContent: 'space-around',
                                            flexDirection: 'row',
                                            height: 100,
                                            borderColor: errorNoPhoto ? 'red' : 'transparent',
                                            borderWidth: errorNoPhoto ? 1 : 0.3
                                        }]}>
                                            <TextInput
                                                style={{ width: '100%', paddingLeft: 19, }}
                                                placeholder='Toma una foto'
                                                multiline={true}
                                                numberOfLines={4}
                                            />
                                            <TouchableOpacity
                                                style={{ paddingTop: 21, paddingRight: 17 }}
                                                onPress={() => setShowCamera(!showCamera)}
                                            >
                                                <Icon
                                                    style={{ paddingBottom: 0, paddingRight: 5 }}
                                                    name='camera'
                                                    color='black'
                                                    type='font-awesome'
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    )
                            }
                            < Formik
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
                                    isValid
                                }) =>
                                (
                                    <>
                                        <View style={[styles.textInput,
                                        {
                                            justifyContent: 'space-around',
                                            flexDirection: 'row',
                                            borderColor: (errors.title && touched.title) ? 'red' : 'transparent',
                                            borderWidth: (errors.title && touched.title) ? 1 : 0.3
                                        }]}>
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
                                        {(errors.title && touched.title) && <Text style={styles.textError}>{errors.title}</Text>}
                                        <View style={[styles.textInput,
                                        {
                                            justifyContent: 'space-around',
                                            flexDirection: 'row',
                                            height: 250,
                                            borderColor: (errors.description && touched.description) ? 'red' : 'transparent',
                                            borderWidth: (errors.description && touched.description) ? 1 : 0.3
                                        }]}>
                                            <TextInput
                                                onChangeText={handleChange('description')}
                                                style={{ width: '100%', paddingLeft: 10, textAlignVertical: 'top' }}
                                                name='description'
                                                placeholder='Ingresa una descripcion'
                                                value={values.description}
                                                onBlur={handleBlur('description')}
                                                multiline={true}
                                                numberOfLines={4}
                                                maxLength={100}
                                                autoCorrect={false}

                                            />
                                        </View>
                                        {(errors.description && touched.description) && <Text style={styles.textError}>{errors.description}</Text>}
                                        <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                                            <ButtonGradient
                                                handleSubmit={handleSubmit}
                                                isValid={isValid}
                                                titleButton='AGREGAR'
                                            />
                                        </View>
                                    </>
                                )
                                }
                            </Formik>
                        </View>
                    </ScrollView >
                </View>
            )
            }
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    camera: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    button: {
        position: 'absolute',
        right: 25,
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    photo: {
        width: '95%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        borderRadius: 40
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        width: '100%',
        paddingBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonCloseCamera: {
        position: 'absolute',
        left: 25,
        bottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        color: 'red'
    },
});
