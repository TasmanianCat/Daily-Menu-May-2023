import shawarmaImg from '../../images/shawarma.jpg';

function Shawarma() {
    const shawarmaOption = [
        {
            id: '01',
            category: 'dinner',
            name: 'Shawarma',
            ingredient1: '400-500 grams of fried boneless beef or chicken',
            ingredient2: '2 large flatbreads',
            ingredient3: 'sliced tomato (1 medium tomato is enough)',
            ingredient4: 'sliced cucumber (1 medium cucumber is enough)',
            ingredient5: 'sliced lettuce',
            ingredient6: 'chopped parsley',
            ingredient7: 'ground black pepper',
            ingredient8: 'some mayonnaise',
            cookingTime: '20 minutes',
            numberOfPersons: 'two',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { shawarmaImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={shawarmaImg} alt='Shawarma' />
            ))}

            {shawarmaOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}, {ingredient5}, {ingredient6}, {ingredient7}, {ingredient8}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}


export default Shawarma;