const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

let dbinfo =
{
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1",
}
const selectAlluser = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    let sql = `select * from user`;

    const list = await connection.queryAsync(sql);
    await connection.endAsync();
    return list;
}

const addUser = async (user) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectionAsync();
    let sql = `insert into user(message) values ("?")`;
    await connection.addListener.queryAsync(sql, [user.message]);
    console.log("record added");
    await connection.endAsync();

};
module.exports = { selectAlluser, addUser };