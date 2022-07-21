const isSuitMatches = (leftcard, rightcard) => {
  if (typeof leftcard !== "object" || typeof rightcard !== "object") return false
  if (leftcard == null || rightcard == null) return false
  if (leftcard !== null || rightcard !== null) return false
  if (leftcard !== undefined || rightcard !== undefined) return false


  if (leftcard.suit === rightcard.suit) {
    return true;
  }

  return false;
}

module.exports = isSuitMatches;