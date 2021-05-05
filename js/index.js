import {createHeaderButton} from "./template/common/BaseButton.js"
import {
	createHeadTag,
	createTextTag,
	createList,
	createImgUpload,
	createTableArea,
	createTbody,
	createTr,
  createTd,
	createIframe,
	createImage,
	createSubButton,
	createCard,
	createCardImg
} from "./template/AllTags.js";
import {
	addTitleTag,
	addTextTag,
	addListTag,
	addTableTag,
	addIframeTag,
	addRandomImg,
	addLastPositionImg,
	addCardGroup 
} from "./component/AddTag.js";

function main (){
	renderTitleButton();
	render ();
	eventBinding();
	initTable();
	initVideo();
	initImgPosition();
}

function renderTitleButton(){
	const headerTags=["h2","h3","h4","h5","h6"];
	const headerButton = document.querySelector(".headerButton");
	headerButton.innerHTML = createHeaderButton(headerTags);
}

function render(){
	// let selObj = window.getSelection();
	// window.alert(selObj); 
	// const test = document.querySelector("#render-area")
	// test.designMode = "on"
	// console.log(range);
	//接API 渲染畫面
}

function eventBinding(){
	const submit = document.querySelector(".submit");
	const headerButton = document.querySelector(".headerButton");
	const textButton = document.querySelector(".textButton");
	const listButton = document.querySelector(".listButton");
	const tableButton = document.querySelector(".tableButton");
	const iframeButton = document.querySelector(".iframeButton");
	const imgButton = document.querySelector(".addImg");
	const cardButton = document.querySelector(".cardButton");

	headerButton.addEventListener("click",addTitle);
	textButton.addEventListener("click",addText);

	listButton.addEventListener("click",addList);
	tableButton.addEventListener("click",addTable);
	iframeButton.addEventListener("click",addIframe);
	
	imgButton.addEventListener("click",addImg);
	cardButton.addEventListener("click",addCard);
	submit.addEventListener("click",submitHTML);
}

function addTitle(event){
	const isHeadButton = event.target.classList.contains("addTitle");
	if(!isHeadButton) return
	addTitleTag({
		titleTag:createHeadTag(event.target.innerText),
		createSubButton
	});
}

function addText(event){
	const isTextButton = event.target.classList.contains("normalText");
	if(!isTextButton) return
	const textType = event.target.dataset.texttype;
	addTextTag({
		textType,
		textTag:createTextTag(textType),
		createSubButton
	});
}

function addList(event){
	const isListButton = event.target.classList.contains("addList");
	if(!isListButton)return
	const listType = event.target.dataset.listtype;
	addListTag({
		listTitle:createList(listType),
		createSubButton
	});
}

function addTable(event){
	const isTableButton = event.target.classList.contains("addTable");
	if(!isTableButton)return

	const tableCount = document.querySelector(".tableCount");
	tableCount.classList.toggle("noShow");
}

function addIframe(event){
	const isIframeButton = event.target.classList.contains("addIframe");
	if(!isIframeButton)return

	const videoLink = document.querySelector(".videoLink");
	videoLink.classList.toggle("noShow");
}

function addImg(){
	const selection = window.getSelection();
	const currentFocus = selection.anchorNode;
	if(!currentFocus)return addLastPositionImg(createImgUpload,createImage);
	const range = selection.getRangeAt(0);
	if(range.startContainer.data === "submit") return addLastPositionImg(createImgUpload,createImage);
	addRandomImg(currentFocus,createImgUpload,createImage);
}

function addCard(event){
	const isAddCard = event.target.classList.contains("addCard");
	if(!isAddCard)return
	const imgPosition = document.querySelector(".imgPosition");
	imgPosition.classList.toggle("noShow"); 
	// addCardGroup(createCard,createCardImg,createSubButton);
}

function initImgPosition(){
	const imgPosition = document.querySelector(".imgPosition");
	imgPosition.addEventListener("click",(event)=>{
		const isFirst = event.target.classList.contains("forImgFirst")
		const isLast = event.target.classList.contains("forImgLast")
		if(isFirst){
			addCardGroup(createCard("imgFirst"),createCardImg,createSubButton);
		}
		if(isLast){
			addCardGroup(createCard("imgLast"),createCardImg,createSubButton);
		}
		imgPosition.classList.add("noShow")
	})
}

function initVideo(){
	let linkAddress = "";
	const videoLink = document.querySelector(".videoLink");
	const createVideoLink = videoLink.querySelector(".createVideoLink");
	const videoInput = videoLink.querySelector(".videoInput");
	videoInput.addEventListener("input",(event)=>{
		linkAddress = event.target.value;
	})
	createVideoLink.addEventListener("click",()=>{
		if(!linkAddress) return alert("Please Enter Link");
		addIframeTag(linkAddress,createIframe);
		videoInput.value="";
		videoLink.classList.add("noShow");
	})

}

function initTable(){
	const tableCount = document.querySelector(".tableCount");
	let tableInfo ={};
	const from = {
		createTableArea,
		createTbody,	
		createTr,
		createTd
	}
	const createTableButton = tableCount.querySelector(".createTable");
	const tableRow = tableCount.querySelector("#tableRow");
	const tableCol = tableCount.querySelector("#tableCol");
	tableRow.addEventListener("input",(event)=>{
		tableInfo = {...tableInfo,row:event.target.value};
	})
	tableCol.addEventListener("input",(event)=>{
		tableInfo = {...tableInfo,col:event.target.value};
	})
	createTableButton.addEventListener("click",()=>{
		tableRow.value="";
		tableCol.value="";
		if(!tableInfo.row || !tableInfo.col) return alert("Please Enter row & col Number");
		addTableTag(tableInfo,from,createSubButton);
		tableCount.classList.add("noShow");
	})
}

function submitHTML(){
		const [...targets] = document.querySelectorAll(".target");
		const [...closeButtons]= document.querySelectorAll(".close");
		const [...uploadArea] = document.querySelectorAll(".uploadArea");
		const [...subButtonArea] = document.querySelectorAll(".subButtonArea");
		targets.forEach(target=>{
			target.removeAttribute("contenteditable");
		})
		uploadArea.forEach(upload=>{
			upload.remove();
		})
		closeButtons.forEach(close=>{
			close.remove();
		})
		subButtonArea.forEach(subButton=>{
			subButton.remove();
		})
		const all = document.querySelector("#content");
		console.log(all);
}

main ()

