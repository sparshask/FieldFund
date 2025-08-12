module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },

  compilers: {
    solc: {
      version: "0.7.6", // Match your pragma: >=0.6.0 <0.8.0
    }
  }
};
