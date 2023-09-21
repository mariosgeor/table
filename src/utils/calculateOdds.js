export function calculateBestOdds(matches) {
    const bestOdds = [];

    matches.forEach((match) => {
      const matchBestOdds = {
        matchId: match.id,
        homeTeam: match.home_team,
        awayTeam: match.away_team,
        bestHomeOdds: [],
        bestAwayOdds: [],
        bestDrawOdds: [],
      };

      match.bookmakers.forEach((bookmaker) => {
        const homeOdds = bookmaker.markets[0].outcomes[0];
        const awayOdds = bookmaker.markets[0].outcomes[1];
        const drawOdds = bookmaker.markets[0].outcomes[2];

        if (
          !matchBestOdds.bestHomeOdds.length ||
          homeOdds.price > matchBestOdds.bestHomeOdds[0].odds.price
        ) {
          matchBestOdds.bestHomeOdds = [
            { bookie: bookmaker.title, odds: homeOdds },
          ];
        } else if (
          homeOdds.price === matchBestOdds.bestHomeOdds[0].odds.price
        ) {
          matchBestOdds.bestHomeOdds.push({
            bookie: bookmaker.title,
            odds: homeOdds,
          });
        }

        if (
          !matchBestOdds.bestAwayOdds.length ||
          awayOdds.price > matchBestOdds.bestAwayOdds[0].odds.price
        ) {
          matchBestOdds.bestAwayOdds = [
            { bookie: bookmaker.title, odds: awayOdds },
          ];
        } else if (
          awayOdds.price === matchBestOdds.bestAwayOdds[0].odds.price
        ) {
          matchBestOdds.bestAwayOdds.push({
            bookie: bookmaker.title,
            odds: awayOdds,
          });
        }

        if (
          !matchBestOdds.bestDrawOdds.length ||
          drawOdds.price > matchBestOdds.bestDrawOdds[0].odds.price
        ) {
          matchBestOdds.bestDrawOdds = [
            { bookie: bookmaker.title, odds: drawOdds },
          ];
        } else if (
          drawOdds.price === matchBestOdds.bestDrawOdds[0].odds.price
        ) {
          matchBestOdds.bestDrawOdds.push({
            bookie: bookmaker.title,
            odds: drawOdds,
          });
        }
      });

      bestOdds.push(matchBestOdds);
    });

    return bestOdds;
  }