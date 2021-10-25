module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Lựa chọn **ĐÃ HỦY BỎ** !`);
    } else message.channel.send(`${client.emotes.error} - Bạn cần nhập số hợp lệ giữa **1** và **${tracks.length}** !`);
};