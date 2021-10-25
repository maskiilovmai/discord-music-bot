module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Nhạc đã được dừng vì tôi đã bị ngắt kết nối !`);
};