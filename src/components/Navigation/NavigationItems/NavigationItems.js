import React from 'react'

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    ) : (
      <React.Fragment>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/logout">Log Out</NavigationItem>
      </React.Fragment>
    )}
  </ul>
)

export default navigationItems
