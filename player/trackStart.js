function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = (client, message, track) => {	
	embed = message.channel.send({
		embed: {
			color: 'BLUE',
			author: { name: `Playing: ${track.title} in channel: ${message.member.voice.channel.name}` },
			footer: { text: 'This bot is used as a free to use playing music bot' },
				
			timestamp: new Date(),
			description: 'Duration: ' + track.duration + " minutes, requested by: " + track.requestedBy.username,
			thumbnail: { url: track.thumbnail },
		},
	});

	setTimeout(() => {  message.delete(embed); }, 100);
};
