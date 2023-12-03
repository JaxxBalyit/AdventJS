function findFirstRepeated(gifts) {
    let repeated = []
    for (let i = 0; i < gifts.length; i++) {
        if (gifts.indexOf(gifts[i]) !== i) {
            repeated.push(gifts[i])
        }
    }
    if (repeated.length === 0) {
        return -1
    } else {
        return repeated[0]
    }
}