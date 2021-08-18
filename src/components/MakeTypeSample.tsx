import { gql, useQuery } from "@apollo/client";
import type { FC } from "react";

type User = {
	id: number;
	name: string;
};

type Users = {
	allUsers: User[];
};

export const MakeTypeSample: FC = () => {
	// 自分で戻り値について型定義しないといけない
	const { loading, error, data } = useQuery<Users>(GET_ROCKET_INVENTORY);

	if (loading) {
		<div>loading...</div>;
	}
	if (error) {
		<div>Error</div>;
	}

	return (
		<div key="rate">
			<h3>default-apollo-hook-query</h3>
			<table>
				<thead>
					<tr>
						<th>UID</th>
						<th>UserName</th>
					</tr>
				</thead>
				<tbody>
					{data?.allUsers?.map((user, index) => {
						return (
							<tr key={index}>
								<td>{user?.id}</td>
								<td>{user?.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export const GET_ROCKET_INVENTORY = gql`
	query Users {
		allUsers {
			id
			name
		}
	}
`;
