import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import URL from "./api/api";
import PokemonCard from "./card/pokemonCard";
import Skeleton from 'react-loading-skeleton';
import Button2 from "./detail/button";

function Search(props) {
    const [offset, setOffset] = useState(1);
    const limit = 16;
    const [list, setList] = useState([]);
    let isLoading = true;

    async function getPokemonList() {
        try {
            let res = await axios.get(`${URL.baseURL}/pokemon?offset=${offset}&limit=${limit}`);
            let tempList = res.data.results;
            let _list = [...tempList]
            setList(_list);
        } catch(error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPokemonList();
    }, [offset])

    const [find, setFind] = useState("");

    const handleSearch = (evt) => {
        setFind(evt.target.value);
    };

    const handleNext = () => {
        setOffset(offset + limit);
    };

    const handlePrev = () => {
        setOffset(offset - limit);
    };

    return(
        <div id="wrapper">
            <div className="poke-list">
                {list && list.map((listItem) => {
                    if(listItem && listItem.name.match(find)) {
                        return (
                            <PokemonCard key={listItem.name} name={listItem.name}/>
                        )
                    } else {
                        return (
                            <Skeleton variant="rectangular" width={210} height={118} />
                        )
                    }
                })}
            </div>
            <div className="but">
                <Button2
                    handleClick={handlePrev}
                    value={"Prev"}
                    disable={offset <= 1}
                />
                <Button2
                    handleClick={handleNext}
                    value={"Next"}
                    disable={false}
                />
            </div>
        </div>
    )
}

export default Search;