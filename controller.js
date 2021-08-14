const db = require('./dbconfig')
module.exports = {
   
    contas: {
        async get(query) {
            const res = await database(query)
            return res
        },
        async getOne(query) {
            const res = await database_one(query)
            return res
        },
        async push(usuario) {
            const res = await insert_database(usuario)
            return res
        },
        async update(query, updateQuery) {
            const res = await update_database(query, updateQuery)
            return res
        },
        async remove(query) {
            const res = await remove_database(query)
            return res
        }
    }
    
}
async function database(query) {
    return await new Promise(async (resolve, reject) => {
        const response = await ((await db()).collection("database").find(query||{})).toArray()
        resolve(response)
        
    })
}
async function database_one(query) {
    return await new Promise(async (resolve, reject) => {
        const response = await ((await db()).collection("database").findOne(query||{}))
        return resolve(response)
        
    })
}
async function update_database(query, updateQuery) {
    return await new Promise(async(resolve, reject) => {
        return ((await db()).collection("database").updateMany(query, updateQuery, (er,re)=>{
            resolve(!er)
        }))
        
    })
}
async function insert_database(query) {
    return await new Promise(async (resolve, reject) => {
        return ((await db()).collection("database").insertOne(query, (er,re)=>{
            er?resolve(false):resolve(re)
        }))
        
    })
}

