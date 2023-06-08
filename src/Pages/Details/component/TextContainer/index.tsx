import { useLocation } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import{Container} from './styles'

export function TextContainer(){
    const location = useLocation();
    const contentBox = location.state;
    
    return(
        <Container>
            <ReactMarkdown>{contentBox.body}</ReactMarkdown>
        </Container>
    );
}