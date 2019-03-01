import * as React from 'react'
import {connect} from './krax'
import {/*add,*/ fileadd} from './example/add'

class AppStore extends React.Component<{}, {}> {

    constructor(props, {}) {
        super(props);


        this.state = {

        }
    }

    componentDidMount() {
        // console.log('--->>>>>>', this.props)

        // add()
        fileadd().then((val:any) => {
            console.log('Val', val)
        })
    }


    componentWillReceiveProps(props) {
        console.log('Update props---->>', props)
        if (props !== this.props) {
            console.log('Update props---->>', props)
        }
    }


    render() {

        // console.log('Store----', this.props)

        return <>
            {/*<button onClick={() => add()}>add</button>*/}

        </>;
    }
}

export default connect((state:any) => (state))(AppStore);
