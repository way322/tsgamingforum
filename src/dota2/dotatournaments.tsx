import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Dota.module.css'; 
import imgl from '../assets/logo.png';
import imgz from '../assets/izmen.png';
import imgd from '../assets/dota2.png';

interface Tournament {
  nickname: string;
  topic: string;
}

export const Dotatournaments: React.FC = () => {
  const tournaments: Tournament[] = useSelector((state: any) => state.tournaments.topics || []); 

  return (
    <div className={s.buildsContainer}> 
      <header className={s.header}> 
        <div className={s.conteinerlogo}>
          <img src={imgl} alt="logo" />
          <h1 className={s.name}>Gamer's Hub</h1>
        </div>
        <Link to="/" className={s.textgs}>Главная страница</Link>
        <div className={s.conteinerlogo}>
          <Link to="/create-topic" state={{ from: '/dota2/tournaments' }} className={s.textizmen}>Создать тему</Link>
          <img src={imgz} alt="logo" />
        </div>
      </header>

      <main className={s.content}> 
        {tournaments.length > 0 ? (
          tournaments.map((tournament: Tournament, index: number) => (
            <div className={s.topic} key={index}> 
              <Link to={`/details/tournaments/${index}`} className={s.a}> 
                <div>
                  <h1 className={s.gtext}>{tournament.nickname}</h1>
                  <h2 className={s.text}>{tournament.topic}</h2>
                </div>
                <div className={s.contenerd}>
                  <h2 className={`${s.text} ${s.text2}`}>
                    <img src={imgd} alt="logo" className={s.dota} />Dota 2 Tournaments
                  </h2>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>Нет тем для отображения.</p>
        )}
      </main>
    </div>
  );
};