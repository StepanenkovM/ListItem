import React, { Component } from 'react';
import load from './load';
import PharmacyList from './PharmacyList';
import ActivePharmacy from './ActivePharmacy';
import SortList from "./SortList";
import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [{"caption":"Open"},
                {"caption":"OpenNew", "address":"Open New"},
                {"caption":"ZoomIn", "address":"Zoom In"},
                {"caption":"ZoomOut", "address":"Zoom Out"},
                {"caption":"OriginalView", "address":"Original View"},
                {"caption":"Quality"},
                {"caption":"Pause"},
                {"caption":"Mute"},
                {"caption":"Find", "address":"Find..."},
                {"caption":"FindAgain", "address":"Find Again"},
                {"caption":"Copy"},
                {"caption":"CopyAgain", "address":"Copy Again"},
                {"caption":"CopySVG", "address":"Copy SVG"},
                {"caption":"ViewSVG", "address":"View SVG"},
                {"caption":"ViewSource", "address":"View Source"},
                {"caption":"SaveAs", "address":"Save As"},
                {"caption":"Help"},
                {"caption":"About", "address":"About Adobe CVG Viewer..."}
                   ]
        };
        this.loadData();
    }

    loadData() {
        load(this.props.data).then(pharmacies => {
            this.initialData = JSON.parse(pharmacies);
            this.setState({
                data: this.initialData
            })
        })
    }

    updateData(config) {
        this.setState(config);
    }

    render() {
        return (
            <div className="container">
                <div className="sort-bar column">
                    <SortList initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)}/>
                </div>
                <div className="info-bar column">
                    <ActivePharmacy data={this.state.data} active={this.state.active}/>
                </div>
                <div className="pharmacy-list column">
                    <PharmacyList data={this.state.data} update={this.updateData.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default App;