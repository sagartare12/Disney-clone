import React from 'react'
import styled from 'styled-components'
const Viewers = () => {

    const IMG = ["/images/viewers-disney.png",
                "images/viewers-marvel.png",
                "images/viewers-national.png",
                "images/viewers-pixar.png",
                "images/viewers-starwars.png"]
    return (
        <Container>
            {
                IMG.map((item)=>(
                    <Wrap>
                        <img src={item} alt="" />
                    </Wrap>
                ))
            }
        </Container>
    )
}
export  default Viewers

const Container = styled.div`
display: flex;    

    margin-top: 30px;
    padding: 30px 0px 20px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0  , 1fr));


`;

const Wrap = styled.div`

    border-radius:10px;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
       
        transition: all 250ms cubic-bezier(0.25,0.46,0.94) 0s;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`;