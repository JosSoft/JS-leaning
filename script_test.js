let hi = document.querySelector('.hi h1');

console.log(`hi.innerHTML = ${hi.innerHTML}`);
console.log(`hi.textContent = ${hi.textContent}`);

let li = document.querySelectorAll('li');
console.log(li.length);
//<li>УИК №123 (222) - что-то/</li>
//li[2].innerHTML = 'УИК <b>№555</b> (333) - то-то!'
//li[1].style.color = 'red';

let iu = '';
for (let i=768; i<821; i++) {
  iu += '<li><a href="#">УИК <b>№' + i + '</b> - то-то!</a></li>';
}


let id_iu = document.querySelector('#iu');
id_iu.innerHTML = iu;


