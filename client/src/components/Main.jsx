import React from 'react'
import classes from './Main.module.css'
import {Link, Outlet, useNavigate} from 'react-router-dom'

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className={classes.main}>
      <div><Link className={classes.link} onclick={()=>{navigate('/')}}>🏠︎</Link></div>
      <div><Link className={classes.link} onclick={()=>{navigate('/activities')}}>🗣</Link></div>
      <div><Link className={classes.link} onclick={()=>{navigate('/emotion')}}>🎭</Link></div>
      <div><Link className={classes.link} onclick={()=>{navigate('/reminder')}}>⏱️</Link></div>
      <div><Link className={classes.link} onclick={()=>{navigate('/analytics')}}>📶</Link></div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
