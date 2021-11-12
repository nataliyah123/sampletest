import { react, Component, Fragment} from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Homepage from './pages/homepage'
import Login from './pages/login'
import User from './pages/user'

class App extends Component{
  render(){
	  return(			
			<Fragment>
			<h2>ru run</h2>
			<Router>	
				 <Routes>
				   <Route path = '/' exact element={ <Homepage/> }/>		
				   <Route path= '/login' element={ <Login/> }/>	
				   <Route path = '/api/customers' element = {<User/>} />	
				 </Routes>
			</Router>	
			</Fragment>
		)
	}
}

export default App 
