window.onload = function() {
    updatePercentageTextOnly();
    updateresult();
};

function addSlider() {
    var sliderContainer = document.createElement('div');
    var slidername = document.createElement('input');
    var slider = document.createElement('input');
    var amount = document.createElement('input');
    var percentageText = document.createElement('span');

    // スライダーの設定
    slider.type = 'range';
    slider.name = 'slider';
    slider.min = '0';
    slider.max = '100';
    slider.value = '50';

    // slidernameの設定

    slidername.type = 'text';

    //amountの設定
    amount.type = 'number';
    amount.name = 'amount';
    amount.min = '0';
    amount.max = '12000';
    amount.value = '50';



    // スライダーの値が変更されたときの処理
    slider.oninput = function() {
        updatePercentageTextOnly();
        updateresult();
        console.log('Slider value changed:', slider.value);
    };

    // 初期テキストを設定
    percentageText.textContent = '初期テキスト'; // この行を追加

    // 要素の配置

    sliderContainer.appendChild(slidername);
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(amount);
    sliderContainer.appendChild(percentageText);

    document.getElementById('sliders').appendChild(sliderContainer);

    updatePercentageTextOnly();
}

function removeSlider() {
    var sliders = document.getElementsByName('slider');
    var sliderContainer = sliders[sliders.length - 1].parentNode;
    sliderContainer.parentNode.removeChild(sliderContainer);

    updatePercentageTextOnly();
}

function updatePercentageTextOnly() {
    var sliders = document.getElementsByName('slider');
    var totalValue = 0;

    // 全スライダーの合計値を計算
    for (var i = 0; i < sliders.length; i++) {
        totalValue += parseInt(sliders[i].value, 10);
    }

    // 各スライダーの割合を計算して更新
    for (var i = 0; i < sliders.length; i++) {
        var slider = sliders[i];
        var value = parseInt(slider.value, 10);
        var percentageOfTotal = totalValue > 0 ? (value / totalValue) * 100 : 0;

        // スライダーの次の要素が percentageText か確認
        var percentageTextElement = slider.nextSibling;
        while (percentageTextElement && percentageTextElement.nodeType !== 1) {
            percentageTextElement = percentageTextElement.nextSibling;
        }

        if (percentageTextElement && percentageTextElement.tagName === 'SPAN') {
            percentageTextElement.textContent = ` (${percentageOfTotal.toFixed(2)}% of total)`;
        } else {
            console.error('Cannot find the element to update the percentage text.');
        }
    }
}




function updateresult() {
    var sliderContainers = document.getElementById('sliders').children;
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = ''; // 既存の結果をクリア

    for (var i = 0; i < sliderContainers.length; i++) {
        var sliderContainer = sliderContainers[i];
        var slidername = sliderContainer.children[0].value; // slidernameの取得
        var percentageText = sliderContainer.children[3].textContent; // percentageTextの取得

        var resultText = document.createElement('p');
        resultText.textContent = slidername + ": " + percentageText;
        resultText.style.color = 'red';
        resultContainer.appendChild(resultText);
    }
}