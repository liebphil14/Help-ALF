function findSpaceship(map) {
    let count = 0;
    
    for (let i = 0; i < map.length; i++) {
        if(map[i] === "X") {
            count++;
        }
    }

    if (count === 0) {
        return "Spaceship lost forever";
    }
}