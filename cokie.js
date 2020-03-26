var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://tr.pinterest.com/resource/BoardResource/create/',
  'headers': {
    'authority': 'tr.pinterest.com',
    'x-pinterest-appstate': 'active',
    'x-app-version': 'dc9cb39',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36',
    'content-type': 'application/x-www-form-urlencoded',
    'accept': 'application/json, text/javascript, */*, q=0.01',
    'sec-fetch-dest': 'empty',
    'x-requested-with': 'XMLHttpRequest',
    'x-csrftoken': 'hXCiaH4awo3yf0VVfSNRgNm4kcIhB5AG',
    'dnt': '1',
    'origin': 'https://tr.pinterest.com',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'referer': 'https://tr.pinterest.com/',
    'accept-language': 'en,tr-TR;q=0.9,tr;q=0.8,en-US;q=0.7,de;q=0.6,am;q=0.5',
    'cookie': '_b="AUBO6GPfjjFAc4UVLCjAyw6O8E/Q94FtmLPTrYgP6jIMhhcbpCKW7OVwctU1Ez2Z8Wo="; G_ENABLED_IDPS=google; _ga=GA1.2.412696451.1560167730; _derived_epik=dj0yJnU9NEV5bGxGdVJycTE4VjJ0UjUtZHpRWnY0M0Y5LWNQMnMmbj1kZlpvUF9NXzlLZS1fNldoU1R4bmlBJm09MSZ0PUFBQUFBRnotU2hB; _auth=1; _gcl_au=1.1.286799845.1573762752; ajs_user_id=null; ajs_group_id=null; ajs_anonymous_id=%224b3c124b-58ce-41e9-9c11-cca7dc7cc9b3%22; csrftoken=hXCiaH4awo3yf0VVfSNRgNm4kcIhB5AG; _pinterest_sess=TWc9PSY3SDhqeXcxaFp1UUNaZTFSYnpCeFVucUVXa0toMk9WaHhPUnhZVlk2Qk5QTXF0eVc1UmVkVnQ1bkw3Uys0N3BRUWc4RUVVWVc2U2NDbEhWeWxLa0hKUWtXZ2hPajNVL1lKaTdTQko2K2VEb1VYamRmV0U1OWoyMHZEUXMrc1ZId3gwV1pjYnA5cnN2TzZlekc3RjhQdnU5c3lDRTRraWJVaE9kR01ERmU4cDF6empsdWExdFgwZThQYXNPYStXL2NXMGd3bzhiZnVrV2ZGanV6VTdleGY4T1JjUk9iOUc2MEx0QXh1U1RUME9LaDhxWnhjaGFYYkxSaExwbW5FdUdweCtrWitmQlhsV1JqSW9BY0NjT0hJZExtQ05JTnVXVWhhL1JhNC9zK2FNNUNqQXpVLzIyNDdTVExPaXVKU29ubzVrWVNoR2ttSkRCbEhOQy9aVnlubUxtZnh2RllhZklwaHR2d0VOaytSTmJrTVNTTFpWQVhoSVBQei9XUDVYY3hYWXIwQ1BXdVdZcDdGVm5WWmpKMnZ3NXpWeVZ0Rk50aW5HTTdaVmR1bjJiN0JKZkhmdTBtQ2JHMUZES1RWbm4rTUxZc2h2ejhIaUY3VXZzbU1IYy94bmNEZFRTQUV4SzJ0NnhDL0pnWlk5N1RZYy9EYi80TFcrQTVRU1lJdjFScFkzRmNyVWFaZ0FsZkIyODNTempndDlsWnIwMHBUZUhCYTduL3o1dUZwTWdwdFphWXhBOEpUVDMyM2YzV1VPVTdXd2lTNG9Fcm9hSXFFajliOGQ2b3FPelE2c1NKMGkrQi9pQ1NvejFsNTF6andEbGh1RlVyQ1VZTFg2eTlodGhoKy9Na1V4SXRUaDJ0dHZmQlJubkc1NFhCbmFGNU5wdGRLdWJrYnZmeHp5TkpnQUQ1SUQ4M0J4UmxsYlVqVHlLV2xTaHZHVDhCWEdtdERiaEFmeGM0bDM5UEdlYnBJUW9uMU5TWXM4TGYwbUQyclhxWmM5bUZCdVdFc3ArNmh5R1ZHTDRiUk40WTZRd0VKTW5Pb3RYa2ovSzgvUmV6Q1QwM1ZjaXZSczlSRXZxbUczdm9CQnowN3ZNcWZZOTZySVVnbDZMdTh1OWJVVVpjaWhVdVB0WnFMMGtRdjZFdmpsVVVUdnF0QXl1VWlQbE9KSG9va1hwN2VyaXlUUmZyUlArMTBxeDYyVkwwOWxzUG01OTNtdk1nUHhFcUI0ZVU5MGtHcmFWdFluQmxsRFgzN2psSzExOWNTaXFzZDNUWStyT2JQYTdPdEdEUWtRTDVGNmNTV2tsMEh4bGQ3dXlMY0J5OVdiZVBkS3hKSGlJM1RiUEdEenowcWdWa010OXlJMGRpSS9URmwwL1ZzTWlqOTFvNUF5MHZqOGlVdkwyaUpYV3RqTFJNaHRpMHZwbVphQWFLcStmOElwSGl6dW5hdUs1Q0RJWXptdGFzMFhDcFJ5cytLaXl4dXcyVzQwTDBHSnVoU3ZnUE83dmYvZSsxRFFJMlNNQU1DV1gvdzgyZWhTbmVISEl5c1NKNUVEc2plWTRmVmx3dTRpS1ZLYnk0STgvYWJaeFRTOUJzOWFUMk1wTS85N3FMOUcxTUhrL2xkMHh6RWp5dnJpcHk5YmpMN3dlV1o2YUxZWFhGZ0ExSEs1SUQ3cFl6d2lvQXhZdlorYVZFeUdSdnlXcFZMSm5ka0xvOUd1UlBEZnVwY2U0bitxaE5pN2tNRyt5OFhxZE04MHFOd1Z0YTl6ZDBlODVsTW1QdGFneDl5NnVqcmN4aFhzbTk5S2hZeEdXWjd2V0poOFViQmIrcEk1eEJKNmVQVFoxZEJUVHNnZXNPMEQvK0IvaStHcDVQK1hVNjY4bFFaanlEWEloMitWdzZWRkNtR1FSZWt6ZzBDc3V0aW9YMGlFZTdtendvQW9ORitLdi9NUUdrTkNQY3ZaVlJvRmlrZ2ZIVnB0OVJnejRhTWZTeHd3dmVMaEgwRFF1QVA1MGpLdTgzZUhxbEFMUG9EUHJiamdWNEs3ek4zT0p4Z0Q4Yjh6Q0lpN1EzTmpta1BzRXhmNWpTU1AzdDhnPT0mb1VMeXJSekFCQ0pob25CUzBHU2NTZkRENk1vPQ==; __cfduid=d20ba4d8286d3dc5af9b353669f158c011580750650; cm_sub=none; _pinterest_referrer=http://admin.realtimeweb.net/wa-pin/?part=pinterest&alt=hesap&id=71; _routing_id="bd84bd37-ed18-407b-8e5a-fad333b1ae54"; sessionFunnelEventLogged=1; bei=true'
  },
  form: {
    'source_url': '/erbulutcom/boards/',
    'data': '{"options":{"name":"REZEPTE","description":" Lass dich inspirieren – über 330.000 Back- und Kochrezepte wollen nachgekocht werden! Mach mit und werde Teil der Chefkoch-Community!","category":"other","privacy":"public","collab_board_email":true,"collaborator_invites_enabled":false,"event_date":null,"event_start_date":null},"context":{"advertiser":{"id":"549760073351","owner_user_id":"644577902826023195","name":"Erbulut pin","country":10,"currency":4,"currency_code":"EUR","billing_type":null,"created_time":1576181696,"accepted_tos":[9],"has_valid_billing_profile":false,"has_business_address":null,"status":null,"segment_metadata":null,"inactive_advertisers":[],"actions":[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78],"is_sterling_prod":false,"ad_groups_enabled":true,"bulk_v2_shopping_enabled":true,"shopping_retargeting_eligibility":false,"ocpm_conversion_window_enabled":false,"landing_page_view_enabled":false,"offline_conversion_ga_enabled":false,"offline_conversion_report_center_enabled":false,"household_conversion_reporting_enabled":false,"shopify_organic_attribution_enabled":false,"enable_shopping_reporting":false,"enable_sterling_gdpr_modal":true,"enable_loi_sapin_modal":false}}}'
  }
};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response);
});
