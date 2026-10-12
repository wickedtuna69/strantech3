(function(){
  var h=document.querySelector('header');
  if(h){var t=function(){h.classList.toggle('solid',window.scrollY>40)};t();addEventListener('scroll',t,{passive:true});}
  var f=document.getElementById('contactForm');
  if(!f)return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var b=f.querySelector('button'),s=document.getElementById('formStatus');
    b.disabled=true;b.textContent='Sending…';
    fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}})
      .then(function(r){if(!r.ok)throw 0;f.reset();s.textContent='Thanks. Our team will reply within one business day.';})
      .catch(function(){s.textContent='That did not send. Please call 888.308.1810.';})
      .finally(function(){b.disabled=false;b.textContent='Request a consultation';});
  });
})();
