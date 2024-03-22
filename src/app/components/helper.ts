export function formatCurrency(value: number | null | undefined): string {
  if (value === undefined || value === null) {
    return "";
  }
  const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formattedValue}đ`;
}
