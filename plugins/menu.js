/* codded by raashii
reedited by hisham
use this git under copyright
dont change credit
*/

const Hisham= require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

Hisham.addCommand({pattern: 'menu', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://wallpaperscraft.com/wallpaper/girl_twilight_clouds_156445";
    r_text[1] = "https://wallpaperscraft.com/wallpaper/silhouette_night_starry_sky_137292";
    r_text[2] = "https://wallpaperscraft.com/wallpaper/girl_umbrella_anime_141156";
    r_text[3] = "https://wallpaperscraft.com/wallpaper/girl_kitten_flower_141058";
    r_text[4] = "https://wallpaperscraft.com/wallpaper/girl_umbrella_rain_151317";
    r_text[5] = "https://wallpaperscraft.com/wallpaper/bmw_car_bumper_191131";
    r_text[6] = "https://wallpaperscraft.com/wallpaper/porsche_911_carrera_rsr_porsche_sports_car_139640";
    r_text[7] = "https://wallpaperscraft.com/wallpaper/wierschem_germany_castle_trail_evening_sky_119771";
    r_text[8] = "https://wallpaperscraft.com/wallpaper/ruins_man_loneliness_124279";
    r_text[9] = "https://wallpaperscraft.com/wallpaper/couple_starry_sky_art_123338";
    r_text[10] = "https://wallpaperscraft.com/wallpaper/book_heart_page_120859";
    r_text[11] = "https://wallpaperscraft.com/wallpaper/hearts_circles_butterflies_colorful_74849";
    r_text[12] = "https://wallpaperscraft.com/wallpaper/children_silhouettes_love_133548";
    r_text[13] = "https://wallpaperscraft.com/wallpaper/smile_inscription_hand_hello_118043";
    r_text[14] = "https://wallpaperscraft.com/wallpaper/neon_inscription_wall_134368";
    r_text[15] = "https://wallpaperscraft.com/wallpaper/neon_backlight_inscription_121706";
    r_text[16] = "https://wallpaperscraft.com/wallpaper/astronaut_spacesuit_reflection_144426";
    r_text[17] = "https://wallpaperscraft.com/wallpaper/minimalism_sky_clouds_sun_mountains_lake_landscape_95458";
    r_text[18] = "https://wallpaperscraft.com/wallpaper/ufos_aliens_cow_improvisation_vector_93569";
    r_text[19] = "https://wallpaperscraft.com/wallpaper/tree_planet_stars_galaxy_art_117068";
    r_text[20] = "https://wallpaperscraft.com/wallpaper/honeycomb_volume_iron_167098";
    r_text[21] = "https://wallpaperscraft.com/wallpaper/pattern_forest_motif_131405";
    r_text[22] = "https://wallpaperscraft.com/download/stairs_neon_backlight_198917/1400x1050";
    r_text[23] = "https://wallpaperscraft.com/download/silhouette_moon_boat_135277/1400x1050";
    r_text[24] = "https://wallpaperscraft.com/download/laptop_cup_glasses_plant_114948/1400x1050";
    r_text[25] = "https://wallpaperscraft.com/download/train_subway_underground_120794/1400x1050";
    r_text[26] = "https://wallpaperscraft.com/download/autumn_forest_park_128379/1400x1050"; 
    r_text[27] = "https://wallpaperscraft.com/download/ocean_beach_aerial_view_134429/1400x1050";
    r_text[28] = "https://wallpaperscraft.com/wallpaper/paint_stains_purple_118346";
    r_text[29] = "https://wallpaperscraft.com/wallpaper/girl_umbrella_rain_151317";
    r_text[30] = "https://wallpaperscraft.com/wallpaper/bmw_headlights_lights_137326";
    r_text[31] = "https://wallpaperscraft.com/wallpaper/room_book_read_evening_92289";
    r_text[32] = "https://wallpaperscraft.com/wallpaper/chip_circuit_processor_140251";
    r_text[33] = "https://wallpaperscraft.com/wallpaper/laptop_keyboard_glow_170138";
    r_text[34] = "https://wallpaperscraft.com/wallpaper/code_text_colorful_140555";
    r_text[35] = "https://wallpaperscraft.com/wallpaper/backlight_neon_electronics_144683";
    r_text[36] = "https://wallpaperscraft.com/wallpaper/camera_lens_strap_145518";
    r_text[37] = "https://wallpaperscraft.com/wallpaper/ball_fire_football_122318";
    r_text[38] = "https://wallpaperscraft.com/wallpaper/football_ball_exercise_water_abstraction_79989";
    r_text[39] = "https://wallpaperscraft.com/wallpaper/paragliding_sky_flight_91710";
    r_text[40] = "https://wallpaperscraft.com/wallpaper/child_football_player_football_122132";
    r_text[41] = "https://wallpaperscraft.com/wallpaper/manchester_united_logo_new_set_2012_2013_english_premier_league_99650";
    r_text[42] = "https://wallpaperscraft.com/wallpaper/manchester_united_futbol_logotip_103654";
    r_text[43] = "https://wallpaperscraft.com/wallpaper/stars_space_glow_planet_99744";
    r_text[44] = "https://wallpaperscraft.com/wallpaper/planet_craters_space_light_61032";
    r_text[45] = "https://wallpaperscraft.com/wallpaper/space_planets_takeoff_explosion_96455";
    r_text[46] = "https://wallpaperscraft.com/wallpaper/starry_sky_milky_way_stars_glitter_space_118653";
    r_text[47] = "https://wallpaperscraft.com/wallpaper/ball_smile_smiley_147563";     r_text[48] = "https://wallpaperscraft.com/download/smile_smiley_sad_148083/1400x1050";
    r_text[49] = "https://wallpaperscraft.com/wallpaper/anime_girl_wings_flying_black_15561";
    r_text[50] = "https://wallpaperscraft.com/wallpaper/girl_lights_water_stars_87238";
    r_text[51] = "https://wallpaperscraft.com/wallpaper/anime_cat_devushka_121498";
    r_text[52] = "https://wallpaperscraft.com/wallpaper/anime_schoolgirl_uniform_120955";
    r_text[53] = "https://wallpaperscraft.com/wallpaper/anime_girl_cute_lights_night_16812";
    r_text[54] = "https://wallpaperscraft.com/wallpaper/question_marks_figures_3d_112755";
    r_text[55] = "https://wallpaperscraft.com/wallpaper/silhouette_circle_glow_141558";
    r_text[56] = "https://wallpaperscraft.com/wallpaper/water_lily_lotus_flower_134572";
    r_text[57] = "https://wallpaperscraft.com/wallpaper/moon_trees_dark_160894";
    r_text[58] = "https://wallpaperscraft.com/wallpaper/lamborghini_yellow_sports_car_122908";
    r_text[59] = "https://wallpaperscraft.com/wallpaper/cat_eyes_blue_143433";
    r_text[60] = "https://wallpaperscraft.com/wallpaper/pattern_frosty_frost_134125";
    r_text[61] = "https://wallpaperscraft.com/wallpaper/lamborghini_yellow_rain_121351";
    r_text[62] = "https://wallpaperscraft.com/wallpaper/astronaut_silhouette_glow_151318";
    r_text[63] = "https://wallpaperscraft.com/wallpaper/portal_glow_bright_148108";
    r_text[64] = "https://wallpaperscraft.com/wallpaper/cube_figure_dark_142157";
    r_text[65] = "https://wallpaperscraft.com/wallpaper/lamp_outlet_idea_electricity_120422";

    var i = Math.floor(66*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'
if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'
if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'
if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

if (config.FULLEVA == 'true') eva = 'On'
if (config.FULLEVA == 'false') eva = 'Off'
if (config.AUTOBİO == 'true') auto_bio = 'On'
if (config.AUTOBİO == 'false') auto_bio = 'Off'

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `╭──────────────────╮
   ` + config.BOTPLK + `
╭──────────────────╯
│
│ ʜᴇʏ ᴜsᴇʀ ` + wish + `
│         *⌚` + time + `*
│
│ ▢ *ᴅᴇᴠᴇʟᴏʟᴇʀ* : ɴᴇͥxͭᴜᷤꜱ ꜱͫɪͤʀ
│ ▢ *BOT* : FILO
│ ▢ *ᴠᴇʀsɪᴏɴ* : 2.0.0
│ ▢ *ғᴜʟʟ ᴇᴠᴀ* : ` + eva + `
│ ▢ *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `
│ ▢ *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ
│ ▢ *ᴘʀᴇғɪx* : *# / . ; !*
│
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│      ▎▍▌▌▉▏▎▌▉▐▏▌▎
│       ©918129624395
│
╰──────────────────╮
 ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​ 
╭──────────────────╯
│ ◩ ᴍᴇɴᴜ ◪
╭──────────────────╯
│
│[ ᴍᴇᴅɪᴀ ]
│
│ ▢ .sᴏɴɢ
│ ▢ .ᴠɪᴅᴇᴏ
│ ▢ .ɪɴsᴛᴀ
│ ▢ .ʏᴛ
│         
│[ ᴄᴏɴᴠᴇʀᴛ ]
│
│ ▢ .ɢɪғ
│ ▢ .ᴍᴘ3
│ ▢ .ᴛᴛs
│ ▢ .ɪᴍɢ
│ ▢ .sᴛɪᴄᴋᴇʀ
│ ▢ .ᴀᴛᴛᴘ
│ ▢ .ᴛᴛᴘ
│ ▢ .ᴘʜᴏᴛᴏ
│ ▢ .2ɪᴍɢ
│
│[ ᴍᴀᴋᴇʀ ]
│
│ ▢ .logo
│ ▢ .spack
│ ▢ .shpack
│ ▢ .makermenu
│ ▢ .txtit
│ ▢ .effectimge 
│ 
│[ ғᴜɴ ]
│
│ ▢ .ᴊᴏᴋᴇ
│ ▢ .ᴍᴇᴍᴇ
│ ▢ .ǫʀ
│ ▢ .ᴄʜᴀɴɢᴇsᴀʏ
│ ▢ .ᴛʀᴜᴍᴘsᴀʏ
│ ▢ .ᴄᴏᴍᴘʟɪᴍᴇɴᴛ
│
│[ sᴇᴀʀᴄʜ ]
│ 
│ ▢ .ᴡɪᴋɪ
│ ▢ .ʟʏʀɪᴄ
│ ▢ .sʜᴏᴡ
│ ▢ .ᴍᴏᴠɪᴇ
│ ▢ .ᴡᴇᴀᴛʜᴇʀ
│
│[ ᴛᴀɢ ]
│
│ ▢ .ᴛᴀɢᴀʟʟ
│ ▢ .ᴛᴀɢᴀᴅᴍɪɴ
│
│[ ᴏᴛʜᴇʀ ]
│ 
│ ▢ .ᴀɴɪᴍᴇ
│ ▢ .ᴡᴀʟʟᴘᴀᴘᴇʀ
│ ▢ .ss
│ ▢ .ᴅɪᴄᴛ
│ ▢ .sʜᴏʀᴛ
│ ▢ .ᴛʀᴛ
│ ▢ .ʀᴇᴍᴏᴠᴇʙɢ
│ 
│[ ᴏᴡɴᴇʀ ᴄᴍɴᴅs ]
│
│ ▢ .ғᴜʟʟᴇᴠᴀ 
│ ▢ .ᴀᴜᴛᴏʙɪᴏ
│ ▢ .ʙᴀɴ
│ ▢ .ᴀᴅᴅ
│ ▢ .ᴘʀᴏᴍᴏᴛᴇ
│ ▢ .ᴅᴇᴍᴏᴛᴇ
│ ▢ .ᴍᴜᴛᴇ
│ ▢ .ᴜɴᴍᴜᴛᴇ
│ ▢ .ɪɴᴠɪᴛᴇ
│ ▢ .sᴇᴛᴠᴀʀ
│ 
│
│   ❏ Filo V2❏
╰──────────────────╯
`}) 

}));
