import {createHeaderButton} from "./template/common/BaseButton.js"
import {
	createHeadTag,
	createTextTag,
	createList,
	createImgUpload,
	createAddressInput,
	createTable,
  createTd
} from "./template/AllTags.js";
import {
	addTitleTag,
	addTextTag,
	addList,
	addImgUpload,
	addTable
} from "./component/AddTag.js";

function main (){
	renderTitleButton();
	render ();
	eventBinding();
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
	const imgButton = document.querySelector(".addImg");

	headerButton.addEventListener("click",(event)=>{
		const isHeadButton = event.target.classList.contains("addTitle");
		if(!isHeadButton) return
		addTitleTag({
			headTag:createHeadTag(event.target.innerText),
			addressInput:createAddressInput()
		});
	});
	textButton.addEventListener("click",(event)=>{
		const isTextButton = event.target.classList.contains("normalText");
		if(!isTextButton) return
		const textType = event.target.dataset.texttype;
		addTextTag({
			textType,
			textTag:createTextTag(textType),
			addressInput:createAddressInput()
		});
	});
	// AButton.addEventListener("click",()=>{
	// 	addATag(createATag());
	// });
	listButton.addEventListener("click",(event)=>{
		const isListButton = event.target.classList.contains("addList");
		if(!isListButton)return
		const listType = event.target.dataset.listtype;
		addList({
			listTitle:createList(listType),
			addressInput:createAddressInput()
		})
	});
	tableButton.addEventListener("click",(event)=>{
		let tableInfo ={};
		const from = {	
			addTable:createTable,
			addCol:createTd
		}
		const isTableButton = event.target.classList.contains("addTable");
		if(!isTableButton)return
	
		const tableCount = document.querySelector(".tableCount");
		tableCount.classList.toggle("noShow");

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
			addTable(tableInfo,from);
			tableCount.classList.add("noShow");
		})
	})
	// tableButton.addEventListener("click",(event)=>{
	// 	test(event)
	// })
	imgButton.addEventListener("click",(event)=>{
		console.log(event);
		addImgUpload(createImgUpload());
	});
	submit.addEventListener("click",()=>{
		const [...targets] = document.querySelectorAll(".target")
		targets.forEach(dom=>{
			dom.removeAttribute("contenteditable")
		})
		const all = document.querySelector("#content")
		console.log(all);
	})
}


// function test(event){
// 	let tableInfo ={};
// 		const from = {	
// 			addTable:createTable,
// 			addCol:createTd
// 		}
// 		const isTableButton = event.target.classList.contains("addTable");
// 		if(!isTableButton)return
	
// 		const tableCount = document.querySelector(".tableCount");
// 		tableCount.classList.toggle("noShow");

// 		const createTableButton = tableCount.querySelector(".createTable");
// 		const tableRow = tableCount.querySelector("#tableRow");
// 		const tableCol = tableCount.querySelector("#tableCol");
// 		tableRow.addEventListener("input",(event)=>{
// 			tableInfo = {...tableInfo,row:event.target.value};
// 		})
// 		tableCol.addEventListener("input",(event)=>{
// 			tableInfo = {...tableInfo,col:event.target.value};
// 		})
// 		createTableButton.addEventListener("click",()=>{
// 			tableRow.value="";
// 			tableCol.value="";
// 			if(!tableInfo.row || !tableInfo.col) return alert("Please Enter row & col Number");
// 			addTable(tableInfo,from);
// 			tableCount.classList.add("noShow");
// 		})
// }



main ()

