import Sendbird from 'sendbird';
import { USER_ID } from './const';

export function _getSbInstance() {
    return Sendbird.getInstance();
}

export function createNewChannel(friendId) {
    const sb = _getSbInstance();
    let params = new sb.GroupChannelParams();
    params.isPublic = false;
    params.isDistinct = true;
    params.addUserIds([USER_ID, friendId])

    sb.GroupChannel.createChannel(params, function(groupChannel, error) {
        if (error) {
            return;
        }
    });
}