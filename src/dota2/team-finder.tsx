import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import s from './Dota.module.css'; 
import imgl from '../assets/logo.png';
import imgz from '../assets/izmen.png';
import imgd from '../assets/dota2.png';

interface TeamFinder {
  nickname: string;
  topic: string;
}

export const DotaTeamFinder: React.FC = () => {
  const teamFinders: TeamFinder[] = useSelector((state: any) => state.teamFinders.topics || []); 

  return (
    <div className={s.buildsContainer}> 
      <header className={s.header}> 
        <div className={s.conteinerlogo}>
          <img src={imgl} alt="logo" />
          <h1 className={s.name}>Gamer's Hub</h1>
        </div>
        <Link to="/" className={s.textgs}>Главная страница</Link>
        <div className={s.conteinerlogo}>
          <Link to="/create-topic" state={{ from: '/dota2/team-finder' }} className={s.textizmen}>Создать тему</Link>
          <img src={imgz} alt="logo" />
        </div>
      </header>

      <main className={s.content}> 
        {teamFinders.length > 0 ? (
          teamFinders.map((teamFinder: TeamFinder, index: number) => (
            <div className={s.topic} key={index}> 
              <Link to={`/details/team-finder/${index}`} className={s.a}> 
                <div>
                  <h1 className={s.gtext}>{teamFinder.nickname}</h1>
                  <h2 className={s.text}>{teamFinder.topic}</h2>
                </div>
                <div className={s.contenerd}>
                  <h2 className={`${s.text} ${s.text2}`}>
                    <img src={imgd} alt="logo" className={s.dota} />Dota 2 Team Finder
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