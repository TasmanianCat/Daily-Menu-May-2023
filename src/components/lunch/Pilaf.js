import scrambleImg from '../../images/pilaf.jpg';

function Pilaf() {
    const pilafOption = [
        {
            id: '01',
            category: 'lunch',
            name: 'Pilaf',
            ingredient1: '1 kg of beef or another meat',
            ingredient2: '3 cups of rice',
            ingredient3: '1 large or 2 small carrots',
            ingredient4: '2 large onions',
            ingredient5: '4 cloves of Garlic',
            ingredient6: '2 pinches of red pepper',
            ingredient7: '1 pinch of red pepper',
            ingredient8: '50 grams of butter',
            ingredient9: '6 tbsp of soy sauce',
            cookingTime: '90 minutes',
            numberOfPersons: 'six',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { scrambleImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={scrambleImg} alt='Pilaf' />
            ))}

            {pilafOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}, {ingredient5}, {ingredient6}, {ingredient7}, {ingredient8}, {ingredient9}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}

export default Pilaf;