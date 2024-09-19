import z from "zod";
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20),
    name: z.string().optional()
})


export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(20)


})

// for blogs 


export const createBlogInput = z.object({
    title: z.string().min(5),
    content: z.string().min(10),

})

// for update 

export const updateBlogInput = z.object({
    title: z.string().min(5),
    content: z.string().min(10),
    id: z.string().uuid(),

})
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;

export type UpdateBlogInput = z.infer<typeof updateBlogInput>;

