export  const cargarMilanesa = async()=>{ 
// const cargarMilanesa = async (foo) =>{
    const res = await fetch('http://localhost:8080/api/task/');
    console.log(res)
    try{
      switch(res.status){
        case 200:{
          const datos = await res.json();
          var milanga="";
          var parser = new DOMParser();
          
          datos.forEach(mila=>{
            milanga +=(`<>
            <tr key=${mila.id}>
              <th scope="row">${mila.id}</th>
              <td>${mila.title}</td>
              <td>${mila.createdAt}</td>
              </tr>
              <tr>
              <td colSpan={3}>${mila.description}Administrator entry for default value on description column for Notes</td>

            </tr>
            </>  `)
          });
          var doc = parser.parseFromString(milanga, 'text/html'); 
          document.getElementById("body").appendChild(doc.body);
        }break;
        case 404:
          console.log("aw shit, here we go again");
          break;
        default:
          console.log(res.status + "default switch case flag")
        break;
      }

    }catch(error){console.log(error)}
    
  }