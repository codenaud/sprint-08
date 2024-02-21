import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  res.json({
    msg: 'get Users',
  });
};

export const getUser = (req: Request, res: Response) => {
  // Desetructuramos el id
  const { id } = req.params;

  res.json({
    msg: 'get User',
    id: id,
  });
};

export const deleteUser = (req: Request, res: Response) => {
  // Desetructuramos el id
  const { id } = req.params;

  res.json({
    msg: 'delete User',
    id: id,
  });
};

export const postUser = (req: Request, res: Response) => {
  // Desetructuramos el id
  const { body } = req;
  /* console.log(body); */
  res.json({
    msg: 'post User',
    body,
  });
};

export const updateUser = (req: Request, res: Response) => {
  // Desetructuramos el id y body
  const { id } = req.params;
  const { body } = req;

  res.json({
    msg: 'Update User',
    id,
    body,
  });
};
