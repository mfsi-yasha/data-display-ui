import { Link } from "react-router";

function HomePage() {
	return (
		<div style={{ padding: "1rem" }}>
			<h1 style={{ marginTop: "0" }}>UI Component Library</h1>
			<ul>
				<li>
					<h2>Data Display</h2>
					<ul>
						<li>
							<h4 style={{ cursor: "pointer" }}>
								<Link to={"/tables"}>Tables</Link>
							</h4>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default HomePage;
