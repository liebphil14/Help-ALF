function findSpaceship(map) {

    const rows = map.split("\n");

    for (let i = 0; i < rows.length; i++) {

        const x = rows[i].indexOf("X");

        if (x !== -1) {

            const y = rows.length - 1 - i;

            return [x, y];
        }
    }
}