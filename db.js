
const { getMaxListeners } = require('events');
const { Pool } = require('pg');
const { APP_BUILD_MANIFEST } = require("next/dist/shared/lib/constants");

const config = {

    user:'postgres',
    host:'localhost',
    password: '12qwaszx',
    database: 'NICVE-RI'
};

const pool = new Pool(config);

const GetUser = async () => {

    const res = await pool.query('select * from registrousuarios');
    console.log(res.rows);
    pool.end();

};

const insertUser = async () => {

    const consulta = 'INSERT INTO registrousuarios (nombreusuarios, correousuarios, claveusuarios) VALUES($1, $2, $3)'
    const values = ['Edgar Quiñonez', 'edqcov@gmail.com', '123456']

    const res = await pool.query(consulta, values);
    console.log(res);
    pool.end();

} 

const deleteUser = async () => {

    const text = 'DELETE FROM registrousuarios WHERE nombreusuarios = $1';
    const value = ['Edgar Quiñonez'];

    const res = await pool.query(text,value);
    console.log(res);
}


{/*GetUser();*/}
{/*insertUser();*/}
deleteUser();
