let handler = async (m, { conn, args }) => {
  let user = args[0];
  if (!user) throw 'Escribe el número sin @ ni +. Ej: #add 1122334455';
  user = user.replace(/\D/g, '') + '@s.whatsapp.net';
  await conn.groupParticipantsUpdate(m.chat, [user], 'add');
};
handler.help = ['add <número>'];
handler.tags = ['grupo'];
handler.command = /^add$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
