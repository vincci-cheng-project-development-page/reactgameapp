import { NavLink } from 'react-router-dom';
import {Component} from 'react'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

export default class Navbar extends Component {
  render(){
  return (
    <div>
      <NavLink to="/" style= {link} activeStyle={{
            background: 'darkblue'
          }}>Home</NavLink>
      <NavLink to="/playnow" style= {link} activeStyle={{
            background: 'darkblue'
          }}>Play Now!</NavLink>
      <NavLink to="/favorites" style= {link} activeStyle={{
            background: 'darkblue'
          }}>See Favorites</NavLink>
    </div>
  )
}}
