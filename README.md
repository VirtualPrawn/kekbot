kekbot
======

A plug.dj/kek bot.

Commands
--------

(all commands are prefixed with a %, e.g. "%roll")


**Users**: Anyone can do these commands.

 * roll - Roll a random number. Goes from 0 to 999999.
 * fortune - Roll a random fortune.
 * modtest - Test to see if you're privileged.
 * coinflip - Flips a coin. Outcome is either heads or tails.

**Mods**: People in the modlist can do these commands.

 * downboats - List all the current video downvotes.
 * modlist - List all the Kekbot moderators.

**Admins**: Only the Kekbot admins can do these commands.

 * enable - Enable kekbot.
 * disable - Disable kekbot.
 * addmod (@person) - Add a mod to the Kekbot list.
 * removemod (@person) - Remove a mod from the Kekbot list.
 * loadmods - Load the mod list after a code hotswap.
 * modtojson - Convert the kekbot.mods object to JSON.
 * jsontomod - Load the JSON into the kekbot.mods object.