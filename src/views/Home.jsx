import React from 'react';

export default class Home extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
           <h1 onClick={() => this.gouwenjie(111)}>2131231</h1>
        );
    }
    gouwenjie (data) {
        console.log(this)
    }
}

