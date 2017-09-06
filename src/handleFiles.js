import iconImage from './icon_ok.png'

export const handleFiles = (files) => {

		let list = document.getElementById("list")

		for (let file of files) {

			let li = document.createElement("li")

			let divInfo = document.createElement("div")
			let divName = document.createElement("div")
			let divIconWrapper = document.createElement("div")
			let divIcon = document.createElement("img")
			let divClose = document.createElement("div")

			divClose.addEventListener("click", removeItemList, false)

			divIcon.setAttribute("src", iconImage);
			divIcon.setAttribute("width", "25");
			divIcon.setAttribute("height", "25");
			divIcon.style.paddingRight = "10px";

			divInfo.classList.add("file-info")
			divName.innerText = `${file.name}`
			divClose.classList.add("form-upload__section__ul__li--close")
			divClose.innerHTML = "&#10006"

			divIconWrapper.appendChild(divIcon)
			divInfo.appendChild(divIconWrapper)
			divInfo.appendChild(divName)

			li.appendChild(divInfo)
			li.appendChild(divClose)
			list.appendChild(li)

		}

		if (list.children.length > 0) {
			document.getElementById("button--form-submit--show").disabled = false
		}

	}


function removeItemList(e) {

	e.stopPropagation()
	e.preventDefault()

	let li = e.target.parentNode
	let ul = li.parentNode
	ul.removeChild(li)

	if (ul.children.length === 0) {
		document.getElementById("button--form-submit--show").disabled = true
	}

}
