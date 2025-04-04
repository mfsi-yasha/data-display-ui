import { Flex } from "@radix-ui/themes";
import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router";
import tableStatic from "src/data/table.static";
import Pagination from "src/features/Pagination/Pagination";
import Table, { TableSortBy } from "src/features/Table/Table";

function TablesPage() {
	const [currentPage, setCurrentPage] = useState(1);
	const [headings, setHeadings] = useState(tableStatic.headings);
	const data = useMemo(() => {
		return tableStatic.getPageData(currentPage);
	}, [currentPage]);

	const handleApplySort = useCallback(function (
		key: string,
		value: TableSortBy,
	) {
		setHeadings(v => {
			const index = v.findIndex(ele => ele.key === key);
			if (index >= 0) {
				v[index] = { ...v[index], sort: value };
				return [...v];
			}
			return v;
		});
	}, []);

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
				<h1 style={{ marginTop: "0" }}>Tables</h1>
				<Link to={"/"}>Home</Link>
			</div>
			<Flex
				direction="column"
				gap="2"
			>
				<Table
					headings={headings}
					data={data}
					applySort={handleApplySort}
				/>
				<Pagination
					currentPage={currentPage}
					totalPages={15}
					onPageChange={setCurrentPage}
				/>
			</Flex>
		</div>
	);
}

export default TablesPage;
