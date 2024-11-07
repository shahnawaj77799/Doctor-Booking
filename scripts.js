document.getElementById('toggleSidebar').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('hidden');

});

async function fun (){
    let r = await fetch("http://localhost:3001/student")
    let c = await r.json()
    let sh = document.getElementById('showdata')
    var d = c.map((e)=>`

    <tr>
    <td> ${e.id} </td>
    <td> ${e.stname} </td>
    <td> ${e.location} </td>
    <td> ${e.doctortype} </td>
    <td> ${e.diseases} </td>
    <td> ${e.date} </td>
    <td> ${e.time} </td>
    </tr>
      `).join(" ")
       
        sh.innerHTML = d
    }
    fun()

  function submitDAta(){
        // event.preventDefault();
    
        // Collect form data
        const id = document.getElementById('id').value;
        const name = document.getElementById('stname').value;
        const location = document.getElementById('location').value;
        const doctorType = document.getElementById('doctorType').value;
        const disease = document.getElementById('disease').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
    
        // Create a JSON object
        const bookingData = {
            id: id,
            name: name,
            location: location,
            doctorType: doctorType,
            disease: disease,
            date: date,
            time: time
        };
    
        // Convert JSON object to string and display it

        
        const bookingResult = document.getElementById('bookingResult');
        bookingResult.innerHTML = `<pre>${JSON.stringify(bookingData, null, 2)}</pre>`;
    
        // Here you can send the JSON data to a server or save it locally
        // Example: Sending data to a server using fetch API


        fetch('http://localhost:3001/student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        }).catch((error) => {
            console.error('Error:', error);
        });
    };
    

    // function add(){
    //     let data  = {
    //         id:document.getElementById('id').value,
    //         stname:document.getElementById('stname').value,
    //         location:document.getElementById('location').value,
    //         doctortype:document.getElementById('doctortype').value,
    //         diseases:document.getElementById('diseases').value,
    //         date:document.getElementById('date').value,
    //         time:document.getElementById('time').value
    //     }
    //     fetch("http://localhost:3001/student",{
    //         method:"POST",
    //         headers:{
    //                 'Content-type':'application/json'
    //         },
    //         body:JSON.stringify(data)
    //     })
    //     .then(res=>alert("added sucessfully"))
    // }
    // function add(){
    //     let data  = {
    //         id:document.getElementById('id').value,
    //         stname:document.getElementById('stname').value,
    //         location:document.getElementById('location').value
           
    //     }
    //     fetch("http://localhost:3000/student",{
    //         method:"POST",
    //         headers:{
    //                 'Content-type':'application/json'
    //         },
    //         body:JSON.stringify(data)
    //     })
    // }

    // function submitBooking() {
    //     const doctorType = document.getElementById('doctorType').value;
    //     const disease = document.getElementById('disease').value;
    //     const date = document.getElementById('date').value;
    //     const time = document.getElementById('time').value;
    
    //     if (!doctorType || !disease || !date || !time) {
    //         alert('Please fill in all fields');
    //         return;
    //     }
    
    //     const bookingResult = document.getElementById('bookingResult');
    //     bookingResult.innerHTML = `
    //         <h2>Booking Confirmation</h2>
    //         <p><strong>Doctor Type:</strong> ${doctorType}</p>
    //         <p><strong>Disease:</strong> ${disease}</p>
    //         <p><strong>Date:</strong> ${date}</p>
    //         <p><strong>Time:</strong> ${time}</p>
    //     `;
    // }
    
