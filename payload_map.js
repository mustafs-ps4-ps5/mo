// @ts-check

const CUSTOM_ACTION_APPCACHE_REMOVE = "appcache-remove";

/**
 * @typedef {Object} PayloadInfo
 * @property {string} displayTitle
 * @property {string} description
 * @property {string} fileName - path relative to the payloads folder
 * @property {string} author
 * @property {string} projectSource
 * @property {string} binarySource - should be direct download link to the included version, so that you can verify the hashes
 * @property {string} version
 * @property {string[]?} [supportedFirmwares] - optional, these are interpreted as prefixes, so "" would match all, and "4." would match 4.xx, if not set, the payload is assumed to be compatible with all firmwares
 * @property {number?} [toPort] - optional, if the payload should be sent to "127.0.0.1:<port>" instead of loading directly, if specified it'll show up in webkit-only mode too
 * @property {string?} [customAction]
 */

/**
 * @type {PayloadInfo[]}
*/
const payload_map = [
    // ============================================================
    // محمل ELF المستمر
    // ============================================================
    {
        displayTitle: "PS5 Payload ELF Loader",
        description: "Uses port 9021. Persistent network elf loader - محمل ELF عبر الشبكة",
        fileName: "elfldr.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/elfldr",
        binarySource: "https://github.com/ps5-payload-dev/elfldr/releases/download/v0.19/Payload.zip",
        version: "0.19",
        supportedFirmwares: ["1.", "2.", "3.", "4.", "5."],
        toPort: 9021
    },
    
    // ============================================================
    // الحمولات الرئيسية (HEN)
    // ============================================================
    {
        displayTitle: "etaHEN",
        description: "AIO HEN - All in One Homebrew Enabler",
        fileName: "etaHEN.elf",
        author: "LightningMods, Buzzer, sleirsgoevy, ChendoChap, astrelsky, illusion, CTN, SiSTR0, Nomadic",
        projectSource: "https://github.com/etaHEN/etaHEN",
        binarySource: "https://github.com/etaHEN/etaHEN/releases/download/2.6B/etaHEN-2.6B.bin",
        version: "2.6b",
        toPort: 9021
    },
    {
        displayTitle: "OnionHEN",
        description: "HEN alternative with extra features",
        fileName: "OnionHEN.elf",
        author: "Community Developers",
        projectSource: "https://github.com/example/OnionHEN",
        binarySource: "https://example.com/OnionHEN.elf",
        version: "1.0",
        toPort: 9021
    },
    
    // ============================================================
    // FPKG Enablers
    // ============================================================
    {
        displayTitle: "Kstuff Lite v1.10",
        description: "FPKG enabler - نسخة خفيفة",
        fileName: "Kstuff_Lite_1.10.elf",
        author: "EchoStretch, sleirsgoevy",
        projectSource: "https://github.com/EchoStretch/kstuff-lite",
        binarySource: "https://github.com/EchoStretch/kstuff-lite/releases/tag/v1.10",
        version: "1.10",
        supportedFirmwares: ["3.", "4.", "5.", "6.", "7.", "8.", "9.", "10."],
        toPort: 9021
    },
    {
        displayTitle: "pldmgr_v0.5.1.elf",
        description: "FPKG enabler",
        fileName: "pldmgr_v0.5.1.elf",
        author: "sleirsgoevy, john-tornblom, EchoStretch, buzzer-re, BestPig, LightningMods, zecoxao, idlesauce, flatz",
        projectSource: "https://github.com/EchoStretch/kstuff-lite",
        binarySource: "https://github.com/EchoStretch/kstuff-lite/releases/tag/v1.09",
        version: "1.09 Beta",
        supportedFirmwares: ["3.", "4.", "5.", "6.", "7.", "8.", "9.", "10."],
        toPort: 9021
    },
    
    // ============================================================
    // FTP Servers
    // ============================================================
    {
        displayTitle: "zftpd-ps5 v1.5.0",
        description: "FTP server - نسخة محسنة",
        fileName: "zftpd-ps5-v1.5.0.elf",
        author: "zecoxao",
        projectSource: "https://github.com/zecoxao/zftpd",
        binarySource: "https://github.com/zecoxao/zftpd/releases/tag/v1.5.0",
        version: "1.5.0",
        toPort: 9021
    },
    {
        displayTitle: "ftpsrv-ps5",
        description: "FTP server on port 2121 - خفيف جداً",
        fileName: "ftpsrv-ps5.elf",
        author: "john-tornblom",
        projectSource: "https://github.com/ps5-payload-dev/ftpsrv",
        binarySource: "https://github.com/ps5-payload-dev/ftpsrv/releases/tag/v0.20",
        version: "0.20",
        toPort: 9021
    },
    
    // ============================================================
    // أدوات إضافية
    // ============================================================
    {
        displayTitle: "shadowmountplus",
        description: "Mount games has never been easier",
        fileName: "shadowmountplus.elf",
        author: "drakmor",
        projectSource: "https://github.com/drakmor/ShadowMountPlus/",
        binarySource: "https://github.com/drakmor/ShadowMountPlus/releases/tag/1.6beta16",
        version: "1.6beta16",
        toPort: 9021
    },
    {
        displayTitle: "np-fake-signin v1.3",
        description: "تجاوز تسجيل الدخول إلى PSN",
        fileName: "np-fake-signin_v1.3.elf",
        author: "Community Developers",
        projectSource: "https://github.com/example/np-fake-signin",
        binarySource: "https://example.com/np-fake-signin_v1.3.elf",
        version: "1.3",
        toPort: 9021
    },
    
    // ============================================================
    // Browser appcache remover - الإصدار القديم (يعمل عبر الكود)
    // ============================================================
    {
        displayTitle: "Browser appcache remover (JS)",
        description: "Deletes appcache via JavaScript - حذف الكاش عبر الجافاسكريبت",
        fileName: "",
        author: "Storm21CH, idlesauce",
        projectSource: "https://github.com/Storm21CH/PS5_Browser_appCache_remove",
        binarySource: "",
        version: "1.0",
        customAction: CUSTOM_ACTION_APPCACHE_REMOVE
    },
    
    // ============================================================
    // Browser appcache remover - الإصدار الجديد (ملف ELF)
    // ============================================================
    {
        displayTitle: "Browser appcache remover (ELF)",
        description: "Deletes appcache via ELF - حذف الكاش عبر ملف ELF",
        fileName: "Browser_appCache_remove.elf",
        author: "Storm21CH, idlesauce",
        projectSource: "https://github.com/Storm21CH/PS5_Browser_appCache_remove",
        binarySource: "",
        version: "1.0",
        toPort: 9021
    }
];