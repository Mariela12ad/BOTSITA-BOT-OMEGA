import _0x48d89c from'node-fetch';import _0xe023fc from'node-gtts';import{readFileSync,unlinkSync}from'fs';import{join}from'path';import _0xaed89b from'axios';import _0x2c33d7 from'@vitalets/google-translate-api';import{Configuration,OpenAIApi}from'openai';const configuration=new Configuration({'organization':global['openai_org_id'],'apiKey':global['openai_key']}),openaiii=new OpenAIApi(configuration),idioma='es',sistema1='Actuaras\x20como\x20un\x20Bot\x20de\x20WhatsApp\x20el\x20cual\x20fue\x20creado\x20por\x20OFC-YOVANI,\x20tu\x20seras\x20⫷᭄©𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰﹏✍.',handler=async(_0x2b4332,{conn:_0x58a56d,text:_0x2b244d,usedPrefix:_0x33f81a,command:_0x4cf46b})=>{if(_0x33f81a=='a'||_0x33f81a=='A')return;if(!_0x2b244d)throw'*[❗]\x20𝙸𝙽𝙶𝚁𝙴𝚂𝙴\x20𝚄𝙽𝙰\x20𝙿𝙴𝚃𝙸𝙲𝙸𝙾𝙽\x20𝙾\x20𝚄𝙽𝙰\x20𝙾𝚁𝙳𝙴𝙽\x20𝙿𝙰𝚁𝙰\x20𝚄𝚂𝙰𝚁\x20𝙻𝙰\x20𝙵𝚄𝙽𝙲𝙸𝙾𝙽\x20𝙳𝙴\x20𝙲𝙷𝙰𝚃𝙶𝙿𝚃*\x0a\x0a*—◉\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾𝚂\x20𝙳𝙴\x20𝙿𝙴𝚃𝙸𝙲𝙸𝙾𝙽𝙴𝚂\x20𝚈\x20𝙾𝚁𝙳𝙴𝙽𝙴𝚂*\x0a*◉\x20'+(_0x33f81a+_0x4cf46b)+'\x20Reflexion\x20sobre\x20la\x20serie\x20Merlina\x202022\x20de\x20netflix*\x0a*◉\x20'+(_0x33f81a+_0x4cf46b)+'\x20Codigo\x20en\x20JS\x20para\x20un\x20juego\x20de\x20cartas*';try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);async function _0x353cd7(_0x5e5c72){const _0x22e37d=global['openai_key'];let _0x2828a7=global['chatgpt']['data']['users'][_0x2b4332['sender']];_0x2828a7['push']({'role':'user','content':_0x5e5c72});const _0x30a884='https://api.openai.com/v1/chat/completions',_0x5e54cd={'Content-Type':'application/json','Authorization':'Bearer\x20'+_0x22e37d},_0x4df6ce={'model':'gpt-3.5-turbo','messages':[{'role':'system','content':sistema1},..._0x2828a7]},_0x4cd9e5=await _0x48d89c(_0x30a884,{'method':'POST','headers':_0x5e54cd,'body':JSON['stringify'](_0x4df6ce)}),_0x5b038f=await _0x4cd9e5['json'](),_0xab39bd=_0x5b038f['choices'][0x0]['message']['content'];return _0xab39bd;};let _0x261a24=await _0x353cd7(_0x2b244d);if(_0x261a24=='error'||_0x261a24==''||!_0x261a24)return XD;const _0x38f5e4=await tts(_0x261a24,idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x38f5e4,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);const _0x242235=await openaiii['createCompletion']({'model':'text-davinci-003','prompt':_0x2b244d,'temperature':0.3,'max_tokens':0x1001,'stop':['Ai:','Human:'],'top_p':0x1,'frequency_penalty':0.2,'presence_penalty':0x0});if(_0x242235['data']['choices'][0x0]['text']=='error'||_0x242235['data']['choices'][0x0]['text']==''||!_0x242235['data']['choices'][0x0]['text'])return XD;const _0x37cd3f=await tts(_0x242235['data']['choices'][0x0]['text'],idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x37cd3f,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);const _0x4e2d20=await _0x48d89c('https://api-fgmods.ddns.net/api/info/openai?text='+_0x2b244d+'&symsg='+sistema1+'&apikey=XlwAnX8d'),_0xf7120b=await _0x4e2d20['json']();if(_0xf7120b['result']=='error'||_0xf7120b['result']==''||!_0xf7120b['result'])return XD;const _0x4d5e60=await tts(_0xf7120b['result'],idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x4d5e60,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);const _0x3f8256=await _0x48d89c('https://vihangayt.me/tools/chatgpt?q='+_0x2b244d),_0x5978b8=await _0x3f8256['json']();if(_0x5978b8['data']=='error'||_0x5978b8['data']==''||!_0x5978b8['data'])return XD;const _0x500fde=await tts(_0x5978b8['data'],idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x500fde,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);const _0x1d29cc=await _0x48d89c('https://vihangayt.me/tools/chatgpt2?q='+_0x2b244d),_0x9c0d4f=await _0x1d29cc['json']();if(_0x9c0d4f['data']=='error'||_0x9c0d4f['data']==''||!_0x9c0d4f['data'])return XD;const _0x2f167a=await tts(_0x9c0d4f['data'],idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x2f167a,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);const _0x47dfcc=await _0x48d89c('https://vihangayt.me/tools/chatgpt3?q='+_0x2b244d),_0x485956=await _0x47dfcc['json']();if(_0x485956['data']=='error'||_0x485956['data']==''||!_0x485956['data'])return XD;const _0x2301ab=await tts(_0x485956['data'],idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x2301ab,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);const _0x1f5f87=await _0x48d89c('https://api.lolhuman.xyz/api/openai?apikey='+lolkeysapi+'&text='+_0x2b244d+'&user='+_0x2b4332['sender']),_0x2ed8b0=await _0x1f5f87['json']();if(_0x2ed8b0['result']=='error'||_0x2ed8b0['result']==''||!_0x2ed8b0['result'])return XD;const _0x52fcaf=await _0x2c33d7(''+_0x2ed8b0['result'],{'to':idioma,'autoCorrect':!![]}),_0x3c8e88=await tts(_0x52fcaf['text'],idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x3c8e88,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);const _0x18798a='\x20Indonesia\x20',_0x3d65de='\x20español\x20',_0x458a40=await _0x48d89c('https://api.ibeng.tech/api/others/chatgpt?q=Hola&apikey=eMlBNRzUXv'),_0xe8f864=await _0x458a40['json']();if(_0xe8f864['data']=='error'||_0xe8f864['data']==''||!_0xe8f864['data'])return XD;const _0x11c2a2=await _0x2c33d7(''+_0xe8f864['data'],{'to':idioma,'autoCorrect':!![]}),_0x4ac629=_0x11c2a2['text'],_0x416216=_0x4ac629['replace'](_0x18798a,_0x3d65de)['trim'](),_0x582975=await tts(_0x416216,idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x582975,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);const _0x1edda3=await _0x48d89c('https://api.akuari.my.id/ai/gpt?chat='+_0x2b244d),_0x1914b1=await _0x1edda3['json']();if(_0x1914b1['respon']=='error'||_0x1914b1['respon']==''||!_0x1914b1['respon'])return XD;const _0x372a91=await _0x2c33d7(''+_0x1914b1['respon'],{'to':'es','autoCorrect':!![]}),_0x1bf0e3=await tts(_0x372a91['text'],idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x1bf0e3,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{try{_0x58a56d['sendPresenceUpdate']('composing',_0x2b4332['chat']);const _0x22583e=await _0x48d89c('https://api.akuari.my.id/ai/gbard?chat='+_0x2b244d),_0x40c33a=await _0x22583e['json']();if(_0x40c33a['respon']=='error'||_0x40c33a['respon']==''||!_0x40c33a['respon'])return XD;const _0x5ea2dd=await _0x2c33d7(''+_0x40c33a['respon'],{'to':'es','autoCorrect':!![]}),_0x5df541=await tts(_0x5ea2dd['text'],idioma);await _0x58a56d['sendMessage'](_0x2b4332['chat'],{'audio':_0x5df541,'fileName':'error.mp3','mimetype':'audio/mpeg','ptt':!![]},{'quoted':_0x2b4332});}catch{throw'*[❗]\x20𝙴𝚁𝚁𝙾𝚁,\x20𝚅𝚄𝙴𝙻𝚅𝙰\x20𝙰\x20𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*';}}}}}}}}}}};handler['command']=/^(openaivoz|chatgptvoz|iavoz|robotvoz|openai2voz|chatgpt2voz|ia2voz|robot2voz|Mysticvoz|MysticBotvoz|gptvoz|ai_voz|ai_voce)$/i,handler['register']=!![],handler['group']=!![];export default handler;async function tts(_0x3c524e='error',_0x18c160='es'){return new Promise((_0x3543ad,_0x5a8a5e)=>{try{const _0x1f6186=_0xe023fc(_0x18c160),_0x48324a=join(global['__dirname'](import.meta['url']),'../tmp',0x1*new Date()+'.wav');_0x1f6186['save'](_0x48324a,_0x3c524e,()=>{_0x3543ad(readFileSync(_0x48324a)),unlinkSync(_0x48324a);});}catch(_0x5d3f13){_0x5a8a5e(_0x5d3f13);}});}