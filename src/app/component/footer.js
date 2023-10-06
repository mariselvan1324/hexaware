"use client";
import style from '../../css/footer.module.css'


export default function Footer() {

    return <>
        <footer className={style.myFooter}>
            <div className={style.fSample}>Sample Footer</div>

            <div className={style.fBody}>
                <div className={style.fSection}>
                    <h2 className={style.gradientBorder}>Section 1</h2>
                    <div className={style.fFlexParent}>
                        <div>Banking</div>
                        <div>Logistics</div>
                        <div>Capital Markets</div>
                        <div>Manufacturing</div>
                        <div>Education</div>
                    </div>
                </div>

                <div className={style.fSection}>
                    <h2 className={style.gradientBorder}>Section 2</h2>
                    <div className={style.fFlexParent}>
                        <div>Banking</div>
                        <div>Logistics</div>
                        <div>Capital Markets</div>
                        <div>Manufacturing</div>
                        <div>Education</div>
                    </div>
                </div>

                <div className={style.fSection}>
                    <h2 className={style.gradientBorder}>Section 3</h2>
                    <div className={style.fFlexParent}>
                        <div>Banking</div>
                        <div>Logistics</div>
                        <div>Capital Markets</div>
                        <div>Manufacturing</div>
                        <div>Education</div>
                    </div>
                </div>

                <div className={style.fSection}>
                    <h2 className={style.gradientBorder}>Section 4</h2>
                    <div className={style.fFlexParent}>
                        <div>Banking</div>
                        <div>Logistics</div>
                        <div>Capital Markets</div>
                        <div>Manufacturing</div>
                        <div>Education</div>
                    </div>
                </div>
            </div>


            <div className={style.fFooter}>© 2023 Hexaware Technologies Limited. All rights reserved</div>
        </footer>
    </>
}