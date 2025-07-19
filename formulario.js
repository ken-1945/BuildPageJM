  document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;
    const data = new FormData(form);

    fetch("https://script.google.com/macros/s/AKfycbzeXaaHc8i6tip2II1s7SrZPpWOXFDQ_7gKRokq4GeXd4hTVAIHTdFGCJh1s-8AiYB5/exec", {
      method: "POST",
      body: data
    })
    .then(response => {
      if (response.ok) {
        alert("✅ Mensaje enviado correctamente.");
        form.reset();
      } else {
        alert("❌ Error al enviar. Intenta más tarde.");
      }
    })
    .catch(error => {
      console.error("Error al enviar:", error);
      alert("❌ Falló la conexión con el servidor.");
    });
  });



