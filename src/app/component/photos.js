"use client";
import { useEffect, useState, useRef } from 'react';
import style from '../../css/photos.module.css'
let mySearch = "";
let starts = 0;
let isRequested = false;
var maxOffset = 0;
export default function Photos({ openPopUp, photoPage }) {

    const componentRef = useRef();
    const [photos, setPhotos] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const handleScroll = () => {
        if (!isRequested) {
            const component = componentRef.current;
            if (!component) return;
            const componentRect = component.getBoundingClientRect();
            const divHeight = componentRef.current.offsetHeight;
            if (((componentRect.bottom - window.innerHeight) < window.innerHeight) && divHeight > maxOffset) {
                maxOffset = divHeight;
                if (starts > -1) {
                    starts += 1;
                    fetchPhotos();
                }
            }
        }
    }


    const fetchPhotos = async () => {
        if (!isRequested) {
            isRequested = true;
            setIsLoading(true);
            let result = await fetch(`https://jsonplaceholder.typicode.com/photos?title_like=^${mySearch}&_start=${starts * 30}&_limit=30`);
            result = await result.json();

            if (result.length === 0) {
                starts = -1;
            }

            if (starts === 0) {
                setPhotos(result);
            } else {
                setPhotos((prev) => [...prev, ...result]);
            }

            setIsLoading(false)
            isRequested = false;
        }
    }

    const myFunction = async (val) => {
        mySearch = val;
        starts = 0;
        maxOffset = 0;
        fetchPhotos();
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        maxOffset = 0;
        mySearch = "";
        starts = 0;
        fetchPhotos();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div className={style.main} ref={componentRef}>
        <h2 onClick={openPopUp}>Photos Module</h2>

        <div className={style.searchContainer}>
            <input type="text" className={style.searchBar} placeholder="Search Here..." onChange={(e) => myFunction(e.target.value)} />
            <a href="#"><img className={style.searchIcon} src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" /></a>
        </div>

        {photos && <div className={style.photoContainer}>

            {photos.map(obj => {
                return <div key={obj.id} className={style.photoDiv}>
                    <div className={style.bar1}><img src={obj.thumbnailUrl} width="150" height="150" loading="lazy" /></div>
                    <div className={style.bar2}><p className={style.ellipsis}>{obj.title}</p>
                        <a href={obj.url} target="_blank" className={style.open}>Open</a>
                    </div>
                </div>

            })}

        </div>}

        {isLoading && <div><span className={style.loader}></span></div>}
    </div>
}