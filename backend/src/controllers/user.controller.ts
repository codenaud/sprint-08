import { Request, Response } from 'express';
import User from '../models/user';

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(users); // Envía directamente el arreglo de usuarios
};

export const getUser = async (req: Request, res: Response) => {
  // Desetructuramos el id
  const { id } = req.params;

  const user = await User.findByPk(id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({
      msg: `No existe un producto con el id ${id}`,
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  // Desetructuramos el id
  const { id } = req.params;
  const user = await User.findByPk(id);

  if (!user) {
    res.status(404).json({
      msg: `No existe un producto con el id ${id}`,
    });
  } else {
    await user.destroy();
    res.json({
      msg: 'El producto ha sido eliminado con éxito!',
    });
  }
};

export const postUser = async (req: Request, res: Response) => {
  // Desetructuramos el body
  const { body } = req;

  try {
    await User.create(body);

    res.json({
      msg: 'El producto fue agregado con éxito!',
    });
  } catch (error) {
    console.log(error);
    console.log('Upps! Ocurrió un error, comuniquese con soporte');
  }
};

export const updateUser = async (req: Request, res: Response) => {
  // Desetructuramos el id y body
  const { id } = req.params;
  const { body } = req;

  const user = await User.findByPk(id);

  try {
    if (user) {
      await user.update(body);
      res.json({
        msg: 'El producto ha sido actualizado con éxito!',
      });
    } else {
      res.status(404).json({
        msg: `No existe un producto con el id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    console.log('Upps! Ocurrió un error, comuniquese con soporte');
  }
};

/** pruebas método postUser
{
  "name": "Mark",
  "lastName": "Otto",
  "email": "mark.otto@demo.com",
  "phone": "609123123",
  "location": "Portland, Oregon",
  "hobby": "Photography"
}
 */
