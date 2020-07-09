'use strict'

// 出題するワードをインポート
const words = [
  'class',
  'pencil',
  'pen',
  'desk',
  'bag',
  'notebook',
  'homework',
  'diary',
  'window',
  'book',
  'chair',
  'door',
  'piano',
  'guitar',
  'house',
  'room',
  'kitchen',
  'cup',
  'glass',
  'bed',
  'floor',
  'table',
  'picture',
  'pot',
  'subject',
  'english',
  'math',
  'science',
  'body',
  'head',
  'eye',
  'nose',
  'mouth',
  'hand',
  'finger',
  'foot',
  'sports',
  'basketball',
  'baseball',
  'tennis',
  'mitt',
  'bat',
  'racket',
  'boat',
  'food',
  'bread',
  'rice',
  'egg',
  'fruit',
  'orange',
  'apple',
  'lemon',
  'cake',
  'milk',
  'animal',
  'dog',
  'cat',
  'bird',
  'sheep',
  'cow',
  'monkey',
  'bus',
  'bicycle',
  'car',
  'train',
  'plane',
  'fish',
  'flower',
  'girl',
  'boy',
  'father',
  'mother',
  'parent',
  'brother',
  'sister',
  'son',
  'daughter',
  'family',
  'friend',
  'woman',
  'man',
  'aunt',
  'uncle',
  'citizen',
  'nurse',
  'doctor',
  'pilot',
  'cook',
  'singer',
  'clerk',
  'student',
  'teacher',
  'player',
  'way',
  'right',
  'left',
  'north',
  'south',
  'east',
  'west',
  'country',
  'japan',
  'america',
  'china',
  'india',
  'city',
  'church',
  'town',
  'village',
  'station',
  'place',
  'wall',
  'gate',
  'yard',
  'field',
  'bank',
  'library',
  'hospital',
  'hotel',
  'office',
  'store',
  'garden',
  'park',
  'box',
  'letter',
  'watch',
  'tape',
  'cap',
  'mail',
  'stamp',
  'doll',
  'tree',
  'map',
  'camera',
  'present',
  'chance',
  'age',
  'half',
  'number',
  'line',
  'danger',
  'meter',
  'thing',
  'name',
  'walk',
  'work',
  'season',
  'spring',
  'summer',
  'autumn',
  'fall',
  'winter',
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'minute',
  'hour',
  'day',
  'week',
  'month',
  'year',
  'look',
  'read',
  'drink',
  'walk',
  'wash',
  'run',
  'stop',
  'have',
  'have',
  'wait',
  'collect',
  'send',
  'come',
  'want',
  'do',
  'make',
  'ride',
  'enjoy',
  'play',
  'sing',
  'speak',
  'cook',
  'swim',
  'write',
  'catch',
  'open',
  'move',
  'help',
  'buy',
  'leave',
  'meet',
  'live',
  'work',
  'go',
  'know',
  'study',
  'eat',
  'learn',
  'stand',
  'dance',
  'sell',
  'arrive',
  'get',
  'put',
  'stay',
  'try',
  'give',
  'use',
  'visit',
  'need',
  'happy',
  'poor',
  'rich',
  'kind',
  'honest',
  'easy',
  'good',
  'best',
  'nice',
  'bad',
  'clean',
  'busy',
  'large',
  'tall',
  'high',
  'fast',
  'early',
  'slow',
  'long',
  'short',
  'warm',
  'hot',
  'cool',
  'cold',
  'new',
  'old',
  'young',
  'junior',
  'little',
  'big',
  'small',
  'dark',
  'careful',
  'hungry',
  'ill',
  'sick',
  'white',
  'black',
  'blue',
  'red',
  'green',
  'strong',
  'fine',
  'famous',
  'glad',
  'beautiful',
  'next',
  'sad',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
  'hundred',
  'always',
  'sometimes',
  'often',
  'again',
  'far',
  'here',
  'very',
  'how',
  'too',
  'no',
  'who',
  'what',
  'which',
  'whose',
  'later',
  'soon',
  'yesterday',
  'already',
  'up',
  'there',
  'well',
  'so',
  'slowly',
  'yet',
  'why',
  'much',
  'every',
  'many',
  'sorry',
  'usually',
  'today',
  'fast',
  'now',
  'ago',
  'where',
  'home',
  'much',
  'yes',
  'also',
  'not',
  'together',
  'some',
  'early',
  'both',
  'all',
  'most',
  'my',
  'me',
  'mine',
  'you',
  'your',
  'you',
  'yours',
  'he',
  'his',
  'him',
  'his',
  'she',
  'her',
  'her',
  'hers',
  'its',
  'it',
  'we',
  'our',
  'us',
  'ours',
  'they',
  'their',
  'them',
  'theirs',
  'myself',
  'yourself',
  'himself',
  'herself',
  'itself',
  'ourselves',
  'themselves',
  'this',
  'that',
  'these',
  'those',
  'everyone',
  'someone',
  'something',
  'nobody',
  'none',
  'everything',
  'everybody',
  'nothing',
];

// 設定したワードをランダムに選択する
let word = words[Math.floor(Math.random() * words.length)];

// 初期値
let loc;
let score;
let miss;

// タイムリミットを設定する
const timeLimit = 30 * 1000;

let startTime;
let isPlaying = false;

const target = document.getElementById('target');
const scoreLabel = document.getElementById('score');
const missLabel = document.getElementById('miss');
const timerLabel = document.getElementById('timer');
const scoreDisplay = document.getElementById('scoreDisplay');
const missDisplay = document.getElementById('missDisplay');
const accuracyDisplay = document.getElementById('accuracyDisplay');
const modalWrapper = document.getElementById('modalWrapper');

// 戻るボタン
document.getElementById('btn').addEventListener('click', () => {
  // スコア画面を非表示
  modalWrapper.style.display = 'none'

  // アイドリング用に初期値リセット
  score = 0;
  miss = 0;

  scoreLabel.textContent = score;
  missLabel.textContent = miss;

  isPlaying = false;
  
});

// タイピングされた文字が合っていれば _ で伏せる
function updateTarget() {
  let placeholder = ' ';
  for (let i = 0; i < loc; i++) {
    placeholder += '_';
  }
  target.textContent = placeholder + word.substring(loc);
}

// タイムリミットをカウントする
function updateTimer() {
  const timeLeft = startTime + timeLimit - Date.now();
  timerLabel.textContent = (timeLeft / 1000).toFixed(2);

  const timeoutId = setTimeout(() => {
    updateTimer();
  }, 10);

  if (timeLeft < 20 * 1000) {
    timerLabel.style.color = '#ffd700'
  }

  if (timeLeft < 10 * 1000) {
    timerLabel.style.color = '#FF5500'
  }

  // タイムアップ(ゲーム終了)
  if (timeLeft < 0) {
    isPlaying = false;

    clearTimeout(timeoutId);
    timerLabel.textContent = '0.00';
    timerLabel.style.color = '#ccc'
    setTimeout(()=> {
      showResult();
    }, 100);

    // タイムアップ後 表示タイトル
    target.textContent = 'Enter to replay!';
  }
}

// スコアを表示する
function showResult() {
  // 正解率を計算
  const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
  
  // スコア画面を表示
  modalWrapper.style.display = 'block'

  // スコアを出力
  scoreDisplay.textContent = `${score} Types`
  missDisplay.textContent = `${miss} Misses`
  accuracyDisplay.textContent = `${accuracy.toFixed(0)}% ACU!`

  isPlaying = true;  

}

// ゲームスタート
window.addEventListener('keydown', e => {
  if (e.keyCode === 13) { //エンターキーは13番目のキー
    
    // ゲーム中であれば下記は実行しない
    if (isPlaying === true) {
      return;
    }

    isPlaying = true;

    // 再プレイ用に初期値リセット
    loc = 0;
    score = 0;
    // エンターキーをカウントするので、-1にしておく
    miss = -1;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];

    target.textContent = word;
    startTime = Date.now();
    updateTimer();
  }
});

// 入力された値が合っているか、を処理
window.addEventListener('keydown', e => {

  // ゲーム中であれば下記は実行しない
  if (isPlaying !== true) {
    return;
  }

  if (e.key === word[loc]) {
    // 入力された値が合っている場合の処理
    loc++;
    // 出題されたワードの値をすべて打ち終えたら、次を出題する処理
    if (loc === word.length) {
      word = words[Math.floor(Math.random() * words.length)];
      loc = 0;
    }
    updateTarget();
    // 正解の数値を足す
    score++;
    scoreLabel.textContent = score;
  } else { 
    // 入力された値が間違っている場合の処理
    // ミスの数値を足す
    miss++;
    missLabel.textContent = miss;
  }
});
