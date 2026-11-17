const T=[
{n:"Nandi Hills",lat:13.3702,lng:77.6835,p:"Chikkaballapur, Karnataka",d:60,drive:"1.5 h",lvl:"Easy",time:"2–3 h",alt:"1,478 m",best:"Oct–Feb",months:"Oct–Feb",temp:"12–25°C",weather:"Cool and misty mornings; sunrise views above clouds. Gets crowded on weekends.",why:"Sunrise above a sea of clouds, close to the city.",carry:["Light jacket","Torch for pre-dawn start","Water 1.5 L","Snacks"],note:"Gate timings apply; reach before 5 AM for sunrise."},
{n:"Savandurga",lat:12.9205,lng:77.2943,p:"Magadi, Ramanagara",d:60,drive:"1.5 h",lvl:"Moderate",time:"3–4 h",alt:"1,226 m",best:"Oct–Feb",months:"Oct–Feb",temp:"15–32°C",weather:"Hot and exposed in summer; pleasant in winter. Monsoon makes the granite slippery.",why:"One of Asia's largest monolith rocks with a steep granite climb.",carry:["Grip shoes","Gloves for rock","Cap and sunscreen","3 L water"],note:"Avoid after rain; the slope is steep and bare."},
{n:"Skandagiri",lat:13.4148,lng:77.6806,p:"Chikkaballapur",d:70,drive:"2 h",lvl:"Moderate",time:"3–4 h",alt:"1,350 m",best:"Oct–Feb",months:"Oct–Feb",temp:"10–24°C",weather:"Chilly, windy summit. Famous for sunrise trek with cloud cover.",why:"Popular night-trek for sunrise over clouds.",carry:["Warm layer","Headlamp","Windcheater","Energy bars"],note:"Online booking and entry slots are often required."},
{n:"Ramanagara (Ramadevara Betta)",lat:12.714,lng:77.268,p:"Ramanagara",d:50,drive:"1.5 h",lvl:"Easy",time:"2 h",alt:"~1,000 m",best:"Nov–Feb",months:"Nov–Feb",temp:"16–33°C",weather:"Dry and sunny; limited shade, so go early.",why:"Rocky hills and vulture sanctuary views, ideal for beginners.",carry:["Hat","Sunscreen","2 L water","Sturdy shoes"],note:"Famous film backdrop; keep silence near the sanctuary."},
{n:"Mullayanagiri",lat:13.3916,lng:75.72,p:"Chikkamagaluru",d:245,drive:"5 h",lvl:"Easy",time:"1.5–2 h",alt:"1,930 m",best:"Sep–Feb",months:"Sep–Feb",temp:"8–22°C",weather:"Cold, windy and foggy at the top; heavy rain in monsoon.",why:"Karnataka's highest peak with steps almost to the top.",carry:["Jacket","Rain poncho","Warm cap","Snacks"],note:"Combine with Baba Budangiri and a coffee estate stay."},
{n:"Kumara Parvatha",lat:12.6667,lng:75.6833,p:"Kukke Subramanya, Dakshina Kannada",d:280,drive:"6.5 h",lvl:"Hard",time:"2 days",alt:"1,712 m",best:"Oct–Feb",months:"Oct–Feb",temp:"12–28°C",weather:"Humid forest and open grasslands; strong sun on the ridge. Avoid monsoon due to leeches.",why:"A tough Western Ghats classic with forest, ridge and panoramic views.",carry:["Trekking shoes","Rain cover","Electrolytes","First-aid kit","Sleeping bag"],note:"Forest permission and a guide are mandatory; carry enough water."},
{n:"Tadiandamol",lat:12.22,lng:75.62,p:"Kodagu, Coorg",d:270,drive:"6 h",lvl:"Moderate",time:"4–5 h",alt:"1,748 m",best:"Oct–Mar",months:"Oct–Mar",temp:"10–24°C",weather:"Mist and strong winds; grassy slopes that turn slippery in rain.",why:"Highest peak in Coorg with rolling shola grasslands.",carry:["Windcheater","Rain jacket","Grip shoes","2 L water"],note:"Stay in nearby homestays; start before 8 AM."},
{n:"Kudremukh",lat:13.1294,lng:75.2556,p:"Chikkamagaluru",d:330,drive:"7 h",lvl:"Moderate",time:"6–7 h",alt:"1,894 m",best:"Oct–Feb",months:"Oct–Feb",temp:"12–26°C",weather:"Misty ridges with sweeping green slopes; very heavy rain June–Sept.",why:"Horse-face shaped peak inside a national park with stunning grasslands.",carry:["Rain gear","Leech socks","Trekking poles","Packed lunch","3 L water"],note:"Forest check-in and entry fee apply; no plastic allowed."}
];
const X=[
["Devarayanadurga",13.3777,77.2206,"Tumakuru","Easy","1.5–2 h","1,250 m","Oct–Feb","14–30°C","Dry forested hill; cool mornings, hot afternoons.","Temple hill with forest walk and rock views near Bengaluru.","Water 2 L,Cap,Grip shoes","Go early; slopes slippery after rain.",70],
["Chamundi Hills",12.2724,76.6700,"Mysuru","Easy","1.5–2 h","1,060 m","Oct–Feb","18–30°C","Warm and humid; best early morning.","Climb ~1,000 stone steps to the Chamundeshwari temple with city views.","Water 1.5 L,Comfy shoes,Cap","Crowded on weekends; start before 6 AM."],
["BR Hills",11.9967,77.1400,"Chamarajanagar","Moderate","3–4 h","1,800 m","Oct–Feb","14–28°C","Cool, misty forest; tiger reserve rules apply.","Forest trails with views of both Ghats and a famous temple.","Rain jacket,Water 2 L,Trek shoes","Entry via forest dept; guide recommended."],
["Gopalaswamy Betta",11.7500,76.6300,"Gundlupet","Easy","1–2 h","1,450 m","Oct–Feb","12–26°C","Cool and foggy; forest timing restrictions.","Hilltop temple above the clouds near Bandipur.","Light jacket,Water 1.5 L,ID","Entry timings and vehicle rules apply."],
["Kodachadri",13.8650,74.8500,"Shivamogga","Moderate","5–6 h","1,343 m","Oct–Feb","14–28°C","Humid and forested; very heavy monsoon.","Lush Ghats peak with sunrise views and a hilltop shrine.","Trek shoes,Rain gear,Water 3 L,Headlamp","Jeep option exists; forest permits needed."],
["Kundadri Hill",13.5700,75.0300,"Thirthahalli","Easy","1 h","826 m","Oct–Feb","18–28°C","Misty in monsoon, clear in winter.","Short climb to a Jain temple with green valley views.","Grip shoes,Water 1 L,Rain jacket","Slippery in rain; steep steps."],
["Narasimha Parvatha",13.5100,75.0300,"Agumbe","Hard","6–7 h","~1,200 m","Oct–Feb","14–27°C","Dense rainforest; leeches in monsoon.","Rainforest trek around Agumbe, known for sunsets.","Leech socks,Water 3 L,Trek shoes,Rain gear","Forest permission and guide mandatory."],
["Nagalapuram Falls",13.4350,79.6100,"Chittoor, AP","Moderate","3–4 h","~600 m","Oct–Feb","20–34°C","Hot; waterfalls best after monsoon.","Forest trek to waterfalls in Nagalapuram hills.","Water 3 L,Grip shoes,Cap,Snacks","Avoid heavy rain due to flash floods."],
["Tada Falls",13.5400,80.0300,"Tada, AP","Easy","1–2 h","~150 m","Oct–Feb","22–34°C","Hot and humid; falls peak after rains.","Short forest walk to a waterfall near Chennai.","Water 2 L,Cap,Sandals","Weekdays are quieter; don't swim in strong flow."],
["Arunachala Hill",12.2300,79.0680,"Tiruvannamalai","Moderate","2–3 h","~800 m","Nov–Feb","20–32°C","Warm and dry; best in cool months.","Sacred hill with rocky trail and temple-town views.","Water 2 L,Cap,Sturdy shoes","Check access rules; permits may apply."],
["Yelagiri Hills",12.5800,78.6400,"Tirupattur","Easy","1.5–2 h","1,050 m","Oct–Feb","16–28°C","Mild, cool hill-station climate.","Gentle hill walks with viewpoints and forest trails.","Light jacket,Water 1.5 L,Cap","Stay overnight to cover two short walks."],
["Ananthagiri Hills",17.3300,77.8800,"Vikarabad","Easy","2–3 h","~700 m","Oct–Feb","16–30°C","Pleasant winters, misty monsoon.","Forest walks, streams and viewpoints near Hyderabad.","Water 2 L,Cap,Trek shoes","Monsoon is lush but slippery."],
["Bhongir Fort",17.5150,78.8880,"Yadadri Bhuvanagiri","Moderate","1.5–2 h","~610 m","Oct–Feb","18–32°C","Dry and sunny; little shade.","Monolithic rock fort with steep steps and a short climb.","Water 2 L,Cap,Grip shoes","Avoid midday; steep sections."],
["Devarakonda Fort",16.7333,78.9167,"Nalgonda","Moderate","2–3 h","~600 m","Oct–Feb","18–32°C","Hot and dry; go early.","Historic hill fort with rocky trails and wide views.","Water 3 L,Cap,Sturdy shoes","Carry all water; no shops on the trail."],
["Velliangiri Hills",10.9650,76.6950,"Poondi, Coimbatore","Hard","7–8 h","1,778 m","Feb–May","10–24°C","Cold and windy; closed in monsoon.","Seven-hill spiritual trek, often called the Kailash of the South.","Warm layer,Water 3 L,Trek shoes,Snacks","Open mainly Feb–May; forest rules apply."],
["Marudhamalai",11.0450,76.8580,"Coimbatore","Easy","45 min–1 h","~500 m","Oct–Feb","20–32°C","Warm; pleasant in the morning.","Short temple-hill climb with forest views near the city.","Water 1 L,Cap,Comfy shoes","Weekends are busy."],
["Dhoni Hills",10.8500,76.6000,"Palakkad border","Moderate","3–4 h","~900 m","Oct–Feb","18–30°C","Humid forest; slippery in monsoon.","Forest trek towards Dhoni waterfalls.","Water 2 L,Rain jacket,Grip shoes","Forest permission may be required."],
["Meesapulimala",10.0833,77.2000,"Munnar","Hard","2 days","2,640 m","Dec–Mar","2–20°C","Cold, foggy ridge; permit-based trek.","High-altitude Munnar ridge trek with rhododendron valleys.","Warm jacket,Headlamp,Sleeping bag,Rain cover","Book via Kerala Forest Dept; guide mandatory."],
["Kolukkumalai",10.0780,77.2300,"Suryanelli, Munnar","Moderate","3–4 h","2,160 m","Oct–Mar","8–22°C","Cold, windy sunrise views.","One of the highest tea estates, famous for sunrise.","Jacket,Torch,Water 1.5 L","Jeep or trek; start before dawn."],
["Vagamon Meadows",9.6830,76.9020,"Idukki","Easy","1–2 h","1,100 m","Oct–Mar","15–25°C","Misty, cool and breezy.","Rolling grass hills and pine forests.","Light jacket,Water 1.5 L,Cap","Fog can hide trails; stay on marked paths."],
["Sinhagad",18.3664,73.7559,"Pune","Easy","1.5–2 h","1,312 m","Jun–Feb","15–28°C","Green and misty in monsoon.","Historic fort reached by an easy early-morning climb.","Water 2 L,Rain jacket,Grip shoes","Very crowded on weekends."],
["Lohagad Fort",18.7106,73.4800,"Lonavala","Easy","1–1.5 h","1,033 m","Jun–Feb","16–28°C","Misty and green in monsoon.","Easy fort trek with the famous Vinchu Kata ridge.","Rain jacket,Water 1.5 L,Grip shoes","Steps get slippery in rain."],
["Rajmachi Fort",18.8000,73.4000,"Lonavala","Moderate","3–4 h","~830 m","Jun–Feb","16–30°C","Lush monsoon trails, glowing fireflies in June.","Forest trail to twin forts, popular for night treks.","Headlamp,Rain jacket,Water 2 L","Trails can be muddy; carry a torch."],
["Torna Fort",18.2760,73.6200,"Velhe","Moderate","3–4 h","1,403 m","Oct–Feb","14–28°C","Windy and exposed at the top.","Steep fort climb, one of the highest forts near Pune.","Water 3 L,Windcheater,Grip shoes","Avoid heavy monsoon rain."],
["Harishchandragad",19.3889,73.7767,"Ahmednagar","Hard","2 days","1,422 m","Oct–Feb","10–26°C","Cold nights, strong winds.","Famous overnight trek with the Konkan Kada cliff.","Sleeping bag,Headlamp,Water 3 L,Warm layer","Carry food and water; camping or cave stay."]
];
X.forEach(a=>T.push({n:a[0],lat:a[1],lng:a[2],p:a[3],lvl:a[4],time:a[5],alt:a[6],best:a[7],months:a[7],temp:a[8],weather:a[9],why:a[10],carry:a[11].split(","),note:a[12],d:a[13],drive:""}));
let f="All",q="",pt="day",R=350;
const el=id=>document.getElementById(id);
function render(){
 const list=T.filter(t=>D(t).km<=R&&(f==="All"||t.lvl===f)&&(t.n+t.p).toLowerCase().includes(q)).sort((a,b)=>D(a).km-D(b).km);
 el("grid").innerHTML=list.map((t,i)=>`<div class="card">
 <div><span class="tag ${t.lvl}">${t.lvl}</span></div>
 <h3>${t.n}</h3><div class="loc">📍 ${t.p}</div>
 <div class="facts">
 <div><span>Distance</span>${D(t).km} km${D(t).est?" (est.)":""} · ${D(t).time}</div><div><span>Trek time</span>${t.time}</div>
 <div><span>Altitude</span>${t.alt}</div><div><span>Temp</span>${t.temp}</div>
 </div>
 <div class="bar" title="Distance from your start point"><i style="width:${Math.max(6,Math.round(D(t).km/MAXD()*100))}%"></i></div>
 <div class="loc">🗓️ Best: <b>${t.best}</b></div>
 <div class="btns"><a class="dir" target="_blank" rel="noopener" href="${dirUrl(t)}">🧭 Directions</a><button class="btn" onclick="tg(this)">Details ▾</button></div>
 <div class="more">
 <p><b>Why go:</b> ${t.why}</p><p><b>Weather:</b> ${t.weather}</p>
 <p><b>Carry:</b> ${t.carry.join(", ")}</p><p><b>Note:</b> ${t.note}</p>
 </div></div>`).join("")||"<p>No treks found.</p>";
}
function tg(b){const m=b.nextElementSibling;m.classList.toggle("open");b.textContent=m.classList.contains("open")?"Hide ▴":"Details ▾"}
el("rad").onchange=e=>{R=+e.target.value;render()};
el("q").oninput=e=>{q=e.target.value.toLowerCase();render()};
document.querySelectorAll("[data-f]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-f]").forEach(x=>x.classList.remove("on"));b.classList.add("on");f=b.dataset.f;render()});
el("sCount").textContent=T.length;
const CITIES=[["Bengaluru",12.9716,77.5946],["Mysuru",12.2958,76.6394],["Mangaluru",12.9141,74.8560],["Chennai",13.0827,80.2707],["Hyderabad",17.3850,78.4867],["Coimbatore",11.0168,76.9558],["Kochi",9.9312,76.2673],["Pune",18.5204,73.8567]];
let O={name:"Bengaluru",lat:12.9716,lng:77.5946,preset:true};
function hav(a,b,c,d){const r=x=>x*Math.PI/180,R=6371,dl=r(c-a),dn=r(d-b);const h=Math.sin(dl/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(dn/2)**2;return 2*R*Math.asin(Math.sqrt(h))}
function D(t){let km,est=false;if(O.preset&&O.name==="Bengaluru"&&t.d!==undefined){km=t.d}else{km=Math.round(hav(O.lat,O.lng,t.lat,t.lng)*1.3);est=true}
 const h=km/48,hh=Math.floor(h),mm=Math.round((h-hh)*60/5)*5;return{km,est,time:(hh?hh+" h ":"")+(mm&&mm<60?mm+" m":"")||"<10 m"}}
function MAXD(){return Math.max(...T.map(t=>D(t).km),1)}
function dirUrl(t){return`https://www.google.com/maps/dir/?api=1&origin=${O.lat},${O.lng}&destination=${t.lat},${t.lng}&travelmode=driving`}
function renderTable(){el("tb").innerHTML=[...T].sort((a,b)=>D(a).km-D(b).km).map(t=>`<tr><td><b>${t.n}</b></td><td>${D(t).km} km</td><td>${D(t).time}</td><td>${t.time}</td><td><span class="tag ${t.lvl}">${t.lvl}</span></td><td>${t.months}</td></tr>`).join("")}
function refresh(){const n=[...T].sort((a,b)=>D(a).km-D(b).km)[0];
 el("startTxt").textContent=`Starting from ${O.name}. Distances & drive times are approximate road estimates; tap Directions for exact live routes in Google Maps.`;
 el("cmpTxt").textContent=`Sorted by distance from ${O.name}.`;
 el("sNear").textContent=n.n.split(" (")[0]+" · "+D(n).km+" km";
 render();renderTable()}
el("city").innerHTML=CITIES.map((c,i)=>`<option value="${i}">${c[0]}</option>`).join("");
el("city").onchange=e=>{const c=CITIES[e.target.value];O={name:c[0],lat:c[1],lng:c[2],preset:true};el("locStatus").textContent="";refresh()};
el("gps").onclick=()=>{const st=el("locStatus");
 if(!navigator.geolocation){st.textContent="Location not supported. Please pick a city.";return}
 st.textContent="Finding your location…";
 try{navigator.geolocation.getCurrentPosition(p=>{O={name:"your current location",lat:p.coords.latitude,lng:p.coords.longitude,preset:false};st.textContent="✅ Using your live location";refresh()},
 ()=>{st.textContent="Couldn't access location. Allow permission or pick a city."},{timeout:10000})}catch(e){st.textContent="Couldn't access location. Pick a city."}};

const base={"Clothing":["Quick-dry T-shirt","Trek pants","Extra socks","Cap / buff"],"Gear":["Trekking shoes","Backpack 20–30 L","Torch / headlamp","Power bank"],"Food & Water":["2–3 L water","Energy bars","Dry fruits","ORS / electrolytes"],"Safety":["First-aid kit","ID & permit copy","Whistle","Sunscreen"]};
const extra={day:{},hill:{"Monsoon extras":["Rain jacket / poncho","Leech socks","Waterproof bag cover","Trekking poles","Warm layer"]},camp:{"Camp extras":["Tent / sleeping bag","Warm jacket","Stove & utensils","Extra food","Trash bags","Toiletries"]}};
let chk={};
function renderPack(){
 const all={...base,...extra[pt]};let tot=0,done=0;
 el("packGrid").innerHTML=Object.entries(all).map(([k,v])=>`<div class="card"><h3>${k}</h3>${v.map(i=>{tot++;const id=k+i;if(chk[id])done++;return `<label><input type="checkbox" ${chk[id]?"checked":""} onchange="ck('${id.replace(/'/g,"\\'")}',this.checked)">${i}</label>`}).join("")}</div>`).join("");
 el("prog").textContent=`🎒 Packed ${done} of ${tot} items`+(done===tot?" — you're ready! 🥾":"");
}
function ck(id,v){chk[id]=v;renderPack()}
document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-t]").forEach(x=>x.classList.remove("on"));b.classList.add("on");pt=b.dataset.t;renderPack()});
function mailUp(){const em="your-email@example.com";el("send").href="mailto:"+em+"?subject="+encodeURIComponent("PeakPath feedback from "+(el("cn").value||"a visitor"))+"&body="+encodeURIComponent(el("cm").value)}
el("cn").oninput=mailUp;el("cm").oninput=mailUp;mailUp();
refresh();renderPack();
