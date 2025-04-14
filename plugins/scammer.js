const config = require('../config')
const { cmd, commands } = require('../command');

cmd({
    pattern: "scammer",
    alias: ["randi-ki-olad","bctatty"],
    desc: "show the scammer's numbers",
    category: "main",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *Scammers's Numbers* 〕━━━┈⊷
┃★╭─────────────·๏
┃★│ BC tatta 1🖕🏻: https://api.whatsapp.com/send?phone=255756715126&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ BC tatta 2🖕🏻: https://api.whatsapp.com/send?phone=255716945971&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ BC tatta 3🖕🏻: https://api.whatsapp.com/send?phone=260772920548&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ BC tatta 4🖕🏻: https://api.whatsapp.com/send?phone=243850148852&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ BC tatta 5🖕🏻: https://api.whatsapp.com/send?phone=255677608682&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ BC tatta 6🖕🏻: https://api.whatsapp.com/send?phone=255614436412&text=Hi+Randi+Ki+Olad+UK+UMAIR+LOL🖕🏻
┃★│ BC tatta 7🖕🏻: https://api.whatsapp.com/send?phone=26777821911&text=hi+bc+scammer🖕🏻
┃★│ BC gashti 1🖕🏻: https://api.whatsapp.com/send?phone=255766499447&text=hi+bc+scammer🖕🏻
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

╭━━〔 *Important Message* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• Please report to all these scammers's numbers.
┃◈┃• If you have more scammers's number so contact me. I will add in my bot.
┃◈┃• Owner: https://api.whatsapp.com/send?phone=923143702270&text=Hello+DRAXEN+Ai+🤎+I+have+scammer's+number.+Please+add+his/her+number+in+your+bot🥰.
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/tmmvub.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029Vb4vbKF6xCSMEFopxc10@newsletter',
                        newsletterName: 'DRAXEN Ai 🤎',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/c5wfno.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
