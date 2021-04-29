const content = document.querySelector("#content");

function addTitleTag({titleTag,createSubButton}) {
	content.insertAdjacentHTML('beforeend', titleTag);
	const [...titles] = document.querySelectorAll(".title");
	const lastData = titles[titles.length-1];
	lastData.addEventListener("click", (event) => {
			addRandomLink(event.target,createSubButton);
		});
}

function addTextTag({ textType, textTag,createSubButton}) {
	content.insertAdjacentHTML('beforeend', textTag);
	const [...texts] = document.querySelectorAll(`.${textType}-text`);
	const lastData = texts[texts.length-1];
		lastData.addEventListener("click", (event) => {
			addRandomLink(event.target,createSubButton);
		});
}

function addListTag({listTitle,createSubButton}) {
	content.insertAdjacentHTML('beforeend', listTitle);
	const [...listTitles] = document.querySelectorAll(".listTitle");
	const lastData = listTitles[listTitles.length-1];

	lastData.addEventListener("click", (event) => {
		const isTitle = event.target.classList.contains("listTitle");
		const isItem = event.target.classList.contains("listItem");
		if (isTitle) {
			addRandomLink(event.target,createSubButton);
		}
		if (isItem) {
			addRandomLink(event.target,createSubButton);
		}
	})
}

function addTableTag({ row, col }, { createTableArea,createTbody,createTr,createTd },createSubButton) {
	content.insertAdjacentHTML('beforeend', createTableArea());

	const totalRow = Array(Number(row)).fill(0);
	const totalCol = Array(Number(col)).fill(0);

	const [...tableForms] = document.querySelectorAll(".tableForm");
	const lastData = tableForms[tableForms.length - 1];
	lastData.insertAdjacentHTML('beforeend', createTbody());
	const tbody = lastData.querySelector(".tbody");

	totalRow.forEach((rowData, rowIndex) => {
		tbody.insertAdjacentHTML('beforeend', createTr(rowIndex));
		const rowItem = tbody.querySelector(`.rowItem-${rowIndex + 1}`);
		totalCol.forEach(() => {
			rowItem.insertAdjacentHTML('beforeend', createTd());
		})
	})

	const [...tdLists] = document.querySelectorAll(".tdList");
	tdLists.forEach(tdList=>{
		tdList.addEventListener("click",(event)=>{
			addRandomLink(event.target,createSubButton);
		})
	})
}

function addLastPositionImg(createImgUpload,createImage){
	content.insertAdjacentHTML('beforeend', createImgUpload());
	const imgUpload = document.querySelector(".imgUpload")
	imgUpload.addEventListener("change",(event)=>{
		let reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.addEventListener('load',(dataEvent)=>{
				const uploadArea = content.querySelector(".uploadArea")
				content.insertAdjacentHTML('beforeend',createImage(dataEvent.target.result))
				uploadArea.remove()
		})
  })
}

function addRandomImg(currentFocus,createImgUpload,createImage){
  const currentParent = currentFocus.parentNode
	if(currentParent.localName==="button") return alert("點擊編輯區")
  currentFocus.insertAdjacentHTML('beforeend',createImgUpload())
  const imgUpload = document.querySelector(".imgUpload")
  imgUpload.addEventListener("change",(e)=>{
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener('load',(event)=>{
			const uploadArea = content.querySelector(".uploadArea")
      currentFocus.insertAdjacentHTML('beforeend',createImage(event.target.result))
			uploadArea.remove()
    })
  })
}

function addRandomLink(currentDom,createSubButton){
  const isCollapse = window.getSelection().isCollapsed;
  const isClickTwice = currentDom.querySelector(".showLink");
	const isShowLinkButton = currentDom.classList.contains("showLink");
	if (isCollapse||isShowLinkButton||isClickTwice) return

	const selectedString = window.getSelection().toString();
	const isEmpty = /\s/.test(`${selectedString}`);
	if (isEmpty) return

	currentDom.insertAdjacentHTML('beforeend',createSubButton());
	const link = currentDom.querySelector(".showLink");

	link.addEventListener("click",addLinkAddress(currentDom,selectedString))
}

function addLinkAddress(currentDom,selectedString){
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
}

function addIframeTag(linkAddress,createIframe){
	content.insertAdjacentHTML('beforeend', createIframe(linkAddress));
}

content.addEventListener("click", (event) => {
	const isClose = event.target.classList.contains("close");
	if (isClose) event.target.parentNode.remove();
})

export { 
	addTextTag, 
	addTitleTag, 
	addListTag, 
	addTableTag,
	addIframeTag,
  addRandomImg,
	addLastPositionImg 
}