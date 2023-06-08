import Cover from '../../Assets/Cover.svg';
import {Container} from'./styles';

export function Header(){
    return(
        <Container>
            <img src={Cover}/>
        </Container>
    );
}