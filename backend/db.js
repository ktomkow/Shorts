const { Client } = require('pg');
var connectionString =
  'postgres://username:password@192.168.0.168:5432/shorts';

const client = new Client({
  connectionString: connectionString,
});

(async () => {
  try {
    await client.connect();
    const res = await client.query('SELECT * FROM public."List"');
    const data = res.rows;
    await client.end();
    console.log(data);
  } catch (e) {
    console.error('error');
    console.error(e);
  }
})();
