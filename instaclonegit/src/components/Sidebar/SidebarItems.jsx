import Coins from "./Coins";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Reels from "./Reels";
import Search from "./Search";
const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<Notifications />
			<CreatePost />
			<Coins />
			<Reels />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;
