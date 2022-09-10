import config from './config'

export const getRoleByEmail = (email: string) => {
    if (config.admins.includes(email)) return 'admin';
    return 'postulant';
}