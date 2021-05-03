function createHeadTag(headerTag) {
	return `
		<${headerTag} class="title target getClose" contenteditable="true">
			title 
			<button class="close">X</button>
		</${headerTag}>
	`
}

function createTextTag(textType) {
	return `
		<${textType} class="${textType}-text target getClose" contenteditable="true">
	    	text
			<button class="close">X</button>
		</${textType}>
	`
}

function createList(listType) {
	return `
	<${listType} class="listTitle target getClose" contenteditable="true">
		List Title
		<button class="close">X</button>
		${createListItem()}
	</${listType}>
	`
}

function createListItem() {
	return `
	<li class="listItem target getClose" contenteditable="true">
		List Item
		<button class="close">X</button>
	</li>
	`
}

function createTableArea(){
	return`
	<div class="tableArea target getClose">${createTable()}</div>
	`
}

function createTable() {
	return `
		<table class="tableForm"></table>
		<button class="close">X</button>
	`
}

function createTbody(){
	return`
		<tbody class="tbody"></tbody>
	`
}

function createTr(rowIndex){
	return`
	<tr class="rowItem-${rowIndex + 1}"></tr>
	`
}

function createTd() {
	return `
      <td class="tdList target" contenteditable="true"></td>
	`
}

function createIframe(linkAddress){
	return`
	<div class="videoArea target getClose">
		<iframe width="560" height="315" frameborder="0" allowfullscreen=""
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		src="${linkAddress}"
		></iframe>
		<button class="close">X</button>
	</div>
	`
}


function createImgUpload() {
	return `
	<div class="uploadArea target">
		<label class="imgUploadTitle">Choose image file to upload
			<input class="imgUpload" type="file" accept=".png, .jpg, .jpeg">
		</label>
		<button class="close">X</button>
	</div>
	`
}

function createImage(base64){
	return`
	<figure class="imgBox getClose">
		<img src="${base64}">
		<button class="close">X</button>
	</figure>
	`
}

function createSubButton(){
	return`
		<div class="subButtonArea">
			<button class="showLink">link</button>
			<button class="close">X</button>
		</div>
	`
}

function createCardImg(base64){
	return`
		<img src="${base64}">
	`
}

function createCard(){
	return`
		<div class="card">
			<figure class="cardImg getClose">
				${createImgUpload()}
				<button class="close">X</button>
			</figure>
			<div class="cardBody">
				<h3 class="cardTitle target getClose" contenteditable="true">
					cardTitle
					<button class="close">X</button>
				</h3>
				<p class="cardText target getClose" contenteditable="true">
					cardText
					<button class="close">X</button>
				</p>
			</div>
			<button class="close">X</button>
		</div>
	`
}

export {
	createHeadTag,
	createTextTag,
	createList,
	createListItem,
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
}