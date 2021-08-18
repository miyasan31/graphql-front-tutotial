import type { NextPage } from "next";
import Head from "next/head";
import { CodegenUseSample } from "src/components/CodegenUseSample";
import { MakeTypeSample } from "src/components/MakeTypeSample";
import styles from "src/styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<MakeTypeSample />
				<CodegenUseSample />
			</main>
		</div>
	);
};

// eslint-disable-next-line import/no-default-export
export default Home;
