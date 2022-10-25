import React, { useState } from "react";
import classes from "./MyAssetList.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MyAssetList() {
  const [value, setValue] = useState('1');
  const [data, setData] = useState([
    {
      priceHigh: [
        {
          name: "삼성전자",
          code: 300020,
          profit: 111600,
          percent: 29,
          mean: 63200,
          now: 88000,
          many: 45,
          all: 3960000,
        },
        {
          name: "SK하이닉스",
          profit: -111600,
          code: 671021,
          percent: -29,
          mean: 63200,
          now: 88000,
          many: 45,
          all: 3960000,
        },
        {
          name: "LG디스플레이",
          profit: 111600,
          code: 582901,
          percent: 29,
          mean: 63200,
          now: 88000,
          many: 45,
          all: 3960000,
        },
      ],
    },
    {
      profitHigh: [
        {
          name: "삼성전자",
          code: 300020,
          profit: 111600,
          percent: 29,
          mean: 63200,
          now: 88000,
          many: 45,
          all: 3960000,
        },
        {
          name: "ggggg",
          profit: -111600,
          code: 671021,
          percent: -29,
          mean: 63200,
          now: 88000,
          many: 45,
          all: 3960000,
        },
        {
          name: "LG디스플레이",
          profit: 111600,
          code: 582901,
          percent: 29,
          mean: 63200,
          now: 88000,
          many: 45,
          all: 3960000,
        },
      ],
    },
    {
      profitLow: [
        {
          name: "삼성전자",
          code: 300020,
          profit: 111600,
          percent: 29,
          mean: 63200,
          now: 88000,
          many: 45,
          all: 3960000,
        },
        {
          name: "SK하이닉스",
          profit: -111600,
          code: 671021,
          percent: -29,
          mean: 63200,
          now: 88000,
          many: 45,
          all: 3960000,
        },
        {
          name: "ggggg",
          profit: 111600,
          code: 582901,
          percent: 29,
          mean: 63200,
          now: 88000,
          many: 45,
          all: 3960000,
        },
      ],
    },
  ]);
  function setDropdownData(value) {
    if (value === '1') {
      setExample(data[0]['priceHigh']);
    } else if (value === '2') {
      setExample(data[1]['profitHigh']);
    } else {
      setExample(data[2]['profitLow'])
    }
  }
  const handleValueChange = (event) => {
    setValue(event.target.value);
    setDropdownData(event.target.value)
  };

  const [ example, setExample ] = useState(data[0]['priceHigh'])
  function MyStockCard(stock) {
    function profitCheck() {
      if (stock.profit < 0) {
        return "#4D97ED";
      } else {
        return "#DD4956";
      }
    }
  const profitColor = profitCheck();
    return (
      <div className={classes.myStockCard}>
        <p>{stock.name}</p>
        <p>
          평가손익: <span style={{ color: profitColor }}>{stock.profit}</span>
        </p>
        <p>
          평가손익: <span style={{ color: profitColor }}>{stock.percent}%</span>
        </p>
        <p>{stock.mean}</p>
        <p>{stock.now}</p>
        <p>{stock.all}</p>
      </div>
    );
  }
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={value}
          onChange={handleValueChange}
          sx={{
            boxShadow: "none",
            border: 0,
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
          }}
        >
          <MenuItem value={'1'}>보유가격순</MenuItem>
          <MenuItem value={'2'}>수익률높은순</MenuItem>
          <MenuItem value={'3'}>수익률낮은순</MenuItem>
        </Select>
      </FormControl>
      <div>
        {example.map((stock) => (
          <MyStockCard
            key={stock.code}
            name={stock.name}
            profit={stock.profit}
            percent={stock.percent}
            mean={stock.mean}
            now={stock.now}
            many={stock.many}
            all={stock.all}
          />
        ))}
      </div>
    </>
  );
}
export default MyAssetList;