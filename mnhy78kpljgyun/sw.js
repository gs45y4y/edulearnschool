// ==========================================
// CONFIGURATION: ADMIN BLOCKLIST
// ==========================================

// <IF YOU ARE INNOCENT, DO NOT LOOK AT THE CODE BELOW THIS LINE>
//=============================================================

// LAST WARNING








// TOO LATE..
const BLOCKED_KEYWORDS = [
    'edulearnschool.vercel.app',
    'view-page-source',
    'view-page-source.com',
    'educational.sbs',
    'educational.cyou',
    'educational.cfd',
    'farhan.com',
    'r34.com',
    'porn.com',
    'pornhub.com',
    'jayeshbetter.com',
    'xvideos.com',
    'slushy.com',
    'onlyfans.com',
    'xxx',
    'livienneporn.com',
    'legofornite.com'
    
    
    
];
// ==========================================

const _0x2cea61 = _0x12b1;

(function(_0xca7d81, _0x369fec) {
    const _0x1f5aef = _0x12b1,
        _0x85ff06 = _0xca7d81();
    while (!![]) {
        try {
            const _0x1abd04 = parseInt(_0x1f5aef(0x11a)) / 0x1 + parseInt(_0x1f5aef(0x138)) / 0x2 + parseInt(_0x1f5aef(0x13b)) / 0x3 + parseInt(_0x1f5aef(0x119)) / 0x4 * (-parseInt(_0x1f5aef(0x130)) / 0x5) + parseInt(_0x1f5aef(0x10b)) / 0x6 * (parseInt(_0x1f5aef(0x128)) / 0x7) + -parseInt(_0x1f5aef(0x111)) / 0x8 + -parseInt(_0x1f5aef(0x12e)) / 0x9 * (parseInt(_0x1f5aef(0x137)) / 0xa);
            if (_0x1abd04 === _0x369fec) break;
            else _0x85ff06['push'](_0x85ff06['shift']());
        } catch (_0x103b10) {
            _0x85ff06['push'](_0x85ff06['shift']());
        }
    }
}(_0x10d9, 0x2ecec));

const swPath = self['location']['pathname'],
    basePath = swPath[_0x2cea61(0x11d)](0x0, swPath[_0x2cea61(0x10c)]('/') + 0x1);
self['basePath'] = self[_0x2cea61(0x131)] || basePath, self[_0x2cea61(0x139)] = {
    'files': {
        'wasm': 'https://cdn.jsdelivr.net/gh/Destroyed12121/Staticsj@main/JS/scramjet.wasm.wasm',
        'sync': _0x2cea61(0x120)
    }
}, importScripts('https://cdn.jsdelivr.net/gh/Destroyed12121/Staticsj@main/JS/scramjet.all.js'), importScripts('https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux/dist/index.js');
const {
    ScramjetServiceWorker
} = $scramjetLoadWorker(), scramjet = new ScramjetServiceWorker({
    'prefix': basePath + 'scramjet/'
});

function _0x10d9() {
    const _0x39fc9e = ['50071CwhVsd', 'cors', 'mode', 'wss://dash.goip.de/wisp/', 'url', 'BareMuxConnection', '18pfQMcp', 'includes', '115cMEntt', 'basePath', 'bareworker.js', 'same-origin', 'WISP\x20URL\x20missing', 'wispurl', 'message', '358540bOhvLJ', '502982bgOnaj', '$scramjet', 'waitUntil', '732459mShbXj', 'clients', 'Scramjet\x20Fetch\x20Error:\x20', 'addEventListener', 'body', 'eof', '108ZAkugh', 'lastIndexOf', 'warn', 'request', 'SW:\x20Received\x20config', 'response', '1241856JpMDTE', 'route', 'include', 'manual', 'claim', 'Scramjet\x20Final\x20Fetch\x20Error:', 'client', 'fetch', '37780ZFMhmp', '11501YWJpbA', 'https://cdn.jsdelivr.net/npm/@mercuryworkshop/epoxy-transport@2.1.28/dist/index.mjs', 'install', 'substring', 'loadConfig', 'toLowerCase', 'https://cdn.jsdelivr.net/gh/Destroyed12121/Staticsj@main/JS/scramjet.sync.js', 'respondWith', 'error', 'SW:\x20Config\x20timeout,\x20using\x20default\x20Wisp', 'method', 'requestHeaders', 'half', 'type'];
    _0x10d9 = function() {
        return _0x39fc9e;
    };
    return _0x10d9();
}
self[_0x2cea61(0x13e)](_0x2cea61(0x11c), _0x528386 => self['skipWaiting']()), self[_0x2cea61(0x13e)]('activate', _0x3b0f6c => _0x3b0f6c[_0x2cea61(0x13a)](self[_0x2cea61(0x13c)][_0x2cea61(0x115)]()));

// ==========================================
// MODIFIED FETCH EVENT LISTENER (BLOCKING LOGIC)
// ==========================================
self['addEventListener']('fetch', _0x4cf3ea => {
    
    // --- 1. BLOCKING CHECK STARTS HERE ---
    try {
        const requestUrl = _0x4cf3ea.request.url;
        const decodedUrl = decodeURIComponent(requestUrl);
        const isBlocked = BLOCKED_KEYWORDS.some(keyword => 
            requestUrl.includes(keyword) || decodedUrl.includes(keyword)
        );

        if (isBlocked) {
            _0x4cf3ea.respondWith(
                new Response("<h1 style='font-family:sans-serif;text-align:center;margin-top:50px;'>Blocked by Admin | STOP G00NING U SK1D</h1>", { 
                    status: 403,
                    headers: { 'Content-Type': 'text/html' }
                })
            );
            return; // Stop here! Do not run the proxy code below.
        }
    } catch (e) {
        // If the check fails, just continue
    }
    // --- BLOCKING CHECK ENDS HERE ---

    // --- 2. ORIGINAL PROXY CODE ---
    const _0x5ba9de = _0x2cea61;
    _0x4cf3ea[_0x5ba9de(0x121)](((async () => {
        const _0x387289 = _0x5ba9de;
        await scramjet[_0x387289(0x11e)]();
        if (scramjet[_0x387289(0x112)](_0x4cf3ea)) return scramjet[_0x387289(0x118)](_0x4cf3ea);
        return fetch(_0x4cf3ea[_0x387289(0x10e)]);
    })()));
});
// ==========================================


function _0x12b1(_0x40b7d0, _0x5035cd) {
    _0x40b7d0 = _0x40b7d0 - 0x10b;
    const _0x10d924 = _0x10d9();
    let _0x12b110 = _0x10d924[_0x40b7d0];
    return _0x12b110;
}
let wispConfig = {},
    resolveConfigReady;
const configReadyPromise = new Promise(_0x4abcf1 => resolveConfigReady = _0x4abcf1);
self['addEventListener'](_0x2cea61(0x136), ({
    data: _0x30ae88
}) => {
    const _0xaabb54 = _0x2cea61;
    _0x30ae88[_0xaabb54(0x127)] === 'config' && _0x30ae88[_0xaabb54(0x135)] && (wispConfig['wispurl'] = _0x30ae88['wispurl'], console['log'](_0xaabb54(0x10f), wispConfig), resolveConfigReady && (resolveConfigReady(), resolveConfigReady = null));
}), setTimeout(() => {
    const _0x14e5ea = _0x2cea61;
    !wispConfig['wispurl'] && resolveConfigReady && (console[_0x14e5ea(0x10d)](_0x14e5ea(0x123)), wispConfig[_0x14e5ea(0x135)] = _0x14e5ea(0x12b), resolveConfigReady(), resolveConfigReady = null);
}, 0x3e8), scramjet[_0x2cea61(0x13e)](_0x2cea61(0x10e), async _0x5be447 => {
    const _0x22b3ce = _0x2cea61;
    _0x5be447[_0x22b3ce(0x110)] = ((async () => {
        const _0x2cc632 = _0x22b3ce;
        if (!scramjet[_0x2cc632(0x117)]) {
            await configReadyPromise;
            if (!wispConfig[_0x2cc632(0x135)]) return new Response(_0x2cc632(0x134), {
                'status': 0x1f4
            });
            const _0x472d7b = new BareMux[(_0x2cc632(0x12d))](basePath + _0x2cc632(0x132));
            await _0x472d7b['setTransport'](_0x2cc632(0x11b), [{
                'wisp': wispConfig['wispurl']
            }]), scramjet[_0x2cc632(0x117)] = _0x472d7b;
        }
        const _0x454989 = 0x2;
        let _0x1e6fad;
        for (let _0x198024 = 0x0; _0x198024 <= _0x454989; _0x198024++) {
            try {
                return await scramjet[_0x2cc632(0x117)]['fetch'](_0x5be447[_0x2cc632(0x12c)], {
                    'method': _0x5be447[_0x2cc632(0x124)],
                    'body': _0x5be447[_0x2cc632(0x13f)],
                    'headers': _0x5be447[_0x2cc632(0x125)],
                    'credentials': _0x2cc632(0x113),
                    'mode': _0x5be447[_0x2cc632(0x12a)] === _0x2cc632(0x129) ? _0x5be447[_0x2cc632(0x12a)] : _0x2cc632(0x133),
                    'cache': _0x5be447['cache'],
                    'redirect': _0x2cc632(0x114),
                    'duplex': _0x2cc632(0x126)
                });
            } catch (_0x27c792) {
                _0x1e6fad = _0x27c792;
                const _0x3dd634 = _0x27c792[_0x2cc632(0x136)][_0x2cc632(0x11f)](),
                    _0x53bc78 = _0x3dd634['includes']('connect') || _0x3dd634[_0x2cc632(0x12f)](_0x2cc632(0x140)) || _0x3dd634[_0x2cc632(0x12f)]('handshake') || _0x3dd634[_0x2cc632(0x12f)]('reset');
                if (!_0x53bc78 || _0x198024 === _0x454989 || _0x5be447[_0x2cc632(0x124)] !== 'GET') break;
                console['warn']('Scramjet\x20retry\x20' + (_0x198024 + 0x1) + '/' + _0x454989 + '\x20for\x20' + _0x5be447[_0x2cc632(0x12c)] + '\x20due\x20to:\x20' + _0x27c792[_0x2cc632(0x136)]), await new Promise(_0x30bb38 => setTimeout(_0x30bb38, 0x1f4 * (_0x198024 + 0x1)));
            }
        }
        return console[_0x2cc632(0x122)](_0x2cc632(0x116), _0x1e6fad), new Response(_0x2cc632(0x13d) + _0x1e6fad['message'], {
            'status': 0x1f6
        });
    })());
});
