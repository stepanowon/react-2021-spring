import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Calc extends Component {
    render() {
        let result = 0;
        switch(this.props.oper) {
            case "+" :
                result = parseFloat(this.props.x) + parseFloat(this.props.y)                
                break;
            case "*" : 
                result = parseFloat(this.props.x) * parseFloat(this.props.y);               
                break;
            default :
                result = 0;
        }

        return (
            <div>
                <h3>연산 방식 : { this.props.oper }</h3><hr />
                <div>
                    {this.props.x} {this.props.oper} {this.props.y} = {result}
                 </div>
            </div>
        );
    }
}

Calc.propTypes = {
    x : PropTypes.number,
    y : PropTypes.number,
    oper : (props, propName, componentName) => {
        if (props[propName] !== "+" || props[propName] !== "*") {
            return new Error(propName + " 속성의 값은 반드시 '+', '*'만 허용합니다.");
        }
    }
};

Calc.defaultProps = {
    x : 100,
    y : 200,
    oper : "+"
}


export default Calc;
