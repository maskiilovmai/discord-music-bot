module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không có trong kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không có trong cùng kênh thoại !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Vui lòng nhập tiêu đề bài hát cần phát !`);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};