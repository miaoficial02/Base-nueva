let handler = async (m, { conn, args, participants }) => {
  if (!m.isGroup) throw 'Este comando solo funciona en grupos.'
  if (!m.isGroupAdmins) throw 'Debes ser administrador.'

  const texto = args.join(' ')
  if (!texto) throw 'Escribe un mensaje para enviar con menciones ocultas.'

  const users = participants.map(p => p.id)
  await conn.sendMessage(m.chat, { text: texto, mentions: users }, { quoted: m })
}
handler.help = ['hidetag <texto>']
handler.tags = ['grupo']
handler.command = /^hidetag$/i
handler.group = true
handler.admin = true

export default handler
