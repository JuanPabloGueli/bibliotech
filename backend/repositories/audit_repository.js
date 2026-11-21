/**
 * @file audit_repository.js
 * @brief Repositorio para la persistencia de eventos de auditoría.
 * @project Bibliotech
 */

const db = require('../config/db');

class AuditRepository
{
    /**
     * @brief Inserta un registro de auditoría en la base de datos mediante SP.
     * @param {number} userId ID del usuario que originó la petición.
     * @param {string} action Tipo de acción crítica.
     * @param {string} target Objetivo o recurso afectado.
     * @param {string} ipAddress Dirección IP de la solicitud.
     * @returns {Promise<void>}
     */

    async create( {user_id, action, target, ip_address})
    {
        await db.execute('CALL sp_create_audit_log(?, ?, ?, ?)',[user_id, action, target, ip_address || null]);
    }
}

module.exports = new AuditRepository();