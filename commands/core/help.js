module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'RANDOM',
                    author: { name: 'Help pannel - Bảng hỗ trợ' },
                    //footer: { text: 'This bot is used as a free to use playing music bot' }, //If you want footer, just delete "//"
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music - Nhạc', value: music },
                        { name: 'Filters - Bộ Lọc', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Để dụng các filter, ${client.config.discord.prefix}filter (filter). VD : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Tôi không tìm thấy lệnh này !`);

            message.channel.send({
                embed: {
                    color: 'BLUE',
                    author: { name: 'Help pannel - Bảng hỗ trợ' },
                    //footer: { text: 'This bot is used as a free to use playing music bot' }, //If you want footer, just delete "//"
                    fields: [
                        { name: 'Name - Tên', value: command.name, inline: true },
                        { name: 'Category - Phân loại', value: command.category, inline: true },
                        { name: 'Aliase(s) - Biệt danh', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation - Cách sử dụng', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Tìm thông tin về lệnh được cung cấp.\nĐối với những kiểu lệnh bắt buộc sẽ có dấu `[]`, Đối với những kiểu lệnh tự chọn sẽ có dấu `<>`.',
                }
            });
        };
    },
};