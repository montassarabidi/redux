import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from './features/User'
function Login() {
    const dispatch = useDispatch()
  return (
    <div>
    <button
    onClick={()=>dispatch(login({email:"h@tt.tn",nom:"montassar",pro:"abidi",adress:"gafsa"}))}
    
    >se connecter !</button>
    </div>
  )
}

export default Login