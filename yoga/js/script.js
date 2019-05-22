window.addEventListener('DOMContentLoaded', function() {
    'use strict';
/*<div class="info-header">
	<div class="info-header-tab">Лечение</div>
    <div class="info-header-tab">Отдых</div>
	<div class="info-header-tab">Природа</div>
	<div class="info-header-tab">Йога</div>
  </div>
	<div class="info-tabcontent fade"></div>*/

    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'), 
        tabContent = document.querySelectorAll('.info-tabcontent');

        console.log(info);
        console.log(tab);
        console.log(tabContent);


    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }   
    
    hideTabContent(1); //0 вкладку показываем

    function showTabContent(b) {
        console.log(`showTabContent(b) = ${b}`);
        if (tabContent[b].classList.contains('hide')) {
           tabContent[b].classList.remove('hide');
           tabContent[b].classList.add('show'); 
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        console.log(target);
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    //timer
    let deadline = '2019-05-23';

    function getTimeRemaining(endtime) {
    	let t = Date.parse(endtime) - Date.parse(new Date()),
    		seconds = Math.floor((t/1000)%60),
    		minutes = Math.floor((t/1000/60)%60),
    		hours = Math.floor((t/(1000*60*60)));
    		//let hours = Math.floor((t/1000/60/60)%24);
    		//let days = Math.floor((t/(1000*60*60*24)));

    	function nolik(val) {
            return (val < 10) ? '0'+val : val;
    	}

    	return {
    	'total' : t,
    	'hours' : nolik(hours),
    	'minutes': nolik(minutes),
    	'seconds': nolik(seconds)
    	}
    }	

    function setClock(id, endtime) {
    	let timer = document.getElementById(id),
    		hours = timer.querySelector('.hours'),
    		minutes = timer.querySelector('.minutes'),
    		seconds = timer.querySelector('.seconds'),
    		timeInterval = setInterval(updateClock, 1000);

    	function updateClock() {
    		let t = getTimeRemaining(endtime);
    		hours.textContent = t.hours;
    		minutes.textContent = t.minutes;
    		seconds.textContent = t.seconds;

    		if (t.total <= 0) {
    			hours.textContent = '00';
    			minutes.textContent = '00';
    			seconds.textContent = '00';

    			clearInterval(timeInterval);
    		}
    	}

    }			 
    setClock('timer', deadline);






























});