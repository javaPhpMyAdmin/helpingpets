import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, ScrollView, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import FormNewMarker from './FormNewMarker';
import CameraContainer from './Camera';
import BoxPicture from './BoxPicture';
import { Icon } from 'react-native-elements';
const { width, height } = Dimensions.get('screen');

export default function NewMarker() {
    const [photo, setPhoto] = useState(null)
    const [showCamera, setShowCamera] = useState(false);
    const [errorNoPhoto, setErrorNoPhoto] = useState(true);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -164 : 0}
        >
            <StatusBar style='auto' />
            <SafeAreaView style={styles.containerSafeArea}>
                {showCamera ? (
                    <CameraContainer
                        setPhoto={setPhoto}
                        setShowCamera={setShowCamera}
                        setErrorNoPhoto={setErrorNoPhoto}
                        showCamera={showCamera}
                    />
                ) : (
                    <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignContent: 'center' }}>
                        <ScrollView style={{}} >
                            <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', paddingTop: 20 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, }}>CREAR NUEVO MARCADOR</Text>
                                {
                                    photo ? (
                                        <View>
                                            <TouchableOpacity
                                                onPress={() => setPhoto(null)}
                                            >
                                                <Icon
                                                    style={{ paddingBottom: 0, paddingRight: 5 }}
                                                    name='times'
                                                    color='red'
                                                    type='font-awesome'
                                                />
                                            </TouchableOpacity>
                                            <Image source={{ uri: photo }} style={{ width: 300, height: 300, borderRadius: 20 }} />
                                        </View>
                                    )
                                        :
                                        (
                                            <BoxPicture
                                                setShowCamera={setShowCamera}
                                                showCamera={showCamera}
                                                errorNoPhoto={errorNoPhoto}
                                            />
                                        )
                                }
                                <FormNewMarker />
                            </View>
                        </ScrollView >
                    </View>
                )
                }
            </SafeAreaView >
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    containerSafeArea: {
        flex: 1,
        // paddingTop: statusBarHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
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
});
