"use client";
import style from '../../css/header.module.css'
import Image from 'next/image';

export default function Header() {

    return <header className={style.header}>
        <div className={style.imageHolder}>
            <Image src="/logo.svg"
                width={35}
                height={35}
                alt="Hexaware Logo" />
        </div>
        <div className={style.name}>React Project</div>
    </header>
}