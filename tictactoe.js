import React from 'React';
class Square extends React.Component {
    render(){
        return (
            <button className='square'>{this.props.value}</button>
        )
    }
}

class Boad extends React.Component{
    renderSquere(i){
        return <Square value ={i}/>
    }
    render(){
        const status ="next player";
        return(
            <div>
                <div className='status'>{status}</div>
            </div>
        )
    }
}