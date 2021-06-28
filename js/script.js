//input kolo
var siteName = document.getElementById("siteName") ;
var urlName = document.getElementById("siteUrl"); 

var bookmarkContainer ; //el7sala elly b3by feha...to save my data ("list of my data")

if(localStorage.getItem("myData") == null) // zbon gded awl mara yft7 el application
{
    bookmarkContainer = [];
}
else //znon adeem w 3ndo data 2dema
{
    bookmarkContainer = JSON.parse (localStorage.getItem("myData"));
    dispalyData(); //lw 3ayza 23rd el data 3ndy awl ma 2ft7

}


function btnEvent()
{
    // s7bt el value mn el inputs
    //object
    var site = 
    {
        name:siteName.value,
        url:urlName.value
    };

    bookmarkContainer.push(site);
    localStorage.setItem("myData", JSON.stringify(bookmarkContainer)); // ("KeyName","KeyValue")
    clearForm();
    dispalyData();
    console.log(bookmarkContainer);
      
}
 
function clearForm()
{
    siteName.value ="";
    urlName.value = "";
}

function dispalyData()
{
    var cartoona = ``;
    
    for(var i = 0 ; i < bookmarkContainer.length ; i++)
    {
        cartoona += `
        <div class="listInfo row">
            <div class="col-md-6">
                <h2 id="textMark" class="m-2">${bookmarkContainer[i].name}</h2>
            </div>
            <div class="col-md-6">
                <a href="${bookmarkContainer[i].url}" class="btn btn-primary m-2" target="_blank">Visit</a>
                <button onclick="deleteData(${i})" class="btn btn-danger m-2">Delete</button>
            </div>
        </div>`;
    }
    document.getElementById("bookmarkList").innerHTML = cartoona ;
}

function deleteData(dataIndex) // el parmeter da 34an ynady b rqm el elemet elly 3ayz 2ms7o
{
    bookmarkContainer.splice(dataIndex,1)
    localStorage.setItem("myData", JSON.stringify(bookmarkContainer)); // hna 2kny b3ml update ll array b3d ma ms7t mno
    dispalyData(); // 34an 23ed el data elgdeda b3d el edit elly 3mlto

}

function searchData(searchTerm)
{
    var cartoona =``;

    for(var i = 0 ; i < bookmarkContainer.length ; i++)
    {
        if(bookmarkContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
            cartoona +=  `
            <div class="listInfo row">
                <div class="col-md-6">
                    <h2 id="textMark" class="m-2">${bookmarkContainer[i].name}</h2>
                </div>
                <div class="col-md-6">
                    <a href="${bookmarkContainer[i].url}" class="btn btn-primary m-2" target="_blank">Visit</a>
                    <button onclick="deleteData(${i})" class="btn btn-danger m-2">Delete</button>
                </div>
            </div>`;
        }

    }
    document.getElementById("bookmarkList").innerHTML = cartoona ;
    
}