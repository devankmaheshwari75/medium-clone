import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { decode, sign, verify } from 'hono/jwt'
import {signupInput , signinInput } from "@devank75/medium-common"


export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string
    }
  }>();


  userRouter.post("/signup", async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    console.log(body.name);

    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message  : "Invalid Inputs"
      })
    }
  
    const alreadyExists = await prisma.user.findUnique({
      where  : {
        email : body.email
      }
    })
  
  
    if(alreadyExists){
      return c.json({
        message : "user already exists"
      })
  
    }
  
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name  : body.name || "Anonymous"
      }
    })
  
  
    const token = await sign({
      id: user.id
    }, c.env.JWT_SECRET);
  
  
    return c.json({
      jwt: token,
      message :  "user created successfully"
    })
  
  })
  
  userRouter.get("/getall" , async(c)=>{
    const prisma  = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const users = await prisma.user.findMany({
  
    })
  
    return c.json({
      users
    })
  })
  userRouter.post("/signin", async(c) => {

    
  
    const prisma  = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
  
    const body  = await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message  : "Invalid Inputs"
      })
    }

    

  
    const user  = await prisma.user.findUnique({
      where :{
        email : body.email
      }
    })
  
    if(!user){
      c.status(403)
      return c.json({
        error : "user not found"
      })
    }
  
  
    const token  = await sign({
      id : user.id
    } , c.env.JWT_SECRET);
  
    return c.json({
      message  :"user signed in successfully",
      jwt : token
    });
  
  
   
  })