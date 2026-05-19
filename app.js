const uploadInput = document.getElementById('movieUpload');

uploadInput.addEventListener('change', async ()=>{

  const file = uploadInput.files[0];

  const formData = new FormData();

  formData.append('movie',file);

  const response = await fetch('http://localhost:5000/upload',{

    method:'POST',
    body:formData

  });

  const data = await response.json();

  alert(data.message);

});