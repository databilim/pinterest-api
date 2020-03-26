const path = require('path');
const fs = require('fs');

const db = require('../db/mysql');
//joining path of directory 
const directoryPath = path.join(__dirname, 'api/flickr/tatto/');

class fl {

    constructor(){


    }
    dizin(){
        return new Promise((resolve,reject)=>{

            fs.readdir(`../api/flickr/tatto/`,(er,res)=>{
                
                
               resolve(res)
            })
        })    
    }
    jsonOku(){
        return new Promise((resolve,reject)=>{

            this.dizin().then((dizin)=>{
           
               let dizi =  dizin.filter((fileName) => {
                    return fileName !=".DS_Store"

                    
                });
                return dizi;
            }).then((fileName)=>{
                let list =  [];
               fileName.forEach((file) => {
                    
                    fs.readFile(`../api/flickr/tatto/${file}`,"UTF8",(err,ress)=>{
                        let jsn = JSON.parse(ress) 
                        let photos = jsn.photos.photo;
                        
                        photos.forEach((data)=>{

                            list.push(data)
                         
                        }) 
                        console.log(list.length)
                        
                        fs.writeFileSync("../api/flickr/tatto/full.json",list,()=>{

                        })  
                        resolve(list.length)

                    })
                    
               });

            })

        })
        

    }
    start(){
        this.jsonOku().then((data)=>{

           // console.log(data)

        });
       
    }


}

const flc = new fl()

flc.start();