function createHeaderButton(headerTags){
	return headerTags.map(headerTag=>{
			return `<button class="addTitle">${headerTag}</button>` 
			}).join("");
}
export {createHeaderButton}