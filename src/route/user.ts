import { Router } from 'express';
const router = Router(); 
import { 
    deleteUser,
    getUserById,
    getUsers,
    postUser,
    putUser,
} from '../controller/users';


router.get('/',       getUsers);
router.get('/:id',    getUserById);
router.post('/',      postUser);
router.put('/:id',    putUser);
router.delete('/:id', deleteUser);


export default router;