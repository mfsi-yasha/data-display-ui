import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "src/pages/Home.page";
import TablesPage from "src/pages/Tables.page";
import PaginationPage from "src/pages/Pagination.page";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/tables"
					element={<TablesPage />}
				/>
				<Route
					path="/pagination"
					element={<PaginationPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
