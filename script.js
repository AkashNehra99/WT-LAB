// const Url = "https://jsonplaceholder.typicode.com/users";
// async function getapi(url){
//     const response = await fetch(Url);
//     var data = await response.json();
//     console.log(data);
//     show(data);
// }

// function show(data){
//     let tab = `<tr>
//         <th class = "text-center">Id</th>
//         <th class = "text-center">Name</th>
//         <th class = "text-center">Email</th>
//         <th class = "text-center">Address</th>
//         </tr>`;
        
//         for(let r of data){
//             tab += `<tr>
//             <td>${r.id} </td>
//             <td>${r.name} </td>
//             <td>${r.email} </td>
//             <td>${r.address.street} </td>
//             </tr>`;
//         }
        
//         document.getElementById("employee").innerHTML = tab;
//     }
    
//     getapi(Url);


    const Url = "https://dummyjson.com/products/category/smartphones"
    async function getapi(url){
        const response = await fetch(Url);
        var data = await response.json();
        console.log(data);
        show(data.products);
    }
    
    function show(data){
        let tab = `<tr>
            <th class = "text-center">Id</th>
            <th class = "text-center">Title</th>
            <th class = "text-center">Description</th>
            <th class = "text-center">Price</th>
            </tr>`;
            
            for(let r of data){
                tab += `<tr>
                <td>${r.id} </td>
                <td>${r.title} </td>
                <td>${r.description} </td>
                <td>${r.price} </td>
                </tr>`;
            }
            
            document.getElementById("employee").innerHTML = tab;
        }
        
        getapi(Url);
    