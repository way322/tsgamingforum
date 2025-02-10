import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateBuildTopic } from './features/buildsSlice';
import { updateCustomTopic } from './features/customsSlice';
import { updateBugsTopic } from './features/bugsSlice';
import { updateSkinsTopic } from './features/skinsSlice';
import { updateTournamentTopic } from './features/tournamentsSlice';
import { updateMetaTopic } from './features/metaSlice';
import { updateTeamFinderTopic } from './features/teamFindersSlice';
import { updateUpdatesTopic } from './features/updatesSlice';
import { updateCsBugsTopic } from './features/csBugsSlice'; 
import { updateAntiCheatTopic } from './features/antiCheatSlice'; 
import { updateThrowTopic } from './features/throwsSlice'; 
import { updateWorkshopTopic } from './features/workshopSlice'; 
import { updateCsUpdateTopic } from './features/csUpdatesSlice'; 
import { updateCsKinTopic } from './features/csKinsSlice'; 
import { updateCsTeamFinderTopic } from './features/csTeamFinderSlice';
import { updateCsTournamentTopic } from './features/csTournamentsSlice';
import d from './editropic.module.css';
import imgl from './assets/logo.png';

interface Topic {
  id: number;
  nickname: string;
  topic: string;
  description: string;
}

export const EditTopicPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const topics: Topic[] = useSelector((state: any) => {
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

  const topic: Topic | undefined = topics.find((_, index: number) => index === parseInt(id || ''));

  if (!topic) {
    return <p>Тема не найдена.</p>;
  }

  const [nickname, setNickname] = useState<string>(topic.nickname);
  const [topicTitle, setTopicTitle] = useState<string>(topic.topic);
  const [description, setDescription] = useState<string>(topic.description);

  const handleUpdate = () => {
    const updatedTopic = {
      id: topic.id, 
      nickname,
      topic: topicTitle, 
      description,
    };
  
    const topicId = topic.id; 

    switch (type) {
      case 'builds':
        dispatch(updateBuildTopic({ id: topicId, updatedTopic }));
        break;
      case 'customs':
        dispatch(updateCustomTopic({ id: topicId, updatedTopic })); 
        break;
      case 'bugs':
        dispatch(updateBugsTopic({ id: topicId, updatedTopic }));
        break;
      case 'skins':
        dispatch(updateSkinsTopic({ id: topicId, updatedTopic }));
        break;
      case 'tournaments':
        dispatch(updateTournamentTopic({ id: topicId, updatedTopic }));
        break;
      case 'meta':
        dispatch(updateMetaTopic({ id: topicId, updatedTopic }));
        break;
      case 'team-finder':
        dispatch(updateTeamFinderTopic({ id: topicId, updatedTopic }));
        break;
      case 'updates':
        dispatch(updateUpdatesTopic({ id: topicId, updatedTopic }));
        break;
      case 'csbugs':
        dispatch(updateCsBugsTopic({ id: topicId, updatedTopic }));
        break;
      case 'antiCheat':
        dispatch(updateAntiCheatTopic({ id: topicId, updatedTopic }));
        break;
      case 'throws':
        dispatch(updateThrowTopic({ id: topicId, updatedTopic }));
        break;
      case 'workshop':
        dispatch(updateWorkshopTopic({ id: topicId, updatedTopic }));
        break;
      case 'csupdates':
        dispatch(updateCsUpdateTopic({ id: topicId, updatedTopic }));
        break;
      case 'cskins':
        dispatch(updateCsKinTopic({ id: topicId, updatedTopic }));
        break;
      case 'csteam-finder':
        dispatch(updateCsTeamFinderTopic({ id: topicId, updatedTopic }));
        break;
      case 'cstournaments':
        dispatch(updateCsTournamentTopic({ id: topicId, updatedTopic }));
        break;
    }

    navigate(`/details/${type}/${id}`);
  };

  return (
    <div className={d.container}>
      <header className={d.header}>
        <div className={d.conteinerlogo}>
          <img src={imgl} alt="logo" className={d.logo} />
          <h1 className={d.title}>Gamer's Hub</h1>
        </div>
        <nav className={d.nav}>
          <Link to="/" className={d.navLink}>Главная страница</Link>
          <Link to={`/details/${type}/${id}`} className={d.navLink}>Назад к теме</Link>
        </nav>
      </header>

      <main className={d.content}>
        <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }} className={d.form}>
          <div className={d.formGroup}>
            <label className={d.label1}>Никнейм:</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
              className={d.input1}
            />
          </div>
          <div className={d.formGroup}>
            <label className={d.label2}>Тема:</label>
            <input
              type="text"
              value={topicTitle}
              onChange={(e) => setTopicTitle(e.target.value)}
              required
              className={d.input2}
            />
          </div>
          <div className={d.formGroup}>
            <label className={d.label3}>Описание:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className={d.textarea}
            />
          </div>

          <button type="submit" className={d.submitButton}>Сохранить изменения</button>
        </form>
      </main>
    </div>
  );
};