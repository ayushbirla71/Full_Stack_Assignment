import React, { useState } from "react";
import "./home.css";
import fetchApi from "../api/Api";
import ExchangeRate from "./ExchangeRate";
import FetchList from "./FetchList";

const Home = () => {
  let [fetchList, setFetchList] = useState([]);
  let [Currency, setCurrency] = useState([]);
  let [CurrencyValue, setCurrencyValue] = useState({
    max_value: "",
    min_value: "",
  });

  let [input, setinput] = useState({
    to: "INR",
    from: "KRW",
    amount: 1,
  });

  const onChange = ({ target: { name, value } }) => {
    if (name === "amount") {
      if (value > -1) {
        return setinput({ ...input, amount: value });
      }
    } else if (name === "to") {
      return setinput({ ...input, to: value });
    } else if (name === "from") {
      return setinput({ ...input, from: value });
    } else return input;
  };

  const fnHandleSubmit = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (type) => {
    if (type == "Exchange") {
      let { data } = await fetchApi(input, "currency-exchange");

      setCurrency(data);
      setFetchList([...fetchList, ...data]);
      openForm("exchangeForm");

      console.log(data);
    } else if (type === "Convert") {
      let data = await fetchApi(input, "convert");
      setCurrencyValue(data);
    }
  };

  function openForm(type) {
    if(type =='convertForm'){
      document.getElementById('convertForm').style.display = "block";
      document.getElementById('main').style.display = "none";
    }
    else {
      document.getElementById('exchangeForm').style.display = "block";
      document.getElementById('main').style.display = "none";

    }
  }

  function closeForm(type) {
    if(type =='convertForm'){
      document.getElementById(type).style.display = "none";
      document.getElementById('main').style.display = "block";

    }
    else{

      document.getElementById(type).style.display = "none";
      document.getElementById('main').style.display = "block";
    }
  }

  return (
    <div style={{ display: "flex" }}>
      <div
        id="exchangeForm"
        className="form-popup"
        style={{ display: "none", backgroundColor: "white" }}
      >
        <button onClick={()=> closeForm("exchangeForm")}>close</button>
        <ExchangeRate Currency={Currency} />
      </div>

      <div id="main"
        style={{ display: "block" }} className="wrapper">
        <header>Currency Converter</header>
        <form onSubmit={fnHandleSubmit}>
          <div className="amount">
            <p>Enter Amount</p>
            <input
              type="number"
              onChange={onChange}
              value={input.amount}
              name="amount"
            />
          </div>
          <div className="drop-list">
            <div className="from">
              <p>From</p>
              <div className="select-box">
                <select name="from" onChange={onChange}>
                  <option value="KRW">KRW</option>
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="CNY">CNY</option>
                </select>
              </div>
            </div>
            <div className="icon">
              <i className="fas fa-exchange-alt"></i>
            </div>
            <div className="to">
              <p>To</p>
              <div className="select-box">
                <select name="to" onChange={onChange}>
                  <option value="INR">INR</option>
                  <option value="KRW">KRW</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="CNY">CNY</option>
                </select>
              </div>
            </div>
          </div>
          <div className="exchange-rate">Getting exchange rate...</div>
  
          <p>
            max exchange value : {CurrencyValue.max_value} <br />
            min exchange value : {CurrencyValue.min_value}
          </p>
          <button
            onClick={() => {
              onSubmit("Exchange");
            }}
          >
            Get Exchange Rate
          </button>

          <button
            onClick={() => {
              onSubmit("Convert");
            }}
          >
            convert
          </button>

          <button onClick={()=>openForm("convertForm")}>All fetch request list</button>
        </form>
      </div>

      <div
        id="convertForm"
        className="form-popup"
        style={{ display: "none", backgroundColor: "white" }}
      >
         <button onClick={()=> closeForm("convertForm")}>close</button>
        <FetchList fetchList={fetchList} />
      </div>
    </div>
  );
};

export default Home;
