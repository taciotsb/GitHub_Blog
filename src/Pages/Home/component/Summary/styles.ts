import styled from "styled-components";

export const widthScreen = screen.width;

export const HeaderContainer = styled.div`
    width:54rem;
    height:14rem;
    background-color:${props=>props.theme['base-profile']};
    border-radius:10px;
    margin-top:-7rem;
`;


export const ContentContainer = styled.div`
    display:flex;
    flex-direction:row;
    gap:2rem;
    padding: 2rem;

    img{
        width:10rem;
        height:10rem;
        border-radius:8px;
    }
`;

export const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:1rem;
    padding-top:0.5rem;

    #title{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-between;

        h1{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 130%;
            color:${props=>props.theme['base-title']};
        }

        div{
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
            img{
                width:1.125rem;
                height:1.125rem;
            }
        }

    }

    span{
        color:${props=>props.theme['base-text']};
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 160%;
    }
`;

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

        img{
            width:1.125rem;
            height:1.125rem;
        }
    }
`;




