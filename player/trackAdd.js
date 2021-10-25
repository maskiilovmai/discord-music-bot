module.exports = (client, message, queue, track) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `${track.title} has been added to the queue!` },
            footer: { text: 'This bot is used as a free to use playing music bot' },

            timestamp: new Date(),
            description: 'Duration: ' + track.duration + " minutes, requested by: " + track.requestedBy.username,
            thumbnail: { url: track.thumbnail },
        },
    });

    setTimeout(() => {  message.delete(embed); }, 100);
};