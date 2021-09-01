import { Player, IconSummoner, Level } from "./styles";

interface InfosProps {
  data: any;
  iconUrl: any;
}

function Infos({ data, iconUrl }: InfosProps) {
  return (
    <Player>
      {typeof iconUrl != "undefined" && (
        <IconSummoner src={iconUrl} alt="Icon" />
      )}
      {typeof data != "undefined" && (
        <Level>
          <div>{data.summonerLevel}</div>
          <h1> {data.name} </h1>
        </Level>
      )}
    </Player>
  );
}

export default Infos;
