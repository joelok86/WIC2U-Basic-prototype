
const map=L.map('map').setView([37.55,-78.6],7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(map);
let markers=[];let clinics=[];
const zip=document.getElementById('zipSearch'),district=document.getElementById('districtFilter');
function show(){const filtered=clinics.filter(
c=>(!zip.value||c.zip.includes(zip.value.trim()))&&(
!district.value||c.district===district.value));markers.forEach(
m=>map.removeLayer(m));
markers=[];
document.getElementById('count').textContent=`${filtered.length} of ${clinics.length} sample listings`;
const cards=document.getElementById('clinicCards');
cards.replaceChildren();
filtered.forEach(c=>{const m=L.marker([c.lat,c.lng]).addTo(map).bindPopup(c.name+' — approximate marker');
markers.push(m);
const card=document.createElement('article');
card.className='clinic';
const heading=document.createElement('h4');
heading.textContent=c.name;const d=document.createElement('small');
d.textContent=c.district+' HEALTH DISTRICT';const a=document.createElement('p');a.textContent=c.address;
const p=document.createElement('p');
p.textContent=c.phone;
const note=document.createElement('small');
note.textContent='Demo listing — verify details before visiting';
card.append(heading,d,a,p,note);
cards.append(card)});}
fetch('clinics.json').then(r=>{if(!r.ok)throw Error('Could not load clinic data');
return r.json()}).then(data=>{clinics=data;
[...new Set(data.map(c=>c.district))].sort().forEach(d=>{const option=document.createElement('option');
option.value=d;
option.textContent=d;
district.append(option)});
show()}).catch(()=>document.getElementById('count').textContent='Clinic data could not load. Use a local web server (see README).');
zip.addEventListener('input',show);
district.addEventListener('change',show);
