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
    }


    componentWillReceiveProps(props) {
        if (props !== this.props) {
            console.log('Update props---->>', props)
        }
    }

    onChange(e:any) {
        // console.log('_-', e.target.files)

        const a = {
            text: 'asfasdfasdf'
        }

        fileadd({
            ...e.target.files,
            ...a
        })
    }

    render() {

        // console.log('Store----', this.props)

        return <>
            {/*<button onClick={() => add()}>add</button>*/}
            <form>
                <input type="file" multiple={true}
                    onChange={(data:any) => this.onChange(data)}
                />
                <button type="submit">sdfasdf</button>
            </form>
        </>;
    }
}

export default connect((state:any) => (state))(AppStore);
