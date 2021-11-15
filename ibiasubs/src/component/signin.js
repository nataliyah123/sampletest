import React from 'react';
import axios from 'axios';

class Signin extends React.Component {

	state ={
		custdata: Array,
		id: Number,
		Username: String,
		error: null
	};

	componentDidMount = async () => {
	    try {
	      const response = await axios.get('http://localhost:8000/api/customers');
	      this.setState({ custdata: response.data });
	    } catch (error) {
	      this.setState({ error });
	    }
	 };

	
	//handleInputChange = (id_inp, Username_inp) => {

		//this.setState({
			
			//id : id_inp,
			//Username : Username_inp	
		//});

	//}

	//handleSubmit = async e => {
    	  // e.preventDefault();
	  //  let url = 'http://localhost:8000/api/customers/:' + this.state.id;	
	  //  try {
      	  //	const response = await axios.get(url).then(res 			=>{ this.setState({ custdata: res.data });console.log(' am res',res.data)}).catch(err => {console.log('axios error',err)});
      		
		
    	//} catch (error) {
      	//	this.setState({ error });
    	//}
	  

       render(){
	   	
		return(
			<div className = 'signIn'>
				<form onSubmit={this.handleSubmit}>
					<label>
					    Name:
					    <input
					      type="number"
					      name="id_inp"
					      onChange={this.handleInputChange}
					      value = {this.state.id} />
					</label>
					<label>
					    Name:
					    <input
					      type="text"
					      name="name"
					      onChange={this.handleInputChange}
					      value = {this.state.name} />
					</label>
					<button type="submit">Submit</button>	
				</form>
		        </div>
		)
	
	}



}

export default Signin
