import { createContext, ReactNode, useState} from "react";
import { api } from "../lib/axious";

interface IssueContextType{
    issues: any[];
    handleSearch: (query?:string) => Promise<void>;
}

interface IssueProviderProps{
    children: ReactNode;
}

export const IssueContext = createContext({} as IssueContextType);

export function IssuesProvider({children}:IssueProviderProps) {

    const [issues, setIssues] = useState<any[]>([]);

    async function  handleSearch(query?:string){
        await api.get(`https://api.github.com/search/issues?q=${query}%20repo:taciotsb/GitHub_Blog`)
        .then(response => {
            setIssues(response.data.items);
        });
    }

    return(
        <IssueContext.Provider value={{issues,handleSearch}}>
            {children}
        </IssueContext.Provider>
    );
}