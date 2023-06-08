import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { IssueContext } from "../../../../Context/context";

export function BarSearch(){
    const {handleSearch, issues} = useContext(IssueContext);
    const [query,setQuery] = useState('');

    useEffect(() => {
        handleSearch(query)
    },[query]);

    return(
        <Container>
            <div>
                <h1>Publicações</h1>
                <span>{issues?.length} publicações</span>
            </div>
            <input placeholder="Buscar conteúdo" value={query} onChange={(event) => {setQuery(event.target.value)}}/>
        </Container>
    );
}