import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import Styled from 'styled-components'
import { setMovies } from '../features/movie/MovieSlice'
import db from '../Firebase'
import ImgSlidder from './ImgSlidder'
import Movies from './Movies'
import Viewers from './Viewers'


 const Home = () => {

    const dispatch = useDispatch();

    


    useEffect(()=>{
        db.collection("movies").onSnapshot((snapshot)=>{
            let tempMovies = snapshot.docs.map((item) =>{
            console.log(item.data())
            return { id:item.id, ...item.data()}
            })
            dispatch(setMovies(tempMovies));
            
        })
    })

    return (
        <Container>
            <ImgSlidder />
            <Viewers />
            <Movies />
        </Container>
    )
}
export default Home

const Container = Styled.main`
    min-height: calc(100vh - 70px);
    padding : 0 calc(3.5vw + 5px);
    postion: relative;
    overflow-x: hidden;
    &:before{
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0 ;
        bottom : 0;
        z-index: -1;
    }
`;
