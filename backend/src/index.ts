import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post("/api/v1/signup" , (c) =>{
  return c.text("hi signup route")
})
app.post("/api/v1/signin" , (c) =>{
  return c.text("hi signin route")
})


app.post("/api/v1/blog" , (c) =>{
  return c.text("hi from blog royte ")
})

app.put("/api/v1/blog" , (c)=>{
  return c.text("hey from put route ");
})
app.get("/api/v1/blog/:id" , (c)=>{

  const id  = c.req.param("id");
  console.log(id);
  return c.text(`id is ${id}`);

  
})

export default app
