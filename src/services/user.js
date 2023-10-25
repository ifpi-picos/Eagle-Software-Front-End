let users = []

export function cadastro(body) {
    const user = users.find(({ email }) => email === body.email)
    if (user) throw new Error('usuario já cadastrado')

    users.push(body) //substituir por um BD
    return body
}

export function login(body) {
    const user = users.find(({ email }) => email === body.email) //substituir por um bd
    if (!user) throw new Error('usuario não encontrado')
    if (user.password !== body.password) throw new Error('senha incorreta')

    return user
}



