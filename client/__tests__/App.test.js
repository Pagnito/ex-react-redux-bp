import '../setupTests';
import App from '../src/App';
import Home from '../src/components/Home/Home';
import {mount, shallow} from 'enzyme'; 
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
let wrapper;
beforeEach(()=>{
  wrapper = mount(<Router><App /></Router>);
})
it('Renders Home component', ()=>{
  expect(wrapper.find(Home).length).toEqual(1)
})