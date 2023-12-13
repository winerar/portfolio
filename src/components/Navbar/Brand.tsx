import { profile } from "../../constants"

const Brand = () => {
	return (
		<a className="navbar-brand mb-lg-4 mx-lg-auto" href="/">
			<span className="h3 fw-bold d-block d-lg-none">{profile.fullName}</span>
			<img
				src={profile.avatar}
				alt={profile.fullName}
				className="d-none d-lg-block rounded-circle"
			/>
		</a>
	)
}

export default Brand
