$(document).ready(function(){
    attachClickEventToAttackButtons();
    attachClickEventToNumberButtons();
    setupCopyButton();
    setupResetButton();
    setupConseleButton();
    setupUndoButton();
    setupDeleyButton();
    setupHoldButton();
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

//コンボの後ろに文字を追加する
function appendTextToCombo(text) {
    let str = $('#combo').text();
    var deleyInput = document.getElementById('deleyinput');
    var holdInput = document.getElementById('holdinput');
    var deleycheckbox = document.getElementById('deleycheckbox');
    var jumpcheckbox = document.getElementById('jumpcheckbox');
    var holdcheckbox = document.getElementById('holdcheckbox');

    if ($('#combo').text() == '') {
        if(isJumpcheckbox()){
            $('#combo').append('J'+text);
        }else{
            $('#combo').append(text);
        }
    }else {
        if(isJumpcheckbox()){
            $('#combo').append('→J');
        }
        if(/\d$/.test(str)|isaddattackinput()|isJumpcheckbox()|isHoldcheckbox()){
            $('#combo').append(text);
        }else{
            $('#combo').append('→' + text);
        }
        if(isDeleycheckbox()){
            $('#combo').append('(dl'+ deleyInput.value +'F)');
        }
        if(isHoldcheckbox()){
            $('#combo').append('(hold'+ holdInput.value +'F)');
        }
        
    }
    deleycheckbox.checked = false;
    jumpcheckbox.checked = false;
    holdcheckbox.checked = false;
}

function setupCopyButton() {
    $('#copyButton').click(function() {
        copyTextToClipboard($('#combo').text());
        alert('コピーしました');
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
        $('#combo').text(str);
    });
}

function isaddattackinput() {
    if (document.getElementById('addattackinput').checked) {
        return true;
    } else {
        return false;
    }
}

function isDeleycheckbox() {
    if (document.getElementById('deleycheckbox').checked) {
        return true;
    } else {
        return false;
    }
}

function setupDeleyButton(){
    $('#deleyButton').click(function() {
        var numberInput = document.getElementById('deleyinput');
        console.log(numberInput.value+"F");
    });
}

function isHoldcheckbox() {
    if (document.getElementById('holdcheckbox').checked) {
        return true;
    } else {
        return false;
    }
}

function setupHoldButton(){
    $('#holdButton').click(function() {
        var numberInput = document.getElementById('holdinput');
        console.log(numberInput.value+"F");
    });
}

function isJumpcheckbox() {
    if (document.getElementById('jumpcheckbox').checked) {
        return true;
    } else {
        return false;
    }
}