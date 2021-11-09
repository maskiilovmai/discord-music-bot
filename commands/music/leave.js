module.exports = {
    name: 'leave',
    description: 'Rời khỏi kênh thoại',
    aliases: ['quit'],
    category: 'Music',
    utilisation: '{prefix}leave',
    // run: async (client, message, args, { GuildDB }) => {

    //     if (!message.member.voice.channel) return; //u cant try disconnect without entering a vc

    //     message.member.voice.channel.leave(); //Leave the voice channel
    //     message.channel.send("Đã cút khỏi kênh thoại!")
    // }
    execute(client, message) {
        if (!message.member.voice.channel) return;

        message.member.voice.channel.leave();
        message.channel.send("Đã rời khỏi kênh thoại!")
    }
}