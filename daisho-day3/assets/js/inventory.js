//----------------------------
//1.在庫データ（JSON的な構造）
//----------------------------
const items = [
    {id:"D001",name:"オレンジジュース",price:150,stock:20,minStock:5},
    {id:"D002",name:"コーラ",         price:150,stock:12,minStock:5},
    {id:"D003",name:"お茶",           price:120,stock:30,minStock:5}
];

//HTMLで<tbody id="item-list">と書いた部分をJavaScriptから取得する
const tbody=document.getElmentById("item-list");

//----------------------------
//2.表示用の関数　render()
//----------------------------
function render(){
    //一度、中身を空にしてから作り直す
    tbody.innerHTML = "";

    //itemsの中身を1件ずつ取り出してtr（行）を作る
    items.forEach(item=>{
        const tr=document.createElement("tr");
    
        if(item.stock<item.minStock){
            tr.classList.add("low-stock");
        }
        tr.innerHTML=`
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.stock}</td>
          <td>
            <button onclick="changeStock('${item.id}',1)">+</button>
            <button onclick="changeStock('${item.id}',-1)">-</button>
          </td>
        `;
        tbody.appendChild(tr);
    });
}

function changeStock(id,diff){
    const item=items.find(i=>i.id===id);
    if(!item){
        return;
    }
}

    item.stock += diff;
    if(item.stock<0){
        item.stock=0;
    }

    render();
render();