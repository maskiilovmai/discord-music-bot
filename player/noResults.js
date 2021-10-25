module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Không tìm thấy kết quả trên YouTube cho ${query} !`);
};