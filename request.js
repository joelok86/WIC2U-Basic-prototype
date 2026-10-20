const form=document.getElementById('requestForm');
form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);if(!data.get('phone')&&!data.get('email')){alert('Please provide a demo phone or email.');return;}
// Cryptographically random demo identifier. Browser-only storage is not a shared database.
const bytes=new Uint8Array(6);crypto.getRandomValues(bytes);const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';const id='WIC-'+Array.from(bytes,b=>alphabet[b%alphabet.length]).join('');
const record={id,zip:data.get('zip'),enrolled:data.get('enrolled'),transportation:data.get('transport'),appointment:data.get('appointment'),name:data.get('name'),phone:data.get('phone'),email:data.get('email'),status:'Pending',createdAt:new Date().toISOString(),demo:true};
try{const previous=JSON.parse(localStorage.getItem('wic2u_demo_requests')||'[]');previous.push(record);localStorage.setItem('wic2u_demo_requests',JSON.stringify(previous));}catch(err){alert('Could not save demo request in this browser.');return;}
form.hidden=true;document.getElementById('code').textContent=id;document.getElementById('success').hidden=false;window.scrollTo({top:0,behavior:'smooth'});
});
