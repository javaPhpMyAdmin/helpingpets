import { View, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';

const BoxTakePicture = ({ errorNoPhoto, setShowCamera }) => {
    return (
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
                onPress={() => setShowCamera(true)}
            >
                <Icon
                    style={{ paddingRight: 5 }}
                    name='camera'
                    color='black'
                    type='font-awesome'
                />
            </TouchableOpacity>
        </View>
    );
};

export default BoxTakePicture;

const styles = StyleSheet.create({
    textInput: {
        paddingStart: 15,
        width: '80%',
        height: 54,
        padding: 15,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#fff',
        shadowColor: Platform.OS === 'ios' ? 'gray' : 'black',
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 5 },
        elevation: 12,
        shadowOpacity: 2,
    },
})