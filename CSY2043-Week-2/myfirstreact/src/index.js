import React from 'react';
import ReactDOM from 'react-dom';

class student extends React.Component {
    render(){
        return <h2> im a student </h2>;
    }
}


ReactDOM.render(<student />, document.getElementById('root'));