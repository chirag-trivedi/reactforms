import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {participate: ''}
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === 'roll_no') {
            if (!Number(val)) {
                alert("Please enter a number")
            }
        }

        this.setState({[nam]: val});
    }

    submitHandler = (event) => {
        event.preventDefault();
        alert(this.state.participate + " " + "registered");
    }

    render() {
        let header = '';

        if (this.state.participate) {
            header = <h1>Thanks for registering {this.state.participate}</h1>
        }
        return (
            <form onSubmit={this.submitHandler}>
                {header}
                
                <p> Register Yourself:</p>
                <div>
                <input type="text" name="participate" onChange={this.changeHandler}/>
                </div>
                <div>
                <input type="text" name="roll_no" onChange={this.changeHandler}/>
                </div>
                <input type="submit"/>
            </form>
        )
    }
}

export default Form;