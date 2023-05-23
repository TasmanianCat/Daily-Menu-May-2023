
import boiledPrawnsImg from '../../images/prawns.jpg';

function BoiledPrawns() {
    const boiledPrawnsOption = [
        {
            id: '01',
            category: 'dinner',
            name: 'Boiled Prawns',
            ingredient1: '1 kilo of raw prawns with shells',
            ingredient2: '2 tablespoon of salt',
            ingredient3: '2 bay leaves',
            ingredient4: 'a full pan of water ',
            ingredient5: '',
            ingredient6: '',
            ingredient7: '',
            ingredient8: '',
            ingredient9: '',
            cookingTime: '10 minutes',
            numberOfPersons: 'four',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { boiledPrawnsImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={boiledPrawnsImg} alt='Boiled prawns' />
            ))}

            {boiledPrawnsOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}

export default BoiledPrawns;