import React,{Component} from 'react';

class Gugudan extends Component{
    constructor(props){
        super(props);
        //state안에는 바뀌는 것들
        this.state ={
            firstNum : Math.ceil(Math.random()*9),
            secondNum : Math.ceil(Math.random()*9),
            value : '',
            result : ''
        }
    }

    render(){
        return(
            <div>
                <p>{this.state.firstNum} * {this.state.secondNum} ? </p>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    if(parseInt(this.state.value) === this.state.firstNum * this.state.secondNum){
                        this.setState({
                            result : '정답입니다',
                            firstNum : Math.ceil(Math.random()*9),
                            secondNum : Math.ceil(Math.random()*9),
                            value : '',
                        })
                        }else{
                            this.setState({
                                result : '틀렸습니다',
                                firstNum : Math.ceil(Math.random()*9),
                                secondNum : Math.ceil(Math.random()*9),
                                value : '',
                            })
                    }
                }}>
                    <input type="number" value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})}/>
                    <button>입력!</button>
                </form>
                <p>{this.state.result}</p>
            </div>
        );
    }
}

export default Gugudan;