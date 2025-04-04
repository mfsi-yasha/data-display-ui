import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "src/pages/Home.page";
import TablesPage from "src/pages/Tables.page";

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
