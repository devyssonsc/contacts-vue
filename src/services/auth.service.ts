export function fakeLogin(email: string, password: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@email.com' && password === '123456') {
        resolve({
          user: {
            id: 1,
            name: 'Admin',
            email
          },
          token: 'fake-jwt-token-123456'
        })
      } else {
        reject(new Error('Credenciais inválidas'))
      }
    }, 800) // simula latency
  })
}

export function fakeRegister(name: string, email: string, password: string) {
  return new Promise((resolve) => {
    console.log(password);
    setTimeout(() => {
      resolve({
        user: {
          id: Math.floor(Math.random() * 1000) + 2, // id aleatório
          name,
          email
        },
        token: 'fake-jwt-token-654321'
      })
    }, 800) // simula latency
  })
}
