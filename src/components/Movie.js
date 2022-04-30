import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native'
import Cardcontainer from '../components/cards/Cardcontainer';
import { size } from '../components/Utils';

const Movie = ({ navigation, Url, filterdata, }) => {
    const [data, setData] = useState([]);
    const [text, settext] = useState('');
    useEffect(() => {
        fetch(Url)
            .then((response) => response.json())
            .then((json) => setData(json.results))
            .catch((error) => console.error(error))
    }, [])
    const renderItem = ({ item }) => {
        return (
            <Cardcontainer
                image={item.poster_path}
                title={item.title}
                description={item.overview}
                onpress={() => navigation.navigate('PlayingDetails', { id: item.id, data: item })}
            />
        )
    }
    const renderHeader = () => {
        return (
            <View style={{ paddingTop: size.x_normal }} />
        )
    }
    const renderSeperator = () => {
        return (
            <View style={{ paddingVertical: size.xx_tiny }} />
        )
    }
    const renderFooter = () => {
        return (
            <View style={{ paddingBottom: size.x_normal }} />
        )
    }
    console.log('filterdata', filterdata)

    const filterdData = filterdata
        ? data.filter(item => {
            const itemData = item.title.toUpperCase();
            const textData = filterdata.toUpperCase();
            return itemData.indexOf(textData) > -1;
        })
        : data;

    return (
        <View>
            {
                data && data.length !== 0 && (
                    <View>
                        <FlatList
                            data={filterdData}
                            renderItem={renderItem}
                            ListHeaderComponent={renderHeader}
                            ItemSeparatorComponent={renderSeperator}
                            ListFooterComponent={renderFooter}
                        />
                    </View>
                )
            }
        </View>
    )
}
export default Movie
