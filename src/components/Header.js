import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { search } from './Icon';
import { colors, screenWidth, size } from './Utils';

const Header = () => {
    const [values, setvalues] = useState('');
    const [isFocused, setisFocused] = useState(false);

    const onBlurHandler = () => {
        setisFocused(false);
    }
    const handleFocus = () => {
        setisFocused(true);
    }
    const onChangeHandler = (value) => {
        setvalues(value);
    }
console.log(isFocused)
    return (
        <View style={{ backgroundColor: colors.indian_yellow, height: size.xxx_medium, position: 'relative' }}>
            <TextInput
                style={{ height: size.x_normal, borderRadius: size.tiny, backgroundColor: colors.white, width: isFocused ? screenWidth - 100 : screenWidth - 40, alignSelf: isFocused ? 'flex-start' : 'center', marginLeft: isFocused ? 25 : 0, paddingLeft: isFocused ? 25 : 0 }}
                value={values}
                onChangeText={onChangeHandler}
                autoCorrect={false}
                onBlur={onBlurHandler}
                onFocus={handleFocus}
                onPressIn={handleFocus}
            />
            {
                isFocused === true && (
                    <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end', paddingRight: 20, paddingTop: size.x_tiny }} onPress={() => { onBlurHandler() ,setvalues('') }}>
                        <Text>{'Cancel'}</Text>
                    </TouchableOpacity>
                )
            }
            <View style={{ position: 'absolute', alignSelf: isFocused ? 'flex-start' : 'center', paddingTop: size.tiny, paddingLeft: isFocused ? 30 : 0, paddingRight: 70 }}>
                <Image source={search} style={{ width: size.small, height: size.small, tintColor: colors.grey }} />
            </View>
            <View style={{ paddingHorizontal: 3 }} />
            {
                isFocused === false && (
                    <View style={{ position: 'absolute', paddingTop: size.tiny, flexDirection: 'row', alignSelf: 'center' }}>
                        <Text style={{ color: colors.grey }}>{'Search'}</Text>
                    </View>
                )
            }
        </View>
    )
}
export default Header;