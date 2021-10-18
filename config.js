/* Copyright (C) 2020 Yusuf Usta.
re edited by afnan-plk  nexusNw

*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './whatsasena.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
    VERSION: 'v7.3.6',
    CHANNEL: 'https://t.me/remasterplugin',
    SESSION: process.env.FILO_SESSION === undefined ? '' : process.env.FILO_SESSION,
    ANTİLİNK: process.env.ANTİ_LİNK === undefined ? 'false' : process.env.ANTİ_LİNK,
    AUTOBİO: process.env.AUTO_BİO === undefined ? 'false' : process.env.AUTO_BİO,
    THERI_KICK: process.env.THERI_KICK === undefined ? 'false' : process.env.THERI_KICK,
    INBO1: process.env.INBO_BLOCK === undefined ? 'true' : process.env.INBO_BLOCK,
    AFN: process.env.ALL_CAPTION === undefined ? 'public bot FILO' : process.env.ALL_CAPTION,
    ALL_LINK_BAN: process.env.ALL_LINK_BAN === undefined ? 'false' : process.env.ALL_LINK_BAN,
    PLK: process.env.OWNER_NAME === undefined ? 'default' : process.env.OWNER_NAME,
    GANSTYLE: process.env.GAN_IMAGE === undefined ? 'https://i.hizliresim.com/loUtAb.jpg' : process.env.GAN_IMAGE,
    LANG: process.env.LANGUAGE === undefined ? 'TR' : process.env.LANGUAGE.toUpperCase(),
    SONGD: process.env.SONGD === undefined ? 'ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGD,
    SONGU: process.env.SONGU === undefined ? 'ᴜᴘʟᴏᴀᴅɪɴɢ ꜱᴏɴɢ' : process.env.SONGU,
    ALIVEMSG: process.env.ALIVE_MESSAGE === undefined ? 'default' : process.env.ALIVE_MESSAGE,
    AFNN: process.env.TAG_REPLY === undefined ? '919072790587@s.whatsapp.net' : process.env.TAG_REPLY,
    KICKMEMSG: process.env.KICKME_MESSAGE === undefined ? 'default' : process.env.KICKME_MESSAGE,
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    ADDMSG: process.env.ADD_MESSAGE === undefined ? 'default' : process.env.ADD_MESSAGE,
    MUTEMSG: process.env.MUTE_MESSAGE === undefined ? 'default' : process.env.MUTE_MESSAGE,
    BOTPLK: process.env.BOT_NAME === undefined ? 'FILO' : process.env.BOT_NAME,
    NOLOG: process.env.NO_LOG === undefined ? 'false' : process.env.NO_LOG,
    INBO: process.env.INBO_BLOCK === undefined ? 'false' : process.env.INBO_BLOCK,
    FULLEVA: process.env.FULL_EVA === undefined ? 'false' : process.env.FULL_EVA,
    STICKERP: process.env.STICKER_REPLY === undefined ? false : convertToBool(process.env.STICKER_REPLY),
    BGMFILTER: process.env.BGM_FILTER === undefined ? false : convertToBool(process.env.BGM_FILTER),
    DISBGM: process.env.DISABLE_JID_BGM_FILTER === undefined ? undefined : convertToBool(process.env.DISABLE_JID_BGM_FILTER),
    BLOCKMSG: process.env.BLOCK_MESSAGE === undefined ? 'default' : process.env.BLOCK_MESSAGE,
    UNBLOCKMSG: process.env.UNBLOCK_MESSAGE === undefined ? 'default' : process.env.UNBLOCK_MESSAGE,
    TALKING_PINKY: process.env.TALKING_PINKY === undefined ? 'false' : process.env.TALKING_PINKY,
    SAID: process.env.BGM_DURATION === undefined ? '39999600' : process.env.BGM_DURATION,
    FILONAME: process.env.FILO_NAME === undefined ? 'FILO' : process.env.FILO_NAME,
    OWNERNUMBER: process.env.OWNER_NUMBER=== undefined ? '918129624395' : process.env.OWNER_NUMBER,
    UNMUTEMSG: process.env.UNMUTE_MESSAGE === undefined ? 'default' : process.env.UNMUTE_MESSAGE,
    WORKTYPE: process.env.WORK_TYPE === undefined ? 'private' : process.env.WORK_TYPE,
    PROMOTEMSG: process.env.PROMOTE_MESSAGE === undefined ? 'default' : process.env.PROMOTE_MESSAGE,
    PLKBGM: process.env.CHANGE_BGM_TO === undefined ? 'one' : process.env.CHANGE_BGM_TO,
    DEMOTEMSG: process.env.DEMOTE_MESSAGE === undefined ? 'default' : process.env.DEMOTE_MESSAGE,
    BANMSG: process.env.BAN_MESSAGE === undefined ? 'default' : process.env.BAN_MESSAGE,
    AFKMSG: process.env.AFK_MESSAGE === undefined ? 'default' : process.env.AFK_MESSAGE,
    WEL_GIF: process.env.WEL_GIF === undefined ? 'https://i.imgur.com/nErXUGj.mp4' : process.env.WEL_GIF,
    GIF_BYE: process.env.GIF_BYE === undefined ? 'https://i.imgur.com/Z1jCYGN.mp4' : process.env.GIF_BYE,
    TAGPLK: process.env.TAG_HEADER === undefined ? 'nexusNw' : process.env.TAG_HEADER,
    HANDLERS: process.env.HANDLERS === undefined ? '^[.!;]' : process.env.HANDLERS,
    SEND_READ: process.env.SEND_READ === undefined ? false : convertToBool(process.env.SEND_READ),
    MAHN: process.env.MAAN === undefined ? '919072790587,0' : process.env.MAAN,
    BRANCH: 'master',
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
    },
    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './whatsasena.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
    NO_ONLINE: process.env.NO_ONLINE === undefined ? true : convertToBool(process.env.NO_ONLINE),
    SUDO: process.env.SUDO === undefined ? false : process.env.SUDO,
    
    DEBUG: DEBUG,
    COFFEEHOUSE_API_KEY: process.env.COFFEEHOUSE_API_KEY === undefined ? false : process.env.COFFEEHOUSE_API_KEY,
    XTEAM_API: process.env.XTEAM_API === undefined ? 'ba370b4275f5843b' : process.env.XTEAM_API,
    ZEKS_API: process.env.ZEKS_API === undefined ? 'cjxJIn9eDletRHac3CG6CdvGxFH' : process.env.ZEKS_API,
    LOLUHUMAN_API: process.env.LOLUHUMAN_API === undefined ? '990580a2e31add15990665b0' : process.env.LOLUHUMAN_API,
    WITAI_API: "TEYMELA6DMC4XB5YM3SPTTQWUUIBKURG",
    SUPPORT: "905524317852-1612300121",
    SUPPORT2: "905511384572-1617736751",
    SUPPORT3: "905511384572-1621015274"
};
