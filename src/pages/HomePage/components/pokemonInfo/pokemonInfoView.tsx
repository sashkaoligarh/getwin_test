import React, { useEffect, useState } from 'react';
import './styles.scss';
import { CircularProgress } from '../../../../components';
import { infoComponentProps } from './index';

const PokemonInfoView = (props: infoComponentProps) => {
  const [positionImage, setPositionImage] = useState<boolean>(true);
  const changePosition = () => setPositionImage((prev: boolean) => !prev);
  const { pokemonInfo, loadingGetPokemonInfo, errGetPokeInfo } = props;

  useEffect(() => {
    setPositionImage(true);
  }, [pokemonInfo]);

  if (loadingGetPokemonInfo)
    return (
      <div className="container">
        <CircularProgress />
      </div>
    );

  if (Object.keys(pokemonInfo).length === 0)
    return <div className="container">No pokemon</div>;

  if (errGetPokeInfo !== '')
    return <div className="container">{errGetPokeInfo}</div>;

  return (
    <div className="container">
      {pokemonInfo !== false ? (
        <div className="info-container">
          <div className="name">{pokemonInfo.name}</div>
          <img
            className="image-container"
            src={
              positionImage
                ? pokemonInfo?.sprites?.front_default
                : pokemonInfo?.sprites?.back_default
            }
          />
          {pokemonInfo?.sprites?.back_default !== null ? (
            <button onClick={changePosition}>EXPAND</button>
          ) : null}
        </div>
      ) : null}
      <div>
        <div className="Stats-container">
          <table>
            <tr>
              <th>Base</th>
              <th>Stats</th>
            </tr>
            {pokemonInfo.stats.map((item: any) => (
              <tr key={item.stat.name}>
                <td className="statName">{item.stat.name}:</td>
                <td>{item.base_stat}</td>
              </tr>
            ))}
          </table>
        </div>

        <div className="titleMoves">Moves</div>

        <div className="moves-container">
          {pokemonInfo.moves.map((item: any) => (
            <div className="move" key={item.name}>
              {item.move.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfoView;
