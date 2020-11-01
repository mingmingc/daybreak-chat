import Sendbird from 'sendbird';

function Connect(sbAppId, sbUserId) {
    let sb = new Sendbird({appId: sbAppId});
    sb.connect(sbUserId, function(user, error) {
        if (error) {
            console.log(error);
            return;
        }
    });
}

export default Connect;