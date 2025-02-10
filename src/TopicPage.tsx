import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBuildTopic } from './features/buildsSlice';
import { addCustomTopic } from './features/customsSlice';
import { addBugsTopic } from './features/bugsSlice';
import { addSkinsTopic } from './features/skinsSlice';
import { addTournamentTopic } from './features/tournamentsSlice';
import { addMetaTopic } from './features/metaSlice';
import { addTeamFinderTopic } from './features/teamFindersSlice';
import { addUpdatesTopic } from './features/updatesSlice';
import { addCsBugsTopic } from './features/csBugsSlice'; 
import { addAntiCheatTopic } from './features/antiCheatSlice'; 
import { addThrowTopic } from './features/throwsSlice'; 
import { addWorkshopTopic } from './features/workshopSlice'; 
import { addCsUpdateTopic } from './features/csUpdatesSlice'; 
import { addCsKinTopic } from './features/csKinsSlice';
import { addCsTeamFinderTopic } from './features/csTeamFinderSlice'; 
import { addCsTournamentTopic } from './features/csTournamentsSlice';
import a from './topicpage.module.css';
import imgl from './assets/logo.png';

interface BuildTopic {
  id: number;
  topic: string;
  title: string;
  nickname: string;
  description: string;
}

export const TopicPage: React.FC = () => {
  const [nickname, setNickname] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const savedNickname = localStorage.getItem('nickname');
    const savedTopic = localStorage.getItem('topic');
    const savedDescription = localStorage.getItem('description');

    if (savedNickname) setNickname(savedNickname);
    if (savedTopic) setTitle(savedTopic);
    if (savedDescription) setDescription(savedDescription);
  }, []);

  useEffect(() => {
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('topic', title);
    localStorage.setItem('description', description);
  }, [nickname, title, description]);

  const handlePublish = () => {
    const newTopic: BuildTopic = {
      id: Date.now(),
      topic: title,
      title: title,
      nickname,
      description,
    };

    console.log('New Topic:', newTopic);

    const fromPage = location.state?.from || '/dota2/builds';
    console.log('Publishing topic from:', fromPage);

    switch (fromPage) {
      case '/dota2/builds':
        dispatch(addBuildTopic(newTopic));
        break;
      case '/dota2/customs':
        dispatch(addCustomTopic(newTopic));
        break;
      case '/dota2/bugs':
        dispatch(addBugsTopic(newTopic));
        break;
      case '/dota2/skins':
        dispatch(addSkinsTopic(newTopic));
        break;
      case '/dota2/tournaments':
        dispatch(addTournamentTopic(newTopic));
        break;
      case '/dota2/meta':
        dispatch(addMetaTopic(newTopic));
        break;
      case '/dota2/team-finder':
        dispatch(addTeamFinderTopic(newTopic));
        break;
      case '/dota2/updates':
        dispatch(addUpdatesTopic(newTopic));
        break;
      case '/cs2/csbugs':
        dispatch(addCsBugsTopic(newTopic));
        break;
      case '/cs2/antiCheat':
        dispatch(addAntiCheatTopic(newTopic));
        break;
      case '/cs2/throws':
        dispatch(addThrowTopic(newTopic));
        break;
      case '/cs2/workshop':
        dispatch(addWorkshopTopic(newTopic));
        break;
      case '/cs2/csupdates':
        dispatch(addCsUpdateTopic(newTopic));
        break;
      case '/cs2/cskins':
        dispatch(addCsKinTopic(newTopic));
        break;
      case '/cs2/csteam-finder':
        dispatch(addCsTeamFinderTopic(newTopic));
        break;
      case '/cs2/cstournaments':
        dispatch(addCsTournamentTopic(newTopic));
        break;
      default:
        break;
    }

    localStorage.removeItem('nickname');
    localStorage.removeItem('topic');
    localStorage.removeItem('description');

    navigate(fromPage);
  };

  return (
    <div>
      <header className={a.header}>
        <div className={a.conteinerlogo}>
          <img src={imgl} alt="logo" className={a.logo} />
          <h1 className={a.title}>Gamer's Hub</h1>
        </div>
        <nav className={a.nav}>
          <div className={a.navContainer}>
            <Link to="/" className={a.link}>Главная страница</Link>
          </div>
        </nav>
      </header>

      <main className={a.content}>
        <div className={a.content2}>
          <h2 className={a.subtitle}>Создать новую тему</h2>
          <div>
            <label className={a.label}>
              <input
                type="text"
                className={a.input1}
                placeholder="Никнейм"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className={a.label}>
              <input
                type="text"
                className={a.input2}
                placeholder="Тема"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className={a.label}>
              <textarea
                className={a.textarea}
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <button className={a.button} onClick={handlePublish}>Опубликовать</button>
        </div>
      </main>
    </div>
  );
};