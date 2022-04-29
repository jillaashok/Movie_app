import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Header from './Header';
import { colors } from './Utils';

const Container = ({ children }) => {
    return (
        <View>
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.indian_yellow }}>
                <Header backgroundcolor={colors.indian_yellow} />
                {children}
            </SafeAreaView>
        </View>
    )
}
export default Container;