var $jq = jQuery.noConflict();

$jq( document ).ready(function() {
    setTimeout(carregar, 100);
});


function carregar() {
 $jq("#mockup").addClass( "newClass", 3000);
 $jq("#mockup10").addClass("newClass", 3000);

 $jq("#text-topo").addClass("newClass2", 2000)
 $jq("#text-topo2").addClass("newClass3", 2000)

 
 
};

