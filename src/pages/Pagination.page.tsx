import { useState } from "react";
import { Flex, Card } from "@radix-ui/themes";
import Pagination, {
	PaginationProps,
} from "src/features/Pagination/Pagination";
import { Link } from "react-router";

const PaginationPage = () => {
	const [currentPageDefault, setCurrentPageDefault] = useState(1);
	const [currentPageMinimal, setCurrentPageMinimal] = useState(1);
	const [currentPageDots, setCurrentPageDots] = useState(1);
	const [currentPageCustom, setCurrentPageCustom] = useState(1);

	const handlePageChangeDefault = (page: number) => {
		setCurrentPageDefault(page);
	};

	const handlePageChangeMinimal = (page: number) => {
		setCurrentPageMinimal(page);
	};

	const handlePageChangeDots = (page: number) => {
		setCurrentPageDots(page);
	};

	const handlePageChangeCustom = (page: number) => {
		setCurrentPageCustom(page);
	};

	const commonProps: Omit<PaginationProps, "currentPage" | "onPageChange"> = {
		totalPages: 15,
		color: "gray",
		borderRadius: "full",
		activeColor: "blue",
		alignment: "center",
	};

	return (
		<div
			style={{
				padding: "1rem",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<h1 style={{ marginTop: "0" }}>Pagination</h1>
				<Link to={"/"}>Home</Link>
			</div>
			<Flex
				direction="column"
				gap="4"
			>
				<Card>
					<Flex
						direction="column"
						gap="2"
					>
						<Pagination
							{...commonProps}
							currentPage={currentPageDefault}
							onPageChange={handlePageChangeDefault}
						/>
					</Flex>
				</Card>

				<Card>
					<Flex
						direction="column"
						gap="2"
					>
						<Pagination
							{...commonProps}
							alignment="start"
							currentPage={currentPageMinimal}
							onPageChange={handlePageChangeMinimal}
						/>
					</Flex>
				</Card>

				<Card>
					<Flex
						direction="column"
						gap="2"
					>
						<Pagination
							{...commonProps}
							alignment="end"
							currentPage={currentPageDots}
							onPageChange={handlePageChangeDots}
						/>
					</Flex>
				</Card>

				<Card>
					<Flex
						direction="column"
						gap="2"
					>
						<Pagination
							{...commonProps}
							alignment="center"
							currentPage={currentPageCustom}
							onPageChange={handlePageChangeCustom}
							color="red"
							activeColor="green"
							borderRadius="small"
						/>
					</Flex>
				</Card>
			</Flex>
		</div>
	);
};

export default PaginationPage;
