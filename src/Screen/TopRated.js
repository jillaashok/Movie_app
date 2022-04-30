import React, { useState } from 'react'
import Container from '../components/Container';
import Movie from '../components/Movie';

const TopRated = ({ navigation }) => {
    const [text, settext] = useState('');
    const parentCallback = (value) => {
        settext(value)
    }
    return (
        <Container parentCallback={(val) => { parentCallback(val) }}>
            <Movie
                Url={'https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed'}
                filterdata={text}
                navigation={navigation}
            />
        </Container>
    )
}
export default TopRated
