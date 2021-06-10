import React, { useEffect } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { auth , provider } from '../Firebase'
import { useHistory } from 'react-router-dom'
import { selectUserName , 
        selectUserEmail,
        selectUserPhoto,
        setUserLogin,
        setUserSignOut
}
  from '../features/user/UserSlice'
import { useDispatch ,useSelector } from 'react-redux'


 const Header = () => {

    const dispatch = useDispatch();
    const history = useHistory()
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user) =>{
            if(user){
                dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photo
            }))
            history.push('/');
            }
        })

        })
    
    const SignIn = () =>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photo
            }))
            history.push('/');
        })
    }

    const SignOut = () =>{
        auth.signOut()
        .then(()=>{
            dispatch(setUserSignOut());
            history.push('/LogIn');
        })
    }

    const NAV_ITEMS = [
        {
            img: '/images/home-icon.svg',
            name: 'HOME',
            navItem: '/'
        },
        {
            img: '/images/search-icon.svg',
            name: 'SEARCH',
            navItem: 'notDefined'
        },
         {
            img: '/images/watchlist-icon.svg',
            name: 'WATCHLIST',
            navItem: 'notDefined'
        },
         {
            img: '/images/original-icon.svg',
            name: 'ORIGINALS',
            navItem: 'notDefined'
        },
         {
            img: '/images/movie-icon.svg',
            name: 'MOVIES',
            navItem: 'notDefined'
        },
         {
            img: '/images/series-icon.svg',
            name: 'SERIES',
            navItem: 'notDefined'
        },
    ]

    return (
        <Nav>
            <Link to="/">
            <Logo src="/images/logo.svg" />
            </Link>
            { !userName ? 
                <LogInContainer>
                <LogIn onClick={SignIn}>LogIn</LogIn>
                </LogInContainer> :
            <>
            <NavMenu>
                    
                        {
                            NAV_ITEMS.map((item)=>(
                                <div key={new Date()}>
                                    <Link  to ={item.navItem} style={{textDecoration:'none',color:'white'}}>
                                        <img src={item.img} alt="" />
                                        <span>{item.name}</span>
                                    </Link>
                                </div>
                            ))
                        }

                    
            </NavMenu>

            <UserImg 
            onClick={SignOut}
            src="https://tse3.mm.bing.net/th?id=OIP.WqqvE1ilTBLEoxf-_gSg9AHaFj&pid=Api&P=0&w=220&h=166"/>
            </>
            }
        </Nav>
    )
}
export default Header

const  Nav= styled.nav`
    height:70px;
    background:#141b29;
    display:flex;
    align-items:center;
    padding: 0 36px;
    overflow-x: hidden;
`;

const Logo = styled.img`
    width: 80px;

`;

const NavMenu = styled.div`
    display:flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;
    
    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor: pointer;
        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.24px;
            position: relative; 

            &:after{
                content : "";
                height: 2px;
                background : white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity : 0;
                transform-origin: left center;
                ​transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`;

const UserImg = styled.img`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   cursor : pointer;

`;

const LogIn = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing:1.5px;
    text-transform: uppercase;
    background-color: rgba( 0,0,0,0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover{
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

    `;

    const LogInContainer = styled.div`
        flex: 1;
        display: flex;
        justify-content: flex-end;
    `;