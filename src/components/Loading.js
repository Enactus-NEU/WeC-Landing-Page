import React from 'react'

export default function Loading(WithComp) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                isMount: false
            }
        }
        componentDidMount() {
            const loading = document.getElementById('loading')
            setTimeout(() => {
                loading.remove()
                this.setState({
                    isMount: true
                })
            }, 1200)
        }
        render() {
            if (!this.state.isMount) {
                return null
            }
            return(
                <div>
                    <div class="Loading">
                        <WithComp {...this.props} />
                    </div>
                </div>
            )
        }
    }
}
