import { Request, Response } from 'express';
import User from '../models/user';
const estados = ['Nuevo', 'No interesado', 'Número equivodado', 'Información Equivocada', 'Alto potencial', 'Bajo potencial'];
export const getUsers = async ( req: Request, res: Response)=> {
    try {
        const users = await User.findAll();
        return res.status(200).json({
            ok: true,
            users
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'Error al cargar usuarios',
        })
    }
}

export const getUserById = async ( req: Request, res: Response)=> {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);
        if (user) {
            return res.status(200).json({
                ok: true,
                user
            });
        } else {
            return res.status(400).json({
                ok: false,
                msg: 'No existe el usuario',
            })
        }
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
    }
}

export const postUser = async (req:Request, res:Response) => {
    try {
        const {body} = req;
        if (estados.indexOf(body.estado) === -1) {
            return res.status(400).json({
                ok: false,
                message: 'El estado no es válido'
            });
        }
        const user = await User.create(body);
        return res.status(200).json({
            ok: true,
            user
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });   
    }
}

export const putUser = async (req:Request, res:Response) => {
    try {
        const {id} = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'El usuario no existe'
            });
        }
        const {body} = req;
        if (estados.indexOf(body.estado) === -1) {
            return res.status(400).json({
                ok: false,
                message: 'El estado no es válido'
            });
        }
        await User.update(body, {
            where: {
                id
            }
        });
        return res.status(200).json({
            ok: true,
            message: 'Usuario actualizado'
        });

    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });   
    }
}

export const deleteUser = async (req:Request, res:Response) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) {
        return res.status(400).json({
            ok: false,
            message: 'El usuario no existe'
        });
    }
    await user.destroy();
    return res.status(200).json({
        ok: true,
        message: 'Usuario eliminado'
    });
}
