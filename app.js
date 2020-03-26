/*
https://api.flickr.com/services/rest?sort=relevance&parse_tags=1&content_type=7&extras=can_comment,count_comments,count_faves,description,isfavorite,license,media,needs_interstitial,owner_name,path_alias,realname,rotation,url_c,url_l,url_m,url_n,url_q,url_s,url_sq,url_t,url_z&per_page=1000&page=9&lang=en-US&text=tattoo&viewerNSID=45195966@N03&method=flickr.photos.search&csrf=1569012633:1kiq2l4oia4h:f99a80fe34a0a90e59ab92bd4765140d&api_key=793c0f1bcdec0cccd9a9cbe06ee2ff7d&format=json&hermes=1&hermesClient=1&reqId=d46a1d2a&nojsoncallback=1
*/
const path = require('path');
const fs = require('fs');

const db = require('./db/mysql');
//joining path of directory 
const directoryPath = path.join(__dirname, 'api/flickr/tatto/');




                fs.readFile(`./api/flickr/Maitlandward/rest.json`,(err,ress)=>{
                   
                    let ressconvert = JSON.parse(ress)
                    let photos = ressconvert.photos.photo;
                    console.log(  photos[28].title)
                     photos.forEach((filckir,i)=>{

                        let obj = {

                            site_id:26,
                            board_id:27,
                            title:`${filckir.title} #${filckir.title} #Maitland #Ward #Maitlandward`,
                            description:urlKaldir(filckir.description._content),
                            content:urlKaldir(filckir.description._content),
                            image_1:filckir.url_m_cdn ==undefined ? filckir.url_n_cdn : filckir.url_m_cdn ,
                            link:filckir.id,
                            pin:"0",
                           
                        }

                       
                           
                           async function ekle(){

                                 await    db.query(`SELECT link FROM contents WHERE link = "${filckir.id}"`,(er,varmi,fild)=>{
                                           if( varmi.length > 0){
                                                console.log("VAR")
                                            }else{
                                                console.log("YOK")
                                              db.query(`INSERT INTO contents SET ? `,obj,(error, results, fields)=>{

                                                    if (error) throw error;
                                                    console.log(results.insertId)
                                                })
                                            }
                                     })
                           } 
                           ekle()
                         
                         // setTimeout(()=>{

                         //   ekle()
                       //  console.log(`Kalan:${i} toplam:${photos.length}`)
                       //  },i*900)

                         

                        //

                        
                     })   

                     
                    
                    /*db.query(`INSERT INTO contents SET ? `,obj,(error, results, fields)=>{

                        if (error) throw error;
                        console.log(results)
                    })*/

                // console.log(obj)
                })
            
  


function urlKaldir (str){
    var k = str.replace(/<a([^>]+)>/g,"").replace(/<\/a>/g,"");
    return k==""?"pin":k;
}


