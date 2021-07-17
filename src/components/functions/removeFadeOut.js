async function removeFadeOut( el, speed ) {
        var seconds = speed/1000;
        el.style.transition = "opacity "+seconds+"s ease";
        el.style.opacity = 0;
        await setTimeout(() => {
            el.remove()
        }, speed);
}

export default removeFadeOut