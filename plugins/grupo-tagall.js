let handler = async (m, { conn, text }) => {
  let participants = (await conn.groupMetadata(m.chat)).participants.map(p => p.id);
  let mensaje = text ? text : '📢 *Mensaje a todos:*';
  await conn.sendMessage(m.chat, { text: mensaje, mentions: participants }, { quoted: m });
};
handler.help = ['tagall <texto>'];
handler.tags = ['grupo'];
handler.command = /^tagall$/i;
handler.group = true;
handler.admin = true;

export default handler;
