var request = require('request');
var db = require("./db/mysql.js");
var dk = getRndInteger(500000,600000)
var loginLink = 'https://tr.pinterest.com/';
const fs = require("fs");
const uA = require("./userAgent");
let  ran = uA[getRndInteger(0,114)]

// creating a clean jar
var j = request.jar();

request.get({url: loginLink, jar: j}, function(err, ress, html) {
  // place POST request and rest of the code here
      let csr = ress.headers['set-cookie'][0].split(";")[0].split("=")[1]


db.query(`SELECT * FROM admin_contents  where lang="de" AND pinStatus="0"`,(err,resBody,res)=>{

      resBody.forEach((ic,x) => {

        let ayar = {
          owner_user_id:"644577902826023195",
          board_id :"719168702935285558",
          name:"Erbulut pin",
          description :ic.description,
          link: "http://pinty.ga/more.php?id="+ic.ID,//"https://kochenmitflair.com/more.html?id="+ic.ID,
          title:ic.title,
          image_url:ic.images.split("--")[0].replace("315","815"),
          csr:csr
      
      
          }


           

          setTimeout(()=>{
            //console.log(ayar,ic.ID)

              pinAt(ayar,(data)=>{
                
                // let icStatus = JSON.parse( data.body)
                        
                 fs.writeFile("data.json",JSON.stringify( data),(err)=>{

                  console.log(err)
      })
            
              

                        db.query(`UPDATE admin_contents SET pinStatus = '1' WHERE admin_contents.ID = ${ic.ID}`,(err,stat)=>{
                              console.log(ayar, new Date(), dk)
                            })

                 
                    
            

               
              })

           
          },dk *x)

      });
})


});

function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

function pinAt(ayar,cb){
      var options = {
            'method': 'POST',
  'url': 'https://www.pinterest.de/resource/PinResource/create/',
  'headers': {
    'authority': 'www.pinterest.de',
    'x-pinterest-appstate': 'active',
    'x-app-version': '0d91469',
    'user-agent': ran,
    'content-type': 'application/x-www-form-urlencoded',
    'accept': 'application/json, text/javascript, */*, q=0.01',
    'sec-fetch-dest': 'empty',
    'x-requested-with': 'XMLHttpRequest',
    'x-csrftoken': ayar.csr,
    'origin': 'https://www.pinterest.de',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'referer': 'https://www.pinterest.de/',
    'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
    'cookie': 'csrftoken='+ayar.csr+'; _pinterest_sess=TWc9PSZ6VmNmRllOdFJHc0JwYlFOb1BkK2ZKREo4RlQrcGt3UEVScUFzelpCUFhUM1dielFTSS9HdDFiUFNpb3U4OGwzN2c3Wm5nOXJaVnI4ZmZqcll1b2czbTBha1Zrd01FRHRUcGhkNTZBTUFaaHE2WWpXZERyUjduRG5kOTQrcGtDL0RiSEVLZXpLZEdpak1wQmkyT1g4ZmRtbWh5R1FUb0I2OUdiZTZjencyZFhNNi9SWFg4SDJYdEd1TGxDeWVGRG5zZXVRdnREMVpwQVNxZExFMkZqamtwWHFUbjhJY25mUklwaWxibWFJMkR0RlUwaC96RWFMZThCR3MyWjhZRFZ4QzZ2WUwxSjV0V0t2UTVsb2Y5bFk0cC9TRXBQTlRaWWgrTVEzZ2tyUXVJeC9rdTRWWGVJUmNGTjVTaUZzYnVLQldBYkIzK2ZyUG9zV0VNRWRWTE94MEk0aTdqYXArWGtMU00xZURycUhveEFlVHBTTG1BN2pHencwa2h3RDhZdWtlSlN5b2JDZFhmb0plQ2JBeERLMjZITlNVdmJjMWJIK05meVRyZGlUOUc1UlRRUzE0bXR4bCtCU1FUbDZjMzNnY3ZPK2t4aEdQc2lMVzhNSkQ2TVFVUExESHdqMUFFczNjUWtOYnFGVXpRSGFCS0xsM0plRmtwb1M4djhsSWFNdDlBYXJ3dWxZWkNCN3A3V1ZUNTVzN1NUMGN3ODdZQnhTWTZIZS8yQW8wVVV6MlAvQ1hwN2QvejlNZkxwYVU0Z0JHMmlnZHczRTBNR1FseDJFRCsvV1oyMll6aytjNnh6UytwU0RiN0hrbkV5NDhvaXpXQ0NGU1VDeHM1ZkpvMTM5NWVCTEU2T0FaNU5xOWVXMjdRcW0wUUVibnBGaTZXMDdkUFgrUjZoT3BZdndEejU4VGk4djFobUhwRzBBQW5TbStrdFNwNy9ZTWNvSTQ1d2ZzbzIrdXJaWmZnVCtuMGFnMzlkSG8rZDJNVVdGeFNtS2VKQjNoMGg3UWl1MlljVnpuRzBiMUZvK0tBemdJYUFNcHl5OENBT0hPTDN3UjBDSEc2MG1kUmpoUXNJQVptcUlvTVBOb1V4VTF5OU03SkxmJkZ0S1NZZTE5ZkdaR3kwMEVIK2dIWUI2RFpEdz0=;'
            },
        
    
        form: {
          'source_url': '/pin-builder/',
          'data': `{"options":{"board_id":"${ayar.board_id}","field_set_key":"create_success","skip_pin_create_log":true,"description":"${ayar.description}","link":"${ayar.link}","title":"Süßkartoffel Haferpfannkuchen Rezept ","image_url":"${ayar.image_url}","method":"scraped","scrape_metric":{"source":"www_url_scrape"}},"context":{}}`
        }
    
      };
      request(options, function (error, response) { 
        if(error){
            cb(error.body.response.error)
            console.log("HATA DÖNDÜ")
        }else{
          cb(response);
          console.log("DATA DÖNDÜ")
        }
        ///console.log(options)
       
      });
      
    
    }
    