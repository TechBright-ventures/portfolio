function toggleMenu() {
    const nav = document.querySelector(".nav-links");
    nav.classList.toggle("active");
}

// function sendMessage(event) {
//     event.preventDefault();
    
//     let name = document.querySelector('input[type="text"]').value;
//     let email = document.querySelector('input[type="email"]').value;
//     let message = document.querySelector('textarea').value;
    
//     let mailtoLink = `mailto:agiagebright9@gmail.com?subject=Message from ${name}&body=${message} (Email: ${email})`;
    
//     window.location.href = mailtoLink;
//     alert('Message sent successfully! Thank you for Contacting Us!');
// }

var form = document.getElementById("my-form");
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Message sent successfully! Thank you for Contacting Us!";
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem submitting your form"
    });
  }
  form.addEventListener("submit", handleSubmit)
//IMAGE GALLERY
 function showImage(src) {
            const popup = document.getElementById('imagePopup');
            const popupImg = document.getElementById('popupImg');
            popupImg.src = src;
            popup.classList.add('show');
        }

        function hideImage() {
            const popup = document.getElementById('imagePopup');
            popup.classList.remove('show');
        }
