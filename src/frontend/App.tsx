import * as React from 'react';
import { render } from 'react-dom';


export class App extends React.Component<any, any> {
    folders: any = [];
    constructor(props: any) {
        super(props);
        this.state = {
            folders: []
        }
        for (let i = 1; i < 8; i++) {
            let folder = { name: `folder${i}`, id: i }
            this.folders.push(folder);
        }
    }

    componentDidMount() {
        this.setState({ folders: this.folders })
    }

    render() {
        const loadFolders = () => {
            return (<Folder folders={this.folders} />)
        }
        return (
            <div className="directory">
                {loadFolders()}
            </div>
        )
    }
}

class Folder extends React.Component<any, any> {
    toggle = false;
    clicked: any = [{}];
    constructor(props: any) {
        super(props);
        this.state = { clicked: '' }
        this.openFolder = this.openFolder.bind(this);
        this.props.folders.forEach((folder: any) => {
            this.clicked[folder.id] = { display: 'none', toggle: false };
        });
    }

    openFolder(e: Event, id: string) {
        e.preventDefault();
        this.clicked[id].toggle = !this.clicked[id].toggle;
        if (this.clicked[id].toggle) {
            this.clicked[id] = { display: 'block', toggle: this.clicked[id].toggle };
            this.setState({ clicked: id })
        } else {
            this.clicked[id] = { display: 'none', toggle: this.clicked[id].toggle };
            this.setState({ clicked: id })
        }

    }

    render() {
        return this.props.folders.map((folder: any, key: any) => {
            return (<div style={{ display: 'flex', flexDirection: 'row', marginTop: '1rem' }} key={key}>
                {/* <button onClick={() => this.openFolder(event)}>Click Me</button> */}
                <img src='../../src/assets/right-arrow.png'
                    style={{ width: '1rem', height: '1rem', cursor: 'pointer' }} onClick={() => this.openFolder(event, folder.id)} />
                <div id={folder.id} style={{ color: 'black' }} >{folder.name}fff</div>
                <div style={{ marginTop: '1rem', color: 'red', display: this.clicked[folder.id].display }}>file{folder.id}</div>
            </div>
            )
        })


    }
}
// class File extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.state = { display: this.props.display }
//     }


//     render() {
//         return (<div >{this.props.file}</div>)
//     }
// }

export function start() {
    const rootElem = document.getElementById('main');
    render(<App />, rootElem);
}
