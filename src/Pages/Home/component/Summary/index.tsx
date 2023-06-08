import {HeaderContainer,ContentContainer,InfoContainer,TagsContainer} from './styles';
import { api } from '../../../../lib/axious';
import { useEffect, useState } from 'react';
import companyTag from '../../../../Assets/companyTag.svg';
import followers from '../../../../Assets/followers.svg';
import Github from '../../../../Assets/Github.svg';3
import Out from '../../../../Assets/Out.svg';
import { NavLink } from 'react-router-dom';

interface SummaryProps{
    Photo:string,
    Name:string,
    Description:string,
    Profile:string,
    Company:string,
    Followers:number
};


export function Summary(){
    const [summaryContent, setSummaryContent] = useState<SummaryProps>({ Photo:'',Name:'', Description:'',Profile:'',Company:'',Followers:0});

    async function getSummaryContent(){
        const response = await api.get('/users/taciotsb');
        setSummaryContent({
            Photo:response.data.avatar_url,
            Name:response.data.name,
            Description:response.data.bio,
            Profile:response.data.login,
            Company:response.data.company,
            Followers:response.data.followers
        });
    }

    useEffect(()=>{
        getSummaryContent();
    },[]);

    return(
        <HeaderContainer>
            <ContentContainer>
                <img src={summaryContent.Photo} />
                <InfoContainer>
                    <div id='title'>
                       <h1>{summaryContent.Name}</h1>
                       <div>
                             <NavLink to={'https://github.com/taciotsb'}>GITHUB</NavLink>
                             <img src={Out}/>
                       </div>
                    </div>
                    <span>{summaryContent.Description}</span>
                    <TagsContainer>
                        <div>
                            <img src={Github}/>
                            <span>{summaryContent.Profile}</span>
                        </div>
                        <div>
                            <img src={companyTag}/>
                            <span>{summaryContent.Company}</span>
                        </div>
                        <div>
                            <img src={followers}/>
                            <span>{summaryContent.Followers} seguidores</span>
                        </div>
                    </TagsContainer>
                </InfoContainer>
            </ContentContainer>
        </HeaderContainer>
    );
}