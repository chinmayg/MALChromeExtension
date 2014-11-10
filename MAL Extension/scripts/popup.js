var url = "http://www.myanimelist.net/malappinfo.php?u=crimsonchin&status=all&type=anime";
var data = {"user-agent": ""}

$.get(url, data)
  .done(function( data ) {
    console.log( data );
});