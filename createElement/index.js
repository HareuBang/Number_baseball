// Example
const $div = document.createElement('div');

// 1. .appendChild() - 자식요소로 지정. - 인수에 요소 집어넣기(Element)

// Error
// 'h1'는 문자로 인식하기 때문에 Error (올바른 인수 값이 아니다.)
// const $div_h1 = $div.appendChild('h1')

// resolve
const $h1 = document.createElement('h1');

// 2. .document.createTextNode() - 텍스트 노드 생성
// Error
// 텍스트를 추가하는 게 아닌 노드를 생성
// $h1 = document.createTextNode('h1에 텍스트 추가하기')

// resolve
$h1_txt = document.createTextNode('h1 Text 추가');
$h1.appendChild($h1_txt);

// 속성 추가
// 1. setAttribute('속성','값');
$h1.setAttribute('style', 'color: red');
// 2. .
$h1.id = "myh1";
$h1.style.fontSize = "54px";

$div.appendChild($h1);

const $input = document.createElement('input');
// 단일 속성 부여
$input.setAttribute('required', '');
// $input.required = true;

// 속성 값 여러개 부여

// 1.
// 마지막 속성 값만 적용
// <input class="classAdd2">
// $input.setAttribute('class', 'classAdd1');
// $input.setAttribute('class', 'classAdd2');

// 2.
// .setAttribute()
// $input.setAttribute('class', 'classAdd1 classAdd2');
// .classList.add()
// $input.classList.add('classAdd1', 'classAdd2');

// 3.
// .setAttribute()
const getClasses = $input.getAttribute('class');
$input.setAttribute('class', `${getClasses} classAdd2 classAdd3`);
// .classList.add()
// $input.classList.add('classAdd2', 'classAdd3');

// .classList.add() 권장

$input.style.border = '1px solid black';
$input.style.backgroundColor = 'rgba(255, 87, 51, 0.5)';

document.body.prepend($input);

// .html body에 추가
document.body.appendChild($div);

// 숫자 야구에 사용할 table 만들기 실습
const $table = document.createElement('table');
const $tr_1 = document.createElement('tr');

const $th_1 = document.createElement('th');
$th_1.setAttribute('rowspan', 2);
const num = 9;
const count = document.createTextNode(num);
$th_1.appendChild(count);

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

$table.appendChild($tr_1);

const $tr_2 = document.createElement('tr');
const $td_1 = document.createElement('td');
const content_1 = document.createTextNode('player');
$td_1.appendChild(content_1);
$tr_2.appendChild($td_1);

const $td_2 = document.createElement('td');
const content_2 = document.createTextNode('1');
$td_2.appendChild(content_2);
$tr_2.appendChild($td_2);

const $td_3 = document.createElement('td');
const content_3 = document.createTextNode('2');
$td_3.appendChild(content_3);
$tr_2.appendChild($td_3);

const $td_4 = document.createElement('td');
const content_4 = document.createTextNode('1');
$td_4.appendChild(content_4);
$tr_2.appendChild($td_4);

$table.appendChild($tr_2);

document.body.appendChild($table);