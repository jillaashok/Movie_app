import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import Header from './Header';
import { colors } from './Utils';
import styles from '../assets/styles/index';

const Container = ({ children, parentCallback = () => { } }) => {
    const textValue = (value) => {
        parentCallback(value)
    }
    return (
        <View style={styles.container}>
            <Header textValue={(val) => textValue(val)} />
            <SafeAreaView style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={colors.indian_yellow}
                    translucent={true}
                    barStyle="dark-content"
                    hidden={false}
                />
                {children}
            </SafeAreaView>
        </View>
    )
}
export default Container;