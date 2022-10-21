# carrental

아래 안내 사항 대로 따라하셔서 local 환경에 코드 베이스를 다운받으신 후 관리하시면 됩니다!<br/>
추가 질문이 있으시다면 언제든 연락주세요. 🙂
<br/><br/>

요구 사항 - 설치
-----
1. `git` 👉 https://goddaehee.tistory.com/m/216
2. 아래 '개인 컴퓨터 로컬 환경에 저장소 클론' 안내를 따라 파일을 보관하고 싶으신 디렉토리에 저장소를 복제해 주세요!
3. 복제한 프로젝트 폴더 내에 `README.md`가 있는 위치에서 command line으로 `python -m venv env`로 가상 환경 폴더를 만들어 주세요!<
    👉 그 상태로 `source env/bin/activate` 하시면 가상 환경 폴더에 접속하게 됩니다. 이 과정을 거치는 이유는 아래 설치할 패키지들을 이 가상 환경 폴더 안에만 적용되게 하기 위함입니다.
4. `npm` 👉 https://hello-bryan.tistory.com/m/95
5. 위에 설치한 `npm`으로 `yarn` 설치 👉 https://heeeyomi.tistory.com/223<br/>
   간단하게 `yarn install`해 주시면 됩니다!
<br/><br/>

개인 컴퓨터 로컬 환경에 저장소 클론
-----
아래 command line을 window cmd 창에서 입력 (꼭 복제하고픈 디렉토리에 들어가셔서 해 주세요!)
```
git clone https://github.com/{username}/{repo-name}.git
cd {repo-name} // 로컬 프로젝트 폴더로 들어감 
```

로컬 환경에서 실시간으로 수정 사항 확인해야 할 때
-----
가상 환경 폴더에 접속한 뒤 프로젝트 폴더 내에서 `yarn start`해 주시면 로컬 환경에서 실시간으로 수정 사항 확인할 수 있는 웹페이지에 자동으로 접속됩니다.

가격 수정하실 경우
-----
`App.js`파일에 있는 `PriceTable` component에 있는 숫자를 변경해 주시면 됩니다. (line 194부터)
```
<PriceTable
   category="컴팩트"
   reservePrice={10} // 예약금액
   onSitePay={45} // 현장지불
   onSitePayInsurance={63} // 현장지불 (+보험)
   defaultPrice={55} //기본요금
   defaultPriceInsurance={73} //기본요금 (+보험)
   days={days}
   hours={hours} />
```

수정된 코드를 웹사이트에 반영하고 싶으신 경우
-----
로컬 프로젝트 폴더 내에서 `yarn deploy`를 입력해 주시면 자동으로 배포 사이트에 반영이 됩니다! (10~20분 정도 소요될 수 있음)
<br/><br/>

⚠️ **주의하실 점** ⚠️
- 양도 받으신 후 `package.json` 파일 내의 `"homepage": "https://onmay16.github.io/carrental/"`을 바꿔 주셔야 합니다.
  
   해당 도메인은 제가 가지고 있던 저장소와 연결되어 있던 것이기 때문에, 새로 배포하신 의뢰인분의 깃허브 계정과 연결된 도메인으로 변경해야 합니다.
- 커스텀 도메인 적용 시 마찬가지로 커스텀 도메인으로 변경해 주셔야 합니다.

   참고 👉 https://velog.io/@ricale/Create-React-App-%EC%9C%BC%EB%A1%9C-GitHub-Pages-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
