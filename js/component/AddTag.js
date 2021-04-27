const content = document.querySelector("#content");

function addTitleTag(headTag) {
	content.insertAdjacentHTML('beforeend', headTag);
	const [...titles] = document.querySelectorAll(".title");
	const lastData = titles[titles.length-1];
	lastData.addEventListener("click", (event) => {
			addRandomLink(event.target);
		});
}


function addTextTag({ textType, textTag}) {
	content.insertAdjacentHTML('beforeend', textTag);
	const [...texts] = document.querySelectorAll(`.${textType}-text`);
	const lastData = texts[texts.length-1];
		lastData.addEventListener("click", (event) => {
			addRandomLink(event.target);
		});
}

function addList(listTitle) {
	content.insertAdjacentHTML('beforeend', listTitle);
	const [...listTitles] = document.querySelectorAll(".listTitle");
	const lastData = listTitles[listTitles.length-1];

	lastData.addEventListener("click", (event) => {
		const isTitle = event.target.classList.contains("listTitle");
		const isItem = event.target.classList.contains("listItem");
		if (isTitle) {
			addRandomLink(event.target);
		}
		if (isItem) {
			addRandomLink(event.target);
		}
	})
}

function addTable({ row, col }, { createTable, createTd }) {
	content.insertAdjacentHTML('beforeend', `<div class="tableArea">${createTable()}</div>`);

	const totalRow = Array(Number(row)).fill(0);
	const totalCol = Array(Number(col)).fill(0);

	const [...tableForms] = document.querySelectorAll(".tableForm");
	const lastData = tableForms[tableForms.length - 1];
	lastData.insertAdjacentHTML('beforeend', '<tbody class="tbody"></tbody>');
	const tbody = lastData.querySelector(".tbody");

	totalRow.forEach((rowData, rowIndex) => {
		tbody.insertAdjacentHTML('beforeend', `<tr class="rowItem-${rowIndex + 1}"></tr>`);
		const rowItem = tbody.querySelector(`.rowItem-${rowIndex + 1}`);
		totalCol.forEach(() => {
			rowItem.insertAdjacentHTML('beforeend', createTd());
		})
	})

	const [...tdLists] = document.querySelectorAll(".tdList");
	tdLists.forEach(tdList=>{
		tdList.addEventListener("click",(event)=>{
			addRandomLink(event.target);
		})
	})
}

function addRandomImg(createImgUpload,createImage){
  const currentFocus = window.getSelection().anchorNode.parentNode
  currentFocus.insertAdjacentHTML('afterend',createImgUpload())
  const imgUpload = document.querySelector(".imgUpload")
  imgUpload.addEventListener("change",(e)=>{
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener('load',(event)=>{
      currentFocus.insertAdjacentHTML('beforeend',createImage(event.target.result))
    })
  })

}

function addRandomLink(currentDom){
  const isCollapse = window.getSelection().isCollapsed;
  const isClickTwice = currentDom.querySelector(".showLink");
	const isShowLinkButton = currentDom.classList.contains("showLink");
	if (isCollapse||isShowLinkButton||isClickTwice) return

	const selectedString = window.getSelection().toString();
	const isEmpty = /\s/.test(`${selectedString}`);
	if (isEmpty) return

	currentDom.insertAdjacentHTML('beforeend',`<button class="showLink">link</button>`);
	const link = currentDom.querySelector(".showLink");

	link.addEventListener("click",()=>{
		currentDom.insertAdjacentHTML('beforeend',`<input class="typeAddress">`);
		const typeAddress = currentDom.querySelector(".typeAddress");
		typeAddress.addEventListener("change",(typeAddressEvent)=>{
			const webAddress = typeAddressEvent.target.value;
			typeAddress.addEventListener("keyup",(keyEvent)=>{
				if (keyEvent.key === "Enter"){
					currentDom.innerHTML = currentDom.innerHTML.replace(
						`${selectedString}`,
						`<a href="${webAddress}">${selectedString}</a>`
					);
					currentDom.querySelector(".showLink").remove();
					currentDom.querySelector(".typeAddress").remove();
				}
			})
		})
	})
}

function addIframe(linkAddress,createIframe){
	content.insertAdjacentHTML('beforeend', `${createIframe(linkAddress)}`);
}

function addImgUpload(createImgUpload) {
	content.insertAdjacentHTML('beforeend', createImgUpload);
}

content.addEventListener("click", (event) => {
	const isClose = event.target.classList.contains("close");
	if (isClose) event.target.parentNode.remove();
})

export { 
	addTextTag, 
	addTitleTag, 
	addList, 
	addImgUpload, 
	addTable,
	addIframe,
  addRandomImg 
}