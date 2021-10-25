module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Nhạc đã dừng lại vì trong kênh thoại không còn thành viên !`);
};