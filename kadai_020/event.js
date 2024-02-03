const addBtn = document.getElementById('btn');
const 　h2Text = document.getElementById('text');

// クリックされた時
addBtn.addEventListener('click', () => {
// h2のテキストを変更する
　h2Text.textContent = 'ボタンをクリックしました'
});