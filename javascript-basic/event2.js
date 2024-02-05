// count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');

// HTML要素がクリックされたときにイベント処理を実行する
countBtn.addEventListener('click', () => {
    // テキストボックスに入力された文字列を取得する
    const text = document.getElementById('textbox').value;
    // 取得した文字列の文字数を出力する
    console.log(text.length + '文字');
});

