$(document).ready(function(){
    attachClickEventToAttackButtons();
    attachClickEventToNumberButtons();
    setupCopyButton();
    setupResetButton();
    setupConseleButton();
    setupUndoButton();
});

function attachClickEventToAttackButtons() {
    $('.attack').click(function() {
        var buttonText = $(this).text();
        appendTextToCombo(buttonText);
    });
}

function attachClickEventToNumberButtons() {
    $('.number').click(function() {
        var buttonText = $(this).text();
        appendTextToCombo(buttonText);
    });
}

function isLastCharacterDigit(str) {
    return /\d$/.test(str);
}

function appendTextToCombo(text) {
    let str = $('#combo').text();
    if ($('#combo').text() == '') {
        $('#combo').append(text);
    }else {
        if(isLastCharacterDigit(str)){
            $('#combo').append(text);
        }else{
            $('#combo').append('→' + text);
        }
    }
}

function setupCopyButton() {
    $('#copyButton').click(function() {
        copyTextToClipboard($('#combo').text());
    });
}

function copyTextToClipboard(text) {
    var temp = $('<textarea>');
    $('body').append(temp);
    temp.val(text).select();
    document.execCommand('copy');
    temp.remove();
}

function setupResetButton() {
    $('#resetButton').click(function() {
        $('#combo').text('');
    });
}

function setupConseleButton() {
    $('#consoleButton').click(function() {

        console.log($('#combo').text());
    });
}

function setupUndoButton() {
    $('#undoButton').click(function() {
        let str = $('#combo').text();
        const index = str.lastIndexOf('→');
        str = str.substring(0, index);
        //console.log(str);
        $('#combo').text(str);
    });
}
