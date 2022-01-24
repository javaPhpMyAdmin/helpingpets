import { Text, View, SafeAreaView, Button } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={tw`bg-red-400`}>
            <Text style={tw`text-blue-500 px-10`}>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Map')} title='Go to map' />
        </SafeAreaView >
    );
};

export default HomeScreen;


