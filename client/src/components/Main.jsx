import React from 'react'
import classes from './Main.module.css'
import {Link, Outlet} from 'react-router-dom'

export default function Main() {
  return (
    <div className={classes.main}>
      <div><Link className={classes.link} to = '/'>🏠︎</Link></div>
      <div><Link className={classes.link} to = '/activities'>🗣</Link></div>
      <div><Link className={classes.link} to = '/emotion'>🎭</Link></div>
      <div><Link className={classes.link} to = '/reminder'>⏱️</Link></div>
      <div><Link className={classes.link} to = '/analytics'>📶</Link></div>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
