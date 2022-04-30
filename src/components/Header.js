import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import { cancel, search } from './Icon';
import { colors, normalize, size } from './Utils';
import styles from '../assets/styles';

const Header = ({ textValue = () => { } }) => {
    const [values, setvalues] = useState('');
    const [isFocused, setisFocused] = useState(false);

    const onBlurHandler = () => {
        setisFocused(false);
    }
    const handleFocus = () => {
        setisFocused(true);
    }
    const onChangeHandler = (value) => {
        textValue(value)
        setvalues(value);
    }
    console.log('values', values)
    return (
        <View style={styles.header}>
            <View style={{ height: size.medium }}>
                <TextInput
                    style={[styles.textfield, isFocused ? styles.isfocused : styles.notIsFocused]}
                    value={values}
                    onChangeText={onChangeHandler}
                    autoCorrect={false}
                    onBlur={onBlurHandler}
                    onFocus={handleFocus}
                    onPressIn={handleFocus}
                    caretHidden={isFocused ? false : true}
                />
                {
                    isFocused === true && (
                        <TouchableOpacity style={styles.headerCancel} onPress={() => { onBlurHandler(), setvalues('') }}>
                            <Text>{'Cancel'}</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    values !== '' && (
                        <TouchableOpacity style={[isFocused ? styles.focusedCancelImage : styles.CancelImage]} onPress={() => { setvalues('') }}>
                            <Image source={cancel} style={{ width: size.small, height: size.small, tintColor: colors.grey }} />
                        </TouchableOpacity>
                    )
                }

                {
                    isFocused === false && (
                        <View style={styles.placeholder}>
                            <Text style={{ color: colors.grey }}>{'Search'}</Text>
                        </View>
                    )
                }
                <View style={[isFocused ? styles.focusHeaderSearch : styles.HeaderSearch, { bottom: values !== '' ? normalize(54) : normalize(40) }]}>
                    <Image source={search} style={{ width: size.small, height: size.small, tintColor: colors.grey }} />
                </View>
            </View>
        </View>
    )
}
export default Header;