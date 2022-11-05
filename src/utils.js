export function prettyCurrency(amount) {
  return parseFloat(amount).toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'UZS',
    minimumFractionDigits: 0,
  })
}

export function shortTitle(title) {
  if (title.length > 20) {
    return title.slice(0, 20) + '...'
  }
  return title
}
