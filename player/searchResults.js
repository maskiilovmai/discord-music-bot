module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `Đây là kết quả tìm kiếm cho ${query}` },
            //footer: { text: 'This bot is used as a free to use playing music bot' }, //If you want footer, just delete "//"
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};