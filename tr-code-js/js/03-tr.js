{/**                  Matrix                */
    const matrix = [
        [1, 2],
        [3, 4],
    ];

    function flatArray(matrix) {
        const items = [];
        for (const row of matrix) {
            for (const item of row) {
                items.push(item);
            }
        }
        return items;
    }
    // console.log(flatArray(matrix));
}

{   /**       map()        */

    const cb = (el, idx, arr) => [
        (el, idx, arr)
    ];

    const mapFunction = (array) => { };
}