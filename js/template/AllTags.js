function createHeadTag(headerTag) {
	return `
		<${headerTag} class="title getClose">
			<span class="letter target"  contenteditable="true">title</span> 
			<button class="close">X</button>
		</${headerTag}>
	`
}

function createTextTag(textType) {
	return `
		<${textType} class="${textType}-text  getClose" >
	    	<span class="letter target" contenteditable="true">text</span>
			<button class="close">X</button>
		</${textType}>
	`
}

function createList(listType) {
	return `
	<${listType} class="listTitle target getClose"  contenteditable="true">
		<span class="letter">List Title</span>
		<button class="close">X</button>
		${createListItem()}
	</${listType}>
	`
}

function createListItem() {
	return `
	<li class="listLi">
		List Item
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
		<tr class="trRow rowItem-${rowIndex + 1}"></tr>
	`
}

function createTd() {
	return `
      <td class="tdList">
	  	<span class="letter target" contenteditable="true">content</span>
	  </td>
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
		<label class="imgUploadTitle">
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
			<button class="showLink"> < a > </button>
			<input class="typeAddress noShow">
			<button class="showBold"> < B > </button>
			<button class="showHighLight"> High Light </button>
			<button class="forTextLeft"> Text Left </button>
			<button class="forTextCenter"> Text Center </button>
			<button class="forTextRight"> Text Right </button>
			<button class="close">X</button>
		</div>
	`
}

function createCardImg(base64){
	return`
		<img src="${base64}">
	`
}

function createCard(imgPosition){
	return`
		<div class="card getClose">
			<figure class="${imgPosition} cardImg getClose">
				${createImgUpload()}
			</figure>
			<div class="cardBody">
				<h3 class="cardTitle getClose" >
					<span class="letter target" contenteditable="true">cardTitle</span>
					<button class="close">X</button>
				</h3>
				<p class="cardText getClose">
					<span class="letter target" contenteditable="true">cardText</span>
					<button class="close">X</button>
				</p>
			</div>
			<button class="close cardClose">X</button>
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