import {createHeaderButton} from "./template/common/BaseButton.js"
import {
	createHeadTag,
	createTextTag,
	createList,
	createImgUpload,
	createAddressInput,
	createTable,
  	createTd,
	createIframe,
	createImage
} from "./template/AllTags.js";
import {
	addTitleTag,
	addTextTag,
	addList,
	addImgUpload,
	addTable,
	addIframe,
	addRandomImg 
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
	// const AButton = document.querySelector(".ALinkButton");
	const listButton = document.querySelector(".listButton");
	const tableButton = document.querySelector(".tableButton");
	const iframeButton = document.querySelector(".iframeButton")
	const imgButton = document.querySelector(".addImg");

	headerButton.addEventListener("click",(event)=>{
		const isHeadButton = event.target.classList.contains("addTitle");
		if(!isHeadButton) return
		addTitleTag(createHeadTag(event.target.innerText));
	});
	textButton.addEventListener("click",(event)=>{
		const isTextButton = event.target.classList.contains("normalText");
		if(!isTextButton) return
		const textType = event.target.dataset.texttype;
		addTextTag({
			textType,
			textTag:createTextTag(textType)
		});
	});
	// AButton.addEventListener("click",()=>{
	// 	addATag(createATag());
	// });
	listButton.addEventListener("click",(event)=>{
		const isListButton = event.target.classList.contains("addList");
		if(!isListButton)return
		const listType = event.target.dataset.listtype;
		addList(createList(listType));
	});
	tableButton.addEventListener("click",(event)=>{
		const isTableButton = event.target.classList.contains("addTable");
		if(!isTableButton)return
	
		const tableCount = document.querySelector(".tableCount");
		tableCount.classList.toggle("noShow");
	})
	iframeButton.addEventListener("click",(event)=>{
		const isIframeButton = event.target.classList.contains("addIframe");
		if(!isIframeButton)return
	
		const videoLink = document.querySelector(".videoLink");
		videoLink.classList.toggle("noShow");
	})
	
	imgButton.addEventListener("click",(event)=>{
		// const currentFocus = window.getSelection()
		// currentFocus.insertAdjacentHTML('afterend',createImgUpload())
		// if(!currentFocus){
		// 	console.log();
		// }
		// console.log(currentFocus);
		//點擊後兩組 function 上傳檔案 一種為元素內 一種為不指定元素
		addRandomImg(createImgUpload,createImage)
	});
	submit.addEventListener("click",()=>{
		const [...targets] = document.querySelectorAll(".target")
		targets.forEach(dom=>{
			dom.removeAttribute("contenteditable")
		})
		const all = document.querySelector("#content");
		console.log(all);
	})
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
		videoInput.value="";
		if(!linkAddress) return alert("Please Enter Link");
		addIframe(linkAddress,createIframe)
		videoLink.classList.add("noShow");
	})

}

function initTable(){
	const tableCount = document.querySelector(".tableCount");
	let tableInfo ={};
	const from = {	
		createTable,
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
		addTable(tableInfo,from,createAddressInput());
		tableCount.classList.add("noShow");
	})
}

main ()

