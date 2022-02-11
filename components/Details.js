import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, FlatList, ScrollView, SafeAreaView, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';


const { width, height } = Dimensions.get('screen')

const Details = ({ route }) => {
    const navigation = useNavigation()
    const { item } = route.params
    const opacity = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 0.7,
            duration: 50,
            delay: 50,
            useNativeDriver: true,
        }).start()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
            <View style={styles.containerImage}>
                <SharedElement id={item.images[0].id}>
                    <Image
                        source={{ uri: item.images[0].uri }}
                        resizeMode='cover'
                        style={[styles.image, {}]}
                    />
                </SharedElement>

                <Animated.View style={[styles.containerIconImage, { opacity }]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon
                            name='arrow-left'
                            type='font-awesome'
                            size={40}
                            color='black'
                        />
                    </TouchableOpacity>
                </Animated.View>
            </View>
            <View style={styles.containerDetails}>
                <View style={styles.containerHeaderDetails}>
                    <View style={{ width: 180, height: 60, padding: 10, paddingLeft: 25 }}>
                        <Text style={{ fontSize: 16, fontStyle: 'italic', fontWeight: 'bold' }}>{item.createdAt}</Text>
                        <Text style={{ fontSize: 16, fontStyle: 'italic', fontWeight: 'bold' }}>7 dias atras</Text>
                    </View>
                    <View style={{ paddingRight: 8 }}>
                        <Text style={{ fontSize: 16, fontStyle: 'italic', fontWeight: 'bold' }}>{item.userEmail}</Text>
                    </View>
                </View>
                <Animated.View style={[styles.containerFlatList,]}>
                    <FlatList
                        style={{ width: width - 5 }}
                        horizontal={true}
                        data={item.images}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.containerFlatListItem}>
                                    <Image
                                        source={{ uri: item.uri }}
                                        resizeMode='cover'
                                        style={styles.imageFlatList}
                                    />
                                </View>
                            )
                        }
                        }
                    />
                </Animated.View>
                <View style={styles.containerDescription}>
                    <ScrollView style={styles.scrollView}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                            <Text style={{ textAlign: 'left' }}>AQUI IRA UNA DESCRIPCION QUE LLEGA CON EL OBJETO USER</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView >
    );
};

export default Details;

const styles = StyleSheet.create({
    containerImage: {
        width: width,
        height: '35%',
        backgroundColor: 'transparent',
    },
    containerIconImage: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        position: 'absolute',
        top: 10,
        left: 10,
        width: 50,
        height: 50,
        borderRadius: 25
    },
    image: {
        width: width,
        height: '100%',
    },
    containerDetails: {
        backgroundColor: 'white',
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        height: '65%',
        padding: 5,
        paddingBottom: 0
    },
    containerHeaderDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 0
    },
    containerFlatList: {
        height: '50%',
        alignItems: 'center',
        backgroundColor: 'white',
        bottom: 0
    },
    containerFlatListItem: {
        width: width,
        height: '125%'/*height / 2.7*/,
        flexDirection: 'column',
        alignItems: 'center',
        top: 0,
        shadowColor: Platform.OS === 'ios' ? 'gray' : 'red',
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 5 },
        elevation: 8,
        shadowOpacity: 1,
        paddingBottom: 5
    },
    imageFlatList: {
        width: width - 40,
        height: '75%',
        borderRadius: 20,
        marginRight: 5,
        margin: 2,
    },
    containerDescription: {
        top: 5,
        height: '33%',
        width: '95%',
        borderRadius: 10,
        padding: 1,
        borderColor: 'yellow',
        borderWidth: .5,
        left: width / 4 * 0.100,
        shadowColor: Platform.OS === 'ios' ? 'gray' : 'black',
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 5 },
        elevation: 8,
        shadowOpacity: 1,
        backgroundColor: 'transparent'
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
        padding: 0,
        borderRadius: 10,
        borderColor: 'yellow',
        borderWidth: 0.3
    }
})
