import * as path from 'path';
import * as http from 'http';
import {type DefaultEventsMap, Server} from "socket.io";
import express, {type Request, type Response} from "express";
import type {ClientEvents, ServerEvents, SocketData} from "./types/server.ts";
import { fileURLToPath } from 'url';

// Universal __dirname support for both tsx/ESM and esbuild/CJS bundles
function getDirName() {
    if(typeof import.meta.dirname === 'string')
        return import.meta.dirname;
    if(typeof __dirname !== 'undefined')
        return __dirname;
    return path.dirname(fileURLToPath(import.meta.url));
}

const _dirname = getDirName();

const app = express();
const server = http.createServer(app);
const io = new Server<ClientEvents, ServerEvents, DefaultEventsMap, SocketData>(server);
const port = 3080;

app.use(express.static(path.join(_dirname, '..', 'frontend')));
app.use(express.json());

app.get(/\w*/, function (_: Request, res:Response) {
    res.sendFile(path.join(_dirname, '..', 'frontend', 'index.html'));
});

io.on("connection", socket => {
    console.log('  Client has connected:', socket.id);
    // manager.registerAuthenticationHandlers(socket);
});

console.log('Server started...');

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});