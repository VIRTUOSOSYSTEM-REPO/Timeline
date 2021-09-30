import React, { Component } from 'react'
import './Chart.css'

class Card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             width: "",
             left: "",
        }
    }
    componentDidMount () {
        this.Calculate();
    }
   Calculate = () =>{
    const date1 = new Date('7/1/2021');
    const date2 = new Date('7/7/2021');
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const diff = diffDays *84;
    this.setState({width : diff})
    const startDate = 3 * 81;
    this.setState({left : startDate})
   }
    
    render() {
        const {width, left} = this.state;
        return (
        <div >
            <div className="card" style={{left: left}}>
                <button style={{height: "50px", width: width}} className="btn btn-primary">PD 123</button>
            </div>
        </div>
        )

    }
}
export default Card;    

