import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";

export default function Loading(WithComp) {
    return class extends React.Component {

        async removeFadeOut( el, speed ) {
            var seconds = speed/1000;
            el.style.transition = "opacity "+seconds+"s ease";
            el.style.opacity = 0;
            await setTimeout(() => {
                el.remove();
            }, speed);
        }
        
        componentDidMount() {
            const loading = document.getElementById('loading')
            this.removeFadeOut(loading, 500);
        }

        render() {
            return(
                <Router>
                    <WithComp {...this.props} />
                </Router>
            )
        }
    }
}
