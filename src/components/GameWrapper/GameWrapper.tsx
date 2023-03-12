import { Link } from 'react-router-dom';
import './GameWrapper.scss';

interface GameWrapperProps {
  title: string;
  subtitle: string;
  leftText?: string;
  leftLink?: string;
  rightText?: string;
  rightLink?: string;
  mediaType: string;
  mediaLink: string;
  thanks?: boolean;
}

const GameWrapper: React.FC<GameWrapperProps> = ({
  title,
  subtitle,
  leftText,
  leftLink,
  rightText,
  rightLink,
  mediaType,
  mediaLink,
  thanks,
}) => {
  return (
    <section className='game page__game'>
      <h1 className='game__title'>{title}</h1>
      <p className='game__subtitle'>{subtitle}</p>
      <div className='grid-wrapper'>
        {mediaType === 'image' ? (
          <img className='grid-wrapper__image' src={mediaLink} alt={title} />
        ) : (
          <iframe
            className='grid-wrapper__iframe'
            src={mediaLink}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen></iframe>
        )}
        {leftLink ? (
          <Link
            className='grid-wrapper__link grid-wrapper__link_left'
            to={leftLink}>
            {leftText}
          </Link>
        ) : (
          <p className='grid-wrapper__link grid-wrapper__link_left'></p>
        )}
        {rightLink ? (
          <Link
            className='grid-wrapper__link grid-wrapper__link_right'
            to={rightLink}>
            {rightText}
          </Link>
        ) : (
          <p className='grid-wrapper__link grid-wrapper__link_right'></p>
        )}
      </div>
      {thanks && <p>Спасибо за игру!</p>}
    </section>
  );
};

export default GameWrapper;
