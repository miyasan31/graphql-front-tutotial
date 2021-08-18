import { gql } from "@apollo/client";
import type { FC } from "react";
import { usePostsQuery } from "src/apollo/gql";

export const CodegenUseSample: FC = () => {
	// hooksを自動で生成してくれる（しかも戻り値の型定義済み）
	const { data, loading, error } = usePostsQuery();

	if (loading) {
		<div>loading...</div>;
	}

	if (error) {
		<div>Error</div>;
	}

	return (
		<div key="rate">
			<h3>graphql-code-generator</h3>
			<table>
				<thead>
					<tr>
						<th>PID</th>
						<th>PostTitle</th>
						<th>PostViews</th>
						<th>CreateUId</th>
					</tr>
				</thead>
				<tbody>
					{data?.allPosts?.map((posts, index) => {
						return (
							<tr key={index}>
								<td>{posts?.id}</td>
								<td>{posts?.title}</td>
								<td>{posts?.views}</td>
								<td>{posts?.userId}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

// 変数としてexportすることもできるけど、ここで定義してれば勝手にcodegenが探してこのクエリーに関する型定義ファイル作ってくれる
gql`
	query Posts {
		allPosts {
			id
			title
			views
			userId
		}
	}
`;
