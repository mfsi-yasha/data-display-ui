import { Flex } from "@radix-ui/themes";
import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router";
import Table, { TableSortBy } from "src/features/Table/Table";
import tableStatic from "src/data/table.static";

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
				gap="9"
			>
				<Table
					headings={headings}
					data={data}
					applySort={handleApplySort}
					appearance="light"
					variant="ghost"
					style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
					currentPage={currentPage}
					totalPages={15}
					onPageChange={setCurrentPage}
				/>
				<Table
					headings={headings}
					data={data}
					applySort={handleApplySort}
					appearance="light"
					variant="surface"
					style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
					currentPage={currentPage}
					totalPages={15}
					onPageChange={setCurrentPage}
				/>
				<Table
					headings={headings}
					data={data}
					applySort={handleApplySort}
					appearance="dark"
					variant="ghost"
					style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
					currentPage={currentPage}
					totalPages={15}
					onPageChange={setCurrentPage}
				/>
				<Table
					headings={headings}
					data={data}
					applySort={handleApplySort}
					appearance="dark"
					variant="surface"
					style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
					currentPage={currentPage}
					totalPages={15}
					onPageChange={setCurrentPage}
				/>
			</Flex>
		</div>
	);
}

export default TablesPage;
