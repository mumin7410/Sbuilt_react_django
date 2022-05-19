import styled from "styled-components";

export const Column = styled.div`
flex:1 ;
max-width: 50%;
padding: 60px;
@media screen and (max-width: 960px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
` 
export const Title = styled.div`
    @media screen and (max-width: 960px) {
        margin-right:13px;
    }
`