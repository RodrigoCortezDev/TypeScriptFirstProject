import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, resp: Response) {
	const user = createUser({
		email: 'asassd@asdads.com',
		password: '12313132',
		techs: ['aaaaa', 'bbbbbbbb', { title: 'x', experience: 1 }],
	});

	return resp.json({ message: user });
}
