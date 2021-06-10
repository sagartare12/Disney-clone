import  { useEffect , useState } from 'react'
import styled from 'styled-components'
import {useParams}  from 'react-router-dom'
import db from '../Firebase'


const Detail = () => {

    const { id } = useParams();
    const [ movie , setMovie] = useState([]);

    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());

            }else{

            }
        })
    },[id])
    
    
    return (
        <Container>
            <Background>
                <img src={movie.backgroundImg} alt="" />
            </Background>
            <ImgTitle>
                <img src={movie.titleImg} alt="" />
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>

            </Controls>
            <Subtitle>
                {movie.title}
            </Subtitle>
            <Description>
                {movie.description}
            </Description>
        </Container>
    )
}
export  default Detail

const Container = styled.div`
    minheight: cal(100vh-70px);
    padding: cal(3.5vh + 5px);
    position: relative;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: fixed;
    }
`;
 
const ImgTitle = styled.div`
    padding-top:50px;
    padding-left:50px;
    height: 30vh;
    width: 30vw;

    img{
        width:100%;
        height:100%;
        object-fit: contain;
    }
`;


const Controls = styled.button`
     display: flex;
   background-color: transparent;
   padding: 20px 55px;
   border: none;
   align-items: center;
     `;
     

const PlayButton = styled.button`
cursor: pointer;
margin-right:10px;
align-items: center;
border-radius:4px;
border: none;
background: rgb(249,249,249);
display: flex;
letter-spacing: 1.8px;

&:hover{
    background: rgb(198,198,198);
}
    
`;

const TrailerButton = styled(PlayButton)`
        background: rgb(0 , 0 , 0 , 0.3);
        border: 1px solid rgb(249,249,249);
        color:rgb(249,249,249);
        text-transform: uppercase;
`;

const AddButton = styled.button`
margin-right:16px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgb(0,0,0,0.6);
    cursor: pointer;
    span{
        font-size: 30px;
        color: white;

    }
    `;

const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);
`;

const Subtitle = styled.div`
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
    padding-left: 50px
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    padding-left: 50px;
`;