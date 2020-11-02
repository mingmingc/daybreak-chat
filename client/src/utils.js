import Sendbird from 'sendbird';
import { USER_ID } from './const';

export function getSbInstance() {
    return Sendbird.getInstance();
}

export function createNewChannel(friendId) {
    const sb = getSbInstance();
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