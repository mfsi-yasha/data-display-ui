const headings = [
	{ label: "ID", key: "id", sort: "asc" as "asc" | "desc" },
	{ label: "Name", key: "name", sort: "asc" as "asc" | "desc" },
	{ label: "City", key: "city", sort: "asc" as "asc" | "desc" },
	{ label: "Country", key: "country", sort: "asc" as "asc" | "desc" },
	{ label: "Email", key: "email", sort: "asc" as "asc" | "desc" },
	{ label: "Phone", key: "phone", sort: "asc" as "asc" | "desc" },
];

function getPageData(pageNumber: number) {
	const data: Array<Record<string, string>> = [];
	for (let i = 0; i < 10; i++) {
		const id = `${pageNumber}_${i + 1}`;
		data.push({
			id,
			name: `User ${id}`,
			city: `City ${id}`,
			country: `Country ${id}`,
			email: `user${id}@example.com`,
			phone: `${Math.floor(Math.random() * 900) + 100}-${
				Math.floor(Math.random() * 900) + 100
			}-${Math.floor(Math.random() * 9000) + 1000}`,
		});
	}
	return data;
}

export default { headings, getPageData };
