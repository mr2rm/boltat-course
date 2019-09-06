import React from "react";
import { withRouter } from "react-router-dom";
import { useUsers } from "../App/App";
import { Formik, Field, ErrorMessage } from "formik";

const AddUser = ({ history }) => {
	const { addUser, users } = useUsers();
	const userOptions = users.map(user => (
		<option key={user.id} value={user.id}>
			{`${user.name} ${user.surName}`}
		</option>
	));
	const getSelectedValues = e =>
		Array.from(e.target.selectedOptions).map(option => Number(option.value));
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
							id: parseInt(Math.random() * 100000000),
							name: values.name,
							gender: values.gender,
							age: values.age,
							children: values.children,
							marriedTo: values.marriedTo
						});
						history.push("/users");
					}, 2000);
				}}
				initialValues={{
					name: "",
					gender: "male",
					age: 20
				}}
				render={({ handleSubmit, isSubmitting, setFieldValue }) => {
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
							<label>Married to</label>
							<Field
								component="select"
								name="marriedTo"
								onChange={e =>
									setFieldValue("marriedTo", getSelectedValues(e))
								}
								multiple={true}
							>
								{userOptions}
							</Field>
							<br />
							<br />
							<label>Children</label>
							<Field
								component="select"
								name="children"
								onChange={e =>
									setFieldValue("children", getSelectedValues(e))
								}
								multiple={true}
							>
								{userOptions}
							</Field>
							<br />
							<br />
							<input disabled={isSubmitting} type="submit" />
						</form>
					);
				}}
			></Formik>
		</div>
	);
};

export default withRouter(AddUser);
