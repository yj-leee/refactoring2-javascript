import invoices from './invoices.json';
import plays from './plays.json';

import { statement } from './01/1-4/statement.js';

const result = statement(invoices[0], plays);

console.log(result);
