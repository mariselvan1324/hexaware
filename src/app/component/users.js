"use client";
import { useEffect, useState, useRef } from 'react';
import style from '../../css/users.module.css'
let isRequested = false;
let originalUser = [];
export default function Users({ openPopUp }) {

    const componentRef = useRef();
    const [users, setUsers] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const fetchUsers = async () => {
        if (!isRequested) {
            isRequested = true;
            setIsLoading(true);
            let result = await fetch(`https://jsonplaceholder.typicode.com/users`);
            result = await result.json();
            originalUser = result;
            setUsers(result);
            setIsLoading(false)
            isRequested = false;
        }
    }


    useEffect(() => {
        fetchUsers();
    }, []);

    const mySelect = (val) => {
        setUsers(originalUser.slice(0, parseInt(val, 10)));
    }

    return <div className={style.main} ref={componentRef}>
        <h2 className={style.myH2} onClick={openPopUp}>User Module</h2>

        <div className={style.searchContainer}>
            <div className={style.select}>
                <select className={style.standardSelect} onChange={(e) => mySelect(e.target.value)} defaultValue={'10'}>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">All</option>
                </select>
            </div>

        </div>

        {users && <div className={style.photoContainer}>

            {users.map(obj => {
                return <div key={obj.id} className={style.photoDiv} onClick={() => openPopUp(obj)}>
                    <div>Name: {obj.name}</div>
                    <div>Email: {obj.email}</div>
                    <div>Phone: {obj.phone}</div>
                    <div className={style.link}>View More Information</div>
                </div>

            })}

        </div>}

        {isLoading && <div><span className={style.loader}></span></div>}
    </div>
}