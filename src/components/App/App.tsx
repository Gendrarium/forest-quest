import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import GameWrapper from '../GameWrapper/GameWrapper';
import kvestImage from '../../images/kvest.jpg';
import zeroImage from '../../images/0.jpg';
import oneImage from '../../images/1.jpeg';
import oneTwoImage from '../../images/1-2.jpg';
import oneTwoOneImage from '../../images/1-2-1.jpeg';
import oneTwoTwoImage from '../../images/1-2-2.jpg';
import oneTwoTwoOneImage from '../../images/1-2-2-1.jpg';
import oneTwoTwoTwoImage from '../../images/1-2-2-2.jpg';
import oneTwoTwoOneTwoImage from '../../images/1-2-2-1-2.jpg';
import oneTwoTwoOneOneOneImage from '../../images/1-2-2-1-1-1.jpeg';
import oneTwoTwoOneOneTwoImage from '../../images/1-2-2-1-1-2.png';
import oneTwoTwoOneTwoOneImage from '../../images/1-2-2-1-2-1.jpg';
import oneTwoTwoOneTwoTwoImage from '../../images/1-2-2-1-2-2.jpg';
import oneTwoTwoOneOneOneTwoImage from '../../images/1-2-2-1-1-1-2.jpg';
import oneTwoTwoOneTwoOneOneImage from '../../images/1-2-2-1-2-1-1.jpg';
import oneTwoTwoOneTwoOneTwoImage from '../../images/1-2-2-1-2-1-2.jpg';
import oneTwoTwoOneTwoOneOneOneImage from '../../images/1-2-2-1-2-1-1-1.jpg';
import oneTwoTwoOneTwoOneOneTwoImage from '../../images/1-2-2-1-2-1-1-2.jpg';
import './App.scss';

const App: React.FC = () => {
  useEffect(() => {
    const pictures = [
      oneImage,
      oneTwoImage,
      oneTwoOneImage,
      oneTwoTwoImage,
      oneTwoTwoOneImage,
      oneTwoTwoTwoImage,
      oneTwoTwoOneTwoImage,
      oneTwoTwoOneOneOneImage,
      oneTwoTwoOneOneTwoImage,
      oneTwoTwoOneTwoOneImage,
      oneTwoTwoOneTwoTwoImage,
      oneTwoTwoOneOneOneTwoImage,
      oneTwoTwoOneTwoOneOneImage,
      oneTwoTwoOneTwoOneTwoImage,
      oneTwoTwoOneTwoOneOneOneImage,
      oneTwoTwoOneTwoOneOneTwoImage,
    ];
    pictures.forEach((pic) => (new Image().src = pic));
  }, []);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <GameWrapper
              title='Квест!'
              subtitle='Перед тобой небольшой текстовый квест. Пройди его и найди все концовки! (Подсказка: Их всего 5.)'
              rightText='Начать квест'
              rightLink='/0'
              mediaType='image'
              mediaLink={kvestImage}
            />
          }
        />
        <Route
          path='/0'
          element={
            <GameWrapper
              title='Тёмный лес'
              subtitle='Эндрю со своей девушкой Самантой отправились в поход. Что же их там ждёт?'
              rightText='Вперёд'
              rightLink='/1'
              mediaType='image'
              mediaLink={zeroImage}
            />
          }
        />
        <Route
          path='/1'
          element={
            <GameWrapper
              title='Ты Эндрю'
              subtitle='Это твой первый поход, хотя ты соврал Саманте, что уже ходил сюда миллион раз! Однако ты тренировался разводить огонь и ставить палатку, так что всё не так уж и плохо. Твоя цель: хорошо провести время со своей девушкой и сделать всё возможное, чтобы ничего не мешало вашему отдыху.'
              rightText='Далее'
              rightLink='/1-2'
              mediaType='image'
              mediaLink={oneImage}
            />
          }
        />
        <Route
          path='/1-2'
          element={
            <GameWrapper
              title='Вечереет'
              subtitle='Костёр по-тихоньку гаснет. Вы уже собираетесь идти в палатку, как вдруг где-то в тёмном лесу слышатся страшные звуки, похожие на повторяющийся крик. Вы с Самантой с опаской поглядываете по сторонам, и она говорит: "Что это за звуки?'
              leftText='"Ничего страшного, всего лишь лесные зверушки, каждый раз их слышу, не беспокойся! Пойдем в палатку"'
              leftLink='/1-2-1'
              rightText='"Ты иди в палатку, а я разберусь с этим и вернусь"'
              rightLink='/1-2-2'
              mediaType='image'
              mediaLink={oneTwoImage}
            />
          }
        />
        <Route
          path='/1-2-1'
          element={
            <GameWrapper
              title='Концовка 1 (Отрицательная)'
              subtitle='Все в палатке, но звуки не прекратились. Они становились всё страшнее и страшнее. В итоге никто из вас не уснул. Свидание было испорчено. Саманта точно больше никогда не пойдет в поход.'
              leftText='&larr; Сыграть ещё раз'
              leftLink='/'
              mediaType='image'
              mediaLink={oneTwoOneImage}
            />
          }
        />
        <Route
          path='/1-2-2'
          element={
            <GameWrapper
              title='Поиски звуков'
              subtitle='Ты берёшь фонарик, нож и думаешь как бы поступить.'
              leftText='Пойти в чащу леса'
              leftLink='/1-2-2-1'
              rightText='Постоять недалеко от палатки, а потом вернуться и сказать, что всё отлично'
              rightLink='/1-2-2-2'
              mediaType='image'
              mediaLink={oneTwoTwoImage}
            />
          }
        />
        <Route
          path='/1-2-2-1'
          element={
            <GameWrapper
              title='Чаща леса'
              subtitle='Ты шёл в сторону странных звуков. Но тропа разделилась. С одной стороны те самые странные звуки, а с другой какое-то тихое рычание. Куда пойти?'
              leftText='В сторону звуков'
              leftLink='/1-2-2-1-1'
              rightText='В сторону рычания'
              rightLink='/1-2-2-1-2'
              mediaType='image'
              mediaLink={oneTwoTwoOneImage}
            />
          }
        />
        <Route
          path='/1-2-2-2'
          element={
            <GameWrapper
              title='Обман'
              subtitle='Ты стоишь недалеко от палатки, но ничего не происходит. Крики вроде бы затихли, но надолго ли? Спустя несколько минут ты заходишь в палатку и говоришь, что всё сделал.'
              rightText='Конец'
              rightLink='/1-2-1'
              mediaType='image'
              mediaLink={oneTwoTwoTwoImage}
            />
          }
        />
        <Route
          path='/1-2-2-1-1'
          element={
            <GameWrapper
              title='В сторону звуков'
              subtitle='Наконец, Ты дошёл до источника звука. Это были лисы. Непонятно что они там не поделили, но от их звуков ночью можно поседеть. (Видео представлено в ознакомительных целях.)'
              leftText='Кинуть в них несколько камней'
              leftLink='/1-2-2-1-1-1'
              rightText='Помахать перед ними ножом'
              rightLink='/1-2-2-1-1-2'
              mediaType='iframe'
              mediaLink='https://www.youtube.com/embed/T32wchh5WIo?start=18'
            />
          }
        />
        <Route
          path='/1-2-2-1-2'
          element={
            <GameWrapper
              title='В сторону рычания'
              subtitle='Ты решил сойти с первоначального маршрута и разобраться с каким-то странным рычанием. Пройдя не так уж и много, свет фонаря осветил тебе силуэт какого-то лесного зверя. Осознав что это за зверь, ты чуть не умер от страха. Это был волк.'
              leftText='Залезть на ближайшее дерево'
              leftLink='/1-2-2-1-2-1'
              rightText='Бежать как можно скорее'
              rightLink='/1-2-2-1-2-2'
              mediaType='image'
              mediaLink={oneTwoTwoOneTwoImage}
            />
          }
        />
        <Route
          path='/1-2-2-1-1-1'
          element={
            <GameWrapper
              title='Кидание камнями'
              subtitle='От нескольких бросков, даже не попадая по лисам, они испугались и убежали глубже в лес. Цель выполнена!'
              rightText='Вернуться в палатку (Конец)'
              rightLink='/1-2-2-1-1-1-2'
              mediaType='image'
              mediaLink={oneTwoTwoOneOneOneImage}
            />
          }
        />
        <Route
          path='/1-2-2-1-1-2'
          element={
            <GameWrapper
              title='Ножом? Серьезно?'
              subtitle='Эндрю понимает, что это плохая идея, и, ещё раз обдумав, выбирает кинуть камни, он же не тупой!'
              rightText='Подобрать несколько камней'
              rightLink='/1-2-2-1-1-1'
              mediaType='image'
              mediaLink={oneTwoTwoOneOneTwoImage}
            />
          }
        />
        <Route
          path='/1-2-2-1-2-1'
          element={
            <GameWrapper
              title='Дерево'
              subtitle='Ты находишь ближайшее дерево и взбирашься на него. Чуть повыше, найдя крепкую ветку, усаживаешься на ней и иногда проверяешь фонарём видно ли волков вокруг. Прошло 10 минут.'
              leftText='Спуститься'
              leftLink='/1-2-2-1-2-1-1'
              rightText='Подождать ещё'
              rightLink='/1-2-2-1-2-1-2'
              mediaType='image'
              mediaLink={oneTwoTwoOneTwoOneImage}
            />
          }
        />
        <Route
          path='/1-2-2-1-2-2'
          element={
            <GameWrapper
              title='Конец 3 (Отрицательный)'
              subtitle='Решения принятые в панике, обычно не самые лучшие. Очевидно, что, если есть один волк, то есть и стая. Эндрю разорвали в клочья. Что случилось с Самантой история умалчивает.'
              leftText='&larr; Сыграть ещё раз'
              leftLink='/'
              mediaType='image'
              mediaLink={oneTwoTwoOneTwoTwoImage}
            />
          }
        />
        <Route
          path='/1-2-2-1-1-1-2'
          element={
            <GameWrapper
              title='Конец 2 (Это основная концовка!)'
              subtitle='Звуки прекратились. Саманта поняла, что рядом с Эндрю она всегда в безопасности. Обман не раскрылся. У них была одна из самых незабываемых ночей, если вы понимаете о чём я ;)'
              leftText='&larr; Сыграть ещё раз'
              leftLink='/'
              mediaType='image'
              mediaLink={oneTwoTwoOneOneOneTwoImage}
              thanks={true}
            />
          }
        />
        <Route
          path='/1-2-2-1-2-1-1'
          element={
            <GameWrapper
              title='Волки, вы уже ушли?'
              subtitle='Ты оглядываешься по сторонам. Волков вроде бы нет. Но стоп. Один всё-таки остался. Он бежит к тебе и кусает за ногу. Ты падаешь на живот, но быстро переворачиваешься на спину. Животное прыгает на твою грудную клетку и пытается вгрызться в шею, ты пытаешься отбиваться руками, но получается не очень. Что делать?'
              leftText='Дотянуться до ножа в кармане'
              leftLink='/1-2-2-1-2-1-1-1'
              rightText='Ударить волка по голове рядом лежащим фонариком'
              rightLink='/1-2-2-1-2-1-1-2'
              mediaType='image'
              mediaLink={oneTwoTwoOneTwoOneOneImage}
            />
          }
        />
        <Route
          path='/1-2-2-1-2-1-2'
          element={
            <GameWrapper
              title='Ожидание спасает'
              subtitle='Ты ждёшь ещё 10 минут и решаешь спуститься. Волков не видно. Что дальше?'
              leftText='Вернуться назад и пойти в сторону первых звуков'
              leftLink='/1-2-2-1-1'
              rightText='Вернуться к палатке'
              rightLink='/1-2-1'
              mediaType='image'
              mediaLink={oneTwoTwoOneTwoOneTwoImage}
            />
          }
        />
        <Route
          path='/1-2-2-1-2-1-1-1'
          element={
            <GameWrapper
              title='Конец 5 (Нейтральная?)'
              subtitle='Ты попадаешь прямо в шею! Противник отступает. У тебя очень болит нога, но ты всё равно встаёшь и бежишь к палатке, где рассказываешь Саманте всё, что случилось. Она звонит 911, и вас забирают из этого жуткого места. Свидание испорчено, но зато Эндрю жив!'
              leftText='&larr; Сыграть ещё раз'
              leftLink='/'
              mediaType='image'
              mediaLink={oneTwoTwoOneTwoOneOneOneImage}
            />
          }
        />
        <Route
          path='/1-2-2-1-2-1-1-2'
          element={
            <GameWrapper
              title='Конец 4 (Отрицательный)'
              subtitle='Удар фонарём только ещё сильнее разозлил волка, тогда сил Эндрю не хватило на то, чтобы противостоять его напору. Волк разорвал шею парня. Мучительная смерть.'
              leftText='&larr; Сыграть ещё раз'
              leftLink='/'
              mediaType='image'
              mediaLink={oneTwoTwoOneTwoOneOneTwoImage}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
