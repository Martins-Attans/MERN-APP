import * as tutorials from "../controllers/tutorial.controller.js";
import express from "express";

export default (app) => {
    let router = express.Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);

    // Retrieve all Tutorials (with optional title search)
    router.get("/", tutorials.findAll);

    // IMPORTANT: Put specific routes BEFORE dynamic :id route
    // Find all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);

    // DELETE ALL Tutorials - MUST come BEFORE /:id
    router.delete("/", tutorials.deleteAll);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.deleteOne);
    // Delete all Tutorials (should probably be handled differently in production)
    // Consider moving this or using a different HTTP method

    app.use("/api/tutorials", router);
};