(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],[,,,function(e,a,n){e.exports={country:"styles_country__2syIl",covidImg:"styles_covidImg__2A-8g",active:"styles_active__1u2Mq",flicker:"styles_flicker__2JN5E",pump:"styles_pump__11SwA",bar:"styles_bar__2p0rL"}},,,,,function(e,a,n){e.exports={layout:"styles_layout__2WqsR",backgroundText:"styles_backgroundText__24g_u"}},,,function(e,a,n){e.exports={countries:"styles_countries__27EtG"}},,function(e,a,n){e.exports=n(23)},,,,,function(e,a,n){},,,function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKRSURBVDiNfVNLTFNRED33tRRqf/b3pBRsS0srH5G4aIBWNCGIYWFYdaNxa0QT496wwLWaKImJKzauNS5aIhuDIRQ/sOBraSnUKrQF7KOUUmzfdQG3SAyd1czkzOTcM+cCp4emx1g702OsnQagPg0kLbOg+gZfV08J6FgqbgKwUwYLdOlNoz6zPeyQq9tZr02hD7Yp9EFWX5CrOn1me/iqoSbAehxLTFUK+31bi5XjyCBjp+QkRMlJCAAJAIgc9/iB9aLtXKXcweYISxxyVQfHcYMD9S2ekdj3GbfWWH2dP3+eUIpFIb0STCdC3by5+1V0fkIUxaFwLjN5YkGJtsbw8Z6lqcut48nnYha31GZE93YwsbVBR9YWvwaFlPtfPAdAA8B1VFe4tUaTx2AiaqkM/p0ElvcEfNjfRqvWQC4r9VYcC+8CoCY9xtrpXr7O8WYtNK8kUvKwse2SocFeZU0eiv5W2EDTzT7MBQLg0weF17Glb1laoLctrqbR5I8wBwAUEBklKlJiSQp4IT3Ac8kWuhU6LPgD6DU7kDrIl6iLoIdKj6Xi18ZS8WoAIQAVjYnYkk5WWU/OygGRQC2VYUBpQwRAJCtkPmUSXgCF6flJJ4B1KQ4NwkxS+CJsrl8x1tj60iB2hQ6mqjNYzPxGcHWDBnc3FwAUjrAhsPsCgEuu8rTrax7dtTb2vozMzqVzuQrxT7FybntLfP8zKrxLxWbuWJyt0eyuVyuVrWwX8vET5/OZ7eFxT3/RqdD4mZG8Kn7Kq+KnmPJOhcY/7ukv+sz2ZTZX+guJfG55eHWWiiIdYs/ZFYuU5QDAieKT4dXZhkR+v7SgXLieNXcKT5s7BBz75L8o9xvXA8lYhIBQAL9OA/0FlpHym7uYG5IAAAAASUVORK5CYII="},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var o=n(0),c=n.n(o),t=n(10),d=n.n(t),r=(n(18),n(2)),m=n.n(r),i=n(5),s=n(1),u=n(7),l=n.n(u),A=n(3),f=n.n(A),g=n(21),b=function(e){var a=e.name,n=e.data,t=e.rank,d=e.flagUrl,r=e.ratio,m=e.active,i=e.isLast,u=e.timer,l=Object(o.useState)(0),A=Object(s.a)(l,2),b=A[0],S=A[1];return Object(o.useEffect)((function(){var e;if(b&&m&&n.confirmed!==b){var a=0;e=setInterval((function(){a===n.confirmed?(clearInterval(e),e=null):(S((function(e){return e+1})),a++)}),u/(n.confirmed-b))}else S(n.confirmed);return function(){S(n.confirmed),e&&clearInterval(e)}}),[n.confirmed,m]),c.a.createElement("div",{className:f.a.country,style:{top:"".concat(50*t+20,"px"),transform:"translateX(".concat(i?"-100vw":"0",")")}},c.a.createElement("div",{className:"".concat(f.a.bar," ").concat(m?f.a.active:""),style:{minWidth:"".concat(n.confirmed/r+37,"px")}},c.a.createElement("img",{src:d,alt:a})),c.a.createElement("h1",null,"\xa0",b.toLocaleString()),c.a.createElement("div",{className:f.a.covidImg},c.a.createElement("img",{className:m?f.a.pump:"",src:g,alt:""})))},S=n(11),h=n.n(S),C=function(e){var a,n=e.countriesData,t=e.biggestNumber,d=e.getDate,r=Object(o.useRef)(0),m=Object(o.useRef)({}),i=Object(o.useState)(0),u=Object(s.a)(i,2),l=u[0],A=u[1],f=Object(o.useState)({}),g=Object(s.a)(f,2),S=g[0],C=g[1],v=Object(o.useState)(1),I=Object(s.a)(v,2),M=I[0],p=I[1],y=r.current,B=null===(a=m.current)||void 0===a?void 0:a.width;return Object(o.useEffect)((function(){if(m.current){var e=m.current.getBoundingClientRect().width,a=8*t.toString().length+30+40,n=Math.floor(t/(e-a));p(n)}}),[B,t]),Object(o.useEffect)((function(){r.current=y})),Object(o.useEffect)((function(){var e;return n&&n.length&&(e=setInterval((function(){if(y===n[0].data.length-1)clearInterval(e);else{y+=1;var a={};n.map((function(e){return{country:e.country,confirmed:e.data[y].confirmed}})).sort((function(e,a){return a.confirmed-e.confirmed})).forEach((function(e,n){var o=e.country;a[o]=n})),A((function(e){return e+1})),C(a);var o=n[0].data[y].date;d(o)}}),800)),function(){return clearInterval(e)}}),[n]),c.a.createElement("ul",{className:h.a.countries,ref:m},n.filter((function(e){var a=e.country;return S[a]<7})).map((function(e,a){var o=e.country,t=e.data,d=e.imgUrl;return c.a.createElement(b,{key:"country-".concat(a),name:o,data:t[l],rank:S[o],flagUrl:d,ratio:M,active:l<n[0].data.length-1,isLast:6===S[o],timer:800})})))},v=n(12),I={fetchData:function(){var e=Object(i.a)(m.a.mark((function e(){var a,n,o,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={countriesData:[],biggestConfirmedNumber:0},e.prev=1,e.next=4,fetch("https://pomber.github.io/covid19/timeseries.json");case 4:return n=e.sent,e.next=7,null===n||void 0===n?void 0:n.json();case 7:(o=e.sent)&&(a.countriesData=(t=o,Array.isArray(t)?t:Object.entries(t).map((function(e){var a=Object(s.a)(e,2),n=a[0],o=a[1],c=M.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})),t=function(e){return e?"https://www.countryflags.io/".concat(e.toLowerCase(),"/shiny/32.png"):""}(null===c||void 0===c?void 0:c.code);return o.forEach((function(e,a){0===a?(e.deathGrowth=1,e.confirmedGrowth=1):(e.deathGrowth=o[a-1].deaths?e.deaths/o[a-1].deaths:1,e.confirmedGrowth=o[a-1].confirmed?e.confirmed/o[a-1].confirmed:1)})),{country:n,data:o,imgUrl:t}})).filter((function(e){return"Diamond Princess"!==e.country})))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Error Fetching data: ",e.t0);case 14:return(c=Math.max.apply(Math,Object(v.a)(a.countriesData.map((function(e){return e.data[e.data.length-1].confirmed})))))&&(a.biggestConfirmedNumber=c),e.abrupt("return",a);case 17:case"end":return e.stop()}var t}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},M=[{name:"Afghanistan",code:"AF"},{name:"\xc5land Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, South",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan*",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"US",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"VietNam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],p=n(8),y=n.n(p),B=function(){var e=Object(o.useState)([]),a=Object(s.a)(e,2),n=a[0],t=a[1],d=Object(o.useState)(0),r=Object(s.a)(d,2),u=r[0],A=r[1],f=Object(o.useState)(""),g=Object(s.a)(f,2),b=g[0],S=g[1],h=Object(o.useCallback)(Object(i.a)(m.a.mark((function e(){var a,n,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.fetchData();case 2:a=e.sent,n=a.countriesData,o=a.biggestConfirmedNumber,t(n),A(o);case 7:case"end":return e.stop()}}),e)}))),[]);return Object(o.useEffect)((function(){h()}),[h]),c.a.createElement("section",{className:y.a.layout},c.a.createElement("h1",null,"Covid-19 Confirmed Cases"),b&&c.a.createElement("div",{className:y.a.backgroundText},l()(b).format("MMM"),"\xa0",c.a.createElement("span",null,l()(b).format("Do"))),c.a.createElement(C,{countriesData:n,biggestNumber:u,getDate:S}))};n(22);var N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.21fe3164.chunk.js.map