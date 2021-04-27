function createHeadTag(headerTag) {
	return `
		<${headerTag} class="title target" contenteditable="true">
			title 
			<button class="close">X</button>
		</${headerTag}>
	`
}

function createTextTag(textType) {
	return `
		<${textType} class="${textType}-text target" contenteditable="true">
	    	text
			<button class="close">X</button>
		</${textType}>
	`
}

function createList(listType) {
	return `
	<${listType} class="listTitle target" contenteditable="true">
		List Title
		<button class="close">X</button>
		${createListItem()}
	</${listType}>
	`
}

function createListItem() {
	return `
	<li class="listItem target" contenteditable="true">
		List Item
	</li>
	`
}

function createTable() {
	return `
		<table class="tableForm"></table>
		<button class="close">X</button>
	`
}
function createTd() {
	return `
      <td class="tdList target" contenteditable="true">Context</td>
	`
}

function createIframe(linkAddress){
	return`
	<div class="videoArea">
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
	<div class="uploadArea">
		<label class="imgUploadTitle">Choose image file to upload
			<input class="imgUpload" type="file" accept=".png, .jpg, .jpeg">
		</label>
	</div>
	`
}

function createImage(base64){
	return`
	<figure>
		<img src="${base64}">
	</figure>
	`
}

function createAddressInput() {
	return `
	<label>
		<input class="inputAddress">
		<button class="close">X</button>
	<label>
	`
}

export {
	createHeadTag,
	createTextTag,
	createList,
	createListItem,
	createImgUpload,
	createAddressInput,
	createTable,
	createTd,
	createIframe,
	createImage
}