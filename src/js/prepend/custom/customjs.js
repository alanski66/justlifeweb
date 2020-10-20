var passEmail = null;
var amount = null;
var chimpEmail = null;

$('input.pass-email').keyup(function () {
    // $chimpEmail = ($(this).val());
    chimpEmail = this.value;
    console.log("chimpEmail =" + chimpEmail);
    updateChimpEmailValue(chimpEmail);
});

function updateChimpEmailValue(chimpEmail){
    console.log("chimpupdate func");
    $target = $('input#mce-EMAIL');
    console.log($target);
    $('#mce-EMAIL').val(chimpEmail);
}

//trigger subscribe modal if return hit on email input
$("form.chimpy").submit(function(e){
    $('#subscribeModal').modal('show');
    return false;
});


