import React from 'react';
import {renderWithThemeWrapper} from '../../utils/test';
import Plane from './Plane';

describe('Plane component', ()=>{
  it('should render the alive plane when gameOver is false', () =>{
    const {container} = renderWithThemeWrapper(<Plane position={0} gameOver={false}/>);
    expect(container.querySelector('img').src).toContain("Fly.png")
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the dead plane when gameOver is true', () =>{
    const {container} = renderWithThemeWrapper(<Plane position={0} gameOver={true}/>);
    expect(container.querySelector('img').src).toContain("Dead.png")
  })


})