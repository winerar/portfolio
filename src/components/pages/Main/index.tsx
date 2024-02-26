import Link from "@atoms/Link"
import RoundImage from "@atoms/RoundImage"
import { navLinks, profile } from "@/constants"
import NavlinksList from "@organisms/NavlinksList"
import Contribution from "@organisms/Contribution"

const Main = () => {
	return (
		<div>
			<Link href="#" target="_blank" title="link">
				this is a link
			</Link>
			<RoundImage
				src={profile.avatar}
				alt={profile.fullName}
				width="216px"
				height="216px"
			/>
      <NavlinksList links={navLinks} defaultPath={navLinks[0].path} />
      <Contribution />
		</div>
	)
}

export default Main
