// src/pages/Albums.js
import "./Albums.scss";
import Primarynav from "../components/Primarynav";
import { Link } from "@reach/router";
import Menu from "../components/Menu";
import AlbumReleases from "../components/AlbumReleases";
import AlbumImgCard from "../components/AlbumImgCard";

export default function Albums() {
    return (
        <>
        <Primarynav page="music"/>
        <main className="albums">
            <h1 className="gradientHeading">All Albums</h1>
            <div className="albumSlider">
                <div className="albumSlider__header">
                    <h2>Featured Albums</h2>
                    <Link to="/">View All</Link>
                </div>
                <div className="albumSlider__albumImgCards">
                    <AlbumImgCard img="https://via.placeholder.com/130" />
                    <AlbumImgCard img="https://via.placeholder.com/130" />
                    <AlbumImgCard img="https://via.placeholder.com/130" />
                </div>
            </div>

            <div className="albumReleases">
                <div className="albumReleases__header">
                    <h2>New Releases</h2>
                    <Link to="/">View All</Link>
                </div>
                <div className="albumReleases__cards">
                    <AlbumReleases img="https://via.placeholder.com/50" album="Old Town Road" artist="Billy Ray Cyrus" amount="12 songs" />
                    <AlbumReleases img="https://via.placeholder.com/50" album="Old Town Road" artist="Billy Ray Cyrus" amount="12 songs" />
                    <AlbumReleases img="https://via.placeholder.com/50" album="Old Town Road" artist="Billy Ray Cyrus" amount="12 songs" />
                    <AlbumReleases img="https://via.placeholder.com/50" album="Old Town Road" artist="Billy Ray Cyrus" amount="12 songs" />
                    <AlbumReleases img="https://via.placeholder.com/50" album="Old Town Road" artist="Billy Ray Cyrus" amount="12 songs" />
                    <AlbumReleases img="https://via.placeholder.com/50" album="Old Town Road" artist="Billy Ray Cyrus" amount="12 songs" />
                    <AlbumReleases img="https://via.placeholder.com/50" album="Old Town Road" artist="Billy Ray Cyrus" amount="12 songs" />
                    <AlbumReleases img="https://via.placeholder.com/50" album="Old Town Road" artist="Billy Ray Cyrus" amount="12 songs" />
                    <AlbumReleases img="https://via.placeholder.com/50" album="Old Town Road" artist="Billy Ray Cyrus" amount="12 songs" />
                </div>
            </div>
            
        </main>
        <Menu albums="#222" />
        </>
    )
}
