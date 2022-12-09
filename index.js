/**
 * Author : SungYong Jang, jsy@adain.kr
 * Date :  2022/12/09
 * Description :
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/api/1/co2/month', (req, res) => {
  let responseData = {
    info: 'CO2 Month data'
  };
  switch (req.query.date){
    case "2022-06": {
      responseData.result = {
        datetime: '2022-06-01 00:00:00',
        electricity: 1526718,
        gas: 349583,
        water: 28911,
        heat: 19236
      }
      break;
    }
    case "2022-05": {
      responseData.result = {
        datetime: '2022-05-01 00:00:00',
        electricity: 1383872,
        gas: 446769,
        water: 26877,
        heat: 26574
      }
      break;
    }
  }
  
  res.json(responseData);
});

app.get('/api/1/co2/month2', (req, res) => {
  let responseData = {
    info: 'CO2 Month data'
  };
  switch (req.query.date){
    case "2022-06": {
      responseData.result = [
        {
          label: '전기',
          value: 1526718,
        },
        {
          label: '가스',
          value: 349583,
        }, {
          label: '수도',
          value: 28911,
        }, {
          label: '열',
          value: 19236,
        }
      ];
      break;
    }
    case "2022-05": {
      responseData.result = [
        {
          label: '전기',
          value: 1383872,
        },
        {
          label: '가스',
          value: 446769,
        }, {
          label: '수도',
          value: 26877,
        }, {
          label: '열',
          value: 26574,
        }
      ];
      break;
    }
  }

  res.json(responseData);
});

app.get('/api/1/co2/history', (req, res) => {
  let responseData = {
    info: 'CO2 History Data',
    result: [
      {
        datetime: '2021-10-01 00:00:00',
        electricity: 1436993,
        gas: 406857,
        water: 30450,
        heat: 36461
      },
      {
        datetime: '2021-11-01 00:00:00',
        electricity: 1427013,
        gas: 715503,
        water: 28716,
        heat: 72309
      },
      {
        datetime: '2021-12-01 00:00:00',
        electricity: 1597699,
        gas: 1174354,
        water: 27862,
        heat: 121623
      },
      {
        datetime: '2022-01-01 00:00:00',
        electricity: 1821469,
        gas: 1573239,
        water: 26785,
        heat: 142801
      },
      {
        datetime: '2022-02-01 00:00:00',
        electricity: 1742404,
        gas: 1548571,
        water: 27507,
        heat: 122257
      },
      {
        datetime: '2022-03-01 00:00:00',
        electricity: 1532907,
        gas: 1170708,
        water: 26319,
        heat: 85241
      },
      {
        datetime: '2022-04-01 00:00:00',
        electricity: 1448892,
        gas: 748551,
        water: 25884,
        heat: 43547
      },
      {
        datetime: '2022-05-01 00:00:00',
        electricity: 1383872,
        gas: 446769,
        water: 26877,
        heat: 26574
      },
      {
        datetime: '2022-06-01 00:00:00',
        electricity: 1526718,
        gas: 349583,
        water: 28911,
        heat: 19236
      }
    ]
  };

  res.json(responseData);
});

app.get('/api/1/co2/energy', (req, res) => {
  let responseData = {
    info: `Energy Usage ${req.query.area}`,
  };

  switch (req.query.area){
    case '강남구': {
      responseData.result = [
        {
          category: '개포1동',
          electricity: 1787,
          gas: 639156,
          water: 75620,
          heat: 304,
        },
        {
          category: '개포2동',
          electricity: 3890,
          gas: 82036,
          water: 142113,
          heat: 1143,
        },
        {
          category: '개포4동',
          electricity: 4364,
          gas: 204988,
          water: 71479,
          heat: 108,
        },
        {
          category: '논현1동',
          electricity: 16345,
          gas: 570247,
          water: 594608,
          heat: 0,
        },
        {
          category: '논현2동',
          electricity: 25980,
          gas: 594905,
          water: 94452,
          heat: 123,
        },
        {
          category: '대치1동',
          electricity: 6926,
          gas: 246808,
          water: 246589,
          heat: 960,
        },
        {
          category: '대치2동',
          electricity: 19371,
          gas: 501688,
          water: 519985,
          heat: 1400,
        },
        {
          category: '대치4동',
          electricity: 15527,
          gas: 565449,
          water: 70504,
          heat: 105,
        },
        {
          category: '도곡1동',
          electricity: 9996,
          gas: 310577,
          water: 319428,
          heat: 566,
        },
        {
          category: '도곡2동',
          electricity: 14392,
          gas: 258281,
          water: 227197,
          heat: 2593,
        },
        {
          category: '삼성1동',
          electricity: 34358,
          gas: 1023861,
          water: 492325,
          heat: 158,
        },
        {
          category: '삼성2동',
          electricity: 15037,
          gas: 406235,
          water: 167676,
          heat: 678,
        },
        {
          category: '세곡동',
          electricity: 8566,
          gas: 301796,
          water: 245318,
          heat: 2775,
        },
        {
          category: '수서동',
          electricity: 6178,
          gas: 96443,
          water: 266673,
          heat: 1638,
        },
        {
          category: '신사동',
          electricity: 13825,
          gas: 389344,
          water: 59245,
          heat: 505,
        },
        {
          category: '압구정동',
          electricity: 19290,
          gas: 497876,
          water: 146733,
          heat: 1228,
        },
        {
          category: '역삼1동',
          electricity: 64326,
          gas: 1900418,
          water: 1343325,
          heat: 0,
        },
        {
          category: '역삼2동',
          electricity: 18558,
          gas: 451157,
          water: 195935,
          heat: 1463,
        },
        {
          category: '일원1동',
          electricity: 3806,
          gas: 197648,
          water: 223520,
          heat: 288,
        },
        {
          category: '일원2동',
          electricity: 11051,
          gas: 40608,
          water: 81264,
          heat: 1022,
        },
        {
          category: '일원본동',
          electricity: 13439,
          gas: 553990,
          water: 368986,
          heat: 1013,
        },
        {
          category: '청담동',
          electricity: 18651,
          gas: 753592,
          water: 649925,
          heat: 469,
        },
      ]
      break;
    }
    case '노원구': {
      responseData.result = [
        {
          category: '공릉1동',
          electricity: 8204,
          gas: 446010,
          water: 484231,
          heat: 496,
        },
        {
          category: '공릉2동',
          electricity: 14988,
          gas: 686896,
          water: 182785,
          heat: 993,
        },
        {
          category: '상계10동',
          electricity: 2838,
          gas: 815413,
          water: 41665,
          heat: 985,
        },
        {
          category: '상계1동',
          electricity: 6972,
          gas: 338408,
          water: 419369,
          heat: 1057,
        },
        {
          category: '상계2동',
          electricity: 8443,
          gas: 401592,
          water: 92718,
          heat: 0,
        },
        {
          category: '상계3·4동',
          electricity: 3215,
          gas: 254623,
          water: 186418,
          heat: 0,
        },
        {
          category: '상계5동',
          electricity: 3897,
          gas: 235384,
          water: 249771,
          heat: 188,
        },
        {
          category: '상계6·7동',
          electricity: 8130,
          gas: 1868443,
          water: 337757,
          heat: 1956,
        },
        {
          category: '상계8동',
          electricity: 2892,
          gas: 15316,
          water: 33029,
          heat: 1363,
        },
        {
          category: '상계9동',
          electricity: 2801,
          gas: 79585,
          water: 285555,
          heat: 1222,
        },
        {
          category: '월계1동',
          electricity: 5537,
          gas: 608277,
          water: 314299,
          heat: 0,
        },
        {
          category: '월계2동',
          electricity: 3669,
          gas: 227594,
          water: 107152,
          heat: 336,
        },
        {
          category: '월계3동',
          electricity: 5360,
          gas: 483520,
          water: 287160,
          heat: 940,
        },
        {
          category: '중계1동',
          electricity: 4463,
          gas: 152593,
          water: 72993,
          heat: 924,
        },
        {
          category: '중계2·3동',
          electricity: 6547,
          gas: 158297,
          water: 454488,
          heat: 2184,
        },
        {
          category: '중계4동',
          electricity: 3819,
          gas: 246376,
          water: 62865,
          heat: 747,
        },
        {
          category: '중계본동',
          electricity: 4329,
          gas: 311692,
          water: 27308,
          heat: 0,
        },
        {
          category: '하계1동',
          electricity: 6243,
          gas: 253695,
          water: 343928,
          heat: 794,
        },
        {
          category: '하계2동',
          electricity: 2619,
          gas: 171110,
          water: 79657,
          heat: 638,
        },
      ]
      break;
    }
  }
  
  res.json(responseData);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})