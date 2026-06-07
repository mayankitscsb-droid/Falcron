// Falcron
// Author: mayankitscsb-droid
import { Command } from '#command';
import {
        MessageFlags,
        ButtonStyle,
        ButtonBuilder,
        ActionRowBuilder,
        ContainerBuilder,
        TextDisplayBuilder,
        SeparatorBuilder,
        SeparatorSpacingSize,
} from 'discord.js';

class PremiumCommand extends Command {
        constructor() {
                super({
                        name: 'premium',
                        description: 'Shows information about Falcron Premium',
                        usage: 'premium',
                        cooldown: 10,
                        enabledSlash: true,
                        slashData: {
                                name: 'premium',
                                description: 'Shows information about Falcron Premium',
                        },
                });
        }

        async execute({ ctx }) {
                const container = new ContainerBuilder();
                container.setAccentColor(0xffffff);

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent('**Falcron Premium**'),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true),
                );

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                                'Falcron Premium is now available to purchase, you can purchase Falcron Premium by joining the official support server',
                        ),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true),
                );

                container.addActionRowComponents(
                        new ActionRowBuilder().addComponents(
                                new ButtonBuilder()
                                        .setLabel('Get Premium')
                                        .setURL('https://discord.gg/Ez4gCJQDxB')
                                        .setStyle(ButtonStyle.Link),
                        ),
                );

                await ctx.reply({
                        components: [container],
                        flags: MessageFlags.IsComponentsV2,
                });
        }
}

export default new PremiumCommand();

/**
 * Project: Falcron
 * Author: mayankitscsb-droid (Aegis)
 * Organization: mayankitscsb-droid
 * GitHub: https://github.com/mayankitscsb-droid/Falcron
 * License: Custom
 *
 * © 2026 mayankitscsb-droid. All rights reserved.
 */