import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import imgl from './assets/logo.png';
import b from './topicdetail.module.css';
import imgz from './assets/lastik.png';

interface Topic {
  nickname: string;
  topic: string;
  description: string;
}

export const TopicDetail: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();

  const topics = useSelector((state: any) => {
    switch (type) {
      case 'builds':
        return state.builds.topics || [];
      case 'customs':
        return state.customs.topics || [];
      case 'bugs':
        return state.bugs.topics || [];
      case 'skins':
        return state.skins.topics || [];
      case 'tournaments':
        return state.tournaments.topics || [];
      case 'meta':
        return state.meta.topics || [];
      case 'team-finder':
        return state.teamFinders.topics || [];
      case 'updates':
        return state.updates.topics || [];
      case 'csbugs':
        return state.csBugs.topics || [];
      case 'antiCheat':
        return state.antiCheat.topics || [];
      case 'throws':
        return state.throws.topics || [];
      case 'workshop':
        return state.workshop.topics || [];
      case 'csupdates':
        return state.csUpdates.topics || [];
      case 'cskins':
        return state.csKins.topics || [];
      case 'csteam-finder':
        return state.csTeamFinder.topics || [];
      case 'cstournaments':
        return state.csTournaments.topics || [];
      default:
        return [];
    }
  });


  const topicIndex = id ? parseInt(id) : -1; 
  const topic: Topic | undefined = topics[topicIndex];

  if (!topic) {
    return <p>Тема не найдена.</p>;
  }

  return (
    <div className={b.container}>
      <header className={b.header}>
        <div className={b.conteinerlogo}>
          <img src={imgl} alt="logo" className={b.logo} />
          <h1 className={b.title}>Gamer's Hub</h1>
        </div>
        <nav className={b.nav}>
          <Link to="/" className={b.navLink}>Главная страница</Link>
          <Link to={
            type === 'builds' ? "/dota2/builds" :
            type === 'customs' ? "/dota2/customs" :
            type === 'bugs' ? "/dota2/bugs" :
            type === 'skins' ? "/dota2/skins" :
            type === 'tournaments' ? "/dota2/tournaments" :
            type === 'meta' ? "/dota2/meta" :
            type === 'team-finder' ? "/dota2/team-finder" :
            type === 'updates' ? "/dota2/updates" :
            type === 'csbugs' ? "/cs2/csbugs" : 
            type === 'antiCheat' ? "/cs2/antiCheat" : 
            type === 'throws' ? "/cs2/throws" : 
            type === 'workshop' ? "/cs2/workshop" :
            type === 'csupdates' ? "/cs2/csupdates" : 
            type === 'cskins' ? "/cs2/cskins" :
            type === 'csteam-finder' ? "/cs2/csteam-finder" :
            type === 'cstournaments' ? "/cs2/cstournaments" :
            "/"
          } className={b.navLink}>
            Назад к темам
          </Link>
        </nav>
        <div className={b.conteinerlogo}>
          <Link to={`/edit/${type}/${id}`} className={b.redact}>
            Редактировать
          </Link>
          <img src={imgz} alt="logo" className={b.logo} />
        </div>
      </header>

      <main className={b.content}>
        <div className={b.content2}>
          <h1 className={b.topicNickname}>{topic.nickname}</h1>
          <h1 className={b.topicTitle}>{topic.topic}</h1>
          <p className={b.topicDescription}>{topic.description}</p>
        </div>
      </main>
    </div>
  );
};