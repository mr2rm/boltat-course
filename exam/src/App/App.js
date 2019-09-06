import React, { lazy, Suspense } from "react";
import styles from "./App.module.scss";
import loadingIndicator from "../assets/loading.svg";
import UserCard from "../UserCard";
import UserList from "../UserList";
import { ReactComponent as BackButton } from "../assets/back.svg";
import {
	Route,
	Redirect,
	BrowserRouter as Router,
	Link,
	Switch
} from "react-router-dom";
import GoBack from "./GoBack";
import PrivateRoute from "../PrivateRoute";
import Auth, { useAuth } from "../Auth";
const AddUser = lazy(() => import("../AddUser"));

const UsersContext = React.createContext();

export function useUsers() {
	const { users, ...rest } = React.useContext(UsersContext);
	return {
		users,
		getPersonById: pId => users.find(user => user.id === pId),
		...rest
	};
}

const SpotifyCallback = ({ location }) => {
	const { login } = useAuth();
	const accessToken = location.hash
		.slice(1)
		.split("&")[0]
		.split("=")[1];
	login(accessToken);
	return <Redirect to="/users" />;
};

const Homepage = () => {
	const { logout } = useAuth();
	return (
		<div>
			<h1 style={{ marginTop: 0 }}>Homepage</h1>
			<Link to={"/users"}>See users</Link>
			<br />
			<a href="https://accounts.spotify.com/authorize?client_id=451764dd4587472590d910723e9e2beb&redirect_uri=http://localhost:3000/callback/&scope=user-read-private%20user-read-email&response_type=token">
				Login
			</a>
			<br />
			<a href={undefined} onClick={() => logout()}>
				Logout
			</a>
		</div>
	);
};

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

	const updateUser = newUser => {
		setUsers(prevUsers =>
			prevUsers.map(user =>
				user.id !== newUser.id ? user : { ...user, ...newUser }
			)
		);
	};

	const addUser = newUser => {
		setUsers(prevUsers => prevUsers.concat(newUser));
	};

	return (
		<Auth>
			<Router>
				<UsersContext.Provider value={{ users, updateUser, addUser }}>
					<Suspense fallback={<h1>Loading...</h1>}>
						<Switch>
							<Route exact={true} path="/" component={Homepage} />
							<Route path="/callback" component={SpotifyCallback} />
							<PrivateRoute
								exact={true}
								path="/users"
								render={() => (
									<>
										<UserList users={users} />
										<div className={styles.container}>
											<Link to="/users/add">
												<div
													className={`${styles.card} ${styles.hoverable}`}
												>
													+ Add user
												</div>
											</Link>
										</div>
										{loading ? (
											<div className={styles.container}>
												<img src={loadingIndicator} />
											</div>
										) : null}
									</>
								)}
							/>
							<Route path="/users/add" component={AddUser} />
							<Route
								path="/user/:userId"
								render={({ match }) => {
									const userId = Number(match.params.userId);
									return (
										<>
											<GoBack>
												<BackButton
													className={styles.back}
												/>
											</GoBack>
											<UserCard userId={userId} />
										</>
									);
								}}
								condition={window.location.pathname.startsWith(
									"/user/"
								)}
							/>
							<Route path="/" render={() => <div>404</div>} />
						</Switch>
					</Suspense>
				</UsersContext.Provider>
			</Router>
		</Auth>
	);
};

export default App;
