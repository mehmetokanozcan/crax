import * as React from 'react'
import {connect} from './krax'
import {add} from './example/add'

class AppStore extends React.Component<{}, {}> {

    constructor(props, {}) {
        super(props);
    }

    componentDidMount() {
        // console.log('--->>>>>>', this.props)

        add()
    }


    componentWillReceiveProps(props) {
        if (props !== this.props) {
            console.log('Update props---->>', props)
        }
    }

    render() {

        // console.log('Store----', this.props)

        return <>
            <button onClick={() => add()}>add</button>
        </>;
    }
}

export default connect((state:any) => (state))(AppStore);
