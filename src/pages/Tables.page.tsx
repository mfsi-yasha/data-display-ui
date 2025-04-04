import { Flex } from "@radix-ui/themes";
import { useCallback, useMemo, useState } from "react";
import { Link } from "react-router";
import Table, { TableSortBy } from "src/features/Table/Table";
import tableStatic from "src/data/table.static";

const useTableVarient = () => {
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

	return { currentPage, setCurrentPage, headings, data, handleApplySort };
};

const TableV1 = () => {
	const { currentPage, setCurrentPage, headings, data, handleApplySort } =
		useTableVarient();

	return (
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
	);
};

const TableV2 = () => {
	const { currentPage, setCurrentPage, headings, data, handleApplySort } =
		useTableVarient();

	return (
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
	);
};

const TableV3 = () => {
	const { currentPage, setCurrentPage, headings, data, handleApplySort } =
		useTableVarient();

	return (
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
	);
};

const TableV4 = () => {
	const { currentPage, setCurrentPage, headings, data, handleApplySort } =
		useTableVarient();

	return (
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
	);
};

const TableV5 = () => {
	const { currentPage, setCurrentPage, headings, data, handleApplySort } =
		useTableVarient();

	return (
		<Table
			headings={headings}
			data={data}
			applySort={handleApplySort}
			appearance="light"
			variant="surface"
			headingVariant="row"
			style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
			currentPage={currentPage}
			totalPages={15}
			onPageChange={setCurrentPage}
		/>
	);
};

const TableV6 = () => {
	const { currentPage, setCurrentPage, headings, data, handleApplySort } =
		useTableVarient();

	return (
		<Table
			headings={headings}
			data={data}
			applySort={handleApplySort}
			appearance="dark"
			variant="surface"
			headingVariant="row"
			style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
			currentPage={currentPage}
			totalPages={15}
			onPageChange={setCurrentPage}
		/>
	);
};

function TablesPage() {
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
				<TableV1 />
				<TableV2 />
				<TableV3 />
				<TableV4 />
				<TableV5 />
				<TableV6 />
			</Flex>
		</div>
	);
}

export default TablesPage;
