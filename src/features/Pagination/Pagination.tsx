import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Flex, Button, Text } from "@radix-ui/themes";
import { useCallback, useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";

export interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (value: number) => void;
}

function Pagination({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) {
	const isMobile = useMediaQuery({ maxWidth: 768 });

	useEffect(() => {
		console.log(isMobile);
	}, [isMobile]);

	const pageNumbers = useMemo(() => {
		const pn = [];
		const maxVisiblePages = 5; // Adjusted based on isMobile
		const maxAdjacentPages = isMobile ? 1 : 2; // Adjusted based on isMobile

		if (totalPages <= maxVisiblePages) {
			for (let i = 1; i <= totalPages; i++) {
				pn.push(i);
			}
		} else {
			if (currentPage <= maxAdjacentPages + 1) {
				for (let i = 1; i <= maxVisiblePages - 2; i++) {
					pn.push(i);
				}
				pn.push("...", totalPages);
			} else if (currentPage >= totalPages - maxAdjacentPages) {
				pn.push(1, "...");
				for (let i = totalPages - (maxVisiblePages - 3); i <= totalPages; i++) {
					pn.push(i);
				}
			} else {
				pn.push(1, "...");
				for (
					let i = currentPage - maxAdjacentPages;
					i <= currentPage + maxAdjacentPages;
					i++
				) {
					pn.push(i);
				}
				pn.push("...", totalPages);
			}
		}
		return pn;
	}, [currentPage, totalPages, isMobile]);

	const handlePageClick = useCallback(
		(page: string) => {
			if (page === "<") {
				onPageChange(currentPage - 1);
			} else if (page === ">") {
				onPageChange(currentPage + 1);
			} else if (page === "...") {
				return;
			} else {
				onPageChange(parseInt(page));
			}
		},
		[currentPage, onPageChange],
	);

	return (
		<Flex
			align="center"
			justify="end"
			gap={isMobile ? "1" : "2"}
		>
			<Button
				variant="soft"
				color="indigo"
				radius="full"
				onClick={() => handlePageClick("<")}
				disabled={currentPage === 1}
				size={isMobile ? "1" : "2"}
			>
				<ChevronLeftIcon height={isMobile ? "15px" : "20px"} />
			</Button>
			{pageNumbers.map((page, index) => (
				<Button
					key={index}
					variant={currentPage === page ? "solid" : "soft"}
					color={currentPage === page ? "blue" : "gray"}
					radius="full"
					onClick={() => handlePageClick(page + "")}
					disabled={page === "..."}
					size={isMobile ? "1" : "2"}
				>
					<Text size={isMobile ? "1" : "2"}>{page}</Text>
				</Button>
			))}
			<Button
				variant="soft"
				color="indigo"
				radius="full"
				onClick={() => handlePageClick(">")}
				disabled={currentPage === totalPages}
				size={isMobile ? "1" : "2"}
			>
				<ChevronRightIcon height={isMobile ? "15px" : "20px"} />
			</Button>
		</Flex>
	);
}

export default Pagination;
