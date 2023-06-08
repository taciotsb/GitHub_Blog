import {HeaderContainer,LinkContainer,TagsContainer,TextContainer} from './styles';
import { api } from '../../../../lib/axious';
import { useEffect, useState } from 'react';
import Ballon from '../../../../Assets/Ballon.svg';
import Calendar from '../../../../Assets/Calendar.svg';
import Github from '../../../../Assets/Github.svg';3
import Out from '../../../../Assets/Out.svg';
import BackArrow from '../../../../Assets/BackArrow.svg';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface SummaryProps{
    Title:string,
    Date:Date,
    Profile:string,
    Coments:number
};


export function SummaryDetails(){
    const [summaryContent, setSummaryContent] = useState<SummaryProps>({Title:'', Date:new Date(),Profile:'',Coments:0});
    const location = useLocation();
    const contentBox = location.state;

    return(
        <HeaderContainer>
            <LinkContainer>
                    <div>
                        <img src={BackArrow}/>
                        <NavLink to={'/'}>VOLTAR</NavLink> 
                    </div>
                    <div>
                        <NavLink to={'https://github.com/taciotsb'}>GITHUB</NavLink>
                        <img src={Out}/>
                    </div>
            </LinkContainer>
            <TextContainer>
                <h1>{contentBox.title}</h1>
            </TextContainer>
            <TagsContainer>
                <div>
                    <img src={Github}/>
                    <span>{contentBox.user.login}</span>
                </div>
                <div>
                    <img src={Calendar}/>
                    <span>{formatDistanceToNow(new Date(contentBox.created_at), { locale: ptBR, addSuffix: true })}</span>
                </div>
                <div>
                    <img src={Ballon}/>
                    <span>{contentBox.comments} comentários</span>
                </div>
            </TagsContainer>
        </HeaderContainer>
    );
}