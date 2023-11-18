import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Routes,Route } from 'react-router-dom'
import { AddProduct, Dashboard, DetailPage, HomePage,PageProduct,Signup, ProductPage, UpdateProduct, UserPage,AddUser,UpdateUser,CategoryPage,AddCategory,UpdateCategory, SignIn } from './Page'
import AdminLayout from './Layouts/AdminLayout'
import WebsiteLayout from './Layouts/WebsiteLayout'
import { IProduct } from './Page/Type/Product'
import { IUser } from './Page/Type/User'
import { ICategory } from './Page/Type/Category'


function App() {

  //Call Api Product
  const[products,setProducts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/products')
    .then((respone)=>respone.json())
    .then((data)=>setProducts(data))
  },[])
  const removeProduct = (id:any)=>{
    fetch(`http://localhost:3000/products/${id}`,{
      method:"DELETE"
    }).then(()=> setProducts(products.filter((item)=>item.id !=id)))
    .then(()=>{
      window.confirm("Do you want to delete!")
    })
  }
  const addProduct = (newProduct:IProduct)=>{
    fetch(`http://localhost:3000/products`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(newProduct)
    }).then(()=>{
      alert('Add Success!')
    })
  }
  const onUpdate = (product:IProduct) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",//Cập nhật 1  hoặc nhiều trường dữ liệu 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    }).then(()=>{
      alert("Update Product Success!")
    })
  }
  //Call Api User
  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/users')
    .then((response)=>response.json())
    .then((data)=>setUsers(data))
  },[])

  const addUser = (newUser:IUser)=>{
   fetch('http://localhost:3000/users',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(newUser)
   }).then(()=>{
    alert('Add User Success!')
   })

  }
  const removeUser = (id:any)=>{
    fetch(`http://localhost:3000/users/${id}`,{
      method:"DELETE"
    }).then(()=> setUsers(users.filter((item)=>item.id !=id)))
    .then(()=>{
      window.confirm('Do you want to delete!')    
    })
    
  }
  const onUpdateUser = (user:IUser)=>{
    fetch(`http://localhost:3000/users/${user.id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(user)
    }).then(()=>{
      alert("Update User Success!")
    })
  }
 

  
//Call Api Category
const[categories,setCategories] = useState([])
useEffect(()=>{
  fetch('http://localhost:3000/categories')
  .then((respoonse)=>respoonse.json())
  .then((data)=>setCategories(data))
},[])

const addCategory = (newCategory:ICategory)=>{
  fetch(`http://localhost:3000/categories`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(newCategory)
  }).then(()=>{
    alert("Add Category Success!")
  })
}
const removeCategory = (id:any)=>{
  fetch(`http://localhost:3000/categories/${id}`,{
    method:"DELETE"
  }).then(()=>setCategories(categories.filter((item)=>item.id !=id)))
  .then(()=>{
    window.confirm("Do you want to delete!")
  })
}
const onUpdateCategories = (categories:ICategory)=>{
  fetch(`http://localhost:3000/categories/${categories.id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(categories)
  }).then(()=>{
    alert("Update Category Success!")
  })
}

  return (
   
  
      <Routes>
          <Route path='/' element={<WebsiteLayout/>} >
            <Route index element={<HomePage products={products}/>}/>
            <Route path='productpage' element={<PageProduct products={products}/>}/>
           
           
          </Route>

          <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<Dashboard products={products} users={users} categories={categories} />}/>
          <Route path='product'>
              <Route index element={<ProductPage products={products} removeProduct={removeProduct}/>} />
              <Route path='add'element={<AddProduct addProduct={addProduct} />} />
              <Route path=':id/update'element={<UpdateProduct onUpdate={onUpdate} products={products}/>} />
          </Route>
          <Route path='user'>
            <Route index element={<UserPage users={users} removeUser={removeUser} />}/>
            <Route path='add' element={<AddUser addUser={addUser}/>}/>
            <Route path=':id/update' element={<UpdateUser onUpdateUser={onUpdateUser} users={users}/>}/>
          </Route>
          <Route path='category'>
            <Route index element={<CategoryPage categories={categories}  removeCategory={removeCategory} />}/>
            <Route path='add' element={<AddCategory addCategory={addCategory}/>}/>
            <Route path=':id/update' element={<UpdateCategory  categories={categories} onUpdateCategories={onUpdateCategories} />}/>
          </Route>

          </Route>
          <Route path='detail/:id' element={<DetailPage products={products}/>}/>
          <Route path='signup' element={<Signup addUser={addUser}/>}/>
          <Route path='singin' element={<SignIn addUser={addUser}/>}/>
     </Routes>
  
      
   
  )
}

export default App
