document.addEventListener('DOMContentLoaded', function() {
    fetch('json/text.json') // static/json ディレクトリに配置された JSON ファイルへのパス
        .then(response => response.json())
        .then(quizData => {
            // 問題文を設定
            document.getElementById('question').textContent = quizData.question;

            // 選択肢をフォームに追加
            const form = document.getElementById('choicesForm');
            quizData.choices.forEach((choice) => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.name = 'choices';
                input.value = choice;
                label.appendChild(input);
                label.append(choice);
                form.appendChild(label);
                form.appendChild(document.createElement('br'));
            });

            // 回答ボタンのイベントリスナーを設定
            document.getElementById('submitAnswer').addEventListener('click', function() {
                const selectedChoices = form.querySelectorAll('input[name="choices"]:checked');
                const selectedValues = Array.from(selectedChoices).map(choice => choice.value);
                // 選択した回答を検証する
                checkAnswers(selectedValues, quizData.answer);
            });
        })
        .catch(error => {
            console.error('Error loading quiz data:', error);
            // エラー処理をここに書く
        });
});

function checkAnswers(selectedValues, correctAnswer) {
    // 正解を確認
    if (selectedValues.includes(correctAnswer)) {
        alert('正解です！');
    } else {
        alert('不正解です。正解は ' + correctAnswer + ' です。');
    }
}
