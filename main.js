const $input = document.querySelector('input');
const $button = document.querySelector('button');
const $p = document.querySelector('p');

let computer = generateRandomNumber();
let count = 0;

// 컴퓨터 숫자 4자리 설정
function generateRandomNumber() {
  let randomNumbers = [];

  while(randomNumbers.length < 4){
    let num = Math.floor(Math.random() * 10);

    // 중복 숫자 판별
    if(!randomNumbers.includes(num))
      randomNumbers.push(num);
  }

  return randomNumbers;
}

// 버튼 클릭 시
$button.addEventListener('click', (event) => {
  event.preventDefault();

  let player = inputValidation($input.value);

  if(player) {
    let [ strike, ...rest ] = [...guessNumber(player)]
    
    if(strike === 4){
      resetGame("Home Run");
    } else {
      outputResult(player, [strike, ...rest]);  
    }

  } else {
    alert("중복되지 않는 네 자리 숫자를 입력해주세요.");
    $input.value = "";
    $input.focus();
  }
})

// 입력 값 검사
function inputValidation(inputValue) {
  // new Set() 중복 제거 - split().filter() 공백 제거 - 숫자 타입 변환 map()
  let inputList = [...new Set(inputValue.split('').filter(numStr => numStr !== " "))].map(Number);
  
  return inputList.length === 4 && inputList.every(num => 0 <= num && num <= 9)
    ? inputList
    : false
}

// 숫자 판별(스트라이크, 볼, 아웃)
function guessNumber(player) {
  let result = [0, 0, 0];

  player.forEach((num, idx) => {
    let guess = computer.indexOf(num);
    
    if(guess === -1)
      result[2]++;
    else if(guess !== idx)
      result[1]++;
    else
      result[0]++;
  })

  return result;
}

// 결과 출력
function outputResult(player, [strike, ball, out]) {
  if(count <= 10){
    ++count;
    $input.value = ""

    // table
    const $table = document.createElement('table');
    // th를 담을 tr
    const $tr_1 = document.createElement('tr');

    const $th_1 = document.createElement('th');
    $th_1.setAttribute('rowspan', 2);
    const countTxt = document.createTextNode(count);
    $th_1.appendChild(countTxt);

    $tr_1.appendChild($th_1);

    const $th_2 = document.createElement('th');
    const title_1 = document.createTextNode('Player');
    $th_2.appendChild(title_1);
    $tr_1.appendChild($th_2);

    const $th_3 = document.createElement('th');
    const title_2 = document.createTextNode('Strike');
    $th_3.style.color = "yellow";
    $th_3.appendChild(title_2);
    $tr_1.appendChild($th_3);

    const $th_4 = document.createElement('th');
    const title_3 = document.createTextNode('Ball');
    $th_4.style.color = "green";
    $th_4.appendChild(title_3);
    $tr_1.appendChild($th_4);

    const $th_5 = document.createElement('th');
    const title_4 = document.createTextNode('Out');
    $th_5.style.color = "red";
    $th_5.appendChild(title_4);
    $tr_1.appendChild($th_5);

    // table에 tr 담기
    $table.appendChild($tr_1);
    // td를 담을 tr
    const $tr_2 = document.createElement('tr');

    const $td_1 = document.createElement('td');
    const content_1 = document.createTextNode(player.join(''));
    $td_1.appendChild(content_1);
    $tr_2.appendChild($td_1);

    const $td_2 = document.createElement('td');
    const content_2 = document.createTextNode(strike);
    $td_2.appendChild(content_2);
    $tr_2.appendChild($td_2);

    const $td_3 = document.createElement('td');
    const content_3 = document.createTextNode(ball);
    $td_3.appendChild(content_3);
    $tr_2.appendChild($td_3);

    const $td_4 = document.createElement('td');
    const content_4 = document.createTextNode(out);
    $td_4.appendChild(content_4);
    $tr_2.appendChild($td_4);

    $table.appendChild($tr_2);

    // <div id="result"><p></p></table>
    const $result = document.querySelector('#result p');
    $result.appendChild($table);

    if(count === 10)
      resetGame("Computer Win");
  }
}

// 게임 초기화
function resetGame(message) {
  $p.innerHTML += `!! ${message} !! <br/>게임을 다시 시작합니다.`
  setTimeout(() => {
    $input.value = "";
    $input.focus();
    $p.innerHTML = "";
    computer = generateRandomNumber();
    count = 0;
  }, 1500)
}