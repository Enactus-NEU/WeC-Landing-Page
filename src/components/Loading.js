import React from 'react'

export default function Loading(WithComp) {
    return class extends React.Component {
        componentDidMount() {
            const loading = document.getElementById('loading')
            loading.remove()
        }
        render() {
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
