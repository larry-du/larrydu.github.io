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
	createSubButton
} from "./template/AllTags.js";
import {
	addTitleTag,
	addTextTag,
	addListTag,
	addTableTag,
	addIframeTag,
	addRandomImg,
	addLastPositionImg 
} from "./component/AddTag.js";

function main (){
	renderTitleButton();
	render ();
	eventBinding();
	initTable();
	initVideo();
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

	headerButton.addEventListener("click",addTitle);
	textButton.addEventListener("click",addText);

	listButton.addEventListener("click",addList);
	tableButton.addEventListener("click",addTable);
	iframeButton.addEventListener("click",addIframe);
	
	imgButton.addEventListener("click",addImg);
	submit.addEventListener("click",submitDom);
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
	const currentFocus = window.getSelection().anchorNode;
	// // console.log(currentFocus.parentNode.classList.contains("submit"));
	// if(currentFocus){
	// 	console.log(currentFocus.parentNode);
	// 	const isSubmitButton = currentFocus.parentNode.classList.contains("submit")
	// 	// console.log(isSubmitButton);
	// 	if(isSubmitButton)	return addLastPositionImg(createImgUpload,createImage);
	// } else {
	// 	return addLastPositionImg(createImgUpload,createImage);
	// }
	if(!currentFocus)return addLastPositionImg(createImgUpload,createImage);
	addRandomImg(currentFocus,createImgUpload,createImage);
}

function initVideo(){
	let linkAddress = ""
	const videoLink = document.querySelector(".videoLink");
	const createVideoLink = videoLink.querySelector(".createVideoLink");
	const videoInput = videoLink.querySelector(".videoInput");
	videoInput.addEventListener("input",(event)=>{
		linkAddress = event.target.value;
	})
	createVideoLink.addEventListener("click",()=>{
		if(!linkAddress) return alert("Please Enter Link");
		addIframeTag(linkAddress,createIframe)
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

function submitDom(){
		const [...targets] = document.querySelectorAll(".target");
		const [...closeButtons]= document.querySelectorAll(".close")
		targets.forEach(dom=>{
			dom.removeAttribute("contenteditable")
		})
		closeButtons.forEach(close=>{
			close.remove()
		})
		const all = document.querySelector("#content");
		console.log(all);
}

main ()

