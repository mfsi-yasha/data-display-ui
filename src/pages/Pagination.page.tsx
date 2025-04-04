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
	const [currentPageCustom1, setCurrentPageCustom1] = useState(1);
	const [currentPageCustom2, setCurrentPageCustom2] = useState(1);
	const [currentPageCustom3, setCurrentPageCustom3] = useState(1);

	const handlePageChangeDefault = (page: number) => {
		setCurrentPageDefault(page);
	};

	const handlePageChangeMinimal = (page: number) => {
		setCurrentPageMinimal(page);
	};

	const handlePageChangeDots = (page: number) => {
		setCurrentPageDots(page);
	};

	const handlePageChangeCustom1 = (page: number) => {
		setCurrentPageCustom1(page);
	};
	const handlePageChangeCustom2 = (page: number) => {
		setCurrentPageCustom2(page);
	};
	const handlePageChangeCustom3 = (page: number) => {
		setCurrentPageCustom3(page);
	};

	const commonProps: Omit<PaginationProps, "currentPage" | "onPageChange"> = {
		totalPages: 15,
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
							color="gray"
							borderRadius="full"
							activeColor="blue"
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
							color="gray"
							borderRadius="full"
							activeColor="blue"
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
							color="gray"
							borderRadius="full"
							activeColor="blue"
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
							currentPage={currentPageCustom1}
							onPageChange={handlePageChangeCustom1}
							color="red"
							activeColor="green"
							borderRadius="small"
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
							currentPage={currentPageCustom2}
							onPageChange={handlePageChangeCustom2}
							alignment="start"
							color="violet"
							activeColor="orange"
							borderRadius="medium"
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
							currentPage={currentPageCustom3}
							onPageChange={handlePageChangeCustom3}
							alignment="end"
							color="green"
							activeColor="indigo"
							borderRadius="none"
						/>
					</Flex>
				</Card>
			</Flex>
		</div>
	);
};

export default PaginationPage;
