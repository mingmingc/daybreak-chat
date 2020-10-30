import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import '../setupTests';
import Dashboard from '../components/Dashboard';
import DashboardChatList from '../components/DashboardChatList';

jest.mock('../components/Dashboard'); 
jest.mock('../components/DashboardChatList'); 

it('invokes `componentDidMount` when mounted', () => {
    jest.spyOn(Dashboard.prototype, 'componentDidMount');
    shallow(<Dashboard />);
    expect(Dashboard.prototype.componentDidMount).toHaveBeenCalled();
    Dashboard.prototype.componentDidMount.mockRestore();
});

const testChannels = [
    { members: [
            { name: "testFriend", url: "" },
            { name: "testFriend1", url: "" }
        ]
    },
    { members: [
            { name: "testFriend2", url: "" },
            { name: "testFriend3", url: "" }
        ]
    }
]

describe('getChannels', () => {
    const wrapper = shallow(<Dashboard />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'getChannels');
    instance.componentDidMount();
    it('calls `getChannels` when mounted', () => {
        expect(instance.getChannels).toHaveBeenCalled();
    });
    it('returns promise', () => {
        expect(instance.getChannels).toHaveReturned();
    });
});

;

// describe('Render all channels', () => {
//     test('it should render expected number of channels', () => {
//         shallow(<Dashboard channels={testChannels}><DashboardChatList /></Dashboard>);
//         expect(document.querySelectorAll('.chat').length).toBe(testChannels.length)
//     });
// });