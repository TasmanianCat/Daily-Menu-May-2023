import buckwheatImg from '../../images/buckwheat.jpg';

function Buckwheat() {
    const buckwheatOption = [
        {
            id: '01',
            category: 'dinner',
            name: 'Buckwheat with meat and vegetables',
            ingredient1: '600 grams of beef or chicken',
            ingredient2: '2 cups of buckwheat',
            ingredient3: '2 cups of water',
            ingredient4: '1 medium carrot',
            ingredient5: '3 tbsp of soy sauce',
            ingredient6: '1 large onion',
            ingredient7: '50 grams of butter',
            cookingTime: '40 minutes',
            numberOfPersons: 'four',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { buckwheatImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={buckwheatImg} alt='Buckwheat' />
            ))}

            {buckwheatOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}, {ingredient5}, {ingredient6}, {ingredient7}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}


export default Buckwheat;