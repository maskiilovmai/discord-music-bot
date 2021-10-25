module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Phản hồi bạn cung cấp không hợp lệ ... Vui lòng gửi lại lệnh !`);
};