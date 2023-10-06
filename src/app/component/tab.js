"use client";
import { useState } from 'react';
import style from '../../css/tab.module.css'
import Image from 'next/image';

export default function Tab({ changeActiveTab }) {

  const [tabs, setTabs] = useState([{
    img: "/photo.svg",
    activeImg: "/activePhoto.svg",
    heading: "Photos",
    isActive: true
  }, {
    img: "/user.svg",
    activeImg: "/activeUser.svg",
    heading: "Users",
    isActive: false
  }]);

  const clickHandler = (txt) => {
    let tempTabs = tabs;
    tempTabs.forEach(obj => {
      if (obj.heading === txt) {
        obj.isActive = true;
        changeActiveTab(obj.heading);
      } else {
        obj.isActive = false;
      }
    })

    setTabs([...tempTabs]);
  }



  return <div className={style.myTab}>
    <div className={style.tabContainer}>
      {tabs?.map(obj => {
        return obj.isActive ? <div key={obj.heading} className={style.tabActive}>
          <div className={style.iconHold}><Image src={obj.activeImg}
            className={style.iconInd}
            width={25}
            height={25}
            alt="Photo" /></div><div className={style.iconText}>{obj.heading}</div></div> :
          <div key={obj.heading} className={style.tabInd} onClick={() => clickHandler(obj.heading)}>
            <div className={style.iconHold}><Image src={obj.img}
              className={style.iconInd}
              width={25}
              height={25}
              alt="Photo" /></div><div className={style.iconText}>{obj.heading}</div>
          </div>
      })}
    </div>
  </div>
}