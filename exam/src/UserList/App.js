import React from "react";
import loadingIndicator from "../assets/loading.svg";
import styles from "./App.module.scss";
import UserList from "./UserList";

const App = () => {
	const [users, setUsers] = React.useState([]);
	const [link, setLink] = React.useState(
		"http://localhost:5000/persons?_page=1&_limit=2"
	);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		if (link) {
			setLoading(true);
			fetch(link)
				.then(res => res.json())
				.then(res => {
					setUsers(users => [...users, ...res.data]);
					setLoading(false);
					setLink(res.pagination.next);
				});
		}
	}, [link]);

	return (
		<>
			<UserList users={users} />
			<div className={styles.card} />
			{loading ? (
				<div className={styles.container}>
					<img src={loadingIndicator} />
				</div>
			) : null}
		</>
	);
};

export default App;
