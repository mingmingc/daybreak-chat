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

it('invokes `componentDidMount` when mounted', () => {
    jest.spyOn(Dashboard.prototype, 'componentDidMount');
    shallow(<Dashboard />);
    expect(Dashboard.prototype.componentDidMount).toHaveBeenCalled();
    Dashboard.prototype.componentDidMount.mockRestore();
});

it('calls getChannels when mounted', () => {
    const spy = jest.spyOn(Dashboard.prototype, 'getChannels');
    const wrapper = mount(<Dashboard />);
    wrapper.instance().getChannels();
    expect(spy).toHaveBeenCalled();
})

// describe('DashboardChatList', () => {
//     it('renders <DashboardChatList />', () => {

//     })
// })




// describe('getChannels', () => {
//     const spy = jest.spyOn(Dashboard.prototype, 'getChannels');
//     const wrapper = mount(<Dashboard />);
//     wrapper.instance().getChannels();
    
//     it('calls `getChannels` when mounted', () => {
//         expect(spy).toHaveBeenCalled();
//     });
    // it('returns promise', () => {
    //     expect(spy).toHaveReturned();
    // });

//     afterEach(() => {
//         spy.mockClear()
//     })
// });



//****ADD TO DashboardChatList component instead
// describe('Render all channels', () => {
//     const testChannels = [
//         { members: [
//                 { name: "testFriend", url: "" },
//                 { name: "testFriend1", url: "" }
//             ]
//         },
//         { members: [
//                 { name: "testFriend2", url: "" },
//                 { name: "testFriend3", url: "" }
//             ]
//         }
//     ]
//     test('it should render expected number of channels', () => {
//         shallow(<Dashboard channels={testChannels}><DashboardChatList /></Dashboard>);
//         expect(document.querySelectorAll('.chat').length).toBe(testChannels.length)
//     });
// });