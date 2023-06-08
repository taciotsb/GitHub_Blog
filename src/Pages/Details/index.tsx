import { SummaryDetails } from "./component/SummaryDetails";
import { Container, BoxContainer } from "./styles";
import { TextContainer } from "./component/TextContainer";

export function Details(){
    return(
        <Container>
            <SummaryDetails />
            <TextContainer />
        </Container>
    );
}