import React, { useState, useCallback } from "react"
import ImageViewer from "react-simple-image-viewer"

import { useSelector } from "react-redux"
import { imageRemoveByIndex } from "./ImagesSlice"
import { useDispatch } from "react-redux"
import { CloseButton } from "react-bootstrap"

function ImagesPreview() {
	const [currentImage, setCurrentImage] = useState(0)
	const [isViewerOpen, setIsViewerOpen] = useState(false)
	const dispatch = useDispatch()
	const images = useSelector((state) => state.images.entities)
	console.log(images)
	const openImageViewer = useCallback((index) => {
		setCurrentImage(index)
		setIsViewerOpen(true)
	}, [])

	const closeImageViewer = () => {
		setCurrentImage(0)
		setIsViewerOpen(false)
	}

	function handleDeleteImage(index) {
		dispatch(imageRemoveByIndex(index))
	}

	return (
		<div>
			{images.map((src, index) => {
				return (
					<>
						<CloseButton onClick={() => handleDeleteImage(index)}></CloseButton>
						<img
							src={src}
							onClick={() => openImageViewer(index)}
							width="300"
							key={index}
							style={{ margin: "2px" }}
							alt=""
						/>
					</>
				)
			})}

			{isViewerOpen && (
				<>
					<ImageViewer
						src={images}
						currentIndex={currentImage}
						onClose={closeImageViewer}
						disableScroll={false}
						backgroundStyle={{
							backgroundColor: "rgba(0,0,0,0.9)",
						}}
						closeOnClickOutside={true}
					/>
				</>
			)}
		</div>
	)
}
export default ImagesPreview