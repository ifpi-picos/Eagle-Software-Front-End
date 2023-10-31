import jwt from 'jsonwebtoken'

let users = []

const SECRET = process.env.JWT_SECRET

function createToken(user){
    return jwt.sign({email: user.email, name: user.name}, SECRET)
}

function readToken(token){
    try{
        return jwt.verify(token, SECRET)
    }catch (err) {
        throw new Error('Token inválido')
    }
}

export function cadastro(body) {
    const user = users.find(({ email }) => email === body.email)
    if (user) throw new Error('usuario já cadastrado')

    users.push(body) //substituir por um BD

    const token = createToken(body)
    return token
}

export function login(body) {
    const user = users.find(({ email }) => email === body.email) //substituir por um bd
    if (!user) throw new Error('usuario não encontrado')
    if (user.password !== body.password) throw new Error('senha incorreta')

    const token = createToken(user)
    return token 
}



