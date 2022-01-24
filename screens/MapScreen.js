import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

const MapScreen = () => {
    return (
        <SafeAreaView style={tw`items-center`}>
            <View>
                <Text>I am a MAP</Text>
            </View>
        </SafeAreaView>
    );
};

export default MapScreen;
