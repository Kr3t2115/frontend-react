import React, { useEffect, useState } from "react";
import "./home.css";

import FetchPopularCrypto from "../../services/fetchPopularCrypto";

interface CryptoInterface {
  symbol: string;
  openPrice: string;
  lastPrice: string;
  highPrice: string;
  priceChangePercent: string;
}

interface ArrayCryptoInterface extends Array<CryptoInterface> {}

export default function Home() {
  document.title = "Home Page";

  const [data, setData] = useState<ArrayCryptoInterface>([]);

  const [images, setImages] = useState<any>([]);

  useEffect(() => {
    FetchPopularCrypto().then((res) => {
      setData(res);
    });

    fetch("http://localhost/blog/imageXDDD/images.php")
      .then((response) => response.json())
      .then((data) => setImages(data));

    setInterval(() => {
      FetchPopularCrypto().then((res) => {
        setData(res);
      });
    }, 10000);
  }, []);

  return (
    <div>
      <h1>Popular Crypto</h1>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Open Price</th>
            <th scope="col">Last Price</th>
            <th scope="col">High Price</th>
            <th scope="col">Change 24h ($)</th>
          </tr>
        </thead>

        <tbody>
          {data.map((crypto) => {
            let indexOfName = crypto.symbol.search("USDT");

            let imageName = crypto.symbol.slice(0, indexOfName).toLowerCase();

            let imageLink = "";

            images.forEach((element: any) => {
              if (element.value == imageName) {
                imageLink = element.image;
              }
            });

            return (
              <tr>
                <td>
                  <img src={imageLink} alt={imageName + " logo"}></img>
                  {crypto.symbol}
                </td>
                <td>{Math.round(parseFloat(crypto.openPrice) * 100) / 100}$</td>
                <td className="center">
                  {Math.round(parseFloat(crypto.lastPrice) * 100) / 100}$
                </td>
                <td>{Math.round(parseFloat(crypto.highPrice) * 100) / 100}$</td>

                <td>
                  {Math.round(parseFloat(crypto.priceChangePercent) * 100) /
                    100}
                  {"%"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
