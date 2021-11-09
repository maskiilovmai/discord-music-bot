function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = (client, message, track) => {	
	embed = message.channel.send({
		embed: {
			color: 'BLUE',
            author: { name: `Phát nhạc trong kênh: ${message.member.voice.channel.name}` },
            description: "**Bài hát:** ["+track.title+"]("+track.url+")",
			//footer: { text: 'Sakura được hoạt động với vai trò là BOT phát nhạc miễn phí theo yêu cầu của người dùng' }, //If you want footer, just delete "//"
			
            fields: [
                { name: 'Kênh', value: track.author, inline: true },
                { name: 'Thời lượng', value: track.duration + " phút", inline: true },

                { name: 'Lượt xem', value: track.views, inline: true },
                { name: 'Yêu cầu bởi', value: track.requestedBy.username, inline: true },
             ],
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
		},
	});

	setTimeout(() => {  message.delete(embed); }, 100);
};
