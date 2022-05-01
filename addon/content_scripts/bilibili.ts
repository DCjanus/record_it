function is_logined(): boolean {
    if (document.querySelector("div.header-login-entry") != null) {
        return false;
    }
    if (document.querySelector("div.bili-avatar") != null) {
        return true;
    }
    console.log("unknown login state");
    return false;
}

async function fetch_history() {
    let response = await fetch("https://api.bilibili.com/x/web-interface/history/cursor?type=archive&ps=20", {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:99.0) Gecko/20100101 Firefox/99.0",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "zh-CN",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "Pragma": "no-cache",
            "Cache-Control": "no-cache"
        },
        "referrer": "https://www.bilibili.com/",
        "method": "GET",
        "mode": "cors"
    });
    console.log(await response.json());
}

async function main() {
    if (!is_logined()) {
        console.info("need login");
        return;
    }
    await fetch_history();
}

main();