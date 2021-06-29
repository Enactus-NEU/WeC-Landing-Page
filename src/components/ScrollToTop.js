import { useRef, useEffect } from 'react'

export default function ScrollToTop() {
    const ScrollBtn = useRef();
    
    function toggleVisible() {
        if (document.documentElement.scrollTop > 300) {
            ScrollBtn.current.style.opacity = 1
        } else {
            ScrollBtn.current.style.opacity = 0
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
    },[])
    
    function scroll() {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    }

    return (
        <div ref={ScrollBtn} onClick={scroll} className="ScrollToTop" style={{
            width: '55px',
            height: '55px',
            backgroundColor: 'white',
            boxShadow: '0 0 6px rgba(61, 87, 104, 0.15)',
            position: 'fixed',
            borderRadius: '50%',
            right: '25px',
            bottom: '35px',
            transition: "opacity 0.4s",
            color: 'red',
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <img alt="uparrow" style={{ opacity: 0.8 }} width="16px" src="data:image/svg+xml;charset=utf8,%3C?xml version='1.0' encoding='utf-8'?%3E%3C!-- Generator: Adobe Illustrator 24.1.2, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 492 492' style='enable-background:new 0 0 492 492;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0{fill:%23173143;} %3C/style%3E%3Cg%3E%3Cg%3E%3Cpath class='st0' d='M484.1,328.5L265,109.3c-5.1-5.1-11.8-7.8-19.2-7.8c-7.2,0-14,2.8-19,7.8L7.9,328.3c-5.1,5.1-7.9,11.8-7.9,19 s2.8,14,7.9,19L24,382.5c5.1,5.1,11.8,7.9,19,7.9s14-2.8,19-7.9l183.9-183.9l184.1,184.1c5.1,5.1,11.8,7.9,19,7.9 c7.2,0,14-2.8,19-7.9l16.1-16.1C494.6,356,494.6,339,484.1,328.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" />
        </div>
    )
}