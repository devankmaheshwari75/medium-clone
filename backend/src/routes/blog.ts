import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { decode, sign, verify } from 'hono/jwt'

import { createBlogInput,updateBlogInput} from "@devank75/medium-common"



export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string;
        message: string
    }
}>();




blogRouter.use("/*", async (c, next) => {


    const headers = c.req.header("Authorization") || "";
    const token = headers.split(" ")[1];

    const user = await verify(token, c.env.JWT_SECRET);
    if (user) {
        c.set("userId", user.id as string);
        await next();

    }

    else {
        c.status(403)
        return c.json({
            error: "unauthorized user or the token is not correct ",
        })

    }



})


blogRouter.post("/", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());


    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body);
    if(!success){
        c.status(411);
        return c.json({
          message  : "Incorrect  Inputs"
        })
      }
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: c.get("userId")



        }
    })


    return c.json({
        id: post.id
    })









    return c.text("hi from blog route ")
})

blogRouter.put("/", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());


    const body = await c.req.json();
    const {success} = updateBlogInput.safeParse(body);


    if(!success){
        c.status(411);
        return c.json({
          message  : "Incorrect  Inputs"
        })
      }

    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content,

        }
    })




    return c.json({
        id: post.id
    });
})


blogRouter.get("/bulk", async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());



    const posts = await prisma.post.findMany({

    });
    return c.json({
        message: "posts fetchedd successfully",

        posts: posts
    })


})
blogRouter.get("/:id", async (c) => {


    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());


    const id = c.req.param("id");

    try {
        const post = await prisma.post.findUnique({
            where: {
                id: id
            }
        })

        return c.json({
            post: post

        })
    }

    catch (e) {
        c.status(404);
        return c.json({
            message: "error while fetching post   "
        })
    }





})

