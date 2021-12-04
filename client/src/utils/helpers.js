// export function pluralize(name, count) {
//     if (count === 1) {
//         return name;
//     }
//     return `${name}s`;
// }

export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {

        //                For some reason, having this as anything else just doesn't work?
        //                                     V
        const request = window.indexedDB.open("Mnifty", 1);
        let db;
        let tx;
        let store;
        request.onupgradeneeded = function (e) {
            console.log("EYOO ON UPGRADE NEEDED, FOOOLS")
            const db = e.target.result;
            console.log(db)
            // const db = request.result;
            // db.createObjectStore("products", { keyPath: "_id " });
            // db.createObjectStore("categories", { keyPath: "_id" });
            db.createObjectStore("cart", { keyPath: "_id" });
            
        };

        request.onerror = function (e) {
            console.log("Sorry but it seems there was an error");
        };

        request.onsuccess = function (e) {
            console.log("same thing but on ssuccess.")
            // db = request.result;
            // tx = db.transaction(storeName, "readwrite");
            // store = tx.objectStore(storeName);

            // db.onerror = function (e) {
            //     console.log("error with", e);
            // };

            // switch (method) {
            //     case "put":
            //         store.put(object);
            //         resolve(object);
            //         break;
            //     case "get":
            //         const all = store.getAll();
            //         all.onsuccess = function () {
            //             resolve(all.result);
            //         };
            //         break;
            //     case "delete":
            //         store.delete(object._id);
            //         break;
            //     default:
            //         console.log("No Valid Method detected");
            //         break;
            // }

            // tx.oncomplete = function () {
            //     db.close();
            // };
        };
    });
}