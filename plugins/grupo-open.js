let handler = async (m, { conn, isAdmin, isBotAdmin }) => {
  if (!m.isGroup) throw 'Este comando solo funciona en grupos.';
  if (!isAdmin) throw 'Solo los administradores pueden usar este comando.';
  if (!isBotAdmin) throw 'Necesito ser administrador para ejecutar eso.';

  await conn.groupSettingUpdate(m.chat, 'not_announcement');
  await m.reply('✅ El grupo ha sido *abierto* .');
};

handler.help = ['open'];
handler.tags = ['grupo'];
handler.command = /^open$/i;
handler.group = true;
handler.admin = true;

export default handler;
