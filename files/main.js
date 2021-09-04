var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    setInterval(function () {
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: "Watching " + document.title.split("|")[0],
                state: document.title.split("|")[1],
                assets: {
                    large_image: "catsflix",
                    large_text: "Watching CatsFlix"
                },
                timestamps: {
                    start: timestamp
                }
            }
        })
    }, 3000);
})
client.login({ clientId: "845261756955754518" }).catch(console.error);
