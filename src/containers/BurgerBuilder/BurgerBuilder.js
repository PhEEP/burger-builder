import React, { Component } from 'react';
import Ox from '../../hoc/Ox';
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {...}
  // }
  
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }

  render () {
    return (
      <Ox>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Ox>
    );
  }
}

export default BurgerBuilder;