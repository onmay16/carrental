import Table from 'react-bootstrap/Table';

function PriceTable(props) {
  
  return (
    <div>
      <hr />
      <br />
      <h3 style={{ textAlign:'left', fontWeight:500 }}>
        {props.category}&nbsp;
        <small style={{ fontSize:'14px', color:'#A5A5A5', fontWeight:600 }}>{props.cars}</small>
      </h3>
      <br />
      <h6>카페요금</h6>
      <Table bordered style={{ fontSize: '13px' }}>
        <thead>
          <tr style={{ backgroundColor: '#F5F5F5' }}>
            <th colSpan={2}>기본요금</th>
            <th colSpan={2}>기본요금 + 추가보험(ZDC)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={2}>${props.reservePrice*props.days+props.onSitePay*props.days}</td>
            <td colSpan={2}>${props.reservePrice*props.days+props.onSitePayInsurance*props.days}</td>
          </tr>
        </tbody>
        <thead>
          <tr style={{ backgroundColor: '#F5F5F5' }}>
            <th>예약금액</th>
            <th>현장지불</th>
            <th>예약금액</th>
            <th>현장지불</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${props.reservePrice*props.days}</td>
            <td>${props.onSitePay*props.days+10*props.hours}</td>
            <td>${props.reservePrice*props.days}</td>
            <td>${props.onSitePayInsurance*props.days+10*props.hours}</td>
          </tr>
        </tbody>
      </Table>
      <br />
    </div>
  )
}

export default PriceTable;