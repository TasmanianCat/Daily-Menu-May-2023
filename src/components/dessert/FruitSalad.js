import fruitSaladImg from '../../images/fruit-salad.jpg';

function FruitSalad() {
    const fruitSaladOption = [
        {
            id: '01',
            category: 'dessert',
            name: 'Fruit salad',
            ingredient1: '1 large apple',
            ingredient2: '2 bananas',
            ingredient3: '1 large orange',
            ingredient4: '2 pears',
            ingredient5: '50 grams of peeled walnut',
            ingredient6: '1 kiwi',
            ingredient7: '100 grams of sour cream',
            ingredient8: '',
            ingredient9: '',
            cookingTime: '12 minutes',
            numberOfPersons: 'three',
            description: 'Easy to cook for you! Just trust me!'
        }
    ];

    const imageMeal = [
        {
            id: '02',
            imageUrl: { fruitSaladImg }
        }
    ]
    return (
        <div>
            {imageMeal.map(({ id }) => (
                <img className='img' key={id} src={fruitSaladImg} alt='Fruit salad' />
            ))}

            {fruitSaladOption.map(({ id, category, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, cookingTime, numberOfPersons, description }) => (
                <p key={id}>The best from the best {category} today is <strong>{name}</strong>.<br />Some ingredients that you need are: {ingredient1}, {ingredient2}, {ingredient3}, {ingredient4}, {ingredient5}, {ingredient6}, {ingredient7}.<br />Time to cook this meal is about {cookingTime}.<br />This is a {category} recipe for {numberOfPersons}.<br />{description}</p>
            ))}
        </div>
    );
}

export default FruitSalad;