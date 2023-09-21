function MatchRow({ match, toggleMatch }) {
    return (
      <tr onClick={() => toggleMatch(match.matchId)}>
        <td>{match.homeTeam}</td>
        <td>{match.awayTeam}</td>
        <td>
          {match.bestHomeOdds.map((odd) => (
            <div key={odd.bookie}>
              {odd.bookie}: {odd.odds.price}
            </div>
          ))}
        </td>
        <td>
          {match.bestAwayOdds.map((odd) => (
            <div key={odd.bookie}>
              {odd.bookie}: {odd.odds.price}
            </div>
          ))}
        </td>
        <td>
          {match.bestDrawOdds.map((odd) => (
            <div key={odd.bookie}>
              {odd.bookie}: {odd.odds.price}
            </div>
          ))}
        </td>
      </tr>
    );
  }
  
  export default MatchRow;