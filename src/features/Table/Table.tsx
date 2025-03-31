import { useMemo } from "react";
import styles from "./Table.module.scss";

export interface TableProps {
	allClassNames?: {
		tableCN?: string;
		tableCNFixed?: string;
		theadCN?: string;
		theadCNFixed?: string;
		tbodyCN?: string;
		tbodyCNFixed?: string;
		trCN?: string;
		trCNFixed?: string;
		thCN?: string;
		thCNFixed?: string;
		tdCN?: string;
		tdCNFixed?: string;
	};
}

function Table({ allClassNames }: TableProps) {
	const data = [
		{ name: "Soumya", age: 26, country: "Odisha" },
		{ name: "Aditya", age: 25, country: "Bihar" },
		{ name: "Sourav", age: 24, country: "MP" },
		{ name: "Akash", age: 27, country: "UP" },
	];

	const reslovedClassNames = useMemo(() => {
		return {
			tableCN: `${allClassNames?.tableCNFixed ?? styles.tableCN ?? ""} ${allClassNames?.tableCN ?? ""}`,
			theadCN: `${allClassNames?.theadCNFixed ?? styles.theadCN ?? ""} ${allClassNames?.theadCN ?? ""}`,
			tbodyCN: `${allClassNames?.tbodyCNFixed ?? styles.tbodyCN ?? ""} ${allClassNames?.tbodyCN ?? ""}`,
			trCN: `${allClassNames?.trCNFixed ?? styles.trCN ?? ""} ${allClassNames?.trCN ?? ""}`,
			thCN: `${allClassNames?.thCNFixed ?? styles.thCN ?? ""} ${allClassNames?.thCN ?? ""}`,
			tdCN: `${allClassNames?.tdCNFixed ?? styles.tdCN ?? ""} ${allClassNames?.tdCN ?? ""}`,
		};
	}, [allClassNames]);

	return (
		<table className={reslovedClassNames.tableCN}>
			<thead className={reslovedClassNames.theadCN}>
				<tr className={reslovedClassNames.trCN}>
					<th className={reslovedClassNames.thCN}>Name</th>
					<th className={`${reslovedClassNames.thCN} ${styles.asc}`}>Age</th>
					<th className={`${reslovedClassNames.thCN} ${styles.desc}`}>State</th>
				</tr>
			</thead>
			<tbody className={reslovedClassNames.tbodyCN}>
				{data.map((row, index) => (
					<tr
						className={reslovedClassNames.trCN}
						key={index}
					>
						<td className={reslovedClassNames.tdCN}>{row.name}</td>
						<td className={reslovedClassNames.tdCN}>{row.age}</td>
						<td className={reslovedClassNames.tdCN}>{row.country}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
