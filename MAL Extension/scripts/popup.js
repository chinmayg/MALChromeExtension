var url = "http://www.myanimelist.net/malappinfo.php?u=crimsonchin&status=all&type=anime";
var data = {"user-agent": ""}

$.get(url, data)
  .done(function( data ) {
    console.log( data );
});

$(document).ready(function() {
    $('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});