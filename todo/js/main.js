localStorage.setItem('arrFilterDateId', '');
localStorage.setItem('arrFilterPrioriId', '');
localStorage.setItem('statusFilterDate', false);
localStorage.setItem('dateRevers', false);
localStorage.setItem('statusPrioriDate', false);
localStorage.setItem('prioriRevers', false);
localStorage.setItem('globalArrIdSearch', '');

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
	st += '<td class="todoTable__priority"><div id="pb' + el[8] + '" class="todoTable__priorityBlock">' + el[5] + '</div></td>';
	st += '<td><button id="up' + el[8] + '" class="button-none" type="button" onclick="iconsUpPointClick(this);"><i  class="fas fa-caret-up"></i></button>';
	st += '<br><button id="dw' + el[8] + '" class="button-none" type="button" onclick="iconsDownPointClick(this);"><i  class="fas fa-caret-down"></i></button></td>';
	if (el[7] == 'true') {
		st += '<td id="bt' + el[8] + '" class="todoTable__textBlock"><div class="todoTable__text good">' + el[6] + '</div></td>';
	}else{
		st += '<td id="bt' + el[8] + '" class="todoTable__textBlock"><div class="todoTable__text">' + el[6] + '</div></td>';		
	}
	st += '<td><button type="button" id="ec' + el[8] + '" onclick="buttonEditClick(this);" class="todoTable__shell todoTable__shell--green editText"><i class="fas fa-pen"></i></button>';
	if (el[7] == 'true'){
		st += '<button type="button" id="ck' + el[8] + '" onclick="buttonOkClick(this);" class="todoTable__shell todoTable__shell--blue checkOk"><i class="fas fa-check"></i></button>';
	}else{
		st += '<button type="button" id="ck' + el[8] + '" onclick="buttonOkClick(this);" class="todoTable__shell todoTable__shell--light-blue checkOk"><i class="fas fa-check"></i></button>';
	}
	st += '<button type="button" id="bd' + el[8] + '" onclick="buttonDeleteClick(this);" class="todoTable__shell todoTable__shell--blue trashDelete"><i class="fas fa-trash-alt"></i></button></td>';
	return st;
}

function globalArrIdorSearch(){
	let globalArrIdSearch = localStorage.getItem('globalArrIdSearch');
	if (globalArrIdSearch == ''){
		return localStorage.getItem('globalArrId');
	}
	return globalArrIdSearch;
}

function globalArrIdItem(id, act){
	let globalArrId = localStorage.getItem('globalArrId');
	//let globalArrDate = localStorage.getItem('globalArrDate');

	globalArrId = globalArrId.split(',');
	//globalArrDate = globalArrDate.split(',');
	if (act == 'set'){
		if (globalArrId[0] == ''){
			globalArrId[0] = id;
			//globalArrDate[0] = fDate;
		}else{
			globalArrId.push(id);
			//globalArrDate.push(fDate);
		}
	localStorage.setItem('globalArrId', globalArrId);
	//localStorage.setItem('globalArrDate', globalArrDate);
	}else if(act == 'remove'){
		let newArrId = '';
		let newArrDate = '';
		for (i in globalArrId){
			if (id == globalArrId[i]){
				continue;
			}else{
				newArrId += globalArrId[i]  + ',';
				//newArrDate += globalArrDate[i]  + ',';
			}
		}
		if (newArrId !== ''){
			if (newArrId[newArrId.length - 1] == ','){
				let tempNewArrId = newArrId.length - 1;
				newArrId = newArrId.substr(0, tempNewArrId);
				//newArrDate = newArrDate.substr(0, tempNewArrId);				
			}
		}
		localStorage.setItem('globalArrId', newArrId);
		//localStorage.setItem('globalArrDate', newArrDate);		
	}
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

//start main
if (localStorage.getItem('globalArrId')){
	console.log('good');
}else{
	console.log('no good');
	localStorage.setItem('globalArrId', '');
	//localStorage.setItem('globalArrDate', '');	
}

function main(){
	let maxId = -1;
	let globalArrId = localStorage.getItem('globalArrId');
	globalArrId = globalArrId.split(',');

	for(i in globalArrId){
		let el = localStorage.getItem(globalArrId[i]);
		if (el != null){
			el = el.split(',');
			maxId = el[8]; 
			render(el);
		}
	}
	return maxId;
}

let count = Number(main()) + 1;

deleteNo.onclick = function(){
	deleteItem.style.display = 'none';
	deleteYes.autofocus = false;
}

editCancel.onclick = function(){
	edit.style.display = 'none';
}

deleteYes.onclick = function(){
	deleteItem.style.display = 'none';
	let id = localStorage.getItem('deleteId');
	let tr = document.getElementById(id);
	tr.parentNode.parentNode.remove();
	localStorage.removeItem(id.substring(2));
	globalArrIdItem(id.substring(2), 'remove');
	deleteYes.autofocus = false;
	localStorage.setItem('statusPrioriDate', false);
}

editSave.onclick = function(){
	edit.style.display = 'none';
}

function iconsUpPointClick(eventObject){
	let id = eventObject.id;
	let poin = document.getElementById('pb' + id.substring(2));
	let i = Number(poin.innerHTML);
	if ( i < 10){
		i++;
		let arr = localStorage.getItem(id.substring(2));
		arr = arr.split(',');
		arr[5] = i;
		localStorage.setItem(id.substring(2), arr);
		poin.innerHTML = i;
		localStorage.setItem('statusPrioriDate', false);
	}
}

function  iconsDownPointClick(eventObject){
	let id = eventObject.id;
	let poin = document.getElementById('pb' + id.substring(2));
	let i = Number(poin.innerHTML);
	if ( i > 1){
		i--;
		let arr = localStorage.getItem(id.substring(2));
		arr = arr.split(',');
		arr[5] = i;
		localStorage.setItem(id.substring(2), arr);
		poin.innerHTML = i;
		localStorage.setItem('statusPrioriDate', false);
	}
}

let buttonEditClick = function(eventObject){
	let id = eventObject.id;
	localStorage.setItem('way', id);
	edit.style.display = 'block';

}

let buttonOkClick = function(eventObject){
	let id = eventObject.id;
	let good = localStorage.getItem(id.substring(2));
	let buttonCheckOk = document.getElementById(id);
	let blockText = document.getElementById('bt' + id.substring(2));
	if (good != null){
		good = good.split(',');
		if (good[7] == 'false'){
			good[7] = 'true';
			buttonCheckOk.style.backgroundColor = '#0097F4';
			blockText.firstElementChild.style.backgroundColor = '#EEEEEE'
		}else{
			good[7] = 'false';
			buttonCheckOk.style.backgroundColor = '#77CBFB';
			blockText.firstElementChild.style.backgroundColor = '#D1EEF4';
		}
		localStorage.setItem(id.substring(2), good);
	}
}


let buttonDeleteClick = function(eventObject){
	deleteYes.autofocus = true;
	let id = eventObject.id;
	localStorage.setItem('deleteId', id);
	deleteItem.style.display = 'block';
}

document.querySelector('.editForm').onsubmit = function(event) {
	event.preventDefault();
	let form = event.target;
	let wayId = localStorage.getItem('way');
	let text = document.getElementById('bt' + wayId.substring(2));
	let arr = localStorage.getItem(wayId.substring(2));
	let textEdit = form['editContent'].value;
	arr = arr.split(',');
	arr[6] = textEdit;
	localStorage.setItem(wayId.substring(2), arr);
	text.firstElementChild.innerHTML = textEdit;
}

document.querySelector('.mainForm').onsubmit = function(event) {
	event.preventDefault();
	let form = event.target;
	let date = new Date();
	let text = form['newTodo'].value;
	if (text == ''){
		alert('You did not enter anything');
	}else if (text.length > 256){
		alert('Lots of text');		
	}else{
		let arr = [date.getDate(), date.getMonth() + 1, date.getFullYear(), date.getHours(), date.getMinutes(),
				1, text, false, count];
		localStorage.setItem(count, arr);
		tbodyAppend(arr);
		globalArrIdItem(count, 'set');
		count++;
		localStorage.setItem('statusPrioriDate', false);
	}
}
/*
let
globalArrId

f
filterDate(arrFilterDateId[], statusFilterDate, DateRevers)
filterPriori(arrFilterPrioriId[], statusPrioriDate, PrioriRevers)
filterSeorch(arrFilterSeorch)
*/

function filterPriori(){
	//document.body.style.color = 'red';
	let statusPrioriDate = localStorage.getItem('statusPrioriDate');
	let PrioriRevers;
	let arrFilterPrioriId;
	let lenArrFilter;

	if (statusPrioriDate == 'false'){
		let globalArrId = globalArrIdorSearch();
		globalArrId = globalArrId.split(',');
		arrFilterPrioriId = globalArrId.slice(0);
		lenArrFilter = arrFilterPrioriId.length;
		PrioriRevers = false;
		let minPriori;
		let conteiner;

		for (let i = 0; i < lenArrFilter; i++){
			let PriorI = localStorage.getItem(arrFilterPrioriId[i]).split(',');
			minPriori = PriorI[5];
			minIndexPriori = i;

			for (let j = i + 1; j < lenArrFilter; j++){
				let PriorJ = localStorage.getItem(arrFilterPrioriId[j]).split(',');
				if (Number(minPriori) > Number(PriorJ[5])){
					minPriori = PriorJ[5];
					minIndexPriori = j;
				}
			}
			if (minIndexPriori !== i){
				conteiner = arrFilterPrioriId[i];
				arrFilterPrioriId[i] = arrFilterPrioriId[minIndexPriori];
				arrFilterPrioriId[minIndexPriori] = conteiner;
			}
		}
		localStorage.setItem('arrFilterPrioriId', arrFilterPrioriId);
	}else{
		console.log('sdasdasdsd');
		arrFilterPrioriId = localStorage.getItem('arrFilterPrioriId');
		arrFilterPrioriId = arrFilterPrioriId.split(',');
		lenArrFilter = arrFilterPrioriId.length;
		PrioriRevers = localStorage.getItem('PrioriRevers');
	}
	tbody.innerHTML = '';

	if (PrioriRevers == 'false'){
		for (let i = lenArrFilter - 1; 0 <= i; i--){
			let el = localStorage.getItem(arrFilterPrioriId[i]);
			el = el.split(',');
			tbodyAppend(el);
		}
		localStorage.setItem('PrioriRevers', true);
	}else{
		for (let i = 0; i < lenArrFilter; i++){
			let el = localStorage.getItem(arrFilterPrioriId[i]);
			console.log(arrFilterPrioriId);

			console.log(el);
			el = el.split(',');
			tbodyAppend(el);
		}
		localStorage.setItem('PrioriRevers', false);
	}
	localStorage.setItem('statusPrioriDate', true);
}

function filterDate(){
	//document.body.style.color = 'green';

	let dateRevers = localStorage.getItem('dateRevers');
	let globalArrId = globalArrIdorSearch();
	globalArrId = globalArrId.split(',');
	lenArrFilter = globalArrId.length;
	console.log(globalArrId)
	tbody.innerHTML = '';

	if (dateRevers == 'false'){
		for (let i = lenArrFilter - 1; 0 <= i; i--){
			let el = localStorage.getItem(globalArrId[i]);
			el = el.split(',');
			tbodyAppend(el);
		}
		localStorage.setItem('dateRevers', true);
	}else{
		for (let i = 0; i < lenArrFilter; i++){
			let el = localStorage.getItem(globalArrId[i]);
			el = el.split(',');
			tbodyAppend(el);
		}
		localStorage.setItem('dateRevers', false);
	}
}

document.querySelector('.searchForm').onsubmit = function(event){
	event.preventDefault();
	let form = event.target;
	let searchText = form['searchInput'].value;
	localStorage.setItem('statusPrioriDate', false);
	console.log(searchText);

	if (searchText == ''){
		localStorage.setItem('globalArrIdSearch', '');
		tbody.innerHTML = '';
		let globalArrId = localStorage.getItem('globalArrId');
		globalArrId = globalArrId.split(',');
		let lenArrId = globalArrId.length;
		
		for (let i =  0; i < lenArrId; i++){
			let el = localStorage.getItem(globalArrId[i]);
			el = el.split(',');
			tbodyAppend(el);
		}
	}else{
		let globalArrIdSearch = [];
		let globalArrId = localStorage.getItem('globalArrId');
		globalArrId = globalArrId.split(',');
		let lengthGlobalArrId = globalArrId.length;
		
		for (let i = 0; i < lengthGlobalArrId; i++){
			let conteiner = localStorage.getItem(globalArrId[i]);
			conteiner = conteiner.split(',');
			console.log(conteiner[6], conteiner[6].indexOf(searchText));
			if (conteiner[6].indexOf(searchText) != '-1'){
				globalArrIdSearch.push(globalArrId[i]);
			}
		}
		localStorage.setItem('globalArrIdSearch', globalArrIdSearch);
		tbody.innerHTML = '';
		let lenArrSearch = globalArrIdSearch.length;
		
		for (let i =  0; i < lenArrSearch; i++){
			let el = localStorage.getItem(globalArrIdSearch[i]);
			el = el.split(',');
			tbodyAppend(el);
		}
	}
}