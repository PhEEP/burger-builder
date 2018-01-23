import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map((control, i) => {
        return <BuildControl
          label={control.label}
          key={control.label}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)} 
          disabled={props.disabled[control.type]} />
      })}
    </div>
);


export default buildControls;