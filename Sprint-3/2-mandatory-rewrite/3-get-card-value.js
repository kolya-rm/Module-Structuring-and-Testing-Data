function getCardValue(card) {
    const rank = card.slice(0, card.length - 1);
    switch (rank) {
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return Number(rank);
      case "10":
      case "J":
      case "Q":
      case "K":
        return 10;
      case "A":
        return 11;
      default:
        throw new Error("Invalid card rank");
    }
}
module.exports = getCardValue;