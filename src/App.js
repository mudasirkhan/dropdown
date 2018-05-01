import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import DropDownWithAdd from './DropdownWithAdd';
import { addOption } from "./actions";
import cancel from './assets/cancel.svg';

class App extends Component {
    constructor (props){
        super(props);
        this.state={
            loading:true,
            options:[],
            value: '',
            show: false
        }
        this.placeholder = 'Country of Incidence'
    }
    componentDidMount() {
        this.setState({ options: this.props.options})

    }
    componentWillReceiveProps(nextProps){
        this.setState({ options: nextProps.options})

    }
    renderDropdownOptions = (options) => {
        return options.map( option => <li key={Math.random()+option} onClick={this.selectOption.bind(this,option)} className={'drop-down-option'}>
            {option}
        </li>)
    }
    selectOption(option) {
         this.setState({ value: option,  show: false })
    }
    showDropdown = () => {
        this.setState({show:true})
    }
    reset = () => {
        this.setState({value: ''})
    }
    render() {
        return (

            <div className="app">
                <div className="dropdown-second">
                    <DropDownWithAdd onOptionAdd={(arr)=>{this.props.onOptionAdd(arr)}} options={this.props.options}/>
                </div>
                <div className="dropdown-wrap">
                    <div className="dropdown">
                        <div className="drop-down-instigator" onClick={this.showDropdown}>
                            <div className='placeholder'>{this.placeholder}</div>
                            { this.state.value && this.state.value }
                        </div>
                        {this.state.value && <div className="remove-btn" onClick={this.reset}>
                            <object data={cancel} type="image/svg+xml">
                                <img src={cancel} alt="Remove"/>
                            </object>
                        </div>}

                        {this.state.show ? <div className="drop-down">
                            <ul className="country-list">
                                {this.renderDropdownOptions(this.state.options)}
                            </ul>
                        </div> : null}
                    </div>
                </div>

            </div>

        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onOptionAdd: option => {
            dispatch(addOption(option))
        }
    }
}
const mapStateToProps = state => {
    return {
        options: state.options
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
