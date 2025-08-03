const handler = async (m, { conn, usedPrefix, command }) => {
  const name = conn.getName(m.sender);
  const date = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' });

  const menu = `
╭━━━〔 *✨ Menú Principal ✨* 〕━━━⬣
┃👤 *Usuario:* ${name}
┃📅 *Fecha:* ${date}
┃🤖 *Bot:* ${botname}
╰━━━━━━━━━━━━━━━━━━⬣

🧩 *Comandos disponibles:*
• #menu
• 
• 
• 
• 
• 
• 
• 
• 
• 

💫 Usa *${usedPrefix}comando* para más detalles.
`.trim();

  const banner = 'https://i.imgur.com/CATBOT.jpg'; // Cambiá esto por tu imagen

  await conn.sendFile(m.chat, banner, 'menu.jpg', menu, m);
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^menu$/i;

export default handler;
