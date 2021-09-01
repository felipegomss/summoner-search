import { Fragment, useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../../service/api";
import { Container, Content } from "./styles";
import { Loading } from "./styles";

import Data from "./Data";
import Infos from "./Infos";

function Summoner() {
  let match = useLocation();

  const [summInfos, setSummInfos] = useState<any[]>([]);

  useEffect(() => {
    async function loadApi() {
      await api
        .get(`${match.pathname}`)
        .then((res) => {
          setSummInfos(res.data);
        })
        .catch((e) => alert("Error on search summoner"));
    }
    loadApi();
  }, []);

  return (
    <Container>
      <Content>
        {summInfos.length > 0 &&
          summInfos.map((item: any, index) => {
            return (
              <Fragment key={index}>
                <Infos key={index} data={item.data} iconUrl={item.iconUrl} />
                <div>
                  <Data key={index} items={item.items} />
                </div>
              </Fragment>
            );
          })}
        {summInfos.length <= 0 && (
          <Loading>
            <img
              src="https://felipegomss.com.br/imgs/Double%20Ring-1s-200px.gif"
              alt="Loading..."
            />
          </Loading>
        )}
      </Content>
    </Container>
  );
}

export default Summoner;
