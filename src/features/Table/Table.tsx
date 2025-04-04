import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { Flex, Table as TableR, Theme, ThemeProps } from "@radix-ui/themes";
import { useCallback } from "react";
import Pagination, { PaginationProps } from "../Pagination/Pagination";
import { motion } from "framer-motion";

export type TableSortBy = "asc" | "desc";
export interface TableProps {
	headings: Array<{
		label: React.ReactNode;
		key: string;
		sort: TableSortBy;
	}>;
	data: Array<Record<string, React.ReactNode>>;
	applySort: (key: string, value: TableSortBy) => void;
	variant?: "surface" | "ghost";
	headingVariant?: "row" | "column";
}

function TableColumnHeadings({
	headings,
	data,
	applySort,
	variant = "surface",
}: TableProps) {
	const handleSort: React.MouseEventHandler<HTMLElement> = useCallback(
		ev => {
			const target = ev.currentTarget;
			const key = target.getAttribute("data-key") as string;
			const currentSortValue = target.getAttribute(
				"data-sort-by",
			) as TableSortBy;

			applySort(key, currentSortValue === "asc" ? "desc" : "asc");
		},
		[applySort],
	);

	let animationCount = 1;

	return (
		<TableR.Root
			variant={variant}
			size="2"
		>
			<TableR.Header>
				<TableR.Row>
					{headings.map(heading => (
						<TableR.ColumnHeaderCell
							key={heading.key}
							style={{ cursor: "pointer" }}
							data-key={heading.key}
							data-sort-by={heading.sort}
							onClick={handleSort}
						>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: animationCount++ * 0.03 }}
							>
								<Flex
									gap="2"
									justify="between"
									align="center"
								>
									<span>{heading.label}</span>
									{heading.sort === "asc" ? (
										<TriangleUpIcon />
									) : (
										<TriangleDownIcon />
									)}
								</Flex>
							</motion.div>
						</TableR.ColumnHeaderCell>
					))}
				</TableR.Row>
			</TableR.Header>

			<TableR.Body>
				{data.map((value, index) => (
					<TableR.Row key={index}>
						{headings.map(heading => (
							<TableR.Cell key={index + heading.key}>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: animationCount++ * 0.03 }}
								>
									{value[heading.key]}
								</motion.div>
							</TableR.Cell>
						))}
					</TableR.Row>
				))}
			</TableR.Body>
		</TableR.Root>
	);
}

function TableRowHeadings({
	headings,
	data,
	applySort,
	variant = "surface",
}: TableProps) {
	const handleSort: React.MouseEventHandler<HTMLElement> = useCallback(
		ev => {
			const target = ev.currentTarget;
			const key = target.getAttribute("data-key") as string;
			const currentSortValue = target.getAttribute(
				"data-sort-by",
			) as TableSortBy;

			applySort(key, currentSortValue === "asc" ? "desc" : "asc");
		},
		[applySort],
	);

	let animationCount = 1;

	return (
		<TableR.Root
			variant={variant}
			size="2"
		>
			<TableR.Body>
				{headings.map(heading => (
					<TableR.Row key={heading.key}>
						<TableR.ColumnHeaderCell
							style={{
								cursor: "pointer",
								borderRight: "1px solid var(--gray-a5)",
							}}
							data-key={heading.key}
							data-sort-by={heading.sort}
							onClick={handleSort}
						>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, delay: animationCount++ * 0.03 }}
							>
								<Flex
									gap="2"
									justify="between"
									align="center"
								>
									<span>{heading.label}</span>
									{heading.sort === "asc" ? (
										<TriangleUpIcon />
									) : (
										<TriangleDownIcon />
									)}
								</Flex>
							</motion.div>
						</TableR.ColumnHeaderCell>
						{data.map((value, index) => (
							<TableR.Cell key={index + heading.key}>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: animationCount++ * 0.03 }}
								>
									{value[heading.key]}
								</motion.div>
							</TableR.Cell>
						))}
					</TableR.Row>
				))}
			</TableR.Body>
		</TableR.Root>
	);
}

function Table({
	accentColor,
	grayColor,
	panelBackground,
	scaling,
	radius,
	appearance,
	style,
	className,
	currentPage,
	totalPages,
	onPageChange,
	headingVariant = "column",
	...props
}: TableProps & {
	accentColor?: ThemeProps["accentColor"];
	grayColor?: ThemeProps["grayColor"];
	panelBackground?: ThemeProps["panelBackground"];
	scaling?: ThemeProps["scaling"];
	radius?: ThemeProps["radius"];
	appearance?: ThemeProps["appearance"];
	style?: React.CSSProperties;
	className?: string;
} & PaginationProps) {
	const tableComponent =
		headingVariant === "row" ? (
			<TableRowHeadings {...props} />
		) : (
			<TableColumnHeadings {...props} />
		);

	return (
		<Theme
			style={style}
			className={className}
			accentColor={accentColor}
			grayColor={grayColor}
			panelBackground={panelBackground}
			scaling={scaling}
			radius={radius}
			appearance={appearance}
		>
			<Flex
				direction="column"
				gap="2"
			>
				{tableComponent}
				<Pagination
					currentPage={currentPage}
					totalPages={15}
					onPageChange={onPageChange}
				/>
				<div></div>
			</Flex>
		</Theme>
	);
}

export default Table;
