// Falcron
// Author: mayankitscsb-droid
import { Command } from '#command';
import { logger } from '#utils';

class SponsorCommand extends Command {
        constructor() {
                super({
                        name: 'sponsor',
                        description: 'Displays the information about the sponsors of the bot',
                        usage: 'sponsor',
                        aliases: ['sponsors'],
                        cooldown: 10,
                        enabledSlash: true,
                        slashData: {
                                name: 'sponsor',
                                description: 'Displays the information about the sponsors of the bot',
                        },
                });
        }

        async execute({ ctx }) {
                await ctx.reply({ content: 'We have no sponsor at the moment !!' });
        }
}

export default new SponsorCommand();

/**
 * Project: Falcron
 * Author: mayankitscsb-droid (Aegis)
 * Organization: mayankitscsb-droid
 * GitHub: https://github.com/mayankitscsb-droid/Falcron
 * License: Custom
 *
 * © 2026 mayankitscsb-droid. All rights reserved.
 */