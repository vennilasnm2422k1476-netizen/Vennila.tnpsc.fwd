// Animate skill bars

document.addEventListener('DOMContentLoaded', ()=>{

  document.querySelectorAll('.skill i').forEach(el=>{

    const w = el.getAttribute('data-w') || 60;

    setTimeout(()=> el.style.width = w + '%', 300);

  });

});

// Simple client-side contact form handler (demo only)

function handleSubmit(e){

  e.preventDefault();

  const name = document.getElementById('name').value.trim();

  const email = document.getElementById('email').value.trim();

  const message = document.getElementById('message').value.trim();

  const msg = document.getElementById('formMsg');

  if(!name || !email || !message){

    msg.textContent = 'Please fill all fields.'; 

    return false;

  }

  msg.textContent = 'Thanks, ' + name + '! I will contact you at ' + email + ' (demo message).';

  document.getElementById('contactForm').reset();

  return false;

}