var $jq = jQuery.noConflict();

$jq( document ).ready(function() {
    setTimeout(carregar, 100);
});


function carregar() {
 $jq("#mockup").addClass( "newClass", 3000);
 $jq("#mockup10").addClass("newClass", 3000);

 $jq("#text-topo").addClass("newClass2", 2000);
 $jq("#text-topo2").addClass("newClass3", 2000);

 
 
};

function radioChecked() {

 $jq("#cid_21").removeClass("hidden", 1000);
 $jq("#cid_21").addClass("show", 1000);
}

function radioUnchecked() {

    $jq("#cid_21").removeClass("show", 1000);
    $jq("#cid_21").addClass("hidden", 1000);
    
}


var popover = new bootstrap.Popover(document.querySelector('.details-button'), {
    container: 'body'
  })



