import { BarSearch } from "./component/BarSearch";
import { ContentBox } from "./component/ContentBox";
import { Summary } from "./component/Summary";
import { Container, BoxContainer } from "./styles";
import { IssueContext } from "../../Context/context";
import { useContext } from "react";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Home(){

    const {issues} = useContext(IssueContext);
    
    return(
        <Container>
            <Summary />
            <BarSearch />
            <BoxContainer>
                {issues?.length>0 && issues?.map(item =>
                    <ContentBox day={formatDistanceToNow(new Date(item.created_at), { locale: ptBR, addSuffix: true })} subject={item.body.substring(0,105)} title={item.title} object={item}/>                
                )}
            </BoxContainer>
        </Container>
    );
}