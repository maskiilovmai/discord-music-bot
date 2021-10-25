module.exports = (client, message, queue, playlist) => {
    message.channel.send({
        embed: {
            color: 'BLUE',
            author: { name: `${playlist.title} đã được thêm vào hàng chờ (**${playlist.tracks.length}** songs) !` },
            //footer: { text: 'Sakura được hoạt động với vai trò là BOT phát nhạc miễn phí theo yêu cầu của người dùng' }, //If you want footer, just delete "//"
            
            timestamp: new Date(),
            description: 'Thời lượng: ' + track.duration + " phút, yêu cầu bởi: " + track.requestedBy.username,
            thumbnail: { url: track.thumbnail },

        },
    });
    
    setTimeout(() => {  message.delete(embed); }, 100);
};