import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const BoxContainer = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
    margin-top:3rem;
    margin-bottom:6rem;
    row-gap:2rem;
`;