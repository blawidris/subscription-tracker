import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) =>
  res.send({ title: "get all subscription" })
);

subscriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "get subscription details" })
);

subscriptionRouter.post("/", (req, res) =>
  res.send({ title: "create subscripiton" })
);

subscriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "update subscripiton" })
);

subscriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "delete subscripiton" })
);

subscriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "get all user subscription" })
);

subscriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "cancel subscripiton" })
);

subscriptionRouter.get("/upcoming-renewals", (req, res) =>
  res.send({ title: "get upcoming renewals" })
);

export default subscriptionRouter;
