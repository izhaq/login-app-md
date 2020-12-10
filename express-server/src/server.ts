import { appInstance } from './app/app';
import * as http from 'http';
const PORT = 3000;

http.createServer(appInstance.getAppConfigs()).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})
