// src/pages/Categories.js
import "./Categories.scss";
import Primarynav from "../components/Primarynav";
import Menu from "../components/Menu";
import CategorySubItem from "../components/CategorySubItem";
import CategoryItem from "../components/CategoryItem";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import TokenContext from "../TokenContext";

export default function Categories(props) {
    var [token] = useContext(TokenContext);
    var [category, setCategory] = useState({});
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get("https://api.spotify.com/v1/browse/categories?country=us", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setCategory(response.data.categories));
        if(props.id) {
            axios.get(`https://api.spotify.com/v1/browse/categories/${props.id}/playlists?country=us`, {
                headers: {
                    "Authorization": "Bearer " + token.access_token
                }
            })
            .then(response => setContent(response.data.playlists));
        }
    }, [token, props.id, setCategory, setContent]);

    return (
        <>
        <Primarynav page="categories"/>
        <main className="categories">
            <h1 className="gradientHeading">Categories</h1>
            <div className="categoryItems">
                {category.items?.map(function(result) {
                    console.log(result.id);
                    return (
                        <>
                            <CategoryItem genre={result.name} id={result.id} key={result.id} />
                        </>
                    );
                })}
                <div className={props.id + "__result"}>
                    {content.items?.map(function(result) {
                        if (props.id) {
                            return (
                                <CategorySubItem id={result.id} key={result.id}>{result.name}</CategorySubItem>
                            );
                        }
                    })}
                </div>
            </div>
        </main>
        <Menu categories="#000000"/>
        </>
    )
}
