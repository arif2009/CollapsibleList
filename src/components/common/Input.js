import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                autoCorrect={false}
                onChangeText={onChangeText}
                underlineColorAndroid='transparent'
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#fff',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        color: '#fff',
        flex: 1
    },
    containerStyle: {
        height: 50,
        flex: 1,
        borderRadius: 5,
        marginBottom: 5,
        backgroundColor: '#0080ff',
        borderColor: '#007aff',
        flexDirection: 'row',
        alignItems: 'center'
    }
};


export { Input };
