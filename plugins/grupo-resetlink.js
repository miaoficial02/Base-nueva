let handler = async (m, { conn }) => {
  await conn.groupRevokeInvite(m.chat);
  m.reply('🔄 Enlace del grupo reseteado correctamente.');
};
handler.help = ['resetlink'];
handler.tags = ['group'];
handler.command = /^reset(link)?$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
