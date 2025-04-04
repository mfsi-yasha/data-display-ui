import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { Flex, Table as TableR } from "@radix-ui/themes";
import { useCallback } from "react";

export type TableSortBy = "asc" | "desc";
export interface TableProps {
	headings: Array<{
		label: React.ReactNode;
		key: string;
		sort: TableSortBy;
	}>;
	data: Array<Record<string, React.ReactNode>>;
	applySort: (key: string, value: TableSortBy) => void;
}

function Table({ headings, data, applySort }: TableProps) {
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

	return (
		<TableR.Root
			variant="surface"
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
							<Flex
								gap="2"
								justify="start"
								align="center"
							>
								<span>{heading.label}</span>
								{heading.sort === "asc" ? (
									<TriangleUpIcon />
								) : (
									<TriangleDownIcon />
								)}
							</Flex>
						</TableR.ColumnHeaderCell>
					))}
				</TableR.Row>
			</TableR.Header>

			<TableR.Body>
				{data.map((value, index) => (
					<TableR.Row key={index}>
						{headings.map(heading => (
							<TableR.Cell key={index + heading.key}>
								{value[heading.key]}
							</TableR.Cell>
						))}
					</TableR.Row>
				))}
			</TableR.Body>
		</TableR.Root>
	);
}

export default Table;
