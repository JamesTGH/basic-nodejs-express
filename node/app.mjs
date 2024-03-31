import 'dotenv/config';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { PORT } = process.env;

const app = express();

app.locals.pretty = true;
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('trust proxy', true);
app.disable('x-powered-by');

app.listen(PORT, () => { 
	console.log(`The NodeJS application (${path.basename(__dirname)}) is running on port ${PORT};`);
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});