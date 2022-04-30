import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { colors, screenWidth, size } from '../Utils';

const Cardcontainer = ({ image = null, title = '', description = '', onpress = null }) => {
    return (
        <TouchableOpacity style={{ paddingHorizontal: size.small, flexDirection: 'row' }} onPress={onpress} activeOpacity={1} >
            <Image source={{ uri: "https://image.tmdb.org/t/p/w342" + image }} style={{ height: size.xxx_big, width: size.xxx_big }} />
            <View style={{ width: screenWidth - 150, alignSelf:'center', paddingLeft: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>{title}</Text>
                <View>
                    <Text numberOfLines={4}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
export default Cardcontainer;