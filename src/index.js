import React from 'react';
import ReactDom from 'react-dom';
import './style.css';


function buttonText(){
	return 'Click on Me!';

}
const App = function(){
const buttonTextnone = {text: 'None',text2: 'noom'};

	return (
	  <div>
  <label className="label" htmlFor="name">Enter Name</label>
  <input id="name" type="text"/>
		  <button style={{backgroundColor: 'blue', color:'white'}}>
		      {buttonText()}
		  </button>
		  <br/>
		  <label className="label" htmlFor="age">Age</label>
<input id="age" type="text"/>
		  <button style={{backgroundColor:'Pink', color: 'white'}}>
		   {buttonTextnone.text}
		  </button>

</div>
	  );
	  };

ReactDom.render(<App />, document.querySelector('#root'));