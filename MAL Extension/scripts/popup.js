var urls = "http://www.myanimelist.net/malappinfo.php?u=crimsonchin&status=all&type=anime";
var datas = {"user-agent": ""}

$.get(url, data)
  .done(function( data ) {
    console.log( data );
});