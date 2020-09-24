//  ======= default data =======
const menu = document.querySelector("#menu");
const cart = document.querySelector("#cart");
const totalAmount = document.querySelector("#total-amount");
const button = document.querySelector("#submit-button");

// 菜單資料
let productData = [
  {
    id: "product-1",
    imgUrl:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "馬卡龍",
    price: 90
  },
  {
    id: "product-2",
    imgUrl:
      "https://images.unsplash.com/photo-1560691023-ca1f295a5173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "草莓",
    price: 60
  },
  {
    id: "product-3",
    imgUrl:
      "https://images.unsplash.com/photo-1568271675068-f76a83a1e2d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "奶茶",
    price: 100
  },
  {
    id: "product-4",
    imgUrl:
      "https://images.unsplash.com/photo-1514517604298-cf80e0fb7f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    name: "冰咖啡",
    price: 180
  }
];
// ======= 請從這裡開始 =======
// 依照 productData 內的資料顯示所有的品項名稱、價格和照片
// 產生MENU
let buyCounts = [0, 0, 0, 0]
for (let i in productData) {
  menu.children[i].firstElementChild.children[0].src = productData[i].imgUrl
  menu.children[i].firstElementChild.children[1].children[0].innerHTML = productData[i].name
  menu.children[i].firstElementChild.children[1].children[1].innerHTML = productData[i].price
}


menu.addEventListener('click', e => {
  cart.innerHTML = ''
  let Name = e.target.parentElement.children[0].innerHTML
  for (let i in productData) {
    if (Name === productData[i].name) {
      buyCounts[i] += 1
    }
  }
  // 按下「加入購物車」按鈕後，購物車清單會新增一列資料
  for (let i in productData) {
    if (buyCounts[i]) {
      cart.innerHTML += `<li class="list-group-item">${productData[i].name} X ${buyCounts[i]} 小計：   ${productData[i].price * buyCounts[i]}</li>`
    }
  }
  // 購物車會自動計算總金額
  let total = 0
  for (let i in productData) {
    total += productData[i].price * buyCounts[i]
  }
  totalAmount.innerHTML = total

})


// 送出訂單會跳出收據
button.addEventListener('click', e => {
  let yes = confirm('確定購買嗎？');
  if (yes) {
    // 收據被確認後，購物車會被清空
    alert('謝謝您的購買');
    cart.innerHTML = ''
    totalAmount.innerHTML = '--'
    buyCounts = [0, 0, 0, 0]
  } else {
    alert('您取消了送出訂單');
  }

})


