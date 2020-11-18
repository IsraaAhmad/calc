import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import React from 'react';

class App extends React.Component {
  state={
    res:0,opar:'+',number1:0,number2:0
  }
  
  ac = (e) =>{
    document.getElementById('result').innerHTML=0;
    this.setState({res:0})
    this.setState({number1:0})
    this.setState({number2:0})
      
  };
  cv = (e) =>{
    const value=e.target.value;
    var q = this.state.number1;
    q = q*10;
    let toint = parseInt(value, 10);
    q=q+toint;
    this.setState({number1:q})
  document.getElementById('result').innerHTML = q;

};
 
  munis = (e) =>{
    this.setState({opar:'-'})
    if(this.state.res===0)
    {this.setState({number2:this.state.number1})}
    else this.setState({number2:this.state.res})
      this.setState({number1:0})
  };
  plus = (e) =>{
    this.setState({opar:'+'})
    if(this.state.res===0)
  {this.setState({number2:this.state.number1})}
  else this.setState({number2:this.state.res})
    this.setState({number1:0})
    
      
};
div = (e) =>{
  this.setState({opar:'/'})
  if(this.state.res===0)
  {this.setState({number2:this.state.number1})}
  else this.setState({number2:this.state.res})
    this.setState({number1:0})
};
perc = (e) =>{
  this.setState({opar:'%'})
  var k
  if(this.state.res===0)
  k=this.state.number1
  else
   k = this.state.res
  k = k/100;
  this.setState({res:k})
  document.getElementById('result').innerHTML = k;
};
mul = (e) =>{
  this.setState({opar:'*'})
  if(this.state.res===0)
  {this.setState({number2:this.state.number1})}
  else this.setState({number2:this.state.res})
    this.setState({number1:0})
    
};
eq = (e) =>{
  const {number1,number2,res,opar} = this.state;
  let a =res;
  
 if(opar==="+"){
   a=number1+number2;
  this.setState({res:a})}
  else if(opar==="-") {
    if(res===0)
     a=number1-number2;
     else a=number2-number1;
    
    this.setState({res:a})

  }
  else if(opar==="*") {
    
    a=number1*number2;
   
   this.setState({res:a})

 }

 else if(opar==="/") {
   
      a=number2/number1;
   

  
  this.setState({res:a})

}

 console.log(a);

 

 

document.getElementById('result').innerHTML = a;

  
};



  render(){

    return (
      <div className="lc">
       
        
      <p className="label" value="0" id='result'>123</p>
      <table className="table" >

      <tr>
    <td> <Calculater className="bAC"  value="AC" func={this.ac} ></Calculater></td>
     <td><Calculater className="bpm" value="+/-" func={this.ac}></Calculater></td>
    <td><Calculater className="bmod" value="%" func={this.perc}></Calculater></td>
     <td><Calculater className="bdiv" value="÷" func={this.div}></Calculater></td>
     </tr>


        <tr>
    <td> <Calculater className="seven"  value="7" name="ac" func={this.cv}></Calculater></td>
     <td><Calculater className="eight" value="8" name="ac" func={this.cv}></Calculater></td>
    <td><Calculater className="nine" value="9" name="ac" func={this.cv}></Calculater></td>
     <td><Calculater className="mult" value="×" name="ac" func={this.mul} ></Calculater></td>
     </tr>

     <tr>
    <td> <Calculater className="four"  value="4" name="ac" func={this.cv}></Calculater></td>
     <td><Calculater className="five" value="5" name="ac" func={this.cv}></Calculater></td>
    <td><Calculater className="six" value="6" name="ac" func={this.cv}></Calculater></td>
     <td><Calculater className="minus" value="-" name="ac" func={this.munis}></Calculater></td>
     </tr>

     <tr>
    <td> <Calculater className="one"  value="1" name="ac" func={this.cv}></Calculater></td>
     <td><Calculater className="two" value="2" name="ac" func={this.cv}></Calculater></td>
    <td><Calculater className="three" value="3" name="ac" func={this.cv}></Calculater></td>
     <td><Calculater className="plus" value="+" name="ac" func={this.plus}></Calculater></td>
     </tr>

   

     <tr>
     <td colSpan="2"> <Calculater className="zero"  value="0" name="ac" func={this.cv}></Calculater></td>
    <td><Calculater className="dot" value="." name="ac"></Calculater></td>
     <td><Calculater className="equal" value="=" name="ac" func={this.eq}></Calculater></td>
     </tr>
     </table>
    
    </div>
    );
  }
}

function Calculater (props){
  const{className,value,func}=props;
  
  
  return(
    <div className="app">
  
  <button className={className} onClick={func} value={value}>{value} </button>
      
  </div>
     
  );
}
export default App;
