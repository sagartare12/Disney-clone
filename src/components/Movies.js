import React from 'react'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/MovieSlice'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
 const Movies = () => {

        const movies = useSelector(selectMovies);
        console.log('m',movies)
    return (
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                {
                    movies &&
                    movies.map((item)=>(
                        <Wrap key={item.id}>
                            <Link to={`/detail/${item.id}`}>
                            <img src={item.cardImg} alt="" />
                            </Link>
                        </Wrap>
                ))}
               
            </Content>




            
        </Container>
    )
}
export default Movies

const Container = styled.div`
   h4{
        margin-top: 40px;
   }

`;

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0 , 1fr));
`;

const Wrap = styled.div`
border-radius: 10px;
overflow: hidden;
border : 3px solid rgba(249, 249, 249, 0.1);
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }

      &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.08);
        border-color: rgba(249,249,249,0.8);
        transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    }
`;

