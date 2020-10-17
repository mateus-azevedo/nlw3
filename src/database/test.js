const Database = require('./db.js');

Database.then(async db => {
  // inserir dados na tabela
  await db.run(`
    INSERT INTO orphanages (
      lat,
      lng,
      name,
      about,
      whatsapp,
      images,
      instructions,
      opening_hours,
      open_on_weekends
    ) VALUES (
      "-27.222633",
      "-49.6555874",
      "Lar dos meninos",
      "Presta assistência a criança de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      "5521978789898",
      "https://images.unsplash.com/photo-1570570423586-370eee6c19b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      "Horário de visitas das 8h até 18h",
      "0"
    );
  `) 

  // consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  // consultar somente 1 orphanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
  console.log(orphanage)
})