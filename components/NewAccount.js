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
    Alert,
} from 'react-native';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import SvgImage from '../components/SvgImage';
import { StatusBar } from 'expo-status-bar'
import FormNewAccount from '../components/FormNewAccount'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import * as ImagePicker from 'expo-image-picker'

const { width, height } = Dimensions.get('screen');

const NewAccount = () => {
    const [topPicture] = useState(new Animated.Value(width * .09));
    const [viewHeight] = useState(new Animated.ValueXY({ x: 0, y: -120 }))
    const [opacityView] = useState(new Animated.Value(0));
    // const [logo] = useState(new Animated.ValueXY({ x: 170, y: 150 }));
    const [thumbnail, setThumbnail] = useState(null)
    const navigation = useNavigation()

    const pickFromGallery = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (granted) {
            let data = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            })
            setThumbnail(data.uri);
        } else {
            Alert.alert('No has permitido el acceso a la galeria')
        }

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

    const letterAnimation = {
        0: { opacity: 0, translateY: -42, },
        1: { opacity: 1, translateY: 0, }
    }

    const keyboardDidShow = () => {
        Animated.spring(topPicture, {
            toValue: 20,
            duration: 10,
            speed: 10,
            bounciness: 10,
            useNativeDriver: false,
        }).start();
    };

    const keyboardDidHide = () => {

        Animated.spring(topPicture, {
            toValue: width * .09,
            duration: 10,
            speed: 10,
            useNativeDriver: false,
            bounciness: 10,
        }).start();
    };

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -85 : -80}
        >
            <StatusBar animated={true} backgroundColor="pink" hidden={false} opacity={1} />
            <TouchableWithoutFeedback
                style={{ flex: 1 }}
                onPress={Keyboard.dismiss}
            >
                <View style={styles.mainContainer}>
                    <View style={styles.containerSVG}>
                        <SvgImage />
                    </View>
                    <Animated.View style={[styles.containerThumbnail, {
                        top: topPicture,
                        backgroundColor: thumbnail ? 'transparent' : 'white',
                        opacity: thumbnail ? 1 : .68,
                    }]}>
                        {
                            thumbnail ? (
                                <View style={[styles.imageThumbnail]}>
                                    <Image style={[styles.imageThumbnail]} resizeMode='cover' source={{ uri: thumbnail }} />
                                    <View style={{ position: 'absolute', top: width * .32, right: width * .145 }}>
                                        <TouchableOpacity onPress={() => pickFromGallery()}>
                                            <Icon name='user' type='font-awesome' size={35} color='white' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ) :
                                (
                                    <View style={{}}>
                                        <TouchableOpacity onPress={() => pickFromGallery()}>
                                            <Icon name='user' type='font-awesome' size={35} />
                                        </TouchableOpacity>
                                    </View>
                                )
                        }
                    </Animated.View>
                    <Animated.View style={[styles.container, { transform: [{ translateY: viewHeight.y }], opacity: opacityView }]}>
                        <View style={[styles.title, { flexDirection: 'row' }]} >
                            {
                                'Bienvenido'.split('').map((letter, index) => {
                                    return (
                                        <Animatable.Text
                                            useNativeDriver
                                            animation={letterAnimation}
                                            delay={300 + index * 50}
                                            key={`${letter}-${index}`}
                                            style={styles.heading}
                                        >
                                            {letter}
                                        </Animatable.Text>
                                    )
                                }
                                )}
                        </View>
                        <Text style={styles.subTitle}>
                            Crea una nueva cuenta
                        </Text>
                        <FormNewAccount />
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
                            <View style={{ left: 8, bottom: 3 }}>
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        paddingRight: 10,
                                    }}
                                    onPress={() => { navigation.navigate('LoginScreen') }}
                                >
                                    <Text
                                        style={{
                                            color: 'black',
                                            paddingTop: 25,
                                            paddingRight: 7,
                                            opacity: .7
                                        }}
                                    >
                                        Ya tengo una cuenta
                                    </Text>
                                    <Icon
                                        style={{ paddingTop: 26 }}
                                        name='arrow-right'
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
            {/* </SafeAreaView> */}
        </KeyboardAvoidingView>

    );
};

export default NewAccount;

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
        height: width * 1.2
    },
    containerThumbnail: {
        width: width * 0.37,
        height: width * 0.37,
        borderRadius: width * 0.4 / 2,
        position: 'absolute',
        left: width / 3.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'gray',
        borderWidth: .1,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 1,
        elevation: 8,
    },
    imageThumbnail: {
        width: '100%',
        height: '100%',
        borderRadius: 100
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
        paddingBottom: 10
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
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
        letterSpacing: 2,
    }
});
