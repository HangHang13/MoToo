import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./BuyOrderEditPage.module.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 324,
  height: 225,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

function SellOrderEditPage() {
  const location = useLocation();
  const orderData = location.state?.data;
  const mySeed = 10000000;
  const myStock = 600;
  const [nowPrice, setNowPrice] = useState(100000);
  const [wantedPrice, setWantedPrice] = useState(String(orderData.price));
  const [wantedMany, setWantedMany] = useState(String(orderData.many));
  const [writePrice, setWritePrice] = useState(false);
  const [isHave, setIsHave] = useState(true);
  const [isTooHigh, setIsTooHigh] = useState(false);
  const [isTooLow, setIsTooLow] = useState(false);
  const [total, setTotal] = useState(0);
  const [openDeleteModal, setDeleteModalOpen] = useState(false);

  const navigate = useNavigate();
  function backToLimitOrderList() {
    navigate(`/stock/limit-order`);
  } 

  const handleDeleteModalOpen = () => {
    setDeleteModalOpen(true);
  };
  const handleDeleteModalClose = () => setDeleteModalOpen(false);

  // 삭제확인 눌렀을 때,
  function deleteSubmit() {
    handleDeleteModalClose(false);
    backToLimitOrderList()
  }

  const numberClick = (event) => {
    setIsTooLow(false);
    const tempPrice = Number(wantedPrice + event.target.value);
    const tempMany = Number(wantedMany + event.target.value);
    // 가격 입력중일때
    if (writePrice) {
      if (Boolean(event.target.value)) {
        if (wantedPrice === "") {
          if (event.target.value === "0") {
            return;
          }
        }
        if (tempPrice > nowPrice * 1.3) {
          // 상한가보다 클때
          setIsTooHigh(true);
          setTimeout(() => {
            setIsTooHigh(false);
          }, 1000);
          return;
        } else if (tempPrice < nowPrice * 0.7) {
          // 하한가보다 낮을때
          setIsTooLow(true);
        }
        setWantedPrice(wantedPrice + event.target.value);
      } else {
        if (wantedPrice !== "") {
          const tmp = wantedPrice.slice(0, -1);
          const tmpNum = Number(tmp);
          if (tmpNum < nowPrice * 0.7) {
            // 하한가보다 낮을때
            setIsTooLow(true);
          }
          setWantedPrice(tmp);
        }
      }
    } else {
      // 주식개수 입력중일때
      if (Boolean(event.target.value)) {
        if (wantedMany === "") {
          if (event.target.value === "0") {
            return;
          }
        }
        if (tempMany > myStock) {
          // 내가 가진것보다 팔려고 입력한게 클때
          setIsHave(false);
          setTimeout(() => {
            setIsHave(true);
          }, 1000);
          return;
        }
        setWantedMany(String(tempMany));
      } else {
        if (wantedMany !== "") {
          const tmp = wantedMany.slice(0, -1);
          setWantedMany(tmp);
        }
      }
    }
  };

  const priceClickHandler = () => {
    console.log("가격누름");
    setWritePrice(true);
  };
  const manyClickHandler = () => {
    console.log("개수누름");
    setWritePrice(false);
  };
  function PriceInput() {
    // 직접입력하겠다고 할 때,
    if (wantedPrice === "") {
      return (
        <div onClick={priceClickHandler}>
          {writePrice && (
            <img
              className={classes.blinking}
              src={`${process.env.PUBLIC_URL}/stock-detail/inputIcon.svg`}
              alt=""
            />
          )}
          <h1>얼마로 변경할까요?</h1>
        </div>
      );
    } else {
      return (
        <>
          <span onClick={priceClickHandler}>{wantedPrice}</span>
          {writePrice && (
            <img
              className={classes.blinking}
              src={`${process.env.PUBLIC_URL}/stock-detail/inputIcon.svg`}
              alt=""
            />
          )}
          <span>원</span>
        </>
      );
    }
  }
  function ManyInput() {
    if (wantedMany === "") {
      return (
        <div onClick={manyClickHandler}>
          {!writePrice && (
            <img
              className={classes.blinking}
              src={`${process.env.PUBLIC_URL}/stock-detail/inputIcon.svg`}
              alt=""
            />
          )}
          <h1>몇 주로 변경할까요?</h1>
        </div>
      );
    } else {
      return (
        <>
          <p onClick={manyClickHandler}>{wantedMany}</p>
          {!writePrice && (
            <img
              className={classes.blinking}
              src={`${process.env.PUBLIC_URL}/stock-detail/inputIcon.svg`}
              alt=""
            />
          )}
          <span>주</span>
        </>
      );
    }
  }
  return (
    <div>
      <div>{orderData.name}</div>
      <hr />
      <img
        onClick={handleDeleteModalOpen}
        src={`${process.env.PUBLIC_URL}/stock-list/trashcan.svg`}
        alt=""
      />
      <hr />
      <PriceInput />
      <ManyInput />
      {isTooHigh && <p>그렇게 비싸겐 못팔아요</p>}
      {isTooLow && <p>그렇게 싸겐 못팔아요</p>}
      {!isHave && <p>넌 그만큼 팔 주식이 없어요</p>}
      <div class="numberSection">
        <button value={1} class="number" onClick={numberClick}>
          1
        </button>
        <button value={2} class="number" onClick={numberClick}>
          2
        </button>
        <button value={3} class="number" onClick={numberClick}>
          3
        </button>
        <button value={4} class="number" onClick={numberClick}>
          4
        </button>
        <button value={5} class="number" onClick={numberClick}>
          5
        </button>
        <button value={6} class="number" onClick={numberClick}>
          6
        </button>
        <button value={7} class="number" onClick={numberClick}>
          7
        </button>
        <button value={8} class="number" onClick={numberClick}>
          8
        </button>
        <button value={9} class="number" onClick={numberClick}>
          9
        </button>
        <button value={0} class="number" onClick={numberClick}>
          0
        </button>
        <button class="number" onClick={numberClick}>
          <img
            value="삭제"
            src={`${process.env.PUBLIC_URL}/stock-detail/eraser.svg`}
            alt=""
          />
        </button>
      </div>
      <Modal open={openDeleteModal} onClose={handleDeleteModalClose}>
        <Box sx={style}>
          <p>정말 삭제하시겠습니까?</p>
          <p>
            판매 주문을 취소하면 판매가능한 주식의 수가 원래대로 돌아옵니다!
          </p>
          <button onClick={deleteSubmit}>삭제하기</button>
        </Box>
      </Modal>
    </div>
  );
}

export default SellOrderEditPage;