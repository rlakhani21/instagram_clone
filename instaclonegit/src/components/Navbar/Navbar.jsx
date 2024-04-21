import { Button, Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { Logo } from '';

const Navbar = () => {
	return (
		<Container maxW={"container.lg"} my={4}>
			<Flex w={"full"} justifyContent={{ base: "center", sm: "space-between" }} alignItems={"center"}>
				{/* <Image src='/logo.png' h={50} display={{ base: "none", sm: "block" }} cursor={"pointer"} /> */}
				<img src={"../../../public/logo.png"} />
				<Flex gap={4}>
					<Link to='/auth'>
						<Button colorScheme={"blue"} size={"sm"}>
							Login
						</Button>
					</Link>
					<Link to='/auth'>
						<Button variant={"outline"} size={"sm"}>
							Signup
						</Button>
					</Link>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Navbar;
