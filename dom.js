var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem)
itemList.addEventListener('click',removeItem)

function addItem(e)
{
    e.preventDefault();
    var newItem = document.getElementById('item').value;

    var li = document.createElement('li');
    li.className='list-group-item';

    var deleteBtn = document.createElement('button');
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    

    var editBtn = document.createElement('button');
    editBtn.className="btn btn-success" 
    editBtn.style.float='right'
    editBtn.appendChild(document.createTextNode('Edit'))
    //editBtn.style.backgroundColor='green'
    
   

    li.appendChild(document.createTextNode(newItem));
    
    itemList.appendChild(li);
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)
}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm("are you sure you want to delete"))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}