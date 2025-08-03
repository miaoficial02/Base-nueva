let handler = async (m, { conn, isAdmin, isBotAdmin }) => {
  if (!m.isGroup) throw 'Este comando solo funciona en grupos.';
  if (!isAdmin) throw 'Solo los administradores pueden usar este comando.';
  if (!isBotAdmin) throw 'Necesito ser administrador para ejecutar eso.';

  await conn.groupSettingUpdate(m.chat, 'announcement');
  await m.reply('🔒 El grupo ha sido *cerrado* para que solo administradores puedan escribir.');
};

handler.help = ['close'];
handler.tags = ['admin'];
handler.command = /^close$/i;
handler.group = true;
handler.admin = true;

export default handler;
