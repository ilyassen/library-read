// var fs = requirejs(["fs"]);

module.exports.getNames = getNames;
module.exports.getChapters = getChapters;
module.exports.getChapterManga = getChapterManga;
module.exports.getChaptersUrls = getChaptersUrls;

var fs = require('fs');
var dir = 'C:/Projects/untitled/test/Mangas';

const util = require('util');

const readdir = util.promisify(fs.readdir);

let mangasListArray ;
let chaptersListArray ;

let sortEggsInNest = function (a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
  }


async function getNames () {
    let names;
    mangasListArray = [];
    try {
        names = await readdir(dir);
        names.forEach(function (element) {
            mangasListArray.push({name : element});
        });
            console.log(mangasListArray);
            return Promise.all(mangasListArray);
        } catch (err) {
            console.log(err);
        }    
}

async function getChapters (manga) {
    let names;
    chapterListArray = [];
    try {
        names = await readdir(dir + '/' + manga);
        names.forEach(function (element) {
            chapterListArray.push({name : element});
        });
        chapterListArray.sort(sortEggsInNest);
        chapterListArray.sort(function (a, b) {
            
            return +a.name.split(/(\d+)/)[1] - +b.name.split(/(\d+)/)[1];
        });
            console.log(chapterListArray);
            return Promise.all(chapterListArray);
        } catch (err) {
            console.log(err);
        }    
}

async function getChaptersUrls (manga) {
    let names;
    let url;
    chapterListArray = [];
    try {
        names = await readdir(dir + '/' + manga);
        names.forEach(function (element) {
            if(element == "urls.json") {
                url = element;
            }
        });
        chapterListArray.sort(sortEggsInNest);
        chapterListArray.sort(function (a, b) {
            
            return +a.name.split(/(\d+)/)[1] - +b.name.split(/(\d+)/)[1];
        });
            console.log(chapterListArray);
            // fs.readfile(dir + '/' + manga + '/' + url, 'utf8', function(err,data) {
            //     if(err) throw err;
            //     let obj = {};
            //     let splitted = data.toString().split(",");
            //     for (let i = 0; i<splitted.length; i++) {
            //         let splitLine = splitted[i].split(":");
            //         obj[splitLine[0]] = obj.splittLine[1].split(" ");
            //     }
            //     console.log(obj);
            //     return Promise.all(obj);
            // });

            var data = fs.readFileSync(dir + '/' + manga + '/' + url);
            var obj = JSON.parse(data)
            // let obj = {};
            // let splitted = data.toString().split(",");
            // for (let i = 0; i<splitted.length; i++) {
            //     let splitLine = splitted[i].split(":");
            //     obj[splitLine[0]] = obj.splittLine[1].split(" ");
            // }
            console.log(obj);
            return Promise.all(obj);
        } catch (err) {
            console.log(err);
        }    
}
async function getChapterManga (manga,chapter) {
    let names;
    mangaArray = [];
    dirr = 'http://127.0.0.1:8887';
    try {
        console.log(dir + '/' + manga + '/' + chapter);
        names = await readdir(dir + '/' + manga + '/' + chapter);
        names.forEach(function (element) {
            mangaArray.push({name : dirr + '/' + manga + '/' + chapter + '/' + element});
        });
        mangaArray.sort(function (a, b) {
            a = a.name.replace("http://127.0.0.1:8887/" + manga + "/" + chapter + "/", "");
            a = a.replace(".jpg", "");
            b = b.name.replace("http://127.0.0.1:8887/" + manga + "/" + chapter + "/", "");
            b = b.replace(".jpg", "");
            // console.log(a);
            return +a - +b;
        });

            console.log(mangaArray);
            return Promise.all(mangaArray);
        } catch (err) {
            console.log(err);
        }    
}

async function setMangasDb () {
    let names;
    mangasListArray = [];
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    //     MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("mangadb");
    //     var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("mangas").insertOne(myobj, function(err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //         db.close();
    //     });
    // });

    try {
        names = await readdir(dir);
        names.forEach(function (element) {
            mangasListArray.push({name : element});
        });
            console.log(mangasListArray);
            return Promise.all(mangasListArray);
        } catch (err) {
            console.log(err);
        }    
}

async function setUrlsManga (manga,chapter) {
    let names;
    mangaArray = [];
    dirr = 'http://127.0.0.1:8887';
    try {
        console.log(dir + '/' + manga + '/' + chapter);
        names = await readdir(dir + '/' + manga + '/' + chapter);
        names.forEach(function (element) {
            mangaArray.push({name : dirr + '/' + manga + '/' + chapter + '/' + element});
        });
        mangaArray.sort(function (a, b) {
            a = a.name.replace("http://127.0.0.1:8887/" + manga + "/" + chapter + "/", "");
            a = a.replace(".jpg", "");
            b = b.name.replace("http://127.0.0.1:8887/" + manga + "/" + chapter + "/", "");
            b = b.replace(".jpg", "");
            // console.log(a);
            return +a - +b;
        });

            console.log(mangaArray);
            return Promise.all(mangaArray);
        } catch (err) {
            console.log(err);
        }    
}

// .sort(function (a, b) {
//     return (+a.replace("http://127.0.0.1:8887/Hardcore Leveling/10/", ""),+a.replace(".jpg", "")) - (+b.replace("http://127.0.0.1:8887/Hardcore Leveling/10/", ""),+b.replace(".jpg", ""));
// });