module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) {
            return message.channel.send({
                embed: {
                    color: 'YELLOW',
                    author: { name:`You're not in a voice channel !` },
                    timestamp: new Date(),
                },
            });
        }

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
            return message.channel.send({
                embed: {
                    color: 'YELLOW',
                    author: { name: `You are not in the same voice channel ! Ba-Baka ! ! !` },
                    timestamp: new Date(),
                },
            });
        }

        if (!client.player.getQueue(message)){ 
            return message.channel.send({
                embed: {
                    color: 'YELLOW',
                    author: { name: `No music currently playing ! Ba-Baka ! ! !` },
                    timestamp: new Date(),
                },
            });
        }
        
        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send({
                    embed: {
                        color: 'BLUE',
                        author: { name: `Repeat mode disabled !` },
                        timestamp: new Date(),
                    },
                });
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send({
                    embed: {
                        color: 'BLUE',
                        author: { name: `Repeat mode enabled the whole queue will be repeated endlessly !` },
                        timestamp: new Date(),
                    },
                }); 
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send({
                    embed: {
                        color: 'BLUE',
                        author: { name: `Repeat disabled !` },
                        timestamp: new Date(),
                    },
                });             
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send({
                    embed: {
                        color: 'BLUE',
                        author: { name: `Repeat enabled the current music will be repeated endlessly !` },
                        timestamp: new Date(),
                    },
                }); 
            };
        };
    },
};