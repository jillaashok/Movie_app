import React from 'react';
import { TouchableOpacity, View, Image, Text, ScrollView } from 'react-native';
import { colors, normalize, screenHeight, screenWidth, size } from '../components/Utils'

const PlayingDetails = ({ route }) => {
    const { data } = route.params;
    const { backdrop_path, title, overview, id } = data

    return (
        <View>
            <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.8)', width: screenWidth - 40, minHeight: screenHeight - 650, alignSelf: 'center', position: 'absolute', zIndex: 1, top: screenHeight - 300, padding: size.small }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 30, fontWeight: '700', color: colors.white, width: normalize(200) }}>{title}</Text>
                        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colors.white, padding: size.x_tiny }} onPress={() => { }} >
                            <Text style={{ fontWeight: '600' }}>{'DELETE'}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: colors.white }}>{overview}</Text>
                </ScrollView>
            </View>
            <Image source={{ uri: "https://image.tmdb.org/t/p/original" + backdrop_path }} style={{ height: screenHeight, width: screenWidth }} />

        </View>
    )
}
export default PlayingDetails;