import React, { Component } from 'react';
export default class SortList extends Component {
    constructor(props) {
        super(props);
        this.sorted = {name: true};
    }

    sort(type) {
        const {update, data} = this.props;
        const isSorted = this.sorted[type];
        let direction = isSorted ? 1 : -1;
        const sorted = [].slice.call(data).sort((x, y) => {
            if (x[type] === y[type]) return 0;
            return x[type] > y[type] ? direction : direction * -1;
        });
        this.sorted[type] = !isSorted;

        update({
            data: sorted,
            active: 0
        });
    }


    reset() {
        this.props.update({
            data: this.props.initialData
        })
    }

    render() {
        return (
            <div className="sortable">
                <button className="btn" onClick={() => (this.sort('caption'))}>Sort</button>
                <button className="btn" onClick={() => this.reset.bind(this)}>Reset</button>
            </div>
        )
    }

}