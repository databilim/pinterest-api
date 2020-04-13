var request = require('request');
var db = require("./db/bast.js");
var sn = 6000 * 10;

db.query(`SELECT * FROM admin_contents  where lang="de" AND pinStatus="0"`,(err,resBody,res)=>{

      resBody.forEach((ic,x) => {

        let ayar = {
          owner_user_id:"644577902826023195",
          board_id :"635570634852259924",
          name:"Erbulut pin",
          description :ic.description,
          link:"http://kochenmitflair.com/more.html?id="+ic.ID,
          title:ic.title,
          image_url:ic.images.split("--")[0].replace("315","815").replace("250","815")
      
      
          }


           

          setTimeout(()=>{
            console.log(ayar,ic.ID)

              pinAt(ayar,(data)=>{
                
                  let icStatus = JSON.parse( data)
                console.log(icStatus  )

              
                 /* if(icStatus.resource_response.status != undefined){
                    db.query(`UPDATE admin_contents SET pinStatus = '1' WHERE admin_contents.ID = ${ic.ID}`,(err,stat)=>{
                      console.log(err)
                    })
                  }*/

               
              })

           
          },300000 *x)

      });
})




function pinAt(ayar,cb){
  var options = {
    'method': 'POST',
  'url': 'https://tr.pinterest.com/resource/PinResource/create/',
  'headers': {
   
   
    'content-type': 'application/x-www-form-urlencoded',
    'accept': 'application/json, text/javascript, */*, q=0.01',
    
    'x-pinterest-experimenthash': '016563f26195517601d64078942a1eb341fcc25236cba56e39c791c8e875c13a5ebd9e2bf0cad9a805d7fac9817b698e9f2ab58cea25da84cbc8312e775655a8',
    'x-csrftoken': 'hXCiaH4awo3yf0VVfSNRgNm4kcIhB5AG',
    'dnt': '1',
    'origin': 'https://tr.pinterest.com',

    'referer': 'https://tr.pinterest.com/',
    'accept-language': 'en,tr-TR;q=0.9,tr;q=0.8,en-US;q=0.7,de;q=0.6,am;q=0.5',
    'cookie': '_b="AUBO6GPfjjFAc4UVLCjAyw6O8E/Q94FtmLPTrYgP6jIMhhcbpCKW7OVwctU1Ez2Z8Wo="; G_ENABLED_IDPS=google; _ga=GA1.2.412696451.1560167730; _derived_epik=dj0yJnU9NEV5bGxGdVJycTE4VjJ0UjUtZHpRWnY0M0Y5LWNQMnMmbj1kZlpvUF9NXzlLZS1fNldoU1R4bmlBJm09MSZ0PUFBQUFBRnotU2hB; _auth=1; _gcl_au=1.1.286799845.1573762752; ajs_user_id=null; ajs_group_id=null; ajs_anonymous_id=%224b3c124b-58ce-41e9-9c11-cca7dc7cc9b3%22; csrftoken=hXCiaH4awo3yf0VVfSNRgNm4kcIhB5AG; _pinterest_sess=TWc9PSZCRGlkcGhLV1EwSXlLdE5zRE91WGtVWUF2ZjQ4bUl2RHlZdGNEU1FubHd6c0MzTWRqaW9mVDM0eHRNNEQ3aTdkTSsxVGRrdWtjZjdVUnVZb0VNZm1YMFdlRU5GNXRUNUhnUFcxWjZ4RGUyLytvYlhWT09Cb2oreEVDT1ozK1VVTTdRaUFGWGNpS2prU1JFZktseEdBWnMzK3BkUUUrUS91VVptUnV6MVd2VG56Zy9xcVlDN2FSeHV4M1AxTFZnVzkyMTVhS1BaU0R4c3Y0b1BzajcrVGZBbyttNXBPWDB1NmF5M2oyOWlsVnFiTUxyUkxHcmVTcFBqb2x5MXFITjcrTk9Xa0NDRDMvaGJYbjZQa2VpZ2FFRHVlZGFxQWpIdzF5YWN2aEVnNXhRUWJ5ZWNNNm9lK2x3SjJoUzF6ZUNSdm02cnV5WitTUDBpb2M4UnlGa004Q1NhRy9YQzhhcmJFWjY4MFpyLzYzZlhoalJUbnZmTkt4NTFhRWxEU3JiUkhvbWlMY0NYRzVyOHIwY25Na2FjWnR6UWlTRVpOZGlZU3RwdGMxU0tIZ1hxb1N6TDZEQklDcldwNU1Heks3M1YrSmpwS1VRRUtRcjcvbjZ5NlBjaUNRUmI2ZXN2NnJETFFhWEYvOSs3K28wZmZTRkRUU3E0Um9VYlBHZGF3aEVCSW1EVFNkWmlhZDhYTFVPdFR0bWRQdVZiWnFpWUxhaHB4NHdYRHZ6ZWRKU2dySVE4MWluK3F1eWI2TTFraHlsTmw3SVNlSndlSWx6Z2Z6a0pYQ1M4WFlJZGhXOVVjdWMwb1RLOFpiaXZSQ2IwTDVyOGxRaU1jRjJjRU1JeEJzTUZOWi9JM0NabFN4dVFiUDVuY1N5emdZVE9VQ3ltYXFsMW80SFlHTzJibUd0aUU5NUVDNlFROUZ0aW9ua0JWVy9DOStWMll4aElWWC81TVZlNUxNQzNLblVKM3dOb3JKdFRYMkZVemRrQTZjTHoyTUNBeU53TWwzK3VWZ1BLYzR5MFBlY2JHR3duQVhZeEpyRVNZSkxrelBMYTJGZ01uNjNpU0tZWEVodFA5ejZZL2VLNmNvc21aYlg2Ymovck9VMlFXL3JRUnpHb2tFbExxSVZ2cHB1K28zRUN1U3RFcm1mNUxkTTZvRk0ybnE0THZFY201SVpBNTkxdWpkdFdnd1l4cWhxemhoaU5LZUVRWnFtS3V4eGhxRnhhYkNnSStMTzdYdFIrcVdxS0dKZmJyUFNjVXpVaFRtc1VLWUU3emJBdERLZldQMGcxMklKMHo1bTlKTjUvdHFURXM3VEpNYUtldjVyT00vb2hsSll0bXNDRVJPc2RjV1lINFpGbm5TTFVqM3cxN04xNm52dmtyaDlGd3JaK05aYi8vMzZEbVRTNGx2TjB0M290TlN0WU5YRHl1aG5kQ3hGYVMyUEtOOVVCTjkrcWhDWCsxaEpoUm5xaHJqSnM2a25GV0dvU1RKYWZnYmVRaUNNU005U3BHVjhsNDRuZGJBTFdZaVpNMTJTVzZxLytINnNnM2J6RVJJMHQxYUNDSDdLSnhXZTRORDdjY0EwTnNFWjVRUzNBOTBPMXk0RFV0VlhlOWFhb3Z6VU1QTmhqZUMrT0xuU01IWkVudjFkZVVSMTZIOXJsVFU3dXp0V2M3aFhEVUNGSHJjUkNjZVZmdlQ0dWh2NlZtNGVWNUJLeXBJaVFlMHhVZG91UEp4S3BieDRUZ3U2cXg1Z0kzZFpjZkorYklZNFg4dU1KWnptNGNKZHFtY0dteDRTZEwyNC8zWHdDQ3NKSGlybit2Nk9zM1hTeTc5K29oSTBLWFo4bUErQXExYU9HNkRlZEhQTGhLM0ZZd1I0RTVvS1dXJmV5Nm1DeHhPVTlGOTBLMktYenZFTWpuWnB3ND0=; cm_sub=none; _gid=GA1.2.151236533.1585075789; __cfduid=d443c3cf657a963d22e7215ce375ecdd41585150674; _routing_id="139c4683-ad8d-44b0-8196-c5a5644b15e7"; sessionFunnelEventLogged=1; bei=false'
    },
    

    form: {
      'source_url': '/pin-builder/',
      'data': `{"options":{"board_id":"${ayar.board_id}","field_set_key":"create_success","skip_pin_create_log":true,"description":"T${ayar.description}","link":"${ayar.link}","title":"${ayar.title}","image_url":"${ayar.image_url}","method":"scraped","scrape_metric":{"source":"www_url_scrape"}},"context":{}}`
    }

  };
  request(options, function (error, response) { 
    if(error){
        cb(error.body.response.error)
        console.log("HATA DÖNDÜ")
    }else{
      cb(response.body);
      console.log("DATA DÖNDÜ")
    }
  //mjö  console.log(response)
   
  });
  

}

