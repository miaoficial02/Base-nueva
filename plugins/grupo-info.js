let handler = async (m, { conn }) => {
  if (!m.isGroup) throw 'Este comando solo funciona en grupos.'

  let metadata = await conn.groupMetadata(m.chat)
  let owner = metadata.owner ? '@' + metadata.owner.split('@')[0] : 'Desconocido'
  let admins = metadata.participants.filter(p => p.admin).map(p => '@' + p.id.split('@')[0])
  let texto = `╭━〔 *INFO DEL GRUPO* 〕━⬣
┃📌 *Nombre:* ${metadata.subject}
┃🆔 *ID:* ${metadata.id}
┃👑 *Dueño:* ${owner}
┃🛡 *Admins:* ${admins.length}
┃👥 *Miembros:* ${metadata.participants.length}
┃📅 *Creado:* ${new Date(metadata.creation * 1000).toLocaleString()}
╰━━━━━━━━━━━━━━━━⬣`
  m.reply(texto, null, {
    mentions: [metadata.owner, ...admins.map(a => a.split('@')[0] + '@s.whatsapp.net')]
  })
}
handler.help = ['infogrupo']
handler.tags = ['grupo']
handler.command = /^infogrupo$/i
handler.group = true

export default handler
