import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 8001;

//other routes
const itemRoute = require('./item/item.route');

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
      message: "Mobile Service",
  });
});

app.use('/item', itemRoute);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: unknown) {
    console.error(`Error occured: ${error} `);
}
