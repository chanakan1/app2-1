import React from 'react'
import {Myimage, Myabout,Mydata} from './func-mydata'
import MsgBox from './func-props'
import Caledar from './class-components'
import { Navber } from './func-components'
import MsgBox2 from './class-props'
import List from './list-comp'



function App() {

  return (<List/>)

 // return   [<Navber/>,<Myabout/>,<Myimage/>,<Mydata/>,<Caledar/>,<MsgBox/>,<MsgBox2/>]
  
/*return(
  <MsgBox2 
  text="Useing props in function component"
  color="red"
  bgColor="#ccc"
  fontSize="16px"
  border="dotted 1px black"
  />
)*/

}

export default App;