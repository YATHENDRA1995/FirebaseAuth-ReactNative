import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ secureTextEntry, underlineColorAndroid, label, onChangeText, Value }) => {
    const { placeholder, inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                onChangeText={onChangeText}
                Value={Value}
                underlineColorAndroid={underlineColorAndroid}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 15,
        flex: 2,
        borderBottomWidth: 0,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
