import "dotenv/config";

import Fastify from "fastify";

const teams = [
    { id: 1, name: "McLaren", base: "Inglaterra" },
    { id: 2, name: "Mercedes", base: "Alemanha" },
    { id: 3, name: "Red Bull", base: "Áustria" },
    { id: 4, name: "Ferrari", base: "Itália" },
    { id: 5, name: "Alpine", base: "França" },
    { id: 6, name: "Aston Martin", base: "Inglaterra" },
    { id: 7, name: "Alfa Romeo", base: "Suíça" },
    { id: 8, name: "Haas", base: "EUA" },
    { id: 9, name: "AlphaTauri", base: "Itália" },
    { id: 10, name: "Williams", base: "Inglaterra" }
  ];
  

const drivers = [
    { id: 1, name: "Max Verstappen", marca: "Red Bull" },
    { id: 2, name: "Charles Leclerc", marca: "Ferrari" },
    { id: 3, name: "Lando Norris", marca: "McLaren" },
    { id: 4, name: "Lewis Hamilton", marca: "Mercedes" },
    { id: 5, name: "Carlos Sainz", marca: "Ferrari" },
    { id: 6, name: "George Russell", marca: "Mercedes" },
    { id: 7, name: "Sergio Perez", marca: "Red Bull" },
    { id: 8, name: "Valtteri Bottas", marca: "Alfa Romeo" },
    { id: 9, name: "Fernando Alonso", marca: "Aston Martin" },
    { id: 10, name: "Pierre Gasly", marca: "Alpine" },
    { id: 11, name: "Esteban Ocon", marca: "Alpine" },
    { id: 12, name: "Kevin Magnussen", marca: "Haas" },
    { id: 13, name: "Nico Hulkenberg", marca: "Haas" },
    { id: 14, name: "Yuki Tsunoda", marca: "AlphaTauri" },
    { id: 15, name: "Nyck de Vries", marca: "AlphaTauri" },
    { id: 16, name: "Alexander Albon", marca: "Williams" },
    { id: 17, name: "Logan Sargeant", marca: "Williams" },
    { id: 18, name: "Oscar Piastri", marca: "McLaren" },
    { id: 19, name: "Lance Stroll", marca: "Aston Martin" },
    { id: 20, name: "Zhou Guanyu", marca: "Alfa Romeo" }
  ];
  

const server = Fastify({ logger: true });

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);
  return JSON.stringify({teams});
});

server.get("/drivers", async (req, res) => {
  res.type("aplication/Json").code(200);
  return JSON.stringify({drivers});
});


interface driverParams {
    id: string;
}


server.get<{Params: driverParams}>("/drivers/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    const driver = drivers.find((d) => d.id === id);
    
    if(!driver) {
        res.type("application/json").code(404)
        return {message: "driveris not found"}
    } else {
        res.type("aplication/Json").code(200);
        return JSON.stringify({driver})
    }
    
})


server.listen({ port: 3000 }, () => {
  console.log("Servidor ON");
});
