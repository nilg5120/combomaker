$(document).ready(function(){
    attachClickEventToAttackButtons();
    attachClickEventToNumberButtons();
    setupCopyButton();
    setupResetButton();
    setupConsoleButton();
    setupUndoButton();
    setupDeleyButton();
    setupTCcheckbox();
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
        if(/\d$/.test(str)|isAddAttackInput()|isJumpcheckbox()|isHoldcheckbox()){
            $('#combo').append(text);
        }else if(isTCcheckbox()){
            if(isLastCharacterkakko(str)){
                $('#combo').append(text);
            }else{
                $('#combo').append('.'+text);
            }
        }else if(isDeleyCheckbox()){
            $('#combo').append('(dl'+ deleyInput.value +'F)');
        }else if(isHoldcheckbox()){
            $('#combo').append('(hold'+ holdInput.value +'F)');
        }else{
        $('#combo').append('→' + text);
        }
    }
    document.getElementById('deleycheckbox').checked = false;
    document.getElementById('jumpcheckbox').checked = false;
    document.getElementById('holdcheckbox').checked = false;
}

function setupCopyButton() {
    $('#copyButton').click(function() {
        copyTextToClipboard($('#combo').text());
        alert('コピーしました');
    });
}

function isLastCharacterkakko(text) {
    if (text.length === 0) {
        return false; // 空のテキストの場合、falseを返す
    }

    return text.slice(-1) === "["; // 最後の文字が "[" かどうかを判断
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

function setupConsoleButton() {
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

function isAddAttackInput() {
    if (document.getElementById('addattackinput').checked) {
        return true;
    } else {
        return false;
    }
}

function isDeleyCheckbox() {
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

function isJumpcheckbox() {
    if (document.getElementById('jumpcheckbox').checked) {
        return true;
    } else {
        return false;
    }
}

function isTCcheckbox(){
    if (document.getElementById('TCcheckbox').checked) {
        console.log('TCON');
        return true;
    } else {
        return false;
    }
}

function setupTCcheckbox(){
    document.getElementById('TCcheckbox').addEventListener('change', function() {
        if (this.checked) {
            $('#combo').append('[');
            console.log('TCチェックボックスはチェックされています。');
        } else {
            $('#combo').append(']');
            console.log('TCチェックボックスはチェックされていません。');
        }
    });
    
}