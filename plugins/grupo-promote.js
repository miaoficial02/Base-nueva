let handler = async (m, { conn, isAdmin, isBotAdmin }) => {
  if (!m.isGroup) throw 'Este comando solo funciona en grupos.';
  if (!isAdmin) throw 'Solo los administradores pueden usar este comando.';
  if (!isBotAdmin) throw 'Necesito ser administrador para ejecutar eso.';

  let user = m.mentionedJid[0];
  if (!user) throw 'Menciona al usuario que quieres promover.';

  await conn.groupParticipantsUpdate(m.chat, [user], 'promote');
  await m.reply('🎖️ Usuario promovido a administrador.');
};

handler.help = ['promote @usuario'];
handler.tags = ['grupo'];
handler.command = /^promote$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
