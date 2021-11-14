module.exports = {
    name: 'join',
    description: 'Tham gia kênh thoại',
    aliases: ['j'],
    category: 'Music',
    utilisation: '{prefix}join',

    execute(client, message) {
        if (!message.member.voice.channel) 
        return message.channel.send("Vui lòng tham gia kênh thoại trước");

        message.member.voice.channel.join();
        message.channel.send("Đã tham gia kênh thoại!")
    }
}