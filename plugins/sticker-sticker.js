import{sticker}from'../lib/sticker.js';import _0x13d035 from'../lib/uploadFile.js';import _0x20136e from'../lib/uploadImage.js';import{webp2png}from'../lib/webp2mp4.js';const handler=async(_0x3dba1a,{conn:_0x44119b,args:_0x5b4098,usedPrefix:_0x38c214,command:_0x3dcfe1})=>{if(_0x38c214=='a'||_0x38c214=='A')return;let _0x587247=![];const _0x13fe15=db['data']['users'][_0x3dba1a['sender']];try{const _0x1d5d33=_0x3dba1a['quoted']?_0x3dba1a['quoted']:_0x3dba1a,_0x2cc29e=(_0x1d5d33['msg']||_0x1d5d33)['mimetype']||_0x1d5d33['mediaType']||'';if(/webp|image|video/g['test'](_0x2cc29e)){const _0x4c6365=await _0x1d5d33['download']?.();if(!_0x4c6365)throw'*[❗𝐈𝐍𝐅𝐎❗]\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴\x20𝙰\x20𝚄𝙽\x20𝚅𝙸𝙳𝙴𝙾,\x20𝙸𝙼𝙰𝙶𝙴𝙽\x20𝙾\x20𝙸𝙽𝚂𝙴𝚁𝚃𝙴\x20𝙴𝙻\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20𝙳𝙴\x20𝚄𝙽𝙰\x20𝙸𝙼𝙰𝙶𝙴𝙽\x20𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙲𝙸𝙾́𝙽\x20.𝚓𝚙𝚐\x20𝙴𝙻\x20𝙲𝚄𝙰𝙻\x20𝚂𝙴𝚁𝙰\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾\x20𝙴𝙽\x20𝚂𝚃𝙸𝙲𝙺𝙴𝚁,\x20𝙳𝙴𝙱𝙴\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁\x20𝙾\x20𝚄𝚂𝙰𝚁\x20𝙴𝙻\x20𝙲𝙾𝙼𝙰𝙽𝙳𝙾\x20'+(_0x38c214+_0x3dcfe1)+'*';let _0x36618c;try{_0x587247=await sticker(_0x4c6365,![],global['packname'],global['author']);}catch(_0x191af9){console['error'](_0x191af9);}finally{if(!_0x587247){if(/webp/g['test'](_0x2cc29e))_0x36618c=await webp2png(_0x4c6365);else{if(/image/g['test'](_0x2cc29e))_0x36618c=await _0x20136e(_0x4c6365);else{if(/video/g['test'](_0x2cc29e))_0x36618c=await _0x13d035(_0x4c6365);}}if(typeof _0x36618c!=='string')_0x36618c=await _0x20136e(_0x4c6365);_0x587247=await sticker(![],_0x36618c,global['packname'],global['author']);}}}else{if(_0x5b4098[0x0]){if(isUrl(_0x5b4098[0x0]))_0x587247=await sticker(![],_0x5b4098[0x0],global['packname'],global['author']);else return _0x3dba1a['reply']('*[❗]\x20𝙴𝙻\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20/\x20𝚄𝚁𝙻\x20/\x20𝙻𝙸𝙽𝙺\x20𝙽𝙾\x20𝙴𝚂\x20𝚅𝙰𝙻𝙸𝙳𝙰,\x20𝙻𝙰\x20𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙲𝙸𝙾𝙽\x20𝙳𝙴𝙻\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20/\x20𝚄𝚁𝙻\x20/\x20𝙻𝙸𝙽𝙺\x20𝙳𝙴𝙱𝙴\x20𝚂𝙴𝚁\x20.𝚓𝚙𝚐,\x20𝙴𝙹𝙴𝙼𝙿𝙻𝙾:\x20${usedPrefix}s\x20https://telegra.ph/file/0dc687c61410765e98de2.jpg*');}}}catch(_0x17b960){console['error'](_0x17b960);if(!_0x587247)_0x587247=_0x17b960;}finally{if(_0x587247)_0x44119b['sendFile'](_0x3dba1a['chat'],_0x587247,'sticker.webp','',_0x3dba1a);else throw'*[❗]\x20𝙾𝙲𝚄𝚁𝚁𝙸𝙾\x20𝚄𝙽\x20𝙴𝚁𝚁𝙾𝚁,\x20𝚅𝚄𝙴𝙻𝚅𝙰\x20𝙰\x20𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾.\x20𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴\x20𝙰\x20𝚄𝙽\x20𝚅𝙸𝙳𝙴𝙾,\x20𝙸𝙼𝙰𝙶𝙴𝙽\x20𝙾\x20𝙸𝙽𝚂𝙴𝚁𝚃𝙴\x20𝙴𝙻\x20𝙴𝙽𝙻𝙰𝙲𝙴\x20𝙳𝙴\x20𝚄𝙽𝙰\x20𝙸𝙼𝙰𝙶𝙴𝙽\x20𝚃𝙴𝚁𝙼𝙸𝙽𝙰𝙲𝙸𝙾́𝙽\x20.𝚓𝚙𝚐\x20𝙴𝙻\x20𝙲𝚄𝙰𝙻\x20𝚂𝙴𝚁𝙰\x20𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾\x20𝙴𝙽\x20𝚂𝚃𝙸𝙲𝙺𝙴𝚁*';}};handler['help']=['sfull'],handler['tags']=['sticker'],handler['command']=/^s(tic?ker)?(gif)?(wm)?$/i,handler['register']=!![],handler['group']=!![];export default handler;const isUrl=_0x3d5bb8=>{return _0x3d5bb8['match'](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/,'gi'));};