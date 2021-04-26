const content = document.querySelector("#content");

function addTitleTag({ headTag, addressInput }) {
	content.insertAdjacentHTML('beforeend', headTag);
	const [...titles] = document.querySelectorAll(".title");
	titles.forEach(title => {
		title.addEventListener("click", (event) => {
			const isCollapse = window.getSelection().isCollapsed;
			if (isCollapse) return
			addRandomLink.call(event.target, addressInput)
		});
	})
}

function addTextTag({ textType, textTag, addressInput }) {
	content.insertAdjacentHTML('beforeend', textTag);
	const [...texts] = document.querySelectorAll(`.${textType}-text`);
	texts.forEach(text => {
		text.addEventListener("click", (event) => {
			const isCollapse = window.getSelection().isCollapsed;
			if (isCollapse) return
			addRandomLink.call(event.target, addressInput)
		});
	})
}

function addList({ listTitle, addressInput }) {
	content.insertAdjacentHTML('beforeend', listTitle);
	const [...listTitles] = document.querySelectorAll(".listTitle")
	listTitles.forEach(listTitle => {
		listTitle.addEventListener("click", (event) => {
			const isCollapse = window.getSelection().isCollapsed;
			if (isCollapse) return
			const isTitle = event.target.classList.contains("listTitle");
			const isItem = event.target.classList.contains("listItem");
			if (isTitle) {
				addRandomLink.call(event.target, addressInput);
			}
			if (isItem) {
				addRandomLink.call(event.target, addressInput);
			}
		})
	})
}

function addTable({ row, col }, { addT, addCol }) {
	// console.log(row);
	content.insertAdjacentHTML('beforeend', `<div class="tableArea">${addT()}</div>`);
	const totalRow = Array(Number(row)).fill(0);
	const totalCol = Array(Number(col)).fill(0);
	const [...tableForms] = document.querySelectorAll(".tableForm")
	const lastData = tableForms[tableForms.length - 1]
	lastData.insertAdjacentHTML('beforeend', '<tbody class="tbody"></tbody>')
	const tbody = lastData.querySelector(".tbody");
	totalRow.forEach((rowData, rowIndex) => {
		tbody.insertAdjacentHTML('beforeend', `<tr class="rowItem-${rowIndex + 1}"></tr>`)
		const rowItem = tbody.querySelector(`.rowItem-${rowIndex + 1}`)
		totalCol.forEach(() => {
			rowItem.insertAdjacentHTML('beforeend', addCol())
		})
	})

}

function addRandomLink(addressInput) {
	const selectedString = window.getSelection().toString();
	const currentContent = this.innerHTML;
	const isEmpty = /\s/.test(`${selectedString}`);
	if (isEmpty) return
	this.innerHTML = currentContent.replace(
		`${selectedString}`,
		`<span class="targetString">${selectedString}</span>`
	);
	const targetString = this.querySelector(".targetString");
	targetString.insertAdjacentHTML('afterend', addressInput);
	const inputAddress = this.querySelector(".inputAddress");

	inputAddress.addEventListener("input", (inputValue) => {
		const webAddress = inputValue.target.value;
		const result = this.innerHTML.replace(
			`<span class="targetString">${selectedString}</span>`,
			`<a href="${webAddress}">${selectedString}</a>`
		);
		inputAddress.addEventListener("keyup", (e) => {
			if (e.key === "Enter") {
				this.innerHTML = result;
				this.querySelector("label").remove();
			};
		});
	});
}

function addImgUpload(createImgUpload) {
	content.insertAdjacentHTML('beforeend', createImgUpload);
}

content.addEventListener("click", (event) => {
	const isClose = event.target.classList.contains("close");
	if (isClose) event.target.parentNode.remove();
})

export { addTextTag, addTitleTag, addList, addImgUpload, addTable }