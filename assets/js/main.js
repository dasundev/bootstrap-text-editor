let contentHistory = [];
let currentStep = 0;

function bold() {
    document.execCommand('bold', true, null)
}

function underline() {
    document.execCommand('underline', true, null)
}

function italic() {
    document.execCommand('italic', true, null)
}

$('.font-color').click(function(){
    var highlight = window.getSelection();
    console.log(highlight)
    var span = '<span style="color: red">' + highlight + '</span>';
    var text = $('#editor').html();
    $('#editor').html(text.replace(highlight, span));
});
