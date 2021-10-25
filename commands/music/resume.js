module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không có trong kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không có trong cùng kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện tại không có bài hát đang phát !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Bài hát đã sẵn sàng phát !`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Bài hát ${client.player.getQueue(message).playing.title} đã tiếp tục !`);
    },
};