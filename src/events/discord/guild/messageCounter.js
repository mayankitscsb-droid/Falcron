// Falcron
// Author: mayankitscsb-droid
import { db } from '#dbManager';

export default {
        name: 'messageCreate',
        async execute({ eventArgs }) {
                if (!eventArgs?.[0]) return;

                const [message] = eventArgs;

                if (message.author?.bot || !message.guild) return;

                try {
                        const isBlacklisted = await db.guild?.isMessageChannelBlacklisted(
                                message.guild.id,
                                message.channel.id,
                        );
                        if (isBlacklisted) return;

                        await db.userMessageCounter?.increment(message.guild.id, message.author.id);
                } catch {
                }
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