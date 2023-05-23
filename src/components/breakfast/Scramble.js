import scrambleImg from '../../images/scramble-cheese-sausages.jpg';

function Scramble() {
    const scrambleOption = [
        {
            id: '01',
            category: 'breakfast',
            name: 'Scramble with cheese and sausages',
            ingredient1: '6 chicken eggs',
            ingredient2: '100 ml of milk',
            ingredient3: '70 grams of cheese',
            ingredient4: '4 or 6 sausages',
            cookingTime: '15 minutes',
            numberOfPersons: 'two',
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
                <img className='img' key={id} src={scrambleImg} alt='Scramble' />
            ))}

            {scrambleOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}


export default Scramble;