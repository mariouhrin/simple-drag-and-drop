import { handleFiles } from './handleFiles'
import './../styles/index.scss'

document.addEventListener("DOMContentLoaded", () => {

	var fileList = []
	var fileDrag = document.getElementById("fileDrag")
	var showFormSubmit = document.getElementById("button--form-submit--show")

	document.getElementById("button--start-upload").addEventListener("click", (e) => {

		e.stopPropagation()
		e.preventDefault()

		fileDrag.style.display = "block"
		showFormSubmit.style.display = "inline-flex"

	}, false)


	document.getElementById("file").addEventListener("change", (e) => {

		fileList = e.target.files
		handleFiles(fileList);

	}, false)


	let submitButton = document.getElementById("button--form-submit--show")
		.addEventListener("click", (e) => {

			e.stopPropagation()
			e.preventDefault()

			let formSubmit = document.getElementById("form-submit")
			formSubmit.style.display = "flex"
			formSubmit.scrollIntoView(true)

		}, false)



	fileDrag.addEventListener("dragenter", (e) => {

		e.stopPropagation()
		e.preventDefault()

		fileDrag.classList.add("dragenter")

	}, false)


	fileDrag.addEventListener("dragover", (e) => {

		e.stopPropagation()
		e.preventDefault()

	}, false)


	fileDrag.addEventListener("dragleave", (e) => {

		e.stopPropagation()
		e.preventDefault()

		fileDrag.classList.remove("dragenter")

	}, false)


	fileDrag.addEventListener("drop", (e) => {

		e.stopPropagation()
		e.preventDefault()

		fileDrag.classList.remove("dragenter")
		fileList = e.dataTransfer.files

		handleFiles(fileList);

	}, false)


})
