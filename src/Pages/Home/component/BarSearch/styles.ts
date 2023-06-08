import styled from "styled-components";

export const Container = styled.div`
    width:54rem;
    margin-top:4.5rem;
    display:flex;
    flex-direction:column;
    gap:0.75rem;
    
    div{

        display:flex;
        flex-direction:row;
        justify-content:space-between;
        gap:16px;
        align-items:center;

        h1{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 160%;
            color:${props=>props.theme['base-subtitle']};
        }

        span{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 160%;
            color:${props=>props.theme['base-text']};
        }
    }

    input{
        border: 1px solid #1C2F41;
        border-radius: 6px;
        height: 50px;
        background-color:${props=>props.theme['base-input']};
        color:${props=>props.theme['base-label']};
        padding-left:20px;

        ::placeholder{
            color:${props=>props.theme['base-label']};
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 160%;
        }

    }

`
