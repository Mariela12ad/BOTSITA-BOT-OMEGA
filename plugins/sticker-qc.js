import{sticker}from'../lib/sticker.js';import _0x216b05 from'axios';const handler=async(_0x2534dc,{conn:_0x17a95a,args:_0x3c5708,usedPrefix:_0x5c8cb4,command:_0x4faf0c})=>{let _0x4b0e09;if(_0x3c5708['length']>=0x1)_0x4b0e09=_0x3c5708['slice'](0x0)['join']('\x20');else{if(_0x2534dc['quoted']&&_0x2534dc['quoted']['text'])_0x4b0e09=_0x2534dc['quoted']['text'];else throw'*[❗️]\x20Uso\x20incorrecto\x20del\x20comando,\x20agregue\x20un\x20texto*';}if(!_0x4b0e09)return _0x2534dc['reply']('*[❗️]\x20Uso\x20incorrecto\x20del\x20comando,\x20agregue\x20un\x20texto*');const _0x21b313=_0x2534dc['mentionedJid']&&_0x2534dc['mentionedJid'][0x0]?_0x2534dc['mentionedJid'][0x0]:_0x2534dc['fromMe']?_0x17a95a['user']['jid']:_0x2534dc['sender'],_0x332bf7=new RegExp('@'+_0x21b313['split']('@')[0x0]['replace'](/[.*+?^${}()|[\]\\]/g,'\x5c$&')+'\x5cs*','g'),_0xfa36e8=_0x4b0e09['replace'](_0x332bf7,'');if(_0xfa36e8['length']>0x1e)return _0x2534dc['reply']('*[❗️]\x20El\x20texto\x20no\x20puede\x20tener\x20mas\x20de\x2030\x20caracteres*');const _0x351ce2=await _0x17a95a['profilePictureUrl'](_0x21b313)['catch'](_0x39e1cb=>'https://telegra.ph/file/24fa902ead26340f3df2c.png'),_0x11dae3=await _0x17a95a['getName'](_0x21b313),_0x2d16ed={'type':'quote','format':'png','backgroundColor':'#000000','width':0x200,'height':0x300,'scale':0x2,'messages':[{'entities':[],'avatar':!![],'from':{'id':0x1,'name':''+(_0x21b313?.['name']||_0x11dae3),'photo':{'url':''+_0x351ce2}},'text':_0xfa36e8,'replyMessage':{}}]},_0x33f148=await _0x216b05['post']('https://bot.lyo.su/quote/generate',_0x2d16ed,{'headers':{'Content-Type':'application/json'}}),_0x2c7c06=Buffer['from'](_0x33f148['data']['result']['image'],'base64');let _0x8f443=await sticker(_0x2c7c06,![],global['packname'],global['author']);if(_0x8f443)return _0x17a95a['sendFile'](_0x2534dc['chat'],_0x8f443,'error.webp','',_0x2534dc);};handler['help']=['qc'],handler['tags']=['sticker'],handler['command']=/^(qc)$/i,handler['register']=!![],handler['group']=!![];export default handler;