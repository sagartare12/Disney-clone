import React from 'react'
import styled from 'styled-components'
export const LogIn = () => {
    return (
        <Container>
            <CTA >
                <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
                <SignUp>GET ALL THEME</SignUp>
                <Description>
                     All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, 
                     and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
            </CTA>

        </Container>
    )
}
export default LogIn

const Container = styled.div`
    height: calc(100vh - 70px);
    postion: relative;
    display: flex;
    align-items: top;
    justify-content: center;
    
    
    
    
    &:before{
        background-image: url("/images/login-background.jpg"); 
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0 ;
        bottom : 0;
        z-index: -1;
        opacity: 0.8;
    }
`;

const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
width: 70%;
display: flex;
flex-direction: column;
margin-top: 10px;
align-items: center;

`;


const CTALogoOne = styled.img``;

const SignUp = styled.a`
     width: 100%;
     background-color: #0063e5;
     font-weight: bold;
     padding: 17px 0;
     color: #f9f9f9;
     border-radius: 4px;
     text-align: center;
     font-size: 18px;
     cursor:pointer;
     transition : all 250ms;
     letter-spacing: 1.5px;
     margin: 8px 0px 12px 0px;

     &: hover{
         background: #0483ee;
     }

`;

const Description = styled.p`
     font-size: 11px;
     letter-spacing: 1.5px;
     text-align: center;
     line-height: 1.5;
`;

const CTALogoTwo = styled.img`
     width:90%;

`;