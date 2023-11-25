$('.bold').click(function() {
    document.execCommand('bold', true, null)
})

$('.underline').click(function() {
    document.execCommand('underline', true, null)
})

$('.italic').click(function() {
    document.execCommand('italic', true, null)
})

$('.font-color').click(function() {
    var highlight = window.getSelection();
    console.log(highlight)
    var span = '<span style="color: red">' + highlight + '</span>';
    var text = $('#editor').html();
    $('#editor').html(text.replace(highlight, span));
})

$('.left').click(function() {
    $('#editor').css('text-align', 'left')
});

$('.right').click(function() {
    $('#editor').css('text-align', 'right')
})

$('.center').click(function() {
    $('#editor').css('text-align', 'center')
})

$('.justify').click(function() {
    $('#editor').css('text-align', 'justify')
})

let contentHistory = [''];
let currentStep = 0;

$('.undo').click(function() {
    if (currentStep > 0) {
        currentStep--;
        if(contentHistory[currentStep] !== undefined) {
            document.getElementById('editor').innerHTML = contentHistory[currentStep];
        }
    }
})

$('.redo').click(function() {
    if (currentStep > 0) {
        currentStep++;
        if(contentHistory[currentStep] !== undefined) {
            document.getElementById('editor').innerHTML = contentHistory[currentStep]
        }
    }
})

// Save the previous text editor state
function savePrevState() {
    currentStep++;
    if (currentStep < contentHistory.length) {
        contentHistory = contentHistory.slice(0, currentStep);
    }
    contentHistory.push(document.getElementById('editor').innerHTML);
}

// Listen for content changes in the text editor.
$('#editor').on('input', function() {
    savePrevState()
});
