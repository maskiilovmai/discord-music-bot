module.exports = {
    name: 'filter',
    aliases: ["fil"],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Bạn không có trong kênh thoại !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Bạn không có trong cùng kênh thoại !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Hiện tại không có bài hát đang phát !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Vui lòng chọn một Filter hợp lệ để bật hoặc tắt !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Filter này không hợp lệ, hãy thử lại (VD: 8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Tôi **đang thêm** filter vào bài hát, vui lòng đợi... Lưu ý : Quá trình này có thể nhanh hay chậm tùy theo đội dài của bài hát.`);
        else message.channel.send(`${client.emotes.music} - Tôi **ĐANG LOẠI BỎ** filter này ra khỏi bài hát, vui lòng đợi... Lưu ý : Quá trình này có thể nhanh hay chậm tùy theo độ dài của bài hát.`);
    },
};