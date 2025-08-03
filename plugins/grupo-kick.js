let handler = async (m, { conn, isAdmin, isBotAdmin, text }) => {
  if (!m.isGroup) throw 'Este comando solo funciona en grupos.';
  if (!isAdmin) throw 'Solo los administradores pueden usar este comando.';
  if (!isBotAdmin) throw 'Necesito ser administrador para ejecutar eso.';

  let user = m.mentionedJid[0] || text;
  if (!user) throw 'Menciona o escribe el número del usuario a expulsar.';

  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
  await m.reply('✅ Usuario expulsado.');
};

handler.help = ['kick @usuario'];
handler.tags = ['grupo'];
handler.command = /^kick$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
