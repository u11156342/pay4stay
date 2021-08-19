


$(document).ready(function() {
$("form").submit(function(e){

e.preventDefault(e);


let jsonGuestHouseFormData =  $('form').serializeArray();

let captcha = jsonGuestHouseFormData[7].value;

if(captcha === '') {
alert("Please complete captcha.");
return;
}

let name = jsonGuestHouseFormData[0].value;
let picture1 = jsonGuestHouseFormData[1].value;
let picture2 = jsonGuestHouseFormData[2].value;
let picture3 = jsonGuestHouseFormData[3].value;
let lat = jsonGuestHouseFormData[4].value;
let lng = jsonGuestHouseFormData[5].value;
let website = jsonGuestHouseFormData[6].value;

let jsonGuestHouse = {
'name': name,
'picture1': picture1,
'picture2': picture2,
'picture3': picture3,
'website': website,
'lat':lat,
'lng':lng,
'captcha': captcha
}


const params = { "secret":'poop123lol)()**',"httpMethod":"POST", "Item": jsonGuestHouse}
console.log(JSON.stringify(params));
$.ajax({
  type: 'POST',
  url: "https://6tle7z739h.execute-api.eu-west-1.amazonaws.com/default/lambda-guesthousestorage",
  data: JSON.stringify(params),
  success: alert("Success, you can close this window!")
});

});
});




