import { react, Component, Fragment} from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Homepage from './component/homepage'
import User from './component/user'
//import Signin from './component/signin'

class App extends Component{
  render(){
	  return(			
			<Fragment>
			
			<Router>	
				 <Routes>
				   <Route path = '/' exact element={ <Homepage/> }/>
				   <Route path = '/customers' element = {<User/>} />
				   //<Route path = '/signin'> {loggedIn ? <Redirect to="/show" /> : <Signin />}
				 </Route>		
				 </Routes>
			</Router>	
			</Fragment>
		)
	}
}

export default App 
