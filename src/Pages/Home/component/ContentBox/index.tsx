import { NavLink } from 'react-router-dom';
import {Container} from './styles';
import ReactMarkdown from 'react-markdown';

export interface ContentBoxPropos{
    title?:string,
    day?:string,
    subject:string,
    object?:any
}

export function ContentBox(props:ContentBoxPropos){
    return(
        <Container>
            <div>
                <NavLink to={'/Details'} state={props.object}>{props.title}</NavLink>
                <span>{props.day}</span>
            </div>
            <ReactMarkdown>{props.subject}</ReactMarkdown>
        </Container>
    );
}