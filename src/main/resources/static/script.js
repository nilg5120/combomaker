$(document).ready(function(){
    attachClickEventToAttackButtons();
    setupCopyButton();
});

function attachClickEventToAttackButtons() {
    $('.attack').click(function() {
        var buttonText = $(this).text();
        appendTextToCombo(buttonText);
    });
}

function appendTextToCombo(text) {
    $('#combo').append(text + ' ');
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
