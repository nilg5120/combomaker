$(document).ready(function(){
    attachClickEventToAttackButtons();
    setupCopyButton();
    setupDeleteButton();
    setupconseleButton();
});

function attachClickEventToAttackButtons() {
    $('.attack').click(function() {
        var buttonText = $(this).text();
        appendTextToCombo(buttonText);
    });
}

function appendTextToCombo(text) {
    if ($('#combo').text() == '') {
        $('#combo').append(text);
    }else {
        $('#combo').append('→' + text);
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

function setupDeleteButton() {
    $('#deleteButton').click(function() {
        $('#combo').text('');
    });
}

function setupconseleButton() {
    $('#consoleButton').click(function() {
        console.log($('#combo').text());
    });
}