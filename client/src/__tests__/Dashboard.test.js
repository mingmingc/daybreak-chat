import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { cleanup } from '@testing-library/react';
import '../setupTests';
import Dashboard, { getChannels } from '../components/Dashboard';
import DashboardChatList from '../components/DashboardChatList';

jest.mock('../components/Dashboard'); 
afterEach(cleanup); 

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
})

it('calls getChannels when mounted', () => {
    const spy = jest.spyOn(Dashboard.prototype, 'getChannels');
    const wrapper = mount(<Dashboard />);
    wrapper.instance().getChannels();
    expect(spy).toHaveBeenCalled();
})