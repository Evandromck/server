import Fastify from "fastify";
import  cors  from '@fastify/cors'
import { PrismaClient } from '@prisma/client'


const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

app.get('/', () => {
    const habit = prisma.habit.findMany()
    

    return habit
})

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP Server runnimg')
})