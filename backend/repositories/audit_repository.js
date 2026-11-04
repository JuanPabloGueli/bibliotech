/**
 * @file audit_repository.js
 * @brief Repositorio para la persistencia de eventos de auditoría.
 * @project Bibliotech
 */

const db = require('../config/db');

class AuditRepository
{
    async create({ user_id, action, target, ip_address })
    {
        await db.execute('CALL sp_create_audit_log(?, ?, ?, ?)',
            [user_id, action, target, ip_address || null]);
    }
}

module.exports = new AuditRepository();