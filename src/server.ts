import "dotenv/config";
import app from "./app";
import { AppDataSource } from "./data-source";


// PEGA AS CONFIG DO DATA-SOURCE E INICIALIZA O SERVER
AppDataSource.initialize()
  .then((): void => {
    console.log("Server is running");
    
    const PORT: number = Number(process.env.PORT) || 3000;
    app.listen(PORT, () => console.log("Servidor executando"));
  })
  .catch((err: unknown): void => {
    console.error("Error during Data Source initialization", err);
  });
