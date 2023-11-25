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

let contentHistory = [''];
let currentStep = 0;

$('.undo').click(function(){
    if (currentStep > 0) {
        currentStep--;
        if(contentHistory[currentStep] !== undefined) {
            document.getElementById('editor').innerHTML = contentHistory[currentStep];
        }
    }
});

$('.redo').click(function(){
    if (currentStep > 0) {
        currentStep++;
        if(contentHistory[currentStep] !== undefined) {
            document.getElementById('editor').innerHTML = contentHistory[currentStep]
        }
    }
});

function savePrevState() {
    currentStep++;
    if (currentStep < contentHistory.length) {
        contentHistory = contentHistory.slice(0, currentStep);
    }
    contentHistory.push(document.getElementById('editor').innerHTML);
}

$('#editor').on('input', function(){
  savePrevState()
})
