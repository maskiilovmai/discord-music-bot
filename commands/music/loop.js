module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) {
            return message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name:`Bạn không có ở trong kênh thoại !` },
                    timestamp: new Date(),
                },
            });
        }

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            return message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: `Bạn không có ở trong cùng kênh thoại !` },
                    timestamp: new Date(),
                },
            });
        }

        if (!client.player.getQueue(message)){ 
            return message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: `Hiện tại không có bài hát đang phát !` },
                    timestamp: new Date(),
                },
            });
        }
        
        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send({
                    embed: {
                        color: 'RANDOM',
                        author: { name: `Chế độ lặp lại tất cả đã vô hiệu hóa !` },
                        timestamp: new Date(),
                    },
                });
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send({
                    embed: {
                        color: 'RANDOM',
                        author: { name: `Chế độ lặp lại tất cả đã được bật, toàn bộ hàng chờ sẽ được lặp lại liên tục ! !` },
                        timestamp: new Date(),
                    },
                }); 
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send({
                    embed: {
                        color: 'RANDOM',
                        author: { name: `Lặp lại đơn bài hát đã vô hiệu hóa !` },
                        timestamp: new Date(),
                    },
                });             
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send({
                    embed: {
                        color: 'RANDOM',
                        author: { name: `Chế độ lặp lại đã được bật, bài hát hiện tại sẽ được lặp lại liên tục !` },
                        timestamp: new Date(),
                    },
                }); 
            };
        };
    },
};