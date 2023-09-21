function DropDownTable({ match, oddsData }) {

    return (
      <tr>
        <td colSpan="5">
          <table >
            <thead>
              <tr>
                <th>Bookmaker</th>
                <th>Home Odds</th>
                <th>Away Odds</th>
                <th>Draw Odds</th>
              </tr>
            </thead>
            <tbody>
              {oddsData.map((dataMatch) => {
                if (dataMatch.id === match.matchId) {
                  return dataMatch.bookmakers.map((bookmaker, index) => (
                    <tr key={index}>
                      <td>{bookmaker.title}</td>
                      <td
                        className={
                          match.bestHomeOdds.some(
                            (odd) => odd.bookie === bookmaker.title
                          )
                            ? "best-odds"
                            : ""
                        }
                      >
                        {bookmaker.markets[0]?.outcomes[0]?.price}
                      </td>
                      <td
                        className={
                          match.bestAwayOdds.some(
                            (odd) => odd.bookie === bookmaker.title
                          )
                            ? "best-odds"
                            : ""
                        }
                      >
                        {bookmaker.markets[0]?.outcomes[1]?.price}
                      </td>
                      <td
                        className={
                          match.bestDrawOdds.some(
                            (odd) => odd.bookie === bookmaker.title
                          )
                            ? "best-odds"
                            : ""
                        }
                      >
                        {bookmaker.markets[0]?.outcomes[2]?.price}
                      </td>
                    </tr>
                  ));
                }
                return null;
              })}
            </tbody>
          </table>
        </td>
      </tr>
    );
  }
  
  export default DropDownTable;