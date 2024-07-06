/*const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shakira_db'
}*/

const config = {
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DB
}

export default config;
