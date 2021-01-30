const Discord = require('discord.js')
const Anime = require('anime-scraper').Anime  

module.exports = {
    name: "anime",
    description: "Get anime information",
    async execute (message) {
      Anime.search('Sword Art Online').then(function (results) {
      // Same as above but uses the second search result rather than the first.
        results[1].toAnime().then(function (anime) {
          console.log(anime)
        message.channel.send(anime)
        })
      })
    }
}