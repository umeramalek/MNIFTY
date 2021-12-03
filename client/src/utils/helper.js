export function pluralize(name, count) {
    if (count === 1) {
        return name;
    }
    return `${name}s`;
}

export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("nft-shop", 1);
        let db;
        let tx;
        let store;
        request.onupgradeneeded = function(e) {
            const db = request.result;
            db.createObjectStore("products", { keyPath: "_id "});
            db.createObjectStore("categories", { keyPath: "_id" });
            db.createObjectStore("cart", { keyPath: "_id" });
        };

        request.onerror = function(e) {
            console.log("Sorry but it seems there was an error");
        };

        request.onsuccess = function(e) {
            db = request.result;
            tx = db.transaction(storeName, "readwrite");
            store = tx.objectStore(storeName);

            db.onerror = function(e) {
                console.log("error with", e);
            };
        }
    })
}