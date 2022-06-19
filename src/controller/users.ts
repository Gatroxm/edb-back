import { Request, Response } from 'express';
import MySql from '../mysql/mysql';
const estados = ['Nuevo', 'No interesado', 'Número equivodado', 'Información Equivocada', 'Alto potencial', 'Bajo potencial'];
export const getUsers = ( req: Request, res: Response)=> {
    try {
        const query = `SELECT * FROM users`;
        MySql.ejecutarQuery(query, (err: any, users: any)=> {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.json({
                ok: true,
                message: 'Listado Usuarios',
                users
            });
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            msg: 'Error al cargar usuarios',
        })
    }
}

export const getUserById = ( req: Request, res: Response)=> {
    try {
        const id = req.params.id;
        const scapeId = MySql.instance.cnn.escape( id );
        const query = `SELECT * FROM users WHERE id = ${scapeId}`;
        MySql.ejecutarQuery(query, (err: any, user: any)=> {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.json({
                ok: true,
                message: 'Usuario encontrado',
                user
            });
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
        
    }
    
}

export const postUser = (req:Request, res:Response) => {
    try {
        const {body} = req;
    
    if (estados.indexOf(body.estado) === -1) {
        return res.status(400).json({
            ok: false,
            message: 'El estado no es válido'
        });
    }
    const query = `INSERT INTO users (nombre, apellido, telefono, correo, edad, estado, fecha_insercion) VALUES ('${body.nombre}', '${body.apellido}', '${body.telefono}', '${body.correo}', '${body.edad}', '${body.estado}', NOW())`;
    MySql.ejecutarQuery(query, (err: any, user: any)=> {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            message: 'Usuario creado',
            user
        });
    });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });   
    }
}

export const putUser = (req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const scapeId = MySql.instance.cnn.escape( id );
        const {body} = req;
        const query = `UPDATE users SET nombre = '${body.nombre}', apellido = '${body.apellido}', telefono = '${body.telefono}', correo = '${body.correo}', edad = '${body.edad}', estado = '${body.estado}' WHERE id = ${scapeId}`;
        if (estados.indexOf(body.estado) === -1) {
            return res.status(400).json({
                ok: false,
                message: 'El estado no es válido'
            });
        }
        MySql.ejecutarQuery(query, (err: any, user: any)=> {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }
            return res.json({
                ok: true,
                message: 'Usuario actualizado',
                user
            });
        });
    } catch (error) {
        return res.status(400).json({
            ok: false,
            err: error
        });
        
    }
}

export const deleteUser = (req:Request, res:Response) => {
    const id = req.params.id;
    const scapeId = MySql.instance.cnn.escape( id );
    const query = `DELETE FROM users WHERE id = ${scapeId}`;
    MySql.ejecutarQuery(query, (err: any, user: any)=> {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.json({
            ok: true,
            message: 'Usuario Eliminado',
        });
    });
}
