module.exports = {
    hosts: {
        ts1: process.env.TS1_HOST || "localhost",
        ts2: process.env.TS2_HOST || "localhost",
        ts3: process.env.TS3_HOST || "localhost"
    },
    ports: {
        ts1: process.env.TS1_PORT || "3001",
        ts2: process.env.TS2_PORT || "3002",
        ts3: process.env.TS3_PORT || "3003"
    }
}