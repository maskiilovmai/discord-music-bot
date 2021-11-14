module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không có trong kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không có trong cùng kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện tại không có bài hát đang phát !`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'RANDOM',
                author: { name: `Thông tin về bài hát hiện tại` },
                description: "**Bài hát:** ["+track.title+"]("+track.url+")",
                //footer: { text: 'This bot is used as a free to use playing music bot' }, //If you want footer, just delete "//"
                fields: [
                    { name: 'Kênh', value: track.author, inline: true },
                    { name: 'Yêu cầu bởi', value: track.requestedBy.username, inline: true },
                    { name: 'Từ danh sách', value: track.fromPlaylist ? 'Có' : 'Không', inline: true },

                    { name: 'Lượt xem', value: track.views, inline: true },
                    { name: 'Thời lượng', value: track.duration, inline: true },
                    { name: 'Filter đã kích hoạt', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Âm lượng', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Chế độ lặp lại', value: client.player.getQueue(message).repeatMode ? 'Có' : 'Không', inline: true },
                    { name: 'Đã tạm dừng', value: client.player.getQueue(message).paused ? 'Có' : 'Không', inline: true },

                    { name: 'Thanh tiến trình', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};