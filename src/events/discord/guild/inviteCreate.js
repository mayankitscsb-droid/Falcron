// Falcron
// Author: mayankitscsb-droid
export default {
        name: 'inviteCreate',
        async execute({ eventArgs, client }) {
                const [invite] = eventArgs;
                if (!invite.guild) return;

                if (!client.inviteCache) client.inviteCache = new Map();

                const guildCache = client.inviteCache.get(invite.guild.id) ?? new Map();
                guildCache.set(invite.code, invite.uses ?? 0);
                client.inviteCache.set(invite.guild.id, guildCache);
        },
};

/**
 * Project: Falcron
 * Author: mayankitscsb-droid (Aegis)
 * Organization: mayankitscsb-droid
 * GitHub: https://github.com/mayankitscsb-droid/Falcron
 * License: Custom
 *
 * © 2026 mayankitscsb-droid. All rights reserved.
 */