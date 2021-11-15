import { react, Component } from 'react'
import axios from 'axios'

class User extends Component{

	state = {
		Customers : [],
		error: null
	};
	
	componentDidMount = async() =>{
	  try {
      		const response = await axios.get('http://localhost:8000/api/Customers').then(res 			=>{ this.setState({ Customers: res.data });console.log(' am res',res.data)}).catch(err => {console.log('axios error',err)});
      		
		
    	} catch (error) {
      		this.setState({ error });
    	}
	  	
  }	

  render() {	
	var  Customers  = this.state.Customers;
	
	return(
		<div className = 'users'>
		   <h2>I am customer</h2>	
		   <ul>
			  {Customers.map(cust => (
			    <li key={cust.id}>{cust.Username}</li>
			  ))}
		   </ul>
		</div>
	)

	}
}

export default User
