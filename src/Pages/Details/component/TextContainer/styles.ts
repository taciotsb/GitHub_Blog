import styled from "styled-components";

export const Container = styled.div`
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 160%;
color:${props => props.theme['base-text']};

width:54rem;
height:10rem;
margin-bottom:5rem;
padding: 2rem;
`