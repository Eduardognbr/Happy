const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
   await saveOrphanage(db, { 
        lat: "-15.807540",
        lng: "-47.903307",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "61998989898",
        images: [
            "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyeyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e carinho para dar.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
    //deletar dados da tabela
    /*console.log(await db.all('DELETE FROM orphanages WHERE id ="4"'))
    console.log(await db.all('DELETE FROM orphanages WHERE id ="5"'))*/
})