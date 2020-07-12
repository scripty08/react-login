import { Server, IndexController } from '@scripty/server';

const init = async () => {
    let app = new Server();
    await app.addController(new IndexController({ title: '@scripty/login' }));
    app.start(3005);
};

init().catch((err) => {
    console.error(err.message);
});
