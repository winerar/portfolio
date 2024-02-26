import "./style.scss"

const Contribution = (): JSX.Element => {
	return (
		<div className="position-absolute bottom-0 start-0 w-100 text-center pb-2 px-3 fw-light contribution">
			Photo by{" "}
			<a
				href="https://unsplash.com/@achimr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
				className="link-light"
			>
				Achim Ruhnau
			</a>{" "}
			on{" "}
			<a
				href="https://unsplash.com/photos/an-aerial-view-of-a-mountain-range-in-the-desert-cVNQeIJCN78?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
				className="link-light"
			>
				Unsplash
			</a>
		</div>
	)
}

export default Contribution
