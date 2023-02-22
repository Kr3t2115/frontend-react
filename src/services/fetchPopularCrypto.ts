export default async function FetchPopularCrypto() {
  return await fetch(
    'https://www.binance.com/api/v3/ticker?symbols=["BTCUSDT","ETHUSDT","BNBUSDT","ETCUSDT","DOGEUSDT"]'
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
