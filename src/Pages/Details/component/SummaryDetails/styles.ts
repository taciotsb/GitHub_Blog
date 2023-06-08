import styled from "styled-components";

export const widthScreen = screen.width;

export const HeaderContainer = styled.div`
    width:54rem;
    height:10rem;
    background-color:${props=>props.theme['base-profile']};
    border-radius:10px;
    margin-top:-5rem;
    padding: 2rem;
    display:flex;
    flex-direction:column;
    gap:1rem;
`;

export const LinkContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    div
    {
        display:flex;
        flex-direction:row;
        gap:0.5rem;
        align-items:center;
        justify-content:center;

        a{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 160%;
            color:${props=>props.theme['blue']};
            text-decoration:none;
        }
        img
        {
            width:1.125rem;
            height:1.125rem;
        }
    }
`

export const TextContainer = styled.div`
    h1{
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 130%;
        color:${props=>props.theme['base-title']};
    }
`

export const TagsContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:1.5rem;

    div{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        gap:0.5rem;
        color:${props=>props.theme['base-span']};

        img{
            width:1.125rem;
            height:1.125rem;
        }
    }
`;



