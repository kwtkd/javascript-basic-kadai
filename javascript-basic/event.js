// output-btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click',() =>{
  console.log('ThankYou！');
});


// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
// li要素を新しく作成する
const childList = document.createElement('li');

//作成したli要素に「これはリスト要素です」というテキストを追加する
childList.textContent = 'ThankYou!×2';

// 作成したli要素をul要素の子要素として末尾に追加する
parentList.appendChild(childList);
});

// count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');
// 「文字数のカウント」ボタンをクリックしたとき
countBtn.addEventListener('click',() =>{
  // テキストボックスに入力された文字列を取得
const text = document.forms.textForm.textBox.value;
 // 取得した文字列の文字数を出力する
 console.log(text.length + '文字');
});


// os-btnというidを持つHTML要素を取得し、定数に代入する
const areBth = document.getElementById('area-btn');
// HTML要素がクリックされたときに
areBth.addEventListener('click' , () => {
// 選択されたラジオボタンの値を取得する
const area = document.forms.areaForm.area.value;
// 取得した値を出力する
console.log(area);
});



const cityBtn = document.getElementById('city-btn');
// HTML要素がクリックされたときに
cityBtn.addEventListener('click' , () => {
// 全てのチェックボックスを配列風のデータで取得
 const items = document.forms.cityForm.city;
// 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する
for(let i =0; i < items.length; i++){
  if(items[i].checked ){
    console.log(items[i].value);
  }
}
});

