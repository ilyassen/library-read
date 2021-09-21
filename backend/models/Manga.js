const mongoose = require("mongoose")

const Manga = new mongoose.Schema({
    name: {type:String, trim:true, default:''},
    manga_image: {type:String, trim:true, default:''},
    chapters: {type:String, trim:true, default:''}
})

module.exports = mongoose.model('Manga', Manga) 