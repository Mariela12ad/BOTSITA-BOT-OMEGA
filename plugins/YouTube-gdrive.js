import _0x5827f8 from'node-fetch';import{sizeFormatter}from'human-readable';let formatSize=sizeFormatter({'std':'JEDEC','decimalPlaces':0x2,'keepTrailingZeroes':![],'render':(_0x4099c3,_0x43564a)=>_0x4099c3+'\x20'+_0x43564a+'B'}),handler=async(_0x5c13d1,{conn:_0x37e1c3,args:_0x52a059})=>{if(!_0x52a059[0x0])throw'[❗]\x20enter\x20the\x20link\x20check\x20that\x20it\x20is\x20still\x20available\x20otherwise\x20it\x20will\x20not\x20download';try{GDriveDl(_0x52a059[0x0])['then'](async _0x24ada4=>{_0x37e1c3['reply'](_0x5c13d1['chat'],'your\x20file\x20is\x20a\x20process,\x20please\x20wait\x20if\x20it\x20does\x20not\x20download\x20it\x20is\x20possibly\x20because\x20the\x20file\x20is\x20too\x20large',_0x5c13d1);if(!_0x24ada4)throw _0x24ada4;_0x37e1c3['sendFile'](_0x5c13d1['chat'],_0x24ada4['downloadUrl'],_0x24ada4['fileName'],'',_0x5c13d1,null,{'mimetype':_0x24ada4['mimetype'],'asDocument':!![]});});}catch(_0x3bf1c3){_0x5c13d1['reply']('❌sorry\x20an\x20error\x20occurred\x20try\x20again❌'),console['log'](_0x3bf1c3);}};handler['command']=/^(gdrive)$/i,handler['register']=!![],handler['premium']=!![];export default handler;async function GDriveDl(_0x2ef284){let _0x141004;if(!(_0x2ef284&&_0x2ef284['match'](/drive\.google/i)))throw'Invalid\x20URL';_0x141004=(_0x2ef284['match'](/\/?id=(.+)/i)||_0x2ef284['match'](/\/d\/(.*?)\//))[0x1];if(!_0x141004)throw'ID\x20Not\x20Found';let _0x46db46=await _0x5827f8('https://drive.google.com/uc?id='+_0x141004+'&authuser=0&export=download',{'method':'post','headers':{'accept-encoding':'gzip,\x20deflate,\x20br','content-length':0x0,'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8','origin':'https://drive.google.com','user-agent':'Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/65.0.3325.181\x20Safari/537.36','x-client-data':'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=','x-drive-first-party':'DriveWebUi','x-json-requested':'true'}}),{fileName:_0x5c500b,sizeBytes:_0x55f776,downloadUrl:_0x4a5060}=JSON['parse']((await _0x46db46['text']())['slice'](0x4));if(!_0x4a5060)throw'Link\x20Download\x20Limit!';let _0x4ed240=await _0x5827f8(_0x4a5060);if(_0x4ed240['status']!==0xc8)throw _0x4ed240['statusText'];return{'downloadUrl':_0x4a5060,'fileName':_0x5c500b,'fileSize':formatSize(_0x55f776),'mimetype':_0x4ed240['headers']['get']('content-type')};}