"use client";
import main from '../css/main.module.css'
import { Footer, Header, Photos, Tab, Users, Popup } from './component';
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState("Photos");
  const [isPopup, setIsPopup] = useState(false);
  const [popUpValue, setPopUpValue] = useState();


  const handleTabClick = (val) => {
    setActiveTab(val);
  }

  const closeHandler = () => {
    document.documentElement.style.width = 'auto';
    document.documentElement.style.position = 'static';
    document.documentElement.style.overflow = 'visible';
    setIsPopup(false);
  }

  const openPopUp = (obj) => {
    setPopUpValue(obj);
    document.documentElement.style.width = '100%';
    document.documentElement.style.position = 'fixed';
    document.documentElement.style.overflow = 'hidden';
    setIsPopup(true);
  }


  return (
    <>
      {isPopup && <Popup closeHandler={closeHandler} popUpValue={popUpValue} />}
      <div className={main.body}>
        <Header />
        <div className={main.content}>
          <Tab changeActiveTab={(val) => handleTabClick(val)} />
          <div className={main.containerDiv}>
            {(() => {
              switch (activeTab) {
                case 'Photos':
                  return <Photos />

                case 'Users':
                  return <Users openPopUp={(obj) => openPopUp(obj)}/>

                default:
                  return <div>Page Not Found</div>
              }
            })()}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
