import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Neomorph } from 'react-native-neomorph-shadows';


const Morph = ({ children }) => {
    return (
        <View style={styles.morphTop}>
            <View style={styles.morphBottom}>
                {children}
            </View>
        </View>
    )
}

const testNeuro = () => {
    return (
        <View style={styles.container}>
            {/* <Morph>
                <View style={{
                    width: 250,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#cce7ea',
                    borderRadius: 20
                }}>

                    <Text style={styles.testNeuro}>Texto de prueba</Text>
                </View>
            </Morph> */}
            <Neomorph
                inner // <- enable shadow inside of neomorph
                // swapShadows // <- change zIndex of each shadow color
                style={{
                    shadowRadius: 10,
                    borderRadius: 25,
                    backgroundColor: '#DDDDDD',
                    width: 150,
                    height: 150,
                }}
            >
                <View style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.testNeuro}>Texto de prueba</Text>
                </View>
            </Neomorph>



        </View>
    );
};

export default testNeuro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cce7ea',
        paddingTop: 40,
        width: 400,
        height: 300
    },
    neuroText: {
        margin: 24,
        fontSize: 18,
        textAlign: 'center',

    },
    morphTop: {
        shadowOffset: { width: -5, height: -15 },
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowColor: 'red',
        elevation: 15,
        backgroundColor: 'red',
        borderRadius: 20,

    },
    morphBottom: {
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        shadowColor: 'blue',
        elevation: 9,
        backgroundColor: '#cce7ea',
        borderRadius: 20,
    }
})
