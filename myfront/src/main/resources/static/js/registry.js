$(document).ready(function(){
    $("#default-public-button").show();
    $("#default-private-button").hide();
    $("#public-button").hide();
    $("#private-button").hide();
});

function choice_button() {
    $("#default-public-button").hide();
    $("#default-private-button").hide();
    $("#public-button").show();
    $("#private-button").show();
}
function public_check() {
    $("#default-public-button").show();
    $("#default-private-button").hide();
    $("#public-button").hide();
    $("#private-button").hide();
}

function private_check() {
    $("#default-public-button").hide();
    $("#default-private-button").show();
    $("#public-button").hide();
    $("#private-button").hide();
}