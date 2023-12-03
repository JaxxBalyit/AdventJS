function manufacture(gifts, materials) {
    const giftsThatCanBeMade = gifts.filter(gift => {
        const giftLetters = gift.split('')
        const giftLettersThatCanBeMade = giftLetters.filter(letter => materials.includes(letter));
        return giftLettersThatCanBeMade.length === giftLetters.length
    });
    return giftsThatCanBeMade
}