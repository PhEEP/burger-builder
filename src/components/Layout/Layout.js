import React from 'react';
import Ox from '../../hoc/Ox';
import classes from './Layout.css';

const layout = ( props ) => (
  <Ox>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Ox>
);

export default layout;