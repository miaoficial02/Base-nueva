let handler = async (m, { conn }) => {
  if (!m.isGroup) throw 'Este comando solo funciona en grupos.'
  if (!m.isGroupAdmins) throw 'Debes ser administrador.'
  if (!m.isBotAdmin) throw 'Necesito ser admin para obtener el link.'

  let code = await conn.groupInviteCode(m.chat)
  m.reply(`🔗 *Link del grupo:*\nhttps://chat.whatsapp.com/${code}`)
}
handler.help = ['linkgrupo']
handler.tags = ['grupo']
handler.command = /^link(grupo)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
