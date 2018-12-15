import {useKoaServer} from "routing-controllers"
import "reflect-metadata"
import * as Koa from 'koa'
async function start() {
    const app = new Koa()
    useKoaServer(app, {
        controllers: [__dirname + "/controllers/**/*.js"],
        validation: true,
        defaultErrorHandler: true,
    }).listen(4000, () => {
        console.log(`server listen 4000 port`)
    })
}
start().then(() => {})
