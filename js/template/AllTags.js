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
	`
}
function createTd() {
	return `
      <td class="target" contenteditable="true">Context</td>
	`
}


function createImgUpload() {
	return `
	<div>
		<label>Choose file to upload
			<input type="file" accept=".png, .jpg, .jpeg">
		</label>
	</div>
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
	createTd
}