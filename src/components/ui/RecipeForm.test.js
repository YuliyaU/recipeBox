import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {RecipeForm} from './RecipeForm';

describe('RecipeForm', () => {
    it('returns form', () => {
        const wrapper = mount(<RecipeForm />);
    });
});