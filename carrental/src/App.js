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

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [minTime, setMinTime] = useState(new Date());
  const [maxTime, setMaxTime] = useState(new Date());

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [selected, setSelected] = useState(false);

  function dateCalculator(startDate, endDate) {
    const totalHours = (endDate - startDate) / (1000 * 3600)
    const calculatedDays = Math.floor(totalHours / 24)
    const calculatedHours = (totalHours % 24).toFixed(1);

    setDays(calculatedDays)
    setHours(calculatedHours)
  }

  useEffect(() => {

    startDate.setDate(startDate.getDate()+2);
    startDate.setHours(10);
    startDate.setMinutes(0);

    endDate.setDate(startDate.getDate()+2);
    endDate.setHours(10);
    endDate.setMinutes(0);

    minTime.setHours(8);
    minTime.setMinutes(0);

    maxTime.setHours(18);
    maxTime.setMinutes(30);

    // const notAvailableTime = []
    // for (let count = 3; count < 8; count += 0.5) {
    //   let time = new Date()
    //   if (count % 1 !== 0) {
    //     time.setHours(Math.floor(count), 30, 0);
    //   } else {
    //     time.setHours(Math.floor(count), 0, 0);
    //   }
    //   notAvailableTime.push(time);
    // };
    // setExcludedTime(notAvailableTime);
  }, [])

  useEffect(() => {
    dateCalculator(startDate, endDate)
    if (days === 0 && hours < 7 && selected) {
      alert("렌트 시간을 7시간 이상으로 설정해 주세요.");
      endDate.setDate(startDate.getDate()+1);
    }
  }, [startDate, endDate])

  useEffect(() => {
    if (startDate > endDate) {
      alert("반납 일자를 픽업 일자 이후로 설정해 주세요.")
      setEndDate(startDate)
    }
  }, [endDate])

  return (
    <div className="App">
      <meta charSet="utf-8" />
      <title>괌자길 버젯렌트카 견적계산기</title>
      <Navbar style={{ backgroundColor:'#343A3F' }}>
        <Container>
          <Navbar.Brand>
            <span style={{ color:'#FFFFFF' }}>괌자길 버젯렌트카 </span>
            <span style={{ fontSize: "15px", color:'#FFFFFF' }}>견적계산기</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div className='body-section'>
        <div className='body-row' >
          <ListGroup>
            <ListGroup.Item className='list-group-item'>
              <h6>픽업일자</h6>
              <DatePicker
                className='date-picker'
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
                minDate={startDate}
                popperProps={{
                  positionFixed: true
                }}
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                }}}
                dateFormat=" yyyy-MM-dd"
                locale='ko' />

            </ListGroup.Item>
            <ListGroup.Item className='list-group-item'>
              <h6>픽업시간</h6>
              <DatePicker
                className='date-picker'
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setSelected(true);
                }}
                showTimeSelect
                showTimeSelectOnly
                dateFormat=" HH:mm"
                // minTime={minTime}
                // maxTime={maxTime}
                timeIntervals={30}
                popperProps={{
                  positionFixed: true
                }}
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                }}}
                timeCaption="시간"
                locale='ko' />
            </ListGroup.Item>
            <ListGroup.Item className='list-group-item'>
              <h6>반납일자</h6>
              <DatePicker
                className='date-picker'
                selected={endDate}
                onSelect={(date) => {setEndDate(date)}}
                minDate={startDate}
                popperProps={{
                  positionFixed: true
                }}
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                }}}
                dateFormat=" yyyy-MM-dd"
                locale='ko' />
            </ListGroup.Item>
            <ListGroup.Item className='list-group-item'>
              <h6>반납시간</h6>
              <DatePicker
                className='date-picker'
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date)
                  setSelected(true)
                }}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={30}
                // excludeTimes={excludedTime}
                popperProps={{
                  positionFixed: true
                }}
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                }}}
                timeCaption="시간"
                dateFormat=" HH:mm"
                locale='ko' />
            </ListGroup.Item>
            <ListGroup.Item className='list-group-item' style={{ backgroundColor: '#F5F5F5' }}>
              <h6>렌트기간</h6>
              <div style={{ fontWeight:'800' }}>
                {hours > 0 ? days+1:days}일
              </div>
            </ListGroup.Item>
          </ListGroup>
          <div className='space'/>
          <div style={{ margin:'auto', width:'670px' }}>
            <div style={{ textAlign:'left', color: 'red', fontWeight:600 }}>
              <div>* 견적계산기는 렌트 비용 참고용입니다.</div>
            </div>
            <PriceTable
              category="컴팩트"
              reservePrice={10} // 예약금액
              onSitePay={45} // 현장지불
              onSitePayInsurance={63} // 현장지불 (+보험)
              defaultPrice={55} //기본요금
              defaultPriceInsurance={73} //기본요금 (+보험)
              days={days}
              hours={hours} />
            <PriceTable
              category="미드사이즈"
              reservePrice={10}
              onSitePay={50}
              onSitePayInsurance={76}
              defaultPrice={60}
              defaultPriceInsurance={86}
              days={days}
              hours={hours} />
            <PriceTable
              category="풀사이즈"
              reservePrice={10}
              onSitePay={59}
              onSitePayInsurance={85}
              defaultPrice={69}
              defaultPriceInsurance={97}
              days={days}
              hours={hours} />
            <PriceTable
              category="SUV"
              reservePrice={11}
              onSitePay={66}
              onSitePayInsurance={78}
              defaultPrice={77}
              defaultPriceInsurance={89}
              days={days}
              hours={hours} />
            <PriceTable
              category="미니밴"
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
      <footer style={{ backgroundColor:'#343A3F', color:'#ffffff', paddingTop:'16px', paddingBottom:'16px', fontWeight:600 }}>Copyright © 괌자길 2020</footer>
    </div>
  );
}

export default App;
