const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOXIHrZqqBUQURMQbytY+RAgQ7hLQwSn/+xZzqZmHPadm31KBdDrd/fUrKEpMkIk6MHkFVY2vsEH9sukqBCZAacMQ1WAIAthAMAHItmIxFbpxkEi0dqUVJqtnrOdvbC8zYma2mF/4DZ8Mzln5DB5DULXnDPt/AKSZcl7PsvJ4mELuWh5Sm95PTzcmucmJl0iJ5pqGJeKNOvOfwaNHhLjGRaRVMcpRDTMTdWuI65/RH2jrs8tp5doc16qnHfbsaKSFC1s5ucXgMJfsjqqZLorrYv8z+uc9njGGry+cwTjZjC65SMn6UjR3V16et45MX+duct5BfmO90yc4KlCwCFDR4Kb7se6c6swI3A9YC4aHvDqvluz9xdwcFwpZ2NsVLvSZOqjGyV4nPyOO7x7yymQ0qmq7G3h1hsRqhQ1ZuditgLyEKo7pcqU3IhN9J76uP7OS/h/dJSu7add8xDKCs4Ik3al0xo651Ai0/JQP1uflQorn63yl/1D3o1Pkx3Rfx8haaZe5u1XZCydc5t4RWYZlMq2kHaPrngoV+Ys+bNr6TyyhbI21Usuqe2PUIT9brscyJlhzQ6OQT2SAJFkfq1t6GS7Ojbs7LBTMJMF9kci4mZWntXEOTUNRR6090nVXlsm9miXR89uLUtQtAjChH0NQowiTpoYNLot+j6HZIYDBdYv8GjVv8oJud3N4NQrU0iZuyN34WUK2nEvmKylaLGovZyNfpCRPOWnPYAiquvQRISiYY9KUdWchQmCECJj8/c8QFOileTeuv46lhyDENWn2RVtlJQw+Xf38CH2/bItm2xW+2i9QDSbU1zZqGlxEpNexLWDtx/iK1Bg2BExCmBH0GIIAXbGPejygoPBwEPYnZ4vuGv+0yW3Bvsg95bgs3n/hWYlixAA9URLLPXGIpp4kweefzoiTQpoWQu4MwRDgj5npz/zWQt2dUlqnL7tNWCmpa6Ki2m+F04uxu73Z8K49qlEAJk3doiE4Qz9tq12ZouIPuAk0acoZFz4L6WZKnEO2lPfzJrYu1Dfcd0/B5PWrp9Qy6PF0T9WOR1cDQ5C/RRD3L2dYbkzRIk+JPC1MaOEv8uvWKwmr6leBmh74Q/X+SIAaiDMCJkBdrpWEOHPNdG/ZktN12YpkNepl/XTpM+7vcWIksYt445B5SINakdp3fQxXlVXMBm5IdfuMbyUxXbh8Fj3/B0iPoIlqZVnMvQmvshCcNuacUOsy9eVFx8Mz3A+Qd+GXp27rpMwmPynTG+uog2DrewN0yUuRS6ypQa+ydB4PrlLL89lcdp77297T8v2y81iI1mU+FUeOqQycSxczY4E+eDi5x6xp3Kutb5bChZi7W9stFV/ShbWR63nQsMLMvoTmXWjjLTfdFSxB6+10RlFZ4rwP4lsRZB8FjN9G5PUjWyFGb31WwBz9wJ3vOacew28gHxX5mywpwdWWSnt78NxjrMcGPyUvVzeBO+MlzIqxlRnofLV5ddZ6J/B4/DMEVQabsKzzvqOKoC5xAIYgg6SRv0Z1h3NEGphXYEKLHDUWKYrlH/8C0FYM1eAHAAA=',
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





