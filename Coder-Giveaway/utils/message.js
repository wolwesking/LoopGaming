const config = require('../config.json');
const { EmbedBuilder, ActionRowBuilder, SelectMenuBuilder, ComponentType } = require('discord.js');
const endEmbed = new EmbedBuilder()
      .setTitle(`Giveaway Finished`)
      .setColor('#9600ff')
      .setDescription("The giveaway has ended and the winners have been dm\'ed")
      .setTimestamp()
      .setFooter({
        text: `Ended at:`
      });
module.exports = {
  line:"<:line2:1047161753479426169><:line1:1047161566807724154><:line2:1047161753479426169><:line1:1047161566807724154><:line2:1047161753479426169><:line1:1047161566807724154>",
  copyright: "Made by AntimatterDev",
  giveaway:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "🎉 **GIVEAWAY** 🎉",
  giveawayEnded:
    (config.everyoneMention ? "@everyone\n\n" : "") +
    "🎉 **GIVEAWAY ENDED** 🎉",
  winMessage:{embed:endEmbed,replyToGiveaway:true},
  drawing:  `Ends: **{timestamp}**`,
  inviteToParticipate: `React with ${config.reaction} to participate!`,
  embedFooter: "{this.winnerCount} winner(s)",
  noWinner: "Giveaway cancelled, no valid participations.",
  hostedBy: "Hosted by: {this.hostedBy}",
  winners: "winner(s)",
  endedAt: "Ended at"
}
