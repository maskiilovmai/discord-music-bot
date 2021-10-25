module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Đã thêm bài hát mới vào hàng chờ`},
            description: "**Bài hát:** ["+track.title+"]("+track.url+")",
			//footer: { text: 'Sakura được hoạt động với vai trò là BOT phát nhạc miễn phí theo yêu cầu của người dùng' }, //If you want footer, just delete "//"

            fields: [
                { name: 'Thời lượng', value: track.duration + " phút", inline: true },
                { name: 'Yêu cầu bởi', value: track.requestedBy.username, inline: true },
             ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
        },
    });

    setTimeout(() => {  message.delete(embed); }, 100);
};