function twoNumber(el){
	el = String(el);
	if (el.length == 1){
		return '0' + el;
	}
	return el;
}

function content(el){
	let st = '<td class="todoTable__dateAndTime"><span class="todoTable__date">';
	st += twoNumber(el[0]) + '.' + twoNumber(el[1]) + '.' + el[2];//12.06.2009
	st += '</span><br><span class="todoTable__time">' + twoNumber(el[3]) + ':' + twoNumber(el[4]) + '</span></td>';
	st += '<td id="pb' + el[8] + '" class="todoTable__priority"><div class="todoTable__priorityBlock">' + el[5] + '</div></td>';
	st += '<td><i class="fas fa-caret-up"></i><br><i class="fas fa-caret-down"></i></td>';
	if (el[7] == 'true') {
		st += '<td id="bt' + el[8] + '" class="todoTable__textBlock"><div class="todoTable__text good">' + el[6] + '</div></td>';
	}else{
		st += '<td id="bt' + el[8] + '" class="todoTable__textBlock"><div class="todoTable__text">' + el[6] + '</div></td>';		
	}
	st += '<td><button type="button" id="ec' + el[8] + '" class="todoTable__shell todoTable__shell--green editText"><i class="fas fa-pen"></i></button>';
	if (el[7] == 'true'){
		st += '<button type="button" id="ck' + el[8] + '" class="todoTable__shell todoTable__shell--blue checkOk"><i class="fas fa-check"></i></button>';
	}else{
		st += '<button type="button" id="ck' + el[8] + '" class="todoTable__shell todoTable__shell--light-blue checkOk"><i class="fas fa-check"></i></button>';
	}
	st += '<button type="button" id="bd' + el[8] + '" class="todoTable__shell todoTable__shell--blue trashDelete"><i class="fas fa-trash-alt"></i></button></td>';
	return st;
}

function render(el){
	document.write('<tr>');
	document.write(content(el));
	document.write('</tr>');
}

function tbodyAppend(el){
	let newTr = document.createElement('tr');	
	newTr.innerHTML = content(el);
	tbody.appendChild(newTr);
}

let maxId = -1;
for(let i = 0; i < 100; i++){
	let el = localStorage.getItem(i);
	if (el != null){
		el = el.split(',');
		maxId = el[8]; 
		//console.log(typeof(el[1]));
		render(el)
	}
}

let count = Number(maxId) + 1;

let buttonsDelete = document.getElementsByClassName('trashDelete');
let buttonsOk = document.getElementsByClassName('checkOk');
let buttonsEdit = document.getElementsByClassName('editText');

deleteNo.onclick = function(){
	deleteItem.style.display = 'none';
}

editCancel.onclick = function(){
	edit.style.display = 'none';
}

deleteYes.onclick = function(){
	deleteItem.style.display = 'none';
	let id = localStorage.getItem('deleteId');
	let tr = document.getElementById(id);
	console.log(tr.parentNode.parentNode.remove());
	localStorage.removeItem(Number(id[2]));
}

editSave.onclick = function(){
	edit.style.display = 'none';
	console.log(editContent);
	//let id = localStorage.getItem('deleteId');
	//let tr = document.getElementById(id);
	//console.log(tr.parentNode.parentNode.remove());
	//localStorage.removeItem(Number(id[2]));
}

let buttonDeleteClick = function(eventObject){
	let id = eventObject.path[1].id;
	//let divDelete = document.getElementById('deleteItem');
	console.log(id[2]);
	if (Number(id[2]) >= 0){
		localStorage.setItem('deleteId', id);
		deleteItem.style.display = 'block';
	}

}

let buttonOkClick = function(eventObject){
	let id = eventObject.path[1].id;
	console.log(id[2]);
	if (Number(id[2]) >= 0){
		//let id = document.getElementById(id);
		let good = localStorage.getItem(id[2]);
		let buttonCheckOk = document.getElementById(id);
		let blockText = document.getElementById('bt' + id[2]);
		console.log(blockText);		
		console.log(buttonCheckOk);
		if (good != null){
			good = good.split(',');
			console.log(good);
			if (good[7] == 'false'){
				good[7] = 'true';
				buttonCheckOk.style.backgroundColor = '#0097F4';
				blockText.firstElementChild.style.backgroundColor = '#EEEEEE'
			}else{
				good[7] = 'false';
				buttonCheckOk.style.backgroundColor = '#77CBFB';
				blockText.firstElementChild.style.backgroundColor = '#D1EEF4';
			}
			console.log(good);
			localStorage.setItem(id[2], good);
		}
		//localStorage.removeItem(Number(id[2]));		
	}
}

let buttonEditClick = function(eventObject){
	let id = eventObject.path[1].id;
	console.log(id);
	//let divDelete = document.getElementById('deleteItem');
	console.log(id[2]);
	if (Number(id[2]) >= 0){
		localStorage.setItem('way', id);
		edit.style.display = 'block';
	}

}

for(buttonOk of buttonsOk){
	buttonOk.onclick = buttonOkClick;
}
for(buttonDelete of buttonsDelete){
	buttonDelete.onclick = buttonDeleteClick;
}
for(buttonEdit of buttonsEdit){
	buttonEdit.onclick = buttonEditClick;
}
document.querySelector('form').onsubmit = function(event) {
	event.preventDefault();

	let form = event.target;
	let date = new Date();
	let text = form['newTodo'].value;
	/*
	console.log(date.getDate(), date.getMonth() + 1, date.getFullYear(), date.getHours(), date.getMinutes());	
	console.log(text);
	console.log(count);	
	*/
	if (text == ''){
		alert('You did not enter anything');
	}else if (text.length > 256){
		alert('Lots of text');		
	}else{
		let arr = [date.getDate(), date.getMonth() + 1, date.getFullYear(), date.getHours(), date.getMinutes(),
				1, text, false, count];
		localStorage.setItem(count, arr);
		//render(arr);
		tbodyAppend(arr);
		buttonsDelete = document.getElementsByClassName('trashDelete');

		for(buttonOk of buttonsOk){
			buttonOk.onclick = buttonOkClick;
		}
		for(buttonDelete of buttonsDelete){
			buttonDelete.onclick = buttonDeleteClick;
		}

		count++;
	}
}


//console.log(buttonsDelete);

/*
let buttonClickDelete = function(){
	console.log('Hellp me!');
}*/
//todoTable__shell
//localStorage.setItem('defolt_color', [1, 5]);

//let color = localStorage.getItem('defolt_color');

//localStorage.removeItem('defolt_color');


/*
let testButton = document.querySelector(".todoTable__buttonAdd")

testButton.onclick = function() {
	let content = document.querySelector(".todoTable__inputAdd")
	console.log(content);
}*/