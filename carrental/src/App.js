import './App.css';

import React, { useState, useEffect } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from 'date-fns/locale/ko';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';

import PriceTable from './PriceTable';

registerLocale('ko', ko);

function App() {

  const [now, setNow] = useState(new Date())
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  function dateCalculator(startDate, endDate) {
    const totalHours = Math.ceil((endDate - startDate) / (1000 * 3600))
    const calculatedDays = Math.floor(totalHours / 24)
    const calculatedHours = totalHours % 24
    setDays(calculatedDays)
    setHours(calculatedHours)
    // setDays(calculatedDays)
    // if ((calculatedHours !== 0 && calculatedHours < 7 && calculatedDays === 0) || ()) {
    //   // alert("렌트 일정을 최소 7시간 이상 설정해 주세요.")
    //   setHours(0);
    // } else {
    //   setHours(calculatedHours)
    // }
  }

  useEffect(() => {
    startDate.setMinutes(0);
    endDate.setMinutes(0);
    endDate.setDate(startDate.getDate()+2);
  }, [])

  useEffect(() => {
    dateCalculator(startDate, endDate)
  }, [startDate, endDate])

  useEffect(() => {
    if (startDate > endDate) {
      alert("반납 일자를 픽업 일자 이후로 설정해 주세요.")
      setEndDate(startDate)
    }
  }, [startDate])

  // useEffect(() => {
  //   if (startDate > endDate) {
  //     alert("반납 일자를 픽업 일자 이후로 설정해 주세요.")
  //     setEndDate(startDate)
  //   }
  // }, [endDate])
  


  return (
    <div className="App">
      <meta charSet="utf-8" />
      <title>괌자길 드림렌트카 견적계산기</title>
      <Navbar style={{ backgroundColor:'#343A3F' }}>
        <Container>
          <Navbar.Brand>
            <span style={{ color:'#FFFFFF' }}>괌자길 드림렌트카 </span>
            <span style={{ fontSize: "15px", color:'#FFFFFF' }}>견적계산기</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        {/* actual body */}
        <div style={{ display: 'flex', flexDirection: 'row', margin: 'auto' }}>
          <div style={{ marginRight: '50px' }}>
            {/* date picking table */}
            <ListGroup>
              <ListGroup.Item style={{ paddingTop:'12px', paddingBottom:'12px', paddingLeft:'20px', paddingRight:'20px' }}>
                <h6>픽업일자</h6>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date)
                  }}
                  minDate={now}
                  dateFormat="yyyy-MM-dd"
                  locale='ko' />
              </ListGroup.Item>
              <ListGroup.Item style={{ paddingTop:'12px', paddingBottom:'12px', paddingLeft:'20px', paddingRight:'20px' }}>
                <h6>픽업시간</h6>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="시간"
                  dateFormat="h:mm aa"
                  locale='ko' />
              </ListGroup.Item>
              <ListGroup.Item style={{ paddingTop:'12px', paddingBottom:'12px', paddingLeft:'20px', paddingRight:'20px' }}>
                <h6>반납일자</h6>
                <DatePicker
                  selected={endDate}
                  onSelect={(date) => {
                    setEndDate(date)
                  }}
                  minDate={startDate}
                  dateFormat="yyyy-MM-dd"
                  locale='ko' />
              </ListGroup.Item>
              <ListGroup.Item style={{ paddingTop:'12px', paddingBottom:'12px', paddingLeft:'20px', paddingRight:'20px' }}>
                <h6>반납시간</h6>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="시간"
                  dateFormat="h:mm aa"
                  locale='ko' />
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: '#F5F5F5', paddingTop:'12px', paddingBottom:'12px', paddingLeft:'20px', paddingRight:'20px' }}>
                <h6>렌트기간</h6>
                <div style={{ fontWeight:'800' }}>{days}일 {(hours && days<3) ? <span>+ {hours}시간</span> : null}</div>
              </ListGroup.Item>
            </ListGroup>
          </div>
          {/* tables (right section) */}
          <div style={{ margin: 'auto' }}>
            <div style={{ textAlign:'left' }}>
              <div>* 견적계산기는 렌트 비용 참고용입니다.</div>
              <div>* 자세한 내용은 드림렌트카 예약안내 에서 확인해주세요.</div>
              <div>* 렌트기간 30일 이상의 장기렌트일 경우 메일로 별도 문의 바랍니다. tillpark3@naver.com</div>
            </div>
            <br />
            <PriceTable
              category="컴팩트"
              cars="미츠비, 미라지"
              reservePrice={10}
              onSitePay={45}
              onSitePayInsurance={63}
              defaultPrice={55}
              defaultPriceInsurance={73}
              days={days}
              hours={hours} />
            <PriceTable
              category="미드사이즈"
              cars="마즈다3, 현대 엘란트라"
              reservePrice={10}
              onSitePay={50}
              onSitePayInsurance={76}
              defaultPrice={60}
              defaultPriceInsurance={86}
              days={days}
              hours={hours} />
            <PriceTable
              category="풀사이즈"
              cars="마즈다6"
              reservePrice={10}
              onSitePay={59}
              onSitePayInsurance={85}
              defaultPrice={69}
              defaultPriceInsurance={97}
              days={days}
              hours={hours} />
            <PriceTable
              category="SUV"
              cars="마즈다 CX5"
              reservePrice={11}
              onSitePay={66}
              onSitePayInsurance={78}
              defaultPrice={77}
              defaultPriceInsurance={89}
              days={days}
              hours={hours} />
            <PriceTable
              category="미니밴"
              cars=""
              reservePrice={20}
              onSitePay={145}
              onSitePayInsurance={165}
              defaultPrice={165}
              defaultPriceInsurance={185}
              days={days}
              hours={hours} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
