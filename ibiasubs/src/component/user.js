import { react, Component } from 'react'
import axios from 'axios'

class User extends Component{

	state = {
		Customers : [],
		error: null
	}
	
	componentDidMount = async() =>{
	  try {
      		const response = await axios.get('https://localhost:1337/api/customers').then(res =>{console.log(' am res',res)});
      		this.setState({ Customers: response.data });
		console.log('I am not empty',this.state.Customers)
    	} catch (error) {
      		this.setState({ error });
    		}
  	};

  render() {	
	const { error,Customers } = this.state
	if(error){
		console.log('I am errr ibia',error, this.state)
	}
	return(
		<div className = 'users'>
		   <h2>I am customer</h2>	
		   <ul>
			  {this.state.Customers.map(cust => (
			    <li key={cust.id}>{cust.username}</li>
			  ))}
		   </ul>
		</div>
	)

	}
}

export default User
