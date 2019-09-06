import React from "react";
import { withRouter } from "react-router-dom";
import { useUsers } from "../App/App";
import { Formik, Field, ErrorMessage } from "formik";

const AddUser = ({ history }) => {
	const { addUser, users } = useUsers();
	const availableSelection = [];
	return (
		<div style={{ padding: "20px" }} className="App">
			<Formik
				validate={values => {
					const errors = {};
					if (!values.name) {
						errors.name = "Name is required";
					}
					if (values.age > 200) {
						errors.age = "Age is too large";
					}
					return errors;
				}}
				onSubmit={values => {
					setTimeout(() => {
						addUser({
							id: Math.random() * 100000000,
							name: values.name,
							gender: values.gender,
							age: values.age,
							children: [],
							marriedTo: []
						});
						history.push("/users");
					}, 2000);
				}}
				initialValues={{
					name: "",
					gender: "male",
					age: 20,
					children: []
				}}
				render={({
					values,
					handleChange,
					errors,
					handleSubmit,
					isSubmitting,
					setFieldValue
				}) => {
					return (
						<form onSubmit={handleSubmit}>
							<label>Name</label>
							<Field name="name" type="text" />
							<ErrorMessage name="name" />
							<br />
							<br />
							<label>Gender</label>
							<Field type="radio" name="gender" value="male" />
							<label>male</label>
							<Field type="radio" name="gender" value="female" />
							<label>female</label>
							<ErrorMessage name="gender" />
							<br />
							<br />
							<label>Age</label>
							<Field type="number" name="age" />
							<ErrorMessage name="age" />
							<br />
							<br />
							<Field
								component="select"
								name="children"
								onChange={e =>
									setFieldValue(
										"children",
										Array.from(e.target.selectedOptions).map(
											option => option.value
										)
									)
								}
								multiple={true}
							>
								{users.map(user => (
									<option key={user.id} value={user.name}>
										{user.name}
									</option>
								))}
							</Field>
							<input disabled={isSubmitting} type="submit" />
						</form>
					);
				}}
			></Formik>
		</div>
	);
};

export default withRouter(AddUser);
