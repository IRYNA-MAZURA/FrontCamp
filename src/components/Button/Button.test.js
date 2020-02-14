import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Button } from './Button';

const props = {
    type: 'main', 
    isActive: true,  
    text: 'text', 
    handleClick: jest.fn()
}

describe('Button component', () => {
    it('snapshot', () => { 
        const wrapper = renderer.create(<Button {...props} />).toJSON();       
        expect(wrapper).toMatchSnapshot();
    });

    it('action testing', () => {
        const wrapper = shallow(<Button {...props} />);
        wrapper.find('button').first().simulate('click');
        expect(props.handleClick).toHaveBeenCalled();
    });
});