var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}

let picture = [
    "/favicon/favicon1.ico",
    "/favicon/favicon2.ico",
    "/favicon/favicon3.ico",
    "/favicon/favicon5.ico",
]

state = 1

function change() {
    link.href = picture[state++ % picture.length]
}

setInterval(change, 800)