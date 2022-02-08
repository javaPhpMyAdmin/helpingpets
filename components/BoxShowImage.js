import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const BoxShowImage = ({ setPhoto, photo }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => setPhoto(null)}>
                <Icon
                    style={styles.iconClose}
                    name='times'
                    color='red'
                    type='font-awesome'
                    size={32}
                />
            </TouchableOpacity>
            <Image source={{ uri: photo }} style={styles.photoTook} />
        </View>
    );
};

export default BoxShowImage;

const styles = StyleSheet.create({
    iconClose: {
        paddingBottom: 10,
    },
    photoTook: {
        width: 300,
        height: 300,
        borderRadius: 40,
    },
})
