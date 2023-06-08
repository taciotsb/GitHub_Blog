import styled from "styled-components";

export const Container = styled.div`
    padding:2rem;
    background-color:${props=>props.theme['base-post']};
    border-radius: 10px;
    width: 26rem;
    height: 16rem;
    display:flex;
    flex-direction:column;
    gap:1.2rem;

    
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    color:${props=>props.theme['base-span']};

    div{
        display:grid;
        grid-template-columns: 4fr 1fr;

        a{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 160%;
            color:${props=>props.theme['base-title']};
        }

        span{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            color:${props=>props.theme['base-span']};
        }
    }



`;