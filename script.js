const url = "https://api.postalpincode.in/pincode/";

const result = document.getElementById("result");

const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {

    let inpWord = document.getElementById("pincode").value;
    
        fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            result.innerHTML=`<br><br><br><h2>DETAILS OF THE PINCODE</h2><br><br><h4>${data[0].Message}</h4><br><br>`
         var table = document.getElementById('table')
            table.innerHTML=  ` <tr><th>Block</th>
            <th>BranchType</th>
            <th>Circle</th>
            <th>Country</th>
            <th>DeliveryStatus</th>
            <th>Description</th>
            <th>District</th>
            <th>Division</th>
            <th>Name</th>
            <th>Pincode</th>
            <th>Region</th>
            <th>State</th>
            
        </tr>`
  
		for (var i = 0; i < data.length; i++){
            for (var j = 0; j <data[0].PostOffice.length ; j++){
                var row = `<tr>
							<td>${data[i].PostOffice[j].Block}</td>
							<td>${data[i].PostOffice[j].BranchType}</td>
							<td>${data[i].PostOffice[j].Circle}</td>
                            <td>${data[i].PostOffice[j].Country}</td>
							<td>${data[i].PostOffice[j].DeliveryStatus}</td>
							<td>${data[i].PostOffice[j].Description}</td>
                            <td>${data[i].PostOffice[j].District}</td>
							<td>${data[i].PostOffice[j].Division}</td>
							<td>${data[i].PostOffice[j].Name}</td>
                            <td>${data[i].PostOffice[j].Pincode}</td>
							<td>${data[i].PostOffice[j].Region}</td>
							<td>${data[i].PostOffice[j].State}</td>
					  </tr>`
			
                      table.innerHTML += row;        

		}
        
    }
})
})