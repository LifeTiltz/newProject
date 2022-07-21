const isValueMatches = (leftcard, rightcard) => {
  if (typeof leftcard !== "object" || typeof rightcard !== "object") return false
  if (leftcard == null || rightcard == null) return false
  if (leftcard.value == null || rightcard.value == null) return false

  if (leftcard.value === rightcard.value) {
    return true;
  }

  return false;
}
module.exports = isValueMatches;