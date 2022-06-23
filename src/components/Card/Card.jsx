import './Card.scss';

export default function Card({ icon, quote, buttonClick }) {
  return (
    <main className='card'>
      <h1 className='card__number'>Advice #117</h1>
      <p className='card__quote'>&#8220It is easy to sit up and take notice, what's difficult is getting up and taking action.&#8221</p>
      <div className='card__dice' onClick={buttonClick}>
        <img src={icon.default} alt='dice' />
      </div>
    </main>
  );
}