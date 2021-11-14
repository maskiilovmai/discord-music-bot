module.exports = {
    name: 'join',
    description: 'Tham gia kênh thoại',
    aliases: ['j'],
    category: 'Music',
    utilisation: '{prefix}join',
    // run: async (client, message, args, { GuildDB }) => {

    //     if (!message.member.voice.channel) return; //u cant try disconnect without entering a vc

    //     message.member.voice.channel.leave(); //Leave the voice channel
    //     message.channel.send("Đã cút khỏi kênh thoại!")
    // }
    execute(client, message) {
        if (!message.member.voice.channel) 
        return message.channel.send("Vui lòng tham gia kênh thoại trước");

        message.member.voice.channel.join();
        message.channel.send("Đã tham gia kênh thoại!")
    }
}