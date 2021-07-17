import { useEffect, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import removeFadeOut from "./removeFadeOut";

//set state child image loaded
let imagePrivacyLoaded = false
let imageTOULoaded = false

export default function addLoadingAndMoveToTop(WithComp, className) {

  return function(props) {
    const loadingContext = useContext(LoadingContext);
    
    const onDone = () => {

      //remove first loading screen
      if ((className === "PrivacyPolicy" && imagePrivacyLoaded === true) || (className === "TOUPolicy" && imageTOULoaded === true)) {
        loadingContext.done()
        return;
      }
      const loadingScreen = document.getElementById("loading")
      
      if (loadingScreen) {
        const removeLoadingScreen = () => {

          removeFadeOut(loadingScreen, 500)
          loadingContext.done()
          if (className === "PrivacyPolicy") {
            imagePrivacyLoaded = true
          } else if (className === "TOUPolicy") {
            imageTOULoaded = true
          }
          document.removeEventListener("readystatechange", removeLoadingScreen)
        }

        if (document.readyState === "complete") {
          removeLoadingScreen()
        }

        document.addEventListener('readystatechange', () => {
          document.readyState === "complete" && removeLoadingScreen()
        });
        
        return;
      } else { 
        // callback when images are loaded

        const imgs = document.querySelectorAll(`.${className} img`)
        
        let count = imgs.length;
        
        function loadImg() {
          count--
          if (count === 0) {
            loadingContext.done()

            if (className === "PrivacyPolicy") {
              imagePrivacyLoaded = true
            } else if (className === "TOUPolicy") {
              imageTOULoaded = true
            }
          }
        }

        if (count !== 0) {
          imgs.forEach((img) => {

            img.addEventListener("load", () => {
              loadImg()
            })

          })
        } else {
          loadingContext.done()
          if (className === "PrivacyPolicy") {
            imagePrivacyLoaded = true
          } else if (className === "TOUPolicy") {
            imageTOULoaded = true
          }
          return;
        }
      }
    }

    useEffect(() => {
      //move to top
      window.scrollTo(0, 0)

      //remove loading screen
      onDone()
    // eslint-disable-next-line
    }, [])
    
    return <WithComp {...props} />
  }
}
