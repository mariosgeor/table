import "./oddsTable.css";
import React, { useState, useEffect } from "react";
import { calculateBestOdds } from "../../utils/calculateOdds";
import { fetchData } from "../../utils/api";
import MatchRow from "../matchRow/MatchRow";
import DropDownTable from "../dropDownTable/DropDownTable";
import SoccerBall from "../soccerBall/SoccerBall";
function OddsTable() {
  const [oddsData, setOddsData] = useState([]);
  const [expandedMatch, setExpandedMatch] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    fetchData(setOddsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!oddsData || oddsData.length === 0) {
    return <p>Loading...</p>;
  }

  const bestOdds = calculateBestOdds(oddsData);

  function toggleMatch(matchId) {
    if (expandedMatch === matchId) {
      setExpandedMatch(null);
      setIsOpen(false)
    } else {
      setExpandedMatch(matchId);
      setIsOpen(true)
    }
  }

  return (
    <div className="table">
      <div className="table-header">
      #Premier League best bookmaker's odds
      <SoccerBall/>
      </div>
      <table>
        <thead>
          <tr>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Best Home Odds</th>
            <th>Best Away Odds</th>
            <th>Best Draw Odds</th>
          </tr>
        </thead>
        <tbody>
          {bestOdds.map((match) => (
            <React.Fragment key={match.matchId}>
              <MatchRow
                match={match}
                toggleMatch={toggleMatch}
              />
              {expandedMatch === match.matchId && (
                <DropDownTable
                  match={match}
                  oddsData={oddsData}
                  isOpen={isOpen}
                />
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OddsTable;