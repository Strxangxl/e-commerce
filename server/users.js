import bcrypt from "bcrypt";

const users = [
	{
		name: 'Admin',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123', 10),
		isAdmin: true
	},
	{
		name: 'Gagan',
		email: 'gagan@example.com',
		password: bcrypt.hashSync('123', 10),
		isAdmin: false
	},
]

export default users;