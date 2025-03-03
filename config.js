const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXXOqSBT8L/MacwV1BKxK1YKIiqKg4tfWfRhggBEEZAYQU/73LWJSycPebPZtaj769HT3Oa8gSQnFM1yDwSvIclIihpslqzMMBkApfB/noAU8xBAYgM5UVeaz4xOlwqzu3vKl0Fa0aDGUrNFFGeKzdfahKvvbKy++gHsLZIUTE/cbwADqzsqEV35L26OM2TvFfkpRDJlo4AXiLrqwkJL2UYz3vRdwbxARyUkSjLIQn3GO4hmuTUTyn9Gn8wUtE3l3TTxVbtuJqlRcOtbnhazJcInabG+Ghj5H07PxM/pkE0LbYD26jTTUW/l9u4g99cIVk6ncbdfcjnFbeC1OfaV60KckSLA39XDCCKt/rLuoj3mbGWZ9M6/Dqe7EFRRG2N0ZsNxLusJPQyNc7G+HUVz9jPii3060tWH4q2WU8TOy2kXzc3E+t9NdOfSFHr1oEF0v2LilX4mb+UdWov+je2rON5OueTnneHO9BUnma16flqvjcOXKjrWAWtnbjTdQ1UY/o98Pkuwike0sCDY9/tCfGHksXMRKaS/Use7saDzzpTzqD6veJ33Eivw7lkRb6DKSRoE3GVbt2ZNw0JaK2BOhFrlVXoWrS+HIXq4dLDjbtqVjNVkvt2aKdItXoMnNLfW4rejiFGDhupkk82xSWGHw8vajCNdTDwz4ewvkOCCU5YiRNGn2+t0WQF65xm6O2Zu6wOzK3lEUkxGnykjvzPy8FuNgHh954xR4F2f3dIJF/NQRBPoCWiDLUxdTir0JoSzNawNTigJMweDv3y2Q4Ct7+NZU6/It4JOcMjspsjhF3oepH4fIddMiYes6cYfNAudgwH1uY8ZIEtBGxiJBuRuSEg9DxCgY+Cim+N4CHi6Jixs8kK41LjeycB2TSrLHxBupal41lMM0eVwRfSRiT+w+uz7Xee65ffiMPMQ9eyLnIN6BPZ8TQAuQ95Zp3vzRQT6cb60Cb7hJis/ikp+VES6VzbReu28uPKTHOfbAgOUFbgEHuVGRbdIIJ9/gavrExu2sXzh5OoPdQB8fDC8TF11u+gX3YSkYvH6OqWHqNXhHuOqs17wJWuD8lkDS/LzT7UkcL0BOgHx/wAt/0V9VoyTKsl8JZg3wu+rNEw8zRGIKBmA4N5UTtSajqc/FTm88lu1AHgYy+HTpI+2POHVEoQ6gvo2PeIRGSbS8jSW0yIxEe9r5XG3HsBCFaLqDcfDyLyBgACTrhi67aVVYahefD2jUYX3RLi1pbq1Omr659q3R0b+Uh0ObjZmw3sNlZq7bROMqNeOGy0s6Njfb1V46FlMMp7ay6swU+aWp9kjL12IauTiTwqdCZ7/ei+tbMTVPJstsZ9+zw5Wz29akY6g+O5BtOSNeHES+Ck+Hq2HrUrTq7+fzUuLcWoBh5CmTUH1qm73QevTh2xyI3+cveWuR1/ds+QS/jbMENR79pztfc87dW19A3ifkH7KkeOVSTJfr7XG3D8ehDlV6LXcntNGvfpxIRqxjp1zCoVYcD+B+/90CWYyYn+ZnMAAo8fKUeKAFYkSZ/NmqG3LGlKFzBga80OMkCXJS5/4PktfMz98HAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Young 2BTC🇺🇸🇺🇸📉📈📊",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2349017507516",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





