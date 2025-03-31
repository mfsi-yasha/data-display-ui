import { Link } from "react-router";
import Table from "src/features/Table/Table";

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
			<Table />
		</div>
	);
}

export default TablesPage;
