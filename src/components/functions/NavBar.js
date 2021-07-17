import "../styles/NavBar.css"
import { Link } from "react-router-dom";

import { useRef, useEffect } from 'react'

export default function NavBar(props) {
    //NavBar
    const NavBar = useRef();
    //wrapBTN
    let showWrapMenu  = false;

    const PhoneBtn = useRef();
    const Menu = useRef();

    function toggleVisible() {
        if (document.documentElement.scrollTop > 0) {
            NavBar.current.style.boxShadow = '0 0 7px rgba(61, 87, 104, 0.25)';
            NavBar.current.style.borderRadius = '0 0 11px 11px';
        } else {
            NavBar.current.style.boxShadow = 'unset';
            NavBar.current.style.borderRadius = 0;
        }
    }

    //warpBTN on phone
    function wrapBtn() {
        if (!showWrapMenu) {
            showWrapMenu = true

            PhoneBtn.current.classList.add('open');
            
            Menu.current.style.opacity = 1
            Menu.current.style.top = '0px'
        } else {
            showWrapMenu = false

            PhoneBtn.current.classList.remove('open');

            Menu.current.style.opacity = 0
            Menu.current.style.top = '4px'
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => { 
            if (NavBar.current) {
                toggleVisible()
            }
        });
    }, [])

    return(
        <div>
            <div ref={NavBar} className="NavBar">
                <Link className="wrap" to="/">
                    <div className="Logo" />
                    <div className="Name">WeCollect</div>
                </Link>
                <div className="WrapBtnDesktop">
                    <Link className={!props.site ? "open" : undefined} to="/">Trang chủ</Link>
                    <Link className={props.site === "about" ? "open" : undefined} to="/about">Giới thiệu</Link>
                    <Link className={props.site === "termOfUse" ? "open" : undefined} to="/term-of-use">Điều khoản sử dụng</Link>
                    <Link className={props.site === "privacyPolicy" ? "open" : undefined} to="/privacy-policy">Chính sách bảo mật</Link>
                </div>
                <div className="WrapBtnPhone">
                    <div ref={PhoneBtn} onClick={wrapBtn} className="NavWrapMenuBtn">
                        <div className="MenuBtn" />
                    </div>
                    <div ref={Menu} className="Btn">
                            <Link 
                                className={!props.site ? "open" : undefined}
                                onClick={() => {
                                            wrapBtn()
                                        }} 
                                to="/"
                            >
                                Trang chủ
                            </Link>
                            <Link
                                className={props.site === "about" ? "open" : undefined}
                                onClick={() => {
                                            wrapBtn()
                                        }} 
                                to="/about"
                            >
                                Giới thiệu
                            </Link>
                            <Link 
                                className={props.site === "termOfUse" ? "open" : undefined}
                                onClick={() => {
                                            wrapBtn()
                                        }} 
                                to="/term-of-use"
                            >
                                Điều khoản sử dụng
                            </Link>
                            <Link
                                className={props.site === "privacyPolicy" ? "open" : undefined}
                                onClick={() => {
                                            wrapBtn()
                                        }} 
                                to="/privacy-policy"
                            >
                                Chính sách bảo mật
                            </Link>
                    </div>
                </div>
            </div>
            <div className="block" />
        </div>
    )
}