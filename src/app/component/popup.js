"use client";
import style from '../../css/popup.module.css'
import Image from 'next/image';

export default function Header({ closeHandler, popUpValue }) {

    return <>
        {popUpValue && <div className={style.container}>

            <div className={style.card}>
                <div className={style.close} onClick={closeHandler}>
                    <Image src="/close.svg"
                        className={style.iconInd}
                        width={25}
                        height={25}
                        alt="Photo" />

                </div>
                <div className={style.popContent}>
                    <table className={style.myTable}>
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <td>{popUpValue.id}</td>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>{popUpValue.name}</td>
                            </tr>
                            <tr>
                                <th>Username</th>
                                <td>{popUpValue.username}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{popUpValue.email}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{popUpValue.address.street} | {popUpValue.address.suite} | {popUpValue.address.city} | {popUpValue.address.zipcode} | lat -{popUpValue.address.geo.lat} | lng - {popUpValue.address.geo.lng}</td>
                            </tr>
                            <tr>
                                <th>Phone</th>
                                <td>{popUpValue.phone}</td>
                            </tr>
                            <tr>
                                <th>Website</th>
                                <td>{popUpValue.website}</td>
                            </tr>
                            <tr>
                                <th>Company</th>
                                <td>{popUpValue.company.name} | {popUpValue.company.catchPhrase} | {popUpValue.company.bs} </td>
                            </tr>
                        </tbody>
                    </table>

                </div>

            </div>
        </div>


        }</>
}