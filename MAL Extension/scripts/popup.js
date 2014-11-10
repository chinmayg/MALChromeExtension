var urls = "http://www.myanimelist.net/malappinfo.php?u=crimsonchin&status=all&type=anime";
var datas = {"user-agent": "api-indiv-03B3BF951E621622BA9392811286D510"}

$.get(url, data)
  .done(function( data ) {
    console.log( data );
});