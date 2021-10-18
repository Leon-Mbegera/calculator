import React from 'react'

const ButtonPanel = props => {

  const group1 = ['AC', '+/-', '%', '÷']
  const group2 = ['7', '8', '9', 'x']  
  const group3 = ['4', '5', '6', '-']  
  const group4 = ['0', '.', '=']  

  return(
    <div>
      <div>{group1[0], group1[1], group1[2], group1[3]}</div>
      <div>{group2[0], group2[1], group2[2], group2[3]}</div>
      <div>{group3[0], group3[1], group3[2], group3[3]}</div>
      <div>{group4[0], group4[1], group4[2]}</div>
    </div>
  ) 
}