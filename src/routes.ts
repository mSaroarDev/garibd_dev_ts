import type { Request, Response } from 'express'

const {Router} = require('express');

const router = Router();

router.get("/", (req: Request, res: Response)=> {
  res.send({
    projectName: "GariBd Dev",
    path: "/"
  })
})

export = router;