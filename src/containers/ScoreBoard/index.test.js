import React from 'react'
import {shallow} from 'enzyme'
import ScoreBoard from '.'

describe('Score Board Container Component', () => {
    it('It should render without error', () => {
        const wrapper = shallow(<ScoreBoard />)
        const classes = wrapper.find('.score-board-container');

        expect(classes.length).toBe(1)
    })

})