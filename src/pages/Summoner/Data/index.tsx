import { Fragment } from "react";

import { Container, EloSummoner, Rank, WinRate, Percent } from "./styles";

import bronze from "../../../assets/bronze.png thumbnail.png";
import iron from "../../../assets/iron.png thumbnail.png";
import silver from "../../../assets/silver.png thumbnail.png";
import gold from "../../../assets/gold.png thumbnail.png";
import platinum from "../../../assets/platinum.png thumbnail.png";
import diamond from "../../../assets/diamond.png thumbnail.png";
import grandmaster from "../../../assets/grandmaster.png thumbnail.png";
import master from "../../../assets/master.png thumbnail.png";
import challenger from "../../../assets/challenger.png thumbnail.png";

interface DataProps {
  items: any[];
}

function Data({ items }: DataProps) {
  function validarElo(elo: any) {
    switch (elo) {
      case "BRONZE":
        return <EloSummoner src={bronze} alt="bronze" />;
      case "IRON":
        return <EloSummoner src={iron} alt="iron" />;
      case "SILVER":
        return <EloSummoner src={silver} alt="silver" />;
      case "GOLD":
        return <EloSummoner src={gold} alt="gold" />;
      case "PLATINUM":
        return <EloSummoner src={platinum} alt="platinum" />;
      case "DIAMOND":
        return <EloSummoner src={diamond} alt="diamond" />;
      case "GRANDMASTER":
        return <EloSummoner src={grandmaster} alt="grandmaster" />;
      case "MASTER":
        return <EloSummoner src={master} alt="master" />;
      case "CHALLENGER":
        return <EloSummoner src={challenger} alt="challenger" />;
      default:
        break;
    }
  }
  function validarRanked(ranked: any) {
    switch (ranked) {
      case "RANKED_FLEX_SR":
        return "Ranked Flex 5:5";
      case "RANKED_SOLO_5x5":
        return "Ranked Solo";
      default:
        break;
    }
  }

  return (
    <Container>
      {typeof items != "undefined" &&
        items.map((data: any, index: number) => {
          let winRate = ((data.wins / (data.wins + data.losses)) * 100).toFixed(
            1
          );
          return (
            <Fragment key={index}>
              <Rank>
                <div>{validarElo(data.tier)}</div>
                <div>
                  {data.tier}
                  <span> </span>
                  {data.rank} <br></br>
                  {validarRanked(data.queueType)}
                </div>
              </Rank>
              <WinRate>
                <div>
                  Wins: {data.wins}
                  <br></br>
                  Losses: {data.losses}
                </div>
                <Percent>{winRate}%</Percent>
              </WinRate>
            </Fragment>
          );
        })}
    </Container>
  );
}

export default Data;
