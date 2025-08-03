let handler = async (m, { conn, isAdmin, isBotAdmin }) => {
  if (!m.isGroup) throw 'Este comando solo funciona en grupos.';
  if (!isAdmin) throw 'Solo los administradores pueden usar este comando.';
  if (!isBotAdmin) throw 'Necesito ser administrador para ejecutar eso.';

  let user = m.mentionedJid[0];
  if (!user) throw 'Menciona al usuario que quieres degradar.';

  await conn.groupParticipantsUpdate(m.chat, [user], 'demote');
  await m.reply('📉 Usuario degradado a miembro.');
};

handler.help = ['demote @usuario'];
handler.tags = ['grupo'];
handler.command = /^demote$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
