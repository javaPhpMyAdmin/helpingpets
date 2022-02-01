import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image, SafeAreaView } from 'react-native';
import { Camera, Constants } from 'expo-camera';
import { Icon } from 'react-native-elements';

const statusBarHeight = Constants.statusBarHeight


export default function App() {
    const cameraRef = useRef(null)
    const [hasPermission, setHasPermission] = useState(null);
    const [photo, setPhoto] = useState(null)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    const takePicture = async () => {
        if (cameraRef) {
            const picture = await cameraRef.current.takePictureAsync()
            console.log(picture)
            setPhoto(picture.uri)
            setOpenModal(!openModal)
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
            <Camera
                ref={cameraRef}
                style={styles.camera}
                type={Camera.Constants.Type.back}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => takePicture()}>
                    <Icon name='camera' type='font-awesome' color='white' size={40} />
                </TouchableOpacity>
                {
                    photo
                    &&
                    <Modal
                        animationType='slide'
                        transparent={false}
                        visible={openModal}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.buttonsContainer}>
                                <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
                                    <Icon
                                        name='times'
                                        type='font-awesome'
                                        color='red'
                                        size={40}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
                                    <Icon
                                        name='save'
                                        type='font-awesome'
                                        color='red'
                                        size={40}
                                    />
                                </TouchableOpacity>
                            </View>
                            <Image source={{ uri: photo }} style={styles.photo} />
                        </View>
                    </Modal>
                }
            </Camera>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
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
    }
});
