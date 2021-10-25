module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Không có bài hát nào đang phát trên máy chủ này !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Bạn không kết nối bất kì kênh thoại !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Tôi không thể tham gia kênh thoại của bạn, vui lòng kiểm tra lại quyền của tôi !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} không có ở quốc gia của bạn ! Đang bỏ qua...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Bài hát đang bắt đầu... vui lòng đợi và thử lại!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Có gì đó không ổn ... Error : ${error}`);
    };
};
