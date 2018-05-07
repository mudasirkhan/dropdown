import React, { Component } from 'react';
import './App.css';
import cancel from './assets/cancel.svg';


class DropdownWithAdd extends Component {
    constructor (props){
        super(props);
        this.state={
            options:[],
            value: '',
            show: false
        }
        this.placeholder = 'Country of Incidence'
    }
    componentDidMount() {
        this.setState({ options: this.props.options })
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter' ){
            if(event.target.value.length>0) {
                this.setValue(event);
            }
        }
        if( event.target.value.length > 0) {
            var a = this.state.options.filter(option => option.includes(event.target.value))
            this.setState({options: a})
        } else {
            this.setState({options: this.props.options})
        }
    }
    renderDropdownOptions = (options) => {
        return options.map( option => <li key={Math.random()+option} onClick={this.selectOption.bind(this,option)} className={'drop-down-option'}>
            {option}
        </li>)
    }
    selectOption(option) {
        console.log(option)
        this.setState({ value: option,  show: false })
    }
    showDropdown = () => {
        this.setState({show:true, value: '', options: this.props.options})
    }
    reset = () => {
        this.setState({value: ''})
    }
    setValue = (e) => {
        console.log(e.nativeEvent)
        e.preventDefault()
        this.props.onOptionAdd(e.target.value)
       this.setState({ value: e.target.value, show: false , options: this.props.options})

    }
    render() {
        return (
            <div className="dropdown-wrap">
                <div className="dropdown">
                    <div className="drop-down-instigator" onClick={this.showDropdown}>
                        <div className={this.state.value || this.state.show?'placeholderSmall':'placeholder'}>{this.placeholder}</div>
                        { this.state.value ? this.state.value : this.state.show && <input type="text" autoFocus={true} onKeyPress={this.handleKeyPress} onChange={this.handleKeyPress} /> }
                    </div>
                    {this.state.value && <div className="remove-btn" onClick={this.reset}>
                            <img src={cancel} alt="Remove"/>
                    </div>}

                    {this.state.show && <div className="drop-down">
                        <ul className="country-list">
                            <li className={'drop-down-option'} style={{ marginTop: 12 }}> {this.state.options.length} items in the list</li>
                            {this.renderDropdownOptions(this.state.options)}
                        </ul>
                    </div> }
                </div>
            </div>
        );
    }
}
export default DropdownWithAdd;
